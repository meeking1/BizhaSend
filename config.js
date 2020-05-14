'use strict';
const path = require('path');
const fsp = require('fs-promise');

// Default Config
// Do not edit this, generate a config.<ENV>.js for your NODE_ENV
// or use ENV-VARS like PSITRANSFER_PORT=8000
const config =  {
  "uploadDir": path.resolve(__dirname + '/data'),
  "iface": '0.0.0.0',
  // set to false to disable HTTP
  "port": 3000,
  // HTTPS, set all 3 values to enable
  "sslPort": 8443,
  "sslKeyFile": false,
  "sslCertFile": false,
  // Force redirect to https
  // can be true or a specific url like https://example.com:8443
  // keep empty to disable
  "forceHttps": '',
  // retention options in seconds:label
  "retentions": {
    "one-time": "仅下载一次",
    "3600": "一小时",
    "21600": "六小时",
    "86400": "一天",
    "259200": "三天",
    "604800": "一周",
    "1209600": "两周",
    "2419200": "四周",
    "4838400": "八周"
  },
  // admin password, set to false to disable /admin page
  "adminPass": false,
  "defaultRetention": "604800",
  // expire every file after maxAge (eg never downloaded one-time files)
  "maxAge": 3600*24*75, // 75 days
  // maximum file-size for previews in byte
  "maxPreviewSize": Math.pow(2,20) * 2, // 2MB
  "mailTemplate": 'mailto:?subject=文件下载：&body=您可以在此下载文件: %%URL%%',
  // see https://github.com/expressjs/morgan
  // set to false to disable logging
  "accessLog": ':date[iso] :method :url :status :response-time :remote-addr',
  //use to set custom  upload url
  "uploadAppPath": '/',
  // download notification webhook
  // invokes an HTTP POST to this url whenever a file was downloaded
  "fileDownloadedWebhook": null
};


// Load NODE_ENV specific config
const envConfFile = path.resolve(__dirname, `config.${process.env.NODE_ENV}.js`);
if(process.env.NODE_ENV && fsp.existsSync(envConfFile)) {
  Object.assign(config, require(envConfFile));
}

// Load config from ENV VARS
let envName;
for (let k in config) {
  envName = 'PSITRANSFER_'+ k.replace(/([A-Z])/g, $1 => "_" + $1).toUpperCase();
  if(process.env[envName]) {
    if(typeof config[k] === 'number') {
      config[k] = parseInt(process.env[envName], 10);
    } else if (typeof config[k] === 'object') {
      config[k] = JSON.parse(process.env[envName]);
    } else {
      config[k] = process.env[envName];
    }
  }
}

module.exports = config;
