export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

export function isEmail_old(val) {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regEmail.test(val)){
      return 'Invalid Email';
    }
}

export function isEmail(val) {
    let regExp = /^[a-zA-Z0-9\.\-]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if(!regExp.test(val)){
      return {status:false,message:"รูปแบบ E-mail ควรอยู่ในรูปแบบ abc@domain.com"};
    }
    return {status:true,message:""};
}
export function isTelephone(val) {
    // let regExp = /^\(\d{3}\)\s\d{3}-\d{4}$/;
    // /^\(\d{3}\)\s\d{3}-\d{4}$/
    // /^\(\d{3}\)\s*\d{3}-\d{4}$/ => (044) 456-7890
    // let regExp = /^\(\d{3}\)$/;
    // let regExp = /(^0?[1-9]$)|(^1[0-2]$)/;

    // let regExp = /^\(\d{2}|\d{3}\).(?:\d{7})$/;
    // let regExp = /^\d{2}$/;
    // let regExp = /^\(\d{2}|\d{3}\)*^\d{2}$/;
    // let regExp = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1(\d{3}|\d{4})$/;
    let regExp = /^(?:\d{2}|\d{3})([-/.])\d{3}\1(\d{3}|\d{4})$/;
    
    // let regExp = /^\(^[\d{2}\d{3}]\)$/;

    // if(val.length < 10 || !regExp.test(val)){
    if(!regExp.test(val)){
            return {status:false,message:"เบอร์โทรควรอยู่ในรูปแบบ ###-###-####"};
    }
    return {status:true,message:""};
}

export function isValidate(type, value) {
    switch(type) {
        case "email" : return isEmail(value); break;
        case "number" : return isEmail(value); break;
        case "telephone" : return isTelephone(value); break;
        case "location" : return isLocation(value); break;
        default : return {status:false,message:"เกิดข้อผิดผลาดการเรียกใช้งาน!!!"};;
    }
}