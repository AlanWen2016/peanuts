const EXP_TIME = 24 * 1000 * 60 * 60;

/**
 *
 * @param key 键值
 * @param exp 过期时间
 * @returns {boolean | any} 返回结果
 * @example
 * Peanut.getStorage('name');
 * @description 获取localStorage值
 */
function getStorage(key, exp) {
    exp = exp || EXP_TIME
    let data = localStorage.getItem(key)
    if(!data) {
        localStorage.removeItem(key)
        return false;
    }
    data = JSON.parse(data)
    if(exp && new Date().getTime() - data.time > exp) {
        localStorage.removeItem(key)
        return false
    }
    return data.data
}

/**
 * @param key
 * @param value
 * @returns {number} number - 返回结果
 * @example
 * Peanut.setStorage('name', 'peanut');
 * @description 设置localStorage
 *
 */
function setStorage(key, value) {
    let curTime = new Date().getTime()
    localStorage.setItem(key, JSON.stringify({data: value, time: curTime}))
}

/**
 *  存储sessionStorage
 * @param name 键
 * @param content 值，可以不为字符串
 */
const setSessionStorage = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.sessionStorage.setItem(name, content);
};

/**
 * 获取sessionStorage
 * @param name 键
 * @return 返回结果或者无结果返回null
 */
const getSessionStorage = name => {
    if (!name) return;
    let value = window.sessionStorage.getItem(name);
    if (!value || value == '') {
        return null;
    }
    return value;
};

/**
 * 删除sessionStorage
 * @param name
 *
 */
const removeSessionStorage = name => {
    if (!name) return;
    window.sessionStorage.removeItem(name);
};

/**
 * 读取cookie值
 * @param name
 * @return {*}
 */
function getCookie(name){
    let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return '';
}

/**
 * 设置cookie值
 * @param name 键名
 * @param value 键值
 * @param {int} days 天数
 */
function setCookie(name,value,days){
    if (days) {
        let date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        let expires = "; expires="+date.toGMTString();
    }else{
        let expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
}

/**
 * 删除cookie值
 * @param name
 */
function delCookie(name) {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval= getCookie(name);
    if(cval!='')
        document.cookie= name + "="+cval+";expires="+exp.toGMTString()+"; path=/";
}


export {
    setStorage,
    getStorage,
    getSessionStorage,
    setSessionStorage,
    removeSessionStorage,
    delCookie,
    setCookie,
    getCookie
}
