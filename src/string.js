/**
 * 去掉字符串左边的非空字符
 * @param {string} str 字符串
 * @return {string}
 */
function ltrim(str){
    return str.replace(/^\s+/,"");
}
/**
 * 去掉字符串右边的非空字符
 * @param {string} str 字符串
 * @return {string}
 */
function rtrim(str){
    return str.replace(/\s+$/,"");
}
/**
 * 去掉字符串左右两边的非空字符
 * @param {string} str 字符串
 * @return {string}
 */
function trim(str){
    return ltrim(rtrim(str));
}


/**
 * 数字转千分位
 * @param {*} num
 * @returns {String}
 */
function toThousandsFilter(num) {
    let cent = 2;
    num = num.toString().replace(/\$|\,/g, '');
    // 检查传入数值为数值类型
    if (isNaN(num))
        num = "0";
    // 获取符号(正/负数)
    let sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * Math.pow(10, cent) + 0.50000000001); // 把指定的小数位先转换成整数.多余的小数位四舍五入
    let cents = num % Math.pow(10, cent); // 求出小数位数值
    num = Math.floor(num / Math.pow(10, cent)).toString(); // 求出整数位数值
    cents = cents.toString(); // 把小数位转换成字符串,以便求小数位长度
    // 补足小数位到指定的位数
    while (cents.length < cent)
        cents = "0" + cents;

    // 对整数部分进行千分位格式化.
    for (let i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));

    if (cent > 0)
        return (((sign) ? '' : '-') + num + '.' + cents);
    else
        return (((sign) ? '' : '-') + num);
}

/**
 *
 * @param {*} s
 * @param {*} n
 */
function numFormat(s, n) {
    n = parseInt(n) || 2;
    s = parseFloat(s) || 0;
    n = n >= 0 ? n : 0;
    s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + '';
    var l = s.split('.')[0].split('').reverse();
    r = s.split('.')[1] || '';
    t = '';
    for (i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? ',' : '');
    }
    return t.split('').reverse().join('') + (r != '' ? ('.' + r) : '');
}

export {ltrim, rtrim, trim, toThousandsFilter, numFormat }
