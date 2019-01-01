let mysql = require('./../lib/mysql');
const asyncRedis = require("async-redis");

var config = require('../config')


// 登录授权接口
module.exports = async(ctx, next) => {
    // 通过 Koa 中间件进行登录之后
    // 登录信息会被存储到 ctx.state.$wxInfo
    // 具体查看：
    if (ctx.state.$wxInfo.loginState) {
        const redis_client = asyncRedis.createClient(config.redis.port, config.redis.host);
        const user = ctx.state.$wxInfo.userinfo.userinfo;

        const asyncBlock = async(user) => {
            const value = await redis_client.get(user.open_id);
            console.log("哈哈哈哈哈哈哈哈嗯嗯", value);
            if (value == null || value == "") {
                await redis_client.set(user.open_id, user.uuid)
            }
        };
        await mysql.getUser(user.openId)
            .then(result => {
                var res = JSON.parse(JSON.stringify(result))[0]
                if (res != "undefined" && res != null) {
                    // 用户存在
                    asyncBlock(res);

                } else {
                    // 用户不存在
                    console.log("用户不存在", user.openId)
                    mysql.getUuid(user.openId)
                        .then(sessionUser => {
                            var sUser = JSON.parse(JSON.stringify(sessionUser))[0]
                            if (sUser.uuid != null && sUser.uuid != "") {
                                mysql.addUser([sUser.uuid, user.nickName, user.avatarUrl, sUser.open_id])
                                    .then(addUserRes => {
                                        console.log('添加新用户成功', addUserRes)

                                        asyncBlock(sUser);
                                    })
                            }
                        })
                }
            });
        ctx.state.data = ctx.state.$wxInfo.userinfo
        ctx.state.data['time'] = Math.floor(Date.now() / 1000)
    }
}