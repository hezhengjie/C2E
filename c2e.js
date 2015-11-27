/**
 * Created by hezhengjie on 2015/11/20.
 */
var replaceStr=[
    {"ch":"，","en":","},{"ch":"。","en":"\\."},{"ch":"：","en":":"},{"ch":"；","en":";"},{"ch":"”","en":"\""},{"ch":"“","en":"\""}
];
String.prototype.replaceall=function(s1,s2){
    return this.replace(new RegExp(s1,"gm"),s2);
}
function c2e(str){
    replaceStr.forEach(function(item,index,arr){
        if(str.indexOf(item.ch)!=-1){
            str = str.replaceall(item.ch,item.en);
        }
    });
    return str;
}
function e2c(str){
    replaceStr.forEach(function(item,index,arr){
        if(str.indexOf(item.en)!=-1){
            str = str.replaceall(item.en,item.ch);
        }
    });
    return str;
}
