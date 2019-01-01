/**
 * 登录及身份验证 子路由
 */
const router = require('koa-router')()
const controllers = require('../controllers')

// 这里展示如何使用 Koa 中间件完成登录态的颁发与验证
const { auth: { authorizationMiddleware, validationMiddleware } } = require('../qcloud')

const routers =
    router
    .get('/login', authorizationMiddleware, controllers.login)
    .get('/getUser', validationMiddleware, controllers.user.getUser)

module.exports = routers