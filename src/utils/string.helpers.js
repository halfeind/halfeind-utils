export const acronym = (str) => {
    let acronym = str.match(/\b(\w)/g); 
    return acronym;
}
export const isEmpty = (str) => {
    let isEmpty = (!str || 0 === str.length);
    return isEmpty;
}
export const randomString = (length)=>{
    var string           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        string += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return string;
}
export const isEmail = (str)=>{
    let mailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return mailRegex.test(str);
}
