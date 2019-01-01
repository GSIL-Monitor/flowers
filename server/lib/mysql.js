var mysql = require('mysql');
var config = require('../config')

var pool = mysql.createPool({
    port: config.mysql.port,
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.pass,
    database: config.mysql.db,
    charset: 'utf8mb4'
});

let query = function(sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

/**
 * 
 * @param {mandy997}  小程序端
 */

// 如果用户不存在，根据open_id 查询uuid
let getUuid = (value) => {
    let _sql = `select csi.uuid,csi.open_id from cSessionInfo as csi  where csi.open_id="${value}"`;
    return query(_sql, value)
}

// 查找用户是否存在
let getUser = (value) => {
    let _sql = `select csi.uuid,u.open_id from user as u left join cSessionInfo as csi on u.open_id=csi.open_id where u.open_id="${value}"`;
    return query(_sql, value)
}

// 查询企业信息
let getCompany = (value) => {
    let _sql = `select * from user as u  where u.uid = "${value}"`;

    return query(_sql, value)
}


// 修改企业信息
let updateCompany = (value) => {
    let _sql = `update user set real_name=?,phone=?,com_name=?,com_info=?,com_coord =ST_GeomFromText(?),com_address =?,detail_address=?,bt_id =?,com_img=?,aptitude_id =? WHERE uid = ?`
    return query(_sql, value)
}



// 添加用户
let addUser = function(value) {
    let _sql = "insert into user(uid,nickname,icon,open_id) values(?,?,?,?)"
    return query(_sql, value)
}

// 添加供应信息
let addSupply = function(value) {
    let _sql = `insert into supply(u_id,name,standard,number,state,cover_img,imgs,details,detail_address,coord,create_time,end_time,is_supply) values(?,?,?,?,?,?,?,?,?,ST_GeomFromText(?),?,?,?)`
    return query(_sql, value)
}

/**
 * admin端
 */

// 获取用户列表
let getUserList = function(value) {
    let _sql = `select from user`
    return query(_sql, value)
}




module.exports = {
    query,
    getUuid,
    getUser,
    addUser,
    addSupply,
    getUserList,
    getCompany,
    updateCompany

}