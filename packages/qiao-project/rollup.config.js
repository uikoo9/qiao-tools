/**
 * rollup.config.js
 */
module.exports = {
  input: 'src/index.js',
  output: {
    file: 'index.js',
    format: 'cjs',
  },
  external: ['qiao-file', 'qiao-cli', 'eslint', 'eslint-plugin-react', 'eslint-plugin-react-hooks'],
};
