let isvalidUsername = function(str) {
    const valid_map = ['admin']
    return valid_map.indexOf(str.trim()) >= 0
}




/**
 * 判断是否为空
 */
let validatenul = function(val) {
    if (typeof val === 'boolean') {
        return false
    }
    if (val instanceof Array) {
        if (val.length === 0) return true
    } else if (val instanceof Object) {
        if (JSON.stringify(val) === '{}') return true
    } else {
        if (val === 'null' || val == null || val === 'undefined' || val === undefined || val === '') return true
        return false
    }
    return false
}


export {
    isvalidUsername,
    validatenul
}