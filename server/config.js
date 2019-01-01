const CONF = {

    // 其他配置 ... 本地开发环境
    serverHost: 'localhost',
    tunnelServerUrl: '',
    tunnelSignatureKey: '27fb7d1c161b7ca52d73cce0f1d833f9f5b5ec89',
    // 腾讯云相关配置可以查看云 API 秘钥控制台：https://console.cloud.tencent.com/capi
    qcloudAppId: '1253599536',
    qcloudSecretId: 'AKIDtxvrcPYXrz0vfIy060oQBqLk6Mjh9JsG',
    qcloudSecretKey: 'NYZWL7jDVgfYKvXjz62sa7TdaLuMyahe',

    wxMessageToken: 'weixinmsgtoken',
    networkTimeout: 30000,
    localhost: 'http://localhost:5757',
    // 本地开发环境配置结束

    port: '5757',
    rootPathname: '',

    // 微信小程序 App ID
    appId: 'wxe7864b453f26e33a',
    // 微信小程序 App Secret
    appSecret: '95604ebcc810535ddaef106aec3fd4c4',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: false,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        host: '188.131.133.129',
        port: 3366,
        user: 'root',
        db: 'flowers',
        pass: 'xunduoduo',
        // pass: 'wxe7864b453f26e33a',
        char: 'utf8mb4'
    },
    redis: {
        host: '188.131.133.129',
        port: 6399,
    },

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-guangzhou',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
}

module.exports = CONF