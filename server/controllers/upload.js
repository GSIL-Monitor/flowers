// const { uploader } = require('../qcloud')
const formidable = require('koa-formidable'); // 图片处理
const fs = require('fs'); // 图片路径
const path = require('path'); // 图片路径
const config = require('./../config')


module.exports = async ctx => {
    // 获取上传之后的结果
    // 具体可以查看：
    // const data = await uploader(ctx.req)
    // ctx.state.data = data

    // 新建文件，可以去百度fs模块
    let mkdirs = (dirname, callback) => {
        fs.exists(dirname, function(exists) {
            if (exists) {
                callback();
            } else {
                mkdirs(path.dirname(dirname), function() {
                    fs.mkdir(dirname, callback);
                });
            }
        });
    };

    let form = formidable.parse(ctx.request);

    function formImage() {
        return new Promise((resolve, reject) => {
            form((opt, { fields, files }) => {
                let filename = files.file.name;
                console.log(filename);
                console.log(files.file.path);
                let uploadDir = 'public/upload/';
                let avatarName = Date.now() + '_' + filename;
                mkdirs('public/upload', function() {
                    let readStream = fs.createReadStream(files.file.path);
                    let writeStream = fs.createWriteStream(uploadDir + avatarName);
                    readStream.pipe(writeStream);
                    readStream.on('end', function() {
                        fs.unlinkSync(files.file.path);
                    });

                    resolve(config.localhost + '/' + uploadDir + avatarName)
                })
            })
        })
    }
    let url = await formImage();
    console.log("图片地址：", url);
    ctx.response.status = 200;
    ctx.response.type = 'json';
    ctx.response.body = {
        data: {
            imgUrl: url
        }
    };
}