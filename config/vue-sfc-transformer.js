const fs = require('fs');
const path = require('path');
const sass = require('sass');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const chokidar = require('chokidar');
const { parse, compileTemplate, compileStyleAsync } = require('@vue/compiler-sfc');
const crypto = require('crypto');

class VueProcessor {
  constructor(options) {
    this.options = options;
    this.watchedFiles = new Map();
  }

  preprocessScss(source) {
    const result = sass.compileString(source);
    return result.css.toString();
  }

  getFileHash(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const hash = crypto.createHash('sha256');
    hash.update(fileContent);
    return hash.digest('hex');
  }
  
  hasFileChanged(filePath) {
    const currentHash = this.getFileHash(filePath);
    const lastHash = this.watchedFiles.get(filePath);
  
    if (!lastHash || currentHash !== lastHash) {
      this.watchedFiles.set(filePath, currentHash);
      return true;
    }
  
    return false;
  }

  async processVueFile(filePath) {
    const fileName = path.basename(filePath, '.vue');
    const fileDir = path.dirname(filePath);
    const fileContent = fs.readFileSync(filePath, 'utf8');
  
    const { descriptor } = parse(fileContent);
  
    let script = descriptor.script ? descriptor.script.content : 'export default {};\n';
    let renderTemplate = '';
    let style = '';
    const isScoped = descriptor.styles?.some(s => s.scoped);
    const fileId = `data-v-${fileName.toLowerCase()}`;
  
    script = script.replace('export default {', `import { render } from './${fileName}-template.js';\n\nexport default {\n  render,\n`);
  
    if (descriptor.template) {
      const { code } = compileTemplate({
          source: descriptor.template.content,
          id: fileId,
          fileName,
          scoped: isScoped,
          isProd: false,
          compilerOptions: {
            mode: 'module',
          }
      });
      renderTemplate = code;
    }
  
    if (descriptor.styles.length > 0) {
      style = descriptor.styles
        .map(async (s) => {
          s.parsedContent = s.content;
          const styleCompilerOptions = {
            source: s.parsedContent,
            id: fileId,
            scoped: s.scoped,
            preprocessLang: s.lang,
            modules: s.module,
          };
  
          if (s.lang === 'scss' || s.lang === 'sass') {
            styleCompilerOptions.preprocessOptions = {
              customPreprocessor: this.preprocessScss,
            };
          }
  
          const compiledStyle = await compileStyleAsync(styleCompilerOptions);
          return compiledStyle.code;
        });
  
        style = await Promise.all(style)
        style = style.join('\n');
    }
  
    if (this.options.vueImportPath) {
      // Replace the import path for Vue
      const oldImportPath = 'from "vue"';
      const newImportPath = `from "${this.options.vueImportPath}"`;
      script = script.replace(oldImportPath, newImportPath);
      renderTemplate = renderTemplate.replace(oldImportPath, newImportPath);
    }
  
    fs.writeFileSync(path.join(fileDir, `${fileName}.js`), script, 'utf8');
    fs.writeFileSync(path.join(fileDir, `${fileName}-template.js`), renderTemplate, 'utf8');
  
    if (style.length) {
      fs.writeFileSync(path.join(fileDir, `${fileName}.css`), style, 'utf8');
    } else {
      try {
        fs.unlinkSync(path.join(fileDir, `${fileName}.css`));
      } catch (err) {
        // if (this.options.verbose) {
        //   console.log(`Could not unlink file: ${fileName}.css`);
        // }
      }
    }
  
    if (this.options.verbose) {
      console.log(`Processed file: ${filePath}`);
    }
  }

  async transformVueFiles(dir) {
    const files = fs.readdirSync(dir);
  
    for (let file of files) {
      const filePath = path.join(dir, file);
      const fileStat = fs.statSync(filePath);
  
      if (fileStat.isDirectory()) {
        await this.transformVueFiles(filePath);
      } else if (path.extname(filePath) === '.vue') {
        await this.processVueFile(filePath);
      }
    }
  }

   watchVueFiles(dir) {
    const watcher = chokidar.watch('**/*.vue', {
      // eslint-disable-next-line no-useless-escape
      ignored: /(^|[\/\\])\../, // Ignore dotfiles
      persistent: true,
      cwd: dir,
    });
  
    watcher
      .on('add', filePath => {
        const fullPath = path.join(dir, filePath);
        if (this.hasFileChanged(fullPath)) {
          this.processVueFile(fullPath);
        }
      })
      .on('change', filePath => {
        const fullPath = path.join(dir, filePath);
        if (this.hasFileChanged(fullPath)) {
          this.processVueFile(fullPath);
        }
      });
  }

  async run() {
    const src = path.resolve(this.options.src);
    if (this.options.watch) {
      if (this.options.verbose) {
        console.log('Starting in watch mode...');
      }
      this.watchVueFiles(src);
    } else {
      await this.transformVueFiles(src);
    }
  }
}

const argv = yargs(hideBin(process.argv))
  .usage('Usage: $0 [options]')
  .option('src', {
    alias: 's',
    describe: 'Source directory containing .vue files',
    type: 'string',
    default: './src',
  })
  .option('watch', {
    alias: 'w',
    describe: 'Enable watch mode',
    type: 'boolean',
    default: false,
  })
  .option('verbose', {
    alias: 'v',
    describe: 'Enable verbose output',
    type: 'boolean',
    default: false,
  })
  .option('vue-import-path', {
    alias: 'i',
    describe: "Custom import path for Vue (e.g., 'c/vueLib')",
    type: 'string',
  })
  .help('help')
  .alias('help', 'h')
  .argv;

const processor = new VueProcessor(argv);
processor.run();