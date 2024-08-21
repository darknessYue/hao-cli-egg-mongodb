/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1721199199790_355';

  // add your middleware config here
  config.middleware = [
    // 'myLogger'
  ];

  config.bodyParser = {
    jsonLimit: '10mb'
  }

  config.security = {
    csrf: {
      enable: false
    }
  }
  config.baseUrl = './'

  config.mongoose = {
    url: 'mongodb://localhost:27017/test',
    // options: {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true
    // }
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
