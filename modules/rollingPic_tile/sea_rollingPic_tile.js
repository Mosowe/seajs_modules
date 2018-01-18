(function (factory) {
    if (typeof define === 'function') {
        // 如果define已被定义，模块化代码
        define('rollingPic_tile',['jquery'], function(require,exports,moudles){
            factory(require('jquery')); // 初始化插件
            return 'jQuery'; // 返回jQuery
        });
    } else {
        // 如果define没有被定义，正常执行jQuery
        factory(jQuery);
    }
}(function ($) {

    $.fn.extend({
        rollingPic_tile : function(option){
            var moveP = $.extend({
                leftBtn:"",        //左边按钮
                rightBtn:"",       //右边按钮
                btnBox:"",         //底部按钮
                btnBoxfont:0,      //底部按钮字体大小
                direction:"left",  //滚动方向
                carMethod:true,    //是否自动滚动
                contRolling:false, //是否连续滚动
                speed:500,		   //滚动速度
                Interval:3000,     //滚动间隔
                showList:0         //显示的数目,当总数小于这个值则不滚动
            },option);
            var th = this;
            var ul = this.children("ul");
            var li = ul.children("li");
            var liLen = li.length;
            var numLen = 0;
            var new_time = new Date;
            var outerWidth = li.outerWidth(true);
            var outerHeight = li.outerHeight(true);
            var LT = ul.children("li:first").insertAfter(ul.children("li:last"));
            var RB = ul.children("li:last").insertBefore(ul.children("li:first"));
            ul.css({"position":"absolute","overflow":"hidden","left":0,"top":0});

            //底部按钮定义
            if(moveP.btnBox){
                $(""+moveP.btnBox+"").empty().css("font-size",moveP.btnBoxfont);
                for(var i=0;i<liLen;i++){
                    $(""+moveP.btnBox+"").append("<span>"+i+"</span>");
                };
                $(""+moveP.btnBox+" span").eq(0).addClass("cur");
            }



            //ul宽高定义
            if(moveP.direction == "left" || moveP.direction == "right"){
                $(th).width(outerWidth*moveP.showList);
                $(th).height(outerHeight);
                ul.width(liLen*outerWidth);
                ul.height(th.height());
            }else if(moveP.direction == "top" || moveP.direction == "bottom" || moveP.direction == "fade"){
                $(th).width(outerWidth);
                $(th).height(outerHeight);
                ul.height(liLen*outerHeight);
                ul.width(outerWidth);
            }



            function carLT(){//left+top+fade自动间隔滚动+leftBtn事件函数
                if(moveP.direction == "left"||moveP.direction == "right"){
                    numLen++;
                    if(numLen<liLen){
                        $(""+moveP.btnBox+" span").eq(numLen).addClass("cur").siblings().removeClass("cur");
                    }else{
                        numLen = 0;
                        $(""+moveP.btnBox+" span").eq(numLen).addClass("cur").siblings().removeClass("cur");
                    }
                    ul.animate({left:-outerWidth},moveP.speed,function(){
                        ul.children("li:first").insertAfter(ul.children("li:last"));
                        ul.css({"left":0});

                    });
                }else if(moveP.direction == "top"||moveP.direction == "bottom"){
                    ul.animate({top:-outerHeight},moveP.speed,function(){
                        ul.children("li:first").insertAfter(ul.children("li:last"));
                        ul.css({"top":0});
                    });
                }else if(moveP.direction == "fade"){
                    numLen ++;
                    if(numLen<liLen){
                        li.eq(numLen).fadeIn(moveP.speed).siblings().fadeOut(moveP.speed);
                    }else{
                        li.eq(0).fadeIn(moveP.speed).siblings().fadeOut(moveP.speed);
                        numLen = 0;
                    };
                };
            };

            function carRB(){//right+bottom自动间隔滚动+rightBtn事件函数
                if(moveP.direction == "left"||moveP.direction == "right"){
                    numLen--;
                    if(numLen>-1){
                        $(""+moveP.btnBox+" span").eq(numLen).addClass("cur").siblings().removeClass("cur");
                    }else{
                        numLen = liLen-1;
                        $(""+moveP.btnBox+" span").eq(numLen).addClass("cur").siblings().removeClass("cur");
                    }
                    ul.css({"left":-outerWidth});
                    ul.children("li:last").insertBefore(ul.children("li:first"));
                    ul.animate({left:0},moveP.speed);
                }else if(moveP.direction == "top"||moveP.direction == "bottom"){
                    ul.css({"top":-outerHeight});
                    ul.children("li:last").insertBefore(ul.children("li:first"));
                    ul.animate({top:0},moveP.speed);
                }else if(moveP.direction == "fade"){
                    numLen --;
                    if(numLen>-1){
                        li.eq(numLen).fadeIn(moveP.speed).siblings().fadeOut(moveP.speed);
                    }else{
                        li.eq(liLen-1).fadeIn(moveP.speed).siblings().fadeOut(moveP.speed);
                        numLen = liLen-1;

                    };
                };
            };

            function carRoll(){//连续滚动事件函数
                if(moveP.direction == "left"){
                    numLen++;
                    ul.css("left",-numLen);
                    if(numLen == outerWidth){
                        numLen=0;
                        ul.children("li:first").insertAfter(ul.children("li:last"));
                        ul.css({"left":0});
                    }
                }
                if(moveP.direction == "top"){
                    numLen++;
                    ul.css("top",-numLen);
                    if(numLen==outerHeight){
                        numLen=0;
                        ul.children("li:first").insertAfter(ul.children("li:last"));
                        ul.css({"top":0});
                    }
                }
                if(moveP.direction == "right"){
                    if(numLen == 0){
                        ul.children("li:last").insertBefore(ul.children("li:first"));
                        ul.css({"left":-outerWidth});
                        numLen = outerWidth;
                    }else{
                        numLen--;
                        ul.css("left",-numLen);
                    }
                }
                if(moveP.direction == "bottom"){
                    if(numLen == 0){
                        ul.children("li:last").insertBefore(ul.children("li:first"));
                        ul.css({"top":-outerHeight});
                        numLen = outerHeight;
                    }else{
                        numLen--;
                        ul.css("top",-numLen);
                    }
                }
            };



            if(moveP.carMethod){//是否自动滚动
                var car = '';
                var timer = '';
                if(moveP.contRolling){//是否连续滚动
                    $(""+moveP.leftBtn+"").hide();
                    $(""+moveP.rightBtn+"").hide();
                    $(""+moveP.btnBox+"").hide();
                    car = carRoll;

                }else{
                    if(moveP.direction == "left"||moveP.direction == "top"||moveP.direction == "fade"){
                        car = carLT;
                    }else if(moveP.direction == "right"||moveP.direction == "bottom"){
                        car = carRB;
                    };
                }
                timer = setInterval(car,moveP.Interval);

                li.hover(function(){
                    clearInterval(timer);
                },function(){
                    if(liLen>moveP.showList){
                        timer = setInterval(car,moveP.Interval);
                    }
                });

                $(""+moveP.leftBtn+"").hover(function(){
                    clearInterval(timer);
                },function(){
                    timer = setInterval(car,moveP.Interval);
                })
                $(""+moveP.rightBtn+"").hover(function(){
                    clearInterval(timer);
                },function(){
                    timer = setInterval(car,moveP.Interval);
                })

            }else{};


            if(liLen<=moveP.showList){
                $(""+moveP.leftBtn+"").hide();
                $(""+moveP.rightBtn+"").hide();
                $(""+moveP.btnBox+"").hide();
                clearInterval(timer);
            }



            $(""+moveP.leftBtn+"").click(function(){
                if(new Date - new_time>500){
                    new_time = new Date;
                    carLT();
                };
            });
            $(""+moveP.rightBtn+"").click(function(){
                if(new Date - new_time>500){
                    new_time = new Date;
                    carRB();
                }else{};
            });


        }
    });
}));