let mysql = require('./../lib/mysql');
const moment = require('moment')
const redis = require('redis')
var config = require('../config')

// 供应数据接口

// 添加供应信息
module.exports = async(ctx, next) => {
    const redis_client = redis.createClient(config.redis.port, config.redis.host)
        // 产品信息
    const supply = ctx.request.body

    // 用户信息
    const u = ctx.state.$wxInfo.userinfo;
    console.log("user对象", u);
    redis_client.get(u.openId, function(err, uuid) {
        console.log(err)
        console.log("哈哈哈哈哈哈哈哈哈啊哈uuid", uuid);
        if (uuid != null && uuid != "") {
            addSupply(supply, uuid);
        }
    })

    let addSupply = async function(s, uuid) {
        let create_time = moment().format('YYYY-MM-DD HH:mm:ss');
        var coord = 'POINT(' + s.coord.lat + ' ' + s.coord.lng + ')';
        let val = [uuid, s.name, s.standard, s.number, s.state, s.cover_img, s.imgs, s.details, s.detail_address, coord, create_time, s.end_time, s.is_supply]
        console.log(val);
        await mysql.addSupply(val)
            .then(res => {
                console.log('添加供应信息成功', res)
                ctx.body = {
                    data: '添加供应信息成功',
                    success: true
                }
            })
    }

}