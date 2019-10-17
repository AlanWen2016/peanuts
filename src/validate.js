/**
 * 正则校验常见字符串
 * @param value 校验的字符串
 * @param type  正则校验类型（date, qq, number, currency, phone, mail,zipcode,url, idcard）可选
 * @returns {*}
 */
function validate(value,type){
    if(typeof value !== 'string'){
        return false;
    }
    type = type.toLowerCase();
    let validator = {
        'date'		        :  /^([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8])))$/,
        'qq'                :  /^[1-9]\d{4,10}$/,
        'number'            :  /^\d+$/,
        'currency'          :  /^\d+(\.\d+)?$/,
        'mail'              :  /^(?:[\w-]+\.?)*[\w-]+@(?:[\w-]+\.)+[\w]{2,3}$/,
        'phone'             :  /^1[3456789]\d{9}$/,
        'url'               :  /^(https|http):\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,
        'idcard'            :  /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        'tel'               :  /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/,
        'zipcode'           :  /^(\d){6}$/, // 校验邮政编码
    };
    if(validator[type]){
        let result = value.match(validator[type]);
        if(result){
            return result;
        }
        return false;
    }
    return false;
}


export { validate };
