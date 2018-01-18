function validate(id,method){
    var str = id.val();
    var re = {
        'email':/^\w+(\.)?(\w+)?@[0-9a-z\-]+(\.[a-z]+){1,2}$/,
        'phone':/^((13[0-9])|(15[0-37-9])|(18[0235789])|(14[57]))\d{8}$/,
        'idcard':/^[1-9]((\d{14})|(\d{17})|(\d{16}x))$/i,
        'website':/^[a-zA-Z]+:\/\/[^\s]*$/,
        'qq':/^[1-9][0-9]{4,10}$/,
        'zipcode':/^[1-9]\d{5}$/,
        'chinese':/^[\u4e00-\u9fa5]+$/
    };
    for(var attr in re){
        if(attr == method){
            if(str != null){
                if(re[attr].test(str)){
                    // id.style.borderColor = '#0F0';
                    id.css('border-color','#0f0');
                    return true;
                }else{
                    // id.style.borderColor = 'red';
                    id.css('border-color','red');
                    return false;
                }
            }else{
                // id.style.borderColor = 'red';
                id.css('border-color','red');
                return false;
            }

        }
    }
}

//提取公用部分
function revalidate(id,re) {
    var str = id.val() ;
    if(str != null){
        if(re.test(str)){
            id.css('border-color','#0f0');
            return true;
        }else{
            id.css('border-color','red');
            return false;
        }
    }else{
        id.css('border-color','red');
        return false;
    }
}

function email(id){
    var re = /^\w+(\.)?(\w+)?@[0-9a-z]+(\.[a-z]+){1,3}$/;
    return revalidate(id,re)
}
function phone(id){
    var re = /^((13[0-9])|(15[0-37-9])|(18[0235789])|(14[57]))\d{8}$/;
    return revalidate(id,re)
}
function web(id){
    var re = /^[a-zA-Z]+:\/\/[^\s]*$/;
    return revalidate(id,re)
}
function idcard(id){
    var re = /^[1-9]((\d{14})|(\d{17})|(\d{16}x))$/i;
    return revalidate(id,re)
}
function qq(id){
    var re = /^[1-9][0-9]{4,10}$/;
    return revalidate(id,re)
}
function zip(id){
    var re = /^[1-9]\d{5}$/;
    return revalidate(id,re)
}
function chinese(id){
    var re = /^[\u4e00-\u9fa5]+$/;
    return revalidate(id,re)
}

