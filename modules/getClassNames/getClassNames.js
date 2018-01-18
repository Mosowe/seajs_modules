/**
 *  解决ie9以下不兼容getElementsByClassName的方法
 * className     class名称
 */

function getClassNames(className){
    if (document.getElementsByClassName) {
        return document.getElementsByClassName(className)
    }else {
        var nodes = document.getElementsByTagName('*'),ret = [];
        for(i = 0; i < nodes.length; i++) {
            if(hasClass(nodes[i],className)){
                ret.push(nodes[i])
            }
        }
        return ret;
    }
}
function hasClass(tagStr,className){
    var arr=tagStr.className.split(/\s+/ );  //这个正则表达式是因为class可以有多个,判断是否包含
    for (var i=0;i<arr.length;i++){
        if (arr[i]==className){
            return true ;
        }
    }
    return false ;
}