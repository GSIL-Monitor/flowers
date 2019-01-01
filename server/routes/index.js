const router = require('koa-router')()
const weapp = require('./weapp')
const api = require('./api')

router
    .use("/weapp", weapp.routes(), weapp.allowedMethods())
    .use("/api", api.routes(), api.allowedMethods())

module.exports = router