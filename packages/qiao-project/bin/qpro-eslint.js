// path
const path = require('path');

// qiao
const cli = require('qiao-cli');
const qpro = require('../index.js');

/**
 * eslint
 * @param {*} configPath
 */
const eslint = async (configPath) => {
  try {
    // final path
    let finalPath;

    // config path
    if (configPath) {
      const cwd = process.cwd();
      if (configPath.startsWith('./') || configPath.startsWith('../')) configPath = path.resolve(cwd, configPath);
      finalPath = configPath;
    }

    // eslint
    console.log('qiao-project / eslint / start');
    await qpro.eslint(finalPath);
    console.log('qiao-project / eslint / end');
  } catch (e) {
    console.log('qiao-project / eslint / error');
    console.log(e);
  }
};

// cmd for eslint
cli.cmd.command('eslint [configPath]').description('eslint').action(eslint);
