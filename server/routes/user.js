/**
 * User
 */
const router = require('koa-router')()
const controllers = require('../controllers')

// 这里展示如何使用 Koa 中间件完成登录态的颁发与验证
const { auth: { authorizationMiddleware, validationMiddleware } } = require('../qcloud')

const routers =
    router
    .get('/login', authorizationMiddleware, controllers.login)
    .get('/user', validationMiddleware, controllers.user.getUserList)

module.exports = routers