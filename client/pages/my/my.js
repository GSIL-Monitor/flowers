//index.js
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
    data: {
        imgUrl: {},
        userInfo: {},
        logged: false,
        takeSession: false,
        requestResult: ''
    },
    toProduct:function(){
        wx.navigateTo({
            url: '../product/product',
        })
    },
    onShow() {
        const session = qcloud.Session.get();
        console.log(session);
        if (session) {
            this.setData({
                logged: true,
                userInfo: session.userinfo
            })
        }
    },
    toInfo: function() {
        wx.navigateTo({
            url: '../info-manage/info-manage',
        })
    },
    // 用户登录
    doLogin: function(e) {
        util.showBusy('正在登录')
        wx.login({
          success:function(res){
            console.log(res);
            // 获取登录的临时凭证
            var code = res.code;
            // 调用后端，获取登录的session_key
            wx.request({
              url: config.service.loginUrl+"?code="+code,
              method:"POST",
              success:function(result){
                console.log(result);
                
              }
            })

          }
        })

        // if (this.data.logged) return
        

        // const session = qcloud.Session.get()
        // console.log(session)
        // if (session) {
        //     // 第二次登录
        //     // 或者本地已经有登录态
        //     // 可使用本函数更新登录态
        //     qcloud.loginWithCode({
        //         success: res => {
        //             this.setData({
        //                 userInfo: res,
        //                 logged: true
        //             })
        //             console.log("userInfo", res);
        //             util.showSuccess('登录成功')
        //         },
        //         fail: err => {
        //             console.error(err)
        //             util.showModel('登录错误', err.message)
        //         }
        //     })
        // } else {
        //     // 首次登录
        //     qcloud.login({
        //         success: res => {
        //             this.setData({
        //                 userInfo: res,
        //                 logged: true
        //             })
        //             console.log("userInfo", res);
        //             util.showSuccess('登录成功')
        //         },
        //         fail: err => {
        //             console.error(err)
        //             util.showModel('登录错误', err.message)
        //         }
        //     })
        // }
    },

    // 切换是否带有登录态
    switchRequestMode: function(e) {
        this.setData({
            takeSession: e.detail.value
        })
        this.doRequest()
    },

    doRequest: function() {
        util.showBusy('请求中...')
        var that = this
        var options = {
            url: config.service.requestUrl,
            login: true,
            success(result) {
                util.showSuccess('请求成功完成')
                console.log('request success', result)
                that.setData({
                    requestResult: JSON.stringify(result.data)
                })
            },
            fail(error) {
                util.showModel('请求失败', error);
                console.log('request fail', error);
            }
        }
        if (this.data.takeSession) { // 使用 qcloud.request 带登录态登录
            qcloud.request(options)
        } else { // 使用 wx.request 则不带登录态
            wx.request(options)
        }
    },



    onLoad: function(options) {
      var that = this
      // 查看是否授权
      wx.getSetting({
        success(res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success(res) {
                that.setData({
                  logged: true,
                  userInfo: res.userInfo
                })
              }
            })
          }
        }
      })

    },

    // 切换信道的按钮
    switchChange: function(e) {
        var checked = e.detail.value

        if (checked) {
            this.openTunnel()
        } else {
            this.closeTunnel()
        }
    },

    openTunnel: function() {
        util.showBusy('信道连接中...')
        // 创建信道，需要给定后台服务地址
        var tunnel = this.tunnel = new qcloud.Tunnel(config.service.tunnelUrl)

        // 监听信道内置消息，包括 connect/close/reconnecting/reconnect/error
        tunnel.on('connect', () => {
            util.showSuccess('信道已连接')
            console.log('WebSocket 信道已连接')
            this.setData({
                tunnelStatus: 'connected'
            })
        })

        tunnel.on('close', () => {
            util.showSuccess('信道已断开')
            console.log('WebSocket 信道已断开')
            this.setData({
                tunnelStatus: 'closed'
            })
        })

        tunnel.on('reconnecting', () => {
            console.log('WebSocket 信道正在重连...')
            util.showBusy('正在重连')
        })

        tunnel.on('reconnect', () => {
            console.log('WebSocket 信道重连成功')
            util.showSuccess('重连成功')
        })

        tunnel.on('error', error => {
            util.showModel('信道发生错误', error)
            console.error('信道发生错误：', error)
        })

        // 监听自定义消息（服务器进行推送）
        tunnel.on('speak', speak => {
            util.showModel('信道消息', speak)
            console.log('收到说话消息：', speak)
        })

        // 打开信道
        tunnel.open()

        this.setData({
            tunnelStatus: 'connecting'
        })
    },

    /**
     * 点击「发送消息」按钮，测试使用信道发送消息
     */
    sendMessage() {
        if (!this.data.tunnelStatus || !this.data.tunnelStatus === 'connected') return
        // 使用 tunnel.isActive() 来检测当前信道是否处于可用状态
        if (this.tunnel && this.tunnel.isActive()) {
            // 使用信道给服务器推送「speak」消息
            this.tunnel.emit('speak', {
                'word': 'I say something at ' + new Date(),
            });
        }
    },

    /**
     * 点击「关闭信道」按钮，关闭已经打开的信道
     */
    closeTunnel() {
        if (this.tunnel) {
            this.tunnel.close();
        }
        util.showBusy('信道连接中...')
        this.setData({
            tunnelStatus: 'closed'
        })
    }
})