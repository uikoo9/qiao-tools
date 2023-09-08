'use strict';

var eslint = require('eslint');
var prettier = require('prettier');
var qiaoFile = require('qiao-file');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(
          n,
          k,
          d.get
            ? d
            : {
              enumerable: true,
              get: function () {
                return e[k];
              },
            },
        );
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var prettier__namespace = /*#__PURE__*/ _interopNamespaceDefault(prettier);

/**
 * eslint config
 */
const config$1 = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2022: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],

    'react/display-name': 'off',
    'react/prop-types': 'off',
  },
};

// eslint

/**
 * run eslint
 */
const runEslint = async (configPath) => {
  // start
  console.log('qiao-project / eslint / start');

  // config
  const config = getConfig$1(configPath);
  if (!config) return;

  // cwd
  const cwd = process.cwd();
  console.log('qiao-project / eslint / cwd', cwd);

  // extensions
  const extensions = ['.js', '.ts', '.jsx'];
  console.log('qiao-project / eslint / extensions /', extensions);

  // eslint
  const eslint$1 = new eslint.ESLint({
    useEslintrc: false,
    overrideConfig: config,
    extensions: extensions,
    errorOnUnmatchedPattern: false,
    fix: true,
  });

  // files
  const results = await eslint$1.lintFiles([cwd]);
  console.log(`qiao-project / eslint / ${results.length} files`);

  // res
  const formatter = await eslint$1.loadFormatter('stylish');
  const resultText = formatter.format(results);

  // end
  console.log('qiao-project / eslint / end');
  if (resultText) console.log(resultText);
};

// get config
function getConfig$1(configPath) {
  try {
    let eslintConfig;
    if (configPath) {
      eslintConfig = require(configPath);
      console.log('qiao-project / eslint / config /', configPath);
    } else {
      eslintConfig = config$1;
      console.log('qiao-project / eslint / config / default config');
    }

    console.log(eslintConfig);
    return eslintConfig;
  } catch (error) {
    console.log('qiao-project / eslint / config /', error);
  }
}

const config = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'always',
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
};

// eslint

/**
 * run prettier
 */
const runPrettier = async (configPath) => {
  // start
  console.log('qiao-project / prettier / start');

  // config
  const config = getConfig(configPath);
  if (!config) return;

  // cwd
  const cwd = process.cwd();
  console.log('qiao-project / prettier / cwd', cwd);

  // format
  await formatFiles(cwd, config);
};

// get config
function getConfig(configPath) {
  try {
    let eslintConfig;
    if (configPath) {
      eslintConfig = require(configPath);
      console.log('qiao-project / prettier / config /', configPath);
    } else {
      eslintConfig = config;
      console.log('qiao-project / prettier / config / default config');
    }

    console.log(eslintConfig);
    return eslintConfig;
  } catch (error) {
    console.log('qiao-project / prettier / config /', error);
  }
}

// format files
async function formatFiles(cwd, config) {
  try {
    // check
    const res = await qiaoFile.lsdir(cwd);
    if (!res || !res.files || !res.files.length) {
      console.log('qiao-project / prettier / format / no files');
      return;
    }

    // files
    const files = res.files;
    for (let i = 0; i < files.length; i++) {
      // filepath
      const filepath = files[i].path;
      console.log('qiao-project / prettier / format ', filepath);

      // check
      config.filepath = filepath;
      const content = await qiaoFile.readFile(filepath);
      const isFormated = await prettier__namespace.check(content, config);

      // format
      if (isFormated) continue;
      const formatContent = await prettier__namespace.format(content, config);
      await qiaoFile.writeFile(filepath, formatContent);
      console.log('qiao-project / prettier / end');
    }
  } catch (error) {
    console.log('qiao-project / prettier / format /', error);
  }
}

exports.runEslint = runEslint;
exports.runPrettier = runPrettier;
