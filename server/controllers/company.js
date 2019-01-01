const asyncRedis = require("async-redis");
var config = require('../config')
let mysql = require('./../lib/mysql');

// 公司数据接口


// 查询企业信息
const redis_client = asyncRedis.createClient(config.redis.port, config.redis.host)
getCompany = async(ctx) => {
    // 用户信息
    const u = ctx.state.$wxInfo.userinfo;
    let company = {};
    let uid = await redis_client.get(u.openId)
    await mysql.getCompany(uid)
        .then(res => {
            company = res[0]
            ctx.body = company
        })
}

// 更新企业信息
updateCompany = async(ctx) => {
    let updateCom = async function(c, uuid) {
            var com_coord = 'POINT(' + c.com_coord.lat + ' ' + c.com_coord.lng + ')';
            let val = [c.real_name, c.phone, c.com_name, c.com_info, com_coord, c.com_address, c.detail_address, 11, c.com_img, 1, uuid]
            console.log(val);
            await mysql.updateCompany(val)
                .then(res => {
                    console.log('修改企业信息成功', res)
                })
        }
        // 产品信息
    const company = ctx.request.body
    console.log(company)
        // 用户信息
    const u = ctx.state.$wxInfo.userinfo;
    let uid = await redis_client.get(u.openId)
    if (uid != null && uid != "") {
        updateCom(company, uid);
    }
    ctx.body = '修改企业信息成功'
}

module.exports = {
    getCompany,
    updateCompany
}