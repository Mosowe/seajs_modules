(function (factory) {
    if (typeof define === 'function') {
        // 如果define已被定义，模块化代码
        define('rollingPic_pile',['jquery'], function(require,exports,moudles){
            factory(require('jquery')); // 初始化插件
            return 'jQuery'; // 返回jQuery
        });
    } else {
        // 如果define没有被定义，正常执行jQuery
        factory(jQuery);
    }
}(function ($) {
    $.fn.extend({
        rollingPic_pile : function(option){
            var jzt = $.extend({
                leftBtn:"",		//左边按钮
                rightBtn:"",    //右边按钮
                btnBox:"",      //底部按钮
                fontSize:0,     //底部按钮字体大小
                element:"",     //切换元素
                title:"",       //切换元素的标题
                percent:"50",   //前图宽度百分比
                showNumber:5,   //展示切换数量
                speed:3000,     //切换速度
                direction:"left" //切换方向
            },option);
            var time = new Date;
            var element = $(""+jzt.element+"");
            var percent = jzt.percent;
            var showNumber = jzt.showNumber;
            var title =$(""+jzt.title+"");
            var leftbtn = $(""+jzt.leftBtn+"");
            var rightbtn = $(""+jzt.rightBtn+"");
            var btnbox   =$(""+jzt.btnBox+"");
            var th = this;
            var numjs = 0;
            var showheight = this.height();
            var showwidth  = this.width();
            var showNumberCenter = Math.floor(showNumber/2);
            var elementLen = element.length;
            element.css({"width":"0%","left":"50%","top":"50%","z-index":0});
            btnbox.empty().css({"font-size":jzt.fontSize});
            for(var i = 0; i<elementLen;i++){
                btnbox.append("<span>"+i+"</span>");
            }
            btnbox.find("span:first").addClass("cur");
            element.eq(showNumberCenter).css({"width":percent+"%","left":(100-percent)/2+"%","top":0,"z-index":showNumber}).addClass("active");
            this.find("img").css({"display":"block","width":"100%"});
            title.hide();
            element.eq(showNumberCenter).find(""+jzt.title+"").show();
            var p = element.eq(showNumberCenter).width()/showheight;

            for(var i=1,j=showNumberCenter;i<showNumberCenter+1;i++){

                element.eq(j-i).css({'width':''+(percent-10*i)+'%','left':''+(100-percent)*0.5/showNumberCenter*(showNumberCenter-i)+'%','top':''+7.5*i+'%','z-index':showNumber-i});

                element.eq(j+i).css({'width':''+(percent-10*i)+'%','left':''+100-(percent-10*i)-(100-percent)*0.5/showNumberCenter*(showNumberCenter-i)+'%','top':''+7.5*i+'%','z-index':showNumber-i});
            };
            function carright(){
                $(""+jzt.element+"").eq(showNumber-1).animate({width:"0%",left:"50%","top":"50%"}).css({"z-index":0});
                $(""+jzt.element+":last").insertBefore($(""+jzt.element+":first"));
                $(""+jzt.element+"").eq(showNumberCenter).animate({width:percent+"%",left:(100-percent)/2+"%","top":0}).css({"z-index":showNumber}).addClass("active").find(""+jzt.title+"").show();
                $(""+jzt.element+"").eq(showNumberCenter).siblings().removeClass("active").find(""+jzt.title+"").hide();

                for(var i=1,j=showNumberCenter;i<showNumberCenter+1;i++){

                    $(""+jzt.element+"").eq(j-i).animate({width:''+(percent-10*i)+'%',left:''+(100-percent)*0.5/showNumberCenter*(showNumberCenter-i)+'%',top:''+7.5*i+'%'}).css({'z-index':showNumber-i});

                    $(""+jzt.element+"").eq(j+i).animate({width:''+(percent-10*i)+'%',left:''+100-(percent-10*i)-(100-percent)*0.5/showNumberCenter*(showNumberCenter-i)+'%',top:''+7.5*i+'%'}).css({'z-index':showNumber-i});
                };
                for(i=showNumber;i<elementLen-1;i++){
                    $(""+jzt.element+"").eq(i).animate({width:'0%',left:'50%',top:'50%'}).css({'z-index':0});
                };

                numjs--;
                if(numjs>-1){
                    btnbox.find("span").eq(numjs).addClass("cur").siblings().removeClass("cur");
                }else{
                    numjs = elementLen-1;
                    btnbox.find("span").eq(numjs).addClass("cur").siblings().removeClass("cur");
                }
            };

            function carleft(){
                $(""+jzt.element+"").eq(0).animate({width:'0%',left:'50%',top:'50%'}).css({'z-index':0});
                $(""+jzt.element+":first").insertAfter($(""+jzt.element+":last"));
                $(""+jzt.element+"").eq(showNumberCenter).animate({width:percent+"%",left:(100-percent)/2+"%","top":0}).css({"z-index":showNumber}).addClass("active").find(""+jzt.title+"").show();
                $(""+jzt.element+"").eq(showNumberCenter).siblings().removeClass("active").find(""+jzt.title+"").hide();
                for(var i=1,j=showNumberCenter;i<showNumberCenter+1;i++){

                    $(""+jzt.element+"").eq(j-i).animate({width:''+(percent-10*i)+'%',left:''+(100-percent)*0.5/showNumberCenter*(showNumberCenter-i)+'%',top:''+7.5*i+'%'}).css({'z-index':showNumber-i});

                    $(""+jzt.element+"").eq(j+i).animate({width:''+(percent-10*i)+'%',left:''+100-(percent-10*i)-(100-percent)*0.5/showNumberCenter*(showNumberCenter-i)+'%',top:''+7.5*i+'%'}).css({'z-index':showNumber-i});
                };
                for(i=showNumber;i<elementLen-1;i++){
                    $(""+jzt.element+"").eq(i).animate({width:'0%',left:'50%',top:'50%'}).css({'z-index':0});
                };
                numjs++;
                if(numjs<elementLen){
                    btnbox.find("span").eq(numjs).addClass("cur").siblings().removeClass("cur");
                }else{
                    numjs = 0;
                    btnbox.find("span").eq(numjs).addClass("cur").siblings().removeClass("cur");
                }
            };

            var name = '';
            if(jzt.direction == "left"){
                name = carleft;
            }else{
                name = carright;
            };
            var timer = setInterval(name,jzt.speed);
            element.hover(function(){
                clearInterval(timer);
            },function(){
                timer = setInterval(name,jzt.speed);
            });
            leftbtn.hover(function(){
                clearInterval(timer);
            },function(){
                timer = setInterval(name,jzt.speed);
            }).click(function(){
                if(new Date-time>500){
                    time=new Date;
                    carleft();
                }
            });
            rightbtn.hover(function(){
                clearInterval(timer);
            },function(){
                timer = setInterval(name,jzt.speed)
            }).click(function(){
                if(new Date-time>500){
                    time=new Date;
                    carright();
                }
            })
        }
    });
}));