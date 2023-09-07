'use strict';

/**
 * eslint config
 */
const config = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2022: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};

// eslint
// import { ESLint } from 'eslint';

/**
 * eslint
 */
const eslint = async (configPath) => {
  // config
  const config = getConfig(configPath);
  if (!config) return;

  // // 1. Create an instance.
  // const eslint = new ESLint();

  // // 2. Lint files.
  // const results = await eslint.lintFiles(['lib/**/*.js']);

  // // 3. Format the results.
  // const formatter = await eslint.loadFormatter('stylish');
  // const resultText = formatter.format(results);

  // // 4. Output it.
  // console.log(resultText);
};

// get config
function getConfig(configPath) {
  try {
    let eslintConfig;
    if (configPath) {
      eslintConfig = require(configPath);
      console.log('qiao-project / eslint / from / ', configPath);
    } else {
      eslintConfig = config;
      console.log('qiao-project / eslint / from / default config');
    }

    console.log('qiao-project / eslint / config / ');
    console.log(eslintConfig);
    return eslintConfig;
  } catch (error) {
    console.log('qiao-project / eslint / error /', error);
  }
}

exports.eslint = eslint;
