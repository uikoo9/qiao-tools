// path
const path = require('path');

// qiao
const cli = require('qiao-cli');

// commitizen
const { bootstrap } = require('commitizen/dist/cli/git-cz');

/**
 * commitizen
 */
const commitizen = async () => {
  bootstrap({
    cliPath: path.join(__dirname, '../../node_modules/commitizen'),
    // this is new
    config: {
      path: 'cz-conventional-changelog',
    },
  });
};

// cmd for commitizen
cli.cmd.command('commitizen [configPath]').description('commitizen').action(commitizen);
