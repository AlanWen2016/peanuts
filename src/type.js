/**
 * 获取对象类型
 * @private
 * @param {object} obj - object 对象
 * @return {string} 类型
 * 可判断类型：Boolean Number String Function Array Date RegExp Object
 */
function getParamType(obj){
    return obj == null ? String(obj) :
        Object.prototype.toString.call(obj).replace(/\[object\s+(\w+)\]/i,"$1") || "object";
}
/**
 * @description 判断对象是否定义
 * 其实只对对象中的元素判断有效，如是纯变量，此方法会无法调用，需要外面加try
 * @param {object} o - object 对象
 * @return {bool} 是/否
 */
function isUndefined (o){
    return o === undefined && typeof o == "undefined";
}
/**
 * @description 判断对象是否数组
 * @param {object} obj - object 对象
 * @return {bool} 是/否
 */
function isArray(obj) {
    return getParamType(obj).toLowerCase() === "array";
}
/**
 * @description 判断对象是否函数
 * @param {object} obj - object 对象
 * @return {bool} 是/否
 */
function isFunction(obj){
    return getParamType(obj).toLowerCase() === "function";
}

/**
 * @description 判断对象是否对象
 * @param {object} obj - object 对象
 * @return {bool} 是/否
 */
 function isObject(obj) {
    return getParamType(obj).toLowerCase() === "object";
}
/**
 * @description 判断对象是否数值
 * @param {object} obj - object 对象
 * @return {bool} 是/否
 */
function isNumber(obj) {
    return getParamType(obj).toLowerCase() === "number";
}
/**
 * @description 判断对象是否字符串
 * @param {object} obj - object 对象
 * @return {bool} 是/否
 */
function isString(obj) {
    return getParamType(obj).toLowerCase() === "string";
}
/**
 * @description 判断是否布尔值
 * @param {object} obj - object 对象
 * @return {bool} 是/否
 */
function isBoolean(obj) {
    return getParamType(obj).toLowerCase() === "boolean";
}
/**
 * @description 判断对象是否日期
 * @param {object} obj - object 对象
 * @return {bool} 是/否
 */
function isDate(obj) {
    return getParamType(obj).toLowerCase() === "date";
}
/**
 * @description 判断对象是否DOM元素
 * @param {object} obj - obj DOM对象
 * @return {bool} 是/否
 */
function isDom(obj) {
    try{
        return obj && typeof obj === "object" && !isUndefined(obj.nodeType) && obj.nodeType==1 && !isUndefined(obj.nodeName) && typeof obj.nodeName == "string";
    }
    catch(e){
        //console.log(e)
        return false;
    }
}


export {
    isDom,
    isArray,
    isBoolean,
    isDate,
    isFunction,
    isNumber,
    isObject,
    isString,
    isUndefined,
    getParamType
}
