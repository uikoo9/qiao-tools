// qiao
const cli = require('qiao-cli');

// cmd for common
cli.cmd
  .version(require('../package.json').version, '-v, --version')
  .description('qiao-project, frontend monorepo project tool')
  .usage('<command> [options]');
