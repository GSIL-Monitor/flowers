//app.js
var config = require('./config')
var util = require('./utils/util.js')

App({
  onLaunch: function() {
    let _this = this;
    // 判断session 是否过期
    wx.checkSession({
      success: () => {
        if (!wx.getStorageSync("sKey")) {
          this.login();
        }
      },
      fail: () => {
        this.login();
      }
    })
  },

  login() {
    wx.login({
      success: res => {
        wx.request({
          url: config.service.loginUrl,
          method:"GET",
          data: {
            code: res.code
          },
          success(res) {
            console.log('login', res.data.data);
            var sKey = res.data.data;
            wx.setStorageSync("sKey", sKey);
          }
        })
      }
    });
  }
})