const fs = require('fs');
const path = require('path');
const sass = require('node-sass');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const chokidar = require('chokidar');
const { parse, compileTemplate } = require('@vue/compiler-sfc');


function processVueFile(filePath, options) {
  const fileName = path.basename(filePath, '.vue');
  const fileDir = path.dirname(filePath);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { descriptor } = parse(fileContent);

  let script = descriptor.script ? descriptor.script.content : 'export default {};\n';
  let renderTemplate = '';
  let style = '';

  script = script.replace('export default {', `import { render } from './${fileName}-template.js';\n\nexport default {\n  render,\n`);

  if (descriptor.template) {
    const { code } = compileTemplate({
        source: descriptor.template.content,
        id: fileName,
        fileName,
        compilerOptions: { mode: 'module' }
    });
    renderTemplate = code;
  }

  if (descriptor.styles.length > 0) {
    style = descriptor.styles
      .map((s) => {
        if (s.lang === 'scss' || s.lang === 'sass') {
          return sass.renderSync({ data: s.content, indentedSyntax: s.lang === 'sass' }).css.toString();
        }
        return s.content;
      })
      .join('\n');
  }

  if (options.vueImportPath) {
    // Replace the import path for Vue
    const oldImportPath = 'from "vue"';
    const newImportPath = `from "${options.vueImportPath}"`;
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
    } catch (err) {}
  }

  if (options.verbose) {
    console.log(`Processed file: ${filePath}`);
  }
}

function transformVueFiles(dir, options) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const fileStat = fs.statSync(filePath);

    if (fileStat.isDirectory()) {
      transformVueFiles(filePath, options);
    } else if (path.extname(filePath) === '.vue') {
      processVueFile(filePath, options);
    }
  });
}

function watchVueFiles(dir, options) {
    const watcher = chokidar.watch('**/*.vue', {
      // eslint-disable-next-line no-useless-escape
      ignored: /(^|[\/\\])\../, // Ignore dotfiles
      persistent: true,
      cwd: dir,
    });
  
    watcher
      .on('add', filePath => {
        processVueFile(path.join(dir, filePath), options);
      })
      .on('change', filePath => {
        processVueFile(path.join(dir, filePath), options);
      });
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

const src = path.resolve(argv.src);
if (argv.watch) {
  if (argv.verbose) {
    console.log('Starting in watch mode...');
  }
  watchVueFiles(src, argv);
} else {
  transformVueFiles(src, argv);
}