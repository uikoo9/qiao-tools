// path
const path = require('path');

// qiao
const cli = require('qiao-cli');
const qpro = require('../index.js');

/**
 * eslint
 * @param {*} configPath
 * @param {*} folderPath
 * @param {*} bucketPath
 * @param {*} options
 */
const eslint = async (configPath) => {
  try {
    const cwd = process.cwd();
    if (configPath.startsWith('./') || configPath.startsWith('../')) configPath = path.resolve(cwd, configPath);

    qpro.eslint();
  } catch (e) {
    console.log(e);
  }
};

// cmd for eslint
cli.cmd.command('eslint <configPath>').description('eslint').action(eslint);
