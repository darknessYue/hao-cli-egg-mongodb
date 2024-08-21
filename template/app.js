

class AppBoot {

  configWillLoad(){
    // 配置文件即将加载
  }

  async didLoad(){
    // 配置文件加载完成
  }

  async willReady(){
    // 所有的插件都已启动完毕，但是应用整体还未 ready
    // 可以做一些数据初始化等操作，这些操作成功才会启动应用
  }

}

module.exports = AppBoot;