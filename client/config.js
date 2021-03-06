/**
 * 小程序配置文件
 */

var host = 'http://localhost:8080';

var config = {

  // 下面的地址配合云端 Demo 工作
  service: {
    host,
    // 登录地址，用于建立会话
    loginUrl: `${host}/weapp/wxLogin`,

    // 测试的请求地址，用于测试会话
    requestUrl: `${host}/weapp/auth/getUser`,

    // 测试的信道服务地址
    tunnelUrl: `${host}/weapp/tunnel`,

    // 上传图片接口
    uploadUrl: `${host}/weapp/upload`
  }
};

module.exports = config;