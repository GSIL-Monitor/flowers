const Koa = require('koa')
const debug = require('debug')('flowers')
const response = require('./middlewares/response')
const bodyParser = require('koa-bodyparser')
const config = require('./config')
const koaJson = require('koa-json')
const serve = require("koa-static")
const kcors = require("kcors")

const jwt = require('jwt-simple')
const koaJwt = require('koa-jwt')

const app = new Koa()

// 密钥
const jwtSecret = 'jwtSecret'
const tokenExpiresTime = 1000 * 60 * 60 * 24 * 7

// Custom 401 handling if you don't want to expose koa-jwt errors to users
app.use(function(ctx, next) {
    return next().catch((err) => {
        if (401 == err.status) {
            ctx.status = 401;
            ctx.body = '受保护的资源，使用授权头获得访问';
        } else {
            throw err;
        }
    });
});

app.use(koaJwt({ secret: jwtSecret }).unless({
    path: [/^\/api\/auth/, /^\/weapp/, /^\/public/]
}))


// 跨域设置
const corsOptions = {
    'origin': '',
    'credentials': true,
    'maxAge': 3600
};


// 使用响应处理中间件
app.use(response)

//允许跨域 
// app.use(kcors(corsOptions));

// 美化json
app.use(koaJson())
    // 解析请求体
app.use(bodyParser())
app.use(serve(__dirname));


// 引入路由分发
const router = require('./routes')

app
    .use(router.routes())
    .use(router.allowedMethods())



// 启动程序，监听端口
app.listen(config.port, () => debug(`listening on port ${config.port}`))