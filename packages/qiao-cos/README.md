## qiao-cos

[![npm version](https://img.shields.io/npm/v/qiao-cos.svg?style=flat-square)](https://www.npmjs.org/package/qiao-cos)
[![npm downloads](https://img.shields.io/npm/dm/qiao-cos.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-cos)

nodejs 下腾讯云 cos 常见 api 封装

## install

安装

```shell
npm i qiao-cos
```

## config.json

配置文件

```javascript
{
    "SecretId": "your secret id",
    "SecretKey": "your secret key",
    "Region": "your bucket",
    "Bucket": "your bucket",
}
```

## cli

也可以在 cli 下使用

```shell
# 全局安装
npm i -g qiao-cos

# 帮助
qcos
qcos -h

# 上传文件
qcos file|fi z:/workspaces/qiao-cos/test/config.json d:/test.js test.js

# 上传文件夹
qcos folder|fo z:/workspaces/qiao-cos/test/config.json d:/test/cocos test9
```

## api

### use

使用

```javascript
// cjs
const COS = require('qiao-cos');

// mjs
import COS from 'qiao-cos';
```

### qcos

```javascript
// config
const config = require('./config.json');

// qiao-cos
const qcos = COS(config);
```

### uploadFile

上传文件

- destPath
  - 类型: string
  - 说明: cos 的目标路径
- sourceFile
  - 类型: string
  - 说明: 待上传的文件路径
- return
  - 类型: object
  - 说明: cos 返回的结果

```javascript
const destPath = 'test/test.js';
const sourceFile = '/your/test.js';

const rs = await qcos.uploadFile(destPath, sourceFile);
console.log(rs);
```

### uploadFolder

上传文件夹

- destPath
  - 类型: string
  - 说明: cos 的目标路径
- sourceFolder
  - 类型: string
  - 说明: 待上传的文件夹路径
- return
  - 类型: object
  - 说明: cos 返回的结果

```javascript
const destPath = 'test';
const sourceFolder = '/your/folder';

const rs = await qcos.uploadFolder(destPath, sourceFolder);
console.log(rs);
```
