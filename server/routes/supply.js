/**
 * 供应信息 子路由
 */

const router = require('koa-router')()
const controllers = require('../controllers')

// 这里展示如何使用 Koa 中间件完成登录态的颁发与验证
const { auth: { validationMiddleware } } = require('../qcloud')

const routers =
    router.post('/addSupply', validationMiddleware, controllers.supply)

module.exports = routers