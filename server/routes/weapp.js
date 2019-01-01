/**
 * ajax 服务路由集合
 */
// 
//{prefix: '/weapp'}

const router = require('koa-router')()
const controllers = require('../controllers')
const supply = require("./supply")
const auth = require("./auth")
const company = require('./company')


// 图片上传接口，小程序端可以直接将 url 填入 wx.uploadFile 中
router
    .post('/upload', controllers.upload)
    // --- 信道服务接口 Demo --- //
    // GET  用来响应请求信道地址的
    .get('/tunnel', controllers.tunnel.get)
    // POST 用来处理信道传递过来的消息
    .post('/tunnel', controllers.tunnel.post)
    // --- 客服消息接口 Demo --- //
    // GET  用来响应小程序后台配置时发送的验证请求
    .get('/message', controllers.message.get)
    // POST 用来处理微信转发过来的客服消息
    .post('/message', controllers.message.post)
    .use("/auth", auth.routes(), auth.allowedMethods())
    .use("/supply", supply.routes(), supply.allowedMethods())
    .use("/company", company.routes(), company.allowedMethods())

module.exports = router