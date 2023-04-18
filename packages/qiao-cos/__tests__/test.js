// ava
const test = require('ava');

// path
const path = require('path');

// config
const config = require('./config.json');

// qiao-cos
const qcos = require('../index.js')(config);

// test
test('upload file', async (t) => {
  const destPath = 'test/test.js';
  const sourceFile = path.resolve(__dirname, './test.js');

  const rs = await qcos.uploadFile(destPath, sourceFile);
  t.truthy(rs);
});
test('upload folder', async (t) => {
  const destPath = 'test';
  const sourceFolder = path.resolve(__dirname, '../src');

  const rs = await qcos.uploadFolder(destPath, sourceFolder);
  t.truthy(rs);
});
