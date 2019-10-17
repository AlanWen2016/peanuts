import toString from './toString';
import {setStorage, getStorage, getCookie, setCookie, delCookie, getSessionStorage, removeSessionStorage, setSessionStorage} from './storage'
import { validate} from "./validate";
import {shuffle, nest} from "./array";
import {isArray, getParamType, isUndefined, isString, isObject, isNumber, isFunction, isDate, isBoolean, isDom} from "./type";
import {ltrim, trim, rtrim, toThousandsFilter, numFormat} from "./string";

/**
 *
 * @param {String} a - 参数a
 * @param {String} b - 参数b
 * @returns {number} - 返回结果为数字
 * @example
 * Peanut.add(1, 2);
 * // returns 3
 * @description 两个数字相加.
 */
export function add(a, b) {
    return a + b
}

export default {
    add,
    toString,
    numFormat,
    toThousandsFilter,
    validate,
    shuffle,
    nest,
    isArray,
    getParamType,
    isUndefined,
    isString,
    isObject,
    isNumber,
    isFunction,
    isDate,
    isBoolean,
    isDom,
    trim,
    ltrim,
    rtrim,
    setStorage,
    getStorage,
    getSessionStorage,
    setSessionStorage,
    removeSessionStorage,
    delCookie,
    setCookie,
    getCookie
}
