/**
 * admin端接口 子路由
 */

const router = require('koa-router')()
const controllers = require('../controllers')


router
// 用户管理
    .get('/user/getUserList', controllers.user.getUserList)

module.exports = router