/* eslint-disable consistent-return */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { transformAsync } = require('@babel/core');
const chokidar = require('chokidar');

// Another option to compile source
// const { compileTemplate } = require('@vue/compiler-sfc');
// const { code, sourceMap } = compileTemplate({
//   source,
//   id: inputFile,
//   filename: inputFile,
//   // Other compiler options go here
// })

const inputPattern = '**/*-template.jsx';
const excludePattern = '**/node_modules/**';

function replaceVueImport(options) {
  return {
    visitor: {
      ImportDeclaration(p) {
        if (p.node.source.value === 'vue') {
          p.node.source.value = options.vueLib || 'vue';
        }
      }
    }
  };
}

function transpileVueJsx(inputFile, options = {}) {
  return new Promise((resolve, reject) => {
    fs.readFile(inputFile, 'utf-8', async (err, source) => {
      if (err) {
        return reject(err);
      }

      try {
        const result = await transformAsync(source, {
          filename: inputFile,
          sourceMaps: true,
          presets: [
            [
              '@babel/preset-env',
              {
                targets: 'defaults',
                modules: false,
              },
            ],
          ],
          plugins: [
            replaceVueImport(options),
            ['@vue/babel-plugin-jsx', { isCustomElement: (tag) => tag.startsWith('c-') }]
          ],
        });

        const outputFilename = inputFile.replace('-template.jsx', '-template.js');
        fs.writeFile(outputFilename, result.code, 'utf-8', (fileErr) => {
          if (fileErr) {
            reject(fileErr);
          } else {
            console.log(`Transpiled: ${inputFile} -> ${outputFilename}`);
            resolve();
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  });
}

function parseCommandLineArgs() {
  const args = process.argv.slice(2);
  const options = {};

  args.forEach((arg) => {
    const [key, value] = arg.split('=');
    if (key === '--src' && value) {
      options.src = value;
    }

    if (key === '--vue-lib' && value) {
      options.vueLib = value;
    }

    if (key === '--watch') {
      options.watch = true;
    }
  });

  return options;
}

const options = parseCommandLineArgs();
const srcPath = options.src || '.';
const searchPattern = path.join(srcPath, inputPattern);

function transpileAllFiles() {
  glob(searchPattern, { ignore: excludePattern }, async (err, files) => {
    if (err) {
      console.error('Error searching for files:', err);
      return;
    }

    const transpilePromises = files.map((file) => transpileVueJsx(file, options));
    try {
      await Promise.all(transpilePromises);
      console.log('All files transpiled successfully');
    } catch (error) {
      console.error('Error transpiling files:', error);
    }
  });
}

transpileAllFiles(); // Transpile all files initially

if (options.watch) {
  // Watch for changes to files matching the search pattern
  chokidar.watch(searchPattern, { ignored: excludePattern }).on('change', (changedFile) => {
    console.log(`File changed: ${changedFile}`);

    // Transpile only the changed file
    transpileVueJsx(changedFile, options)
      .catch((error) => console.error(`Error transpiling ${changedFile}:`, error));
  });
}
