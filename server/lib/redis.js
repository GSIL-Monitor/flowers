const redis = require('redis')
var config = require('../config')

const client = () => {
    return redis.createClient(config.redis.port, config.redis.host)
}

module.exports = {
    client
}