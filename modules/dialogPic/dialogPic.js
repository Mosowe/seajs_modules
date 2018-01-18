
//函数定义
function dialogPic(){

    this.elHTML = null;
    this.oli='';
    this.olilist='';
    this.num = Math.floor(viewWidth()/80)-1;
    this.settings = {
        title:'p',
        content:'',
        list:'',
        active:0,
        length:0,
        tklistboxShow:true
    }

}

//初始化
dialogPic.prototype.init = function(opt){
    extend( this.settings , opt );
    this.creathtml();
    this.btmbtn();
    this.leftbtn();
    this.rightbtn();
    this.tkClose();

};

//创建弹框及样式
dialogPic.prototype.creathtml = function(){
    document.body.style.overflow="hidden";
    this.elHTML = document.createElement('div');
    this.elHTML.className = 'dialogPic';

    for(var i=0; i<this.settings.length;i++){
        this.oli += '<li style="width:'+viewWidth()+'px">'+this.settings.list[i].innerHTML+'</li>'
        this.olilist += '<li><img src="'+this.settings.list[i].getElementsByTagName('img')[0].getAttribute('src')+'" ></li>'
    }
    var l = this.settings.tklistboxShow?'block':'none';
    this.elHTML.innerHTML = '<ul style="width:'+this.settings.length*viewWidth()+'px">'+this.oli+'</ul><span class="prve ion ion-ios-arrow-back"></span><span class="next ion ion-ios-arrow-forward"></span><em class="ion ion-android-close close" id="chose"></em><div class="tklistbox" id="tklistbox" style="display:'+l+'"><ul class="box">'+this.olilist+'</div></div>';
    document.body.appendChild( this.elHTML);
    btmbtnCur = this.elHTML.getElementsByTagName('ul')[1].getElementsByTagName('li');
    leftbtn = this.elHTML.getElementsByTagName('span')[0];
    rightbtn = this.elHTML.getElementsByTagName('span')[1];
    this.setActive();

}




//获取点击当前项
dialogPic.prototype.setActive = function(){
    this.elHTML.getElementsByTagName('ul')[0].style.transition = '1s';
    this.elHTML.getElementsByTagName('ul')[1].style.transition = '1s';
    var w = 0;
    for(var i = 0; i<this.settings.length; i++){
        w += btmbtnCur[i].offsetWidth+20;
    }
    this.elHTML.getElementsByTagName('ul')[1].style.width = w+'px';


    btmbtnCur[this.settings.active].className = 'active';//底部列表当前项高亮显示
    this.elHTML.getElementsByTagName('ul')[0].style.left = '-'+this.settings.active*viewWidth()+'px';//当前项大图展示，ul定位
    var n =0;
    for(var i = 0; i<this.settings.active-3; i++){
        n += btmbtnCur[i].offsetWidth+20;
    }
    this.elHTML.getElementsByTagName('ul')[1].style.left = '-'+n+'px';
}

//弹框底部列表点击事件
dialogPic.prototype.btmbtn = function(){
    for(var i = 0; i<this.settings.length; i++){
        var This = this;
        btmbtnCur[i].index = i;
        btmbtnCur[i].onclick = function(){
            This.settings.active = this.index;
            for(var i = 0; i<This.settings.length; i++){
                btmbtnCur[i].className = '';
            }
            this.className = 'active';

            This.elHTML.getElementsByTagName('ul')[0].style.left = '-'+this.index*viewWidth()+'px';//当前项大图展示，ul定位

            //console.log(btmbtnCur[this.index+1].getBoundingClientRect().left,viewWidth())
            var h1 = btmbtnCur[this.index+1].getBoundingClientRect().left;
            var h2 = btmbtnCur[this.index].getBoundingClientRect().left;
            var n =0;
            //console.log(h1,h2,viewWidth())
            if( h1 > viewWidth()&&h2>0){
                for(var i = 0; i<this.index-2; i++){
                    n += btmbtnCur[i].offsetWidth+20;
                }
                This.elHTML.getElementsByTagName('ul')[1].style.left = '-'+n+'px';
            }
            if(h2<50){
                for(var i = 0; i<this.index-2; i++){
                    n += btmbtnCur[i].offsetWidth+20;
                }
                if(n<viewWidth()/2){
                    This.elHTML.getElementsByTagName('ul')[1].style.left = '0px';
                }else{
                    This.elHTML.getElementsByTagName('ul')[1].style.left = '-'+(n-viewWidth()/2)+'px';
                }

            }

        }
    }

}

//左边按钮点击事件
dialogPic.prototype.leftbtn = function(){
    var This = this;
    leftbtn.onclick=function(){

        if(This.settings.active>0){
            btmbtnCur[This.settings.active].className = '';
            btmbtnCur[This.settings.active-1].className = 'active';
            This.elHTML.getElementsByTagName('ul')[0].style.left = '-'+(This.settings.active-1)*viewWidth()+'px';//当前项大图展示，ul定位
            This.settings.active -= 1;
            var h2 = btmbtnCur[This.settings.active].getBoundingClientRect().left;
            var n =0;
            if(h2<50){
                for(var i = 0; i<This.settings.active-1; i++){
                    n += btmbtnCur[i].offsetWidth+20;
                }
                if(n<viewWidth()/2){
                    This.elHTML.getElementsByTagName('ul')[1].style.left = '0px';
                }else{
                    This.elHTML.getElementsByTagName('ul')[1].style.left = '-'+(n-viewWidth()/2)+'px';
                }

            }
        }else{}

    }
}

//右边按钮点击事件
dialogPic.prototype.rightbtn = function() {
    var This = this;
    rightbtn.onclick=function(){
        if(This.settings.active<This.settings.length-1){
            btmbtnCur[This.settings.active].className = '';
            btmbtnCur[This.settings.active+1].className = 'active';
            This.elHTML.getElementsByTagName('ul')[0].style.left = '-'+(This.settings.active+1)*viewWidth()+'px';//当前项大图展示，ul定位
            This.settings.active += 1;
            var h2 = btmbtnCur[This.settings.active+1].getBoundingClientRect().left;
            var n =0;
            if(h2>viewWidth()){
                for(var i = 0; i<This.settings.active+1; i++){
                    n += btmbtnCur[i].offsetWidth+20;
                }
                if(n<viewWidth()/2){
                    This.elHTML.getElementsByTagName('ul')[1].style.left = '0px';
                }else{
                    This.elHTML.getElementsByTagName('ul')[1].style.left = '-'+(n-viewWidth()/2)+'px';
                }

            }
        }else{}

    }
}

//关闭弹框
dialogPic.prototype.tkClose = function(){
    var Close = this.elHTML.getElementsByTagName('em')[0];
    var This = this;
    Close.onclick = function(){
        document.body.style.overflow="auto";
        document.body.removeChild( This.elHTML );
    };
    document.onkeydown = function(event){
        document.body.style.overflow="auto";
        var e = event||window.event;
        if(e.keyCode == 27){
            document.body.removeChild( This.elHTML );
        }
    }
}


function extend(obj1,obj2){
    for(var attr in obj2){
        obj1[attr] = obj2[attr];
    }
}

//可视区域宽
function viewWidth(){
    return document.documentElement.clientWidth;
}
//可视区域高
function viewHeight(){
    return document.documentElement.clientHeight;
}
