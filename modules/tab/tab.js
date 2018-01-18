(function($){
    $.fn.extend({
        tab : function(option){
            var Tabset = $.extend({
                btnlist:"",
                tablist:"",
                mouseEvent:"hover",
                method:"left",
                automatic:false,
                automaticTime:3000,
                speed:1000
            },option);//TapInte
            var _btn = $(""+Tabset.btnlist+"");
            var _tablist = $(""+Tabset.tablist+"");
            var _tablistParent = $(""+Tabset.tablist+"").parent();
            var len = _tablist.length;
            var This = 0;

            var interval_w = this.width();
            var interval_h = this.height();
            var len = _tablist.length;

            _tablist.width(interval_w);
            _tablist.height(interval_h);

            if(Tabset.mouseEvent == "hover"){
                _btn.hover(function(){
                    This = $(this).index();
                    method();
                })
            }

            if(Tabset.mouseEvent == "click"){
                _btn.click(function(){
                    This = $(this).index();
                    method();
                })
            }

//自动滚动
            function moveSelf(){

                if(This<len-1){
                    This++;
                }else{
                    This = 0;
                }
                method();
            }

//判断是否自动滚动及鼠标移上去禁止滚动
            if(Tabset.automatic){
                var timer = setInterval(moveSelf,Tabset.automaticTime);
                this.hover(function(){
                    clearInterval(timer);
                },function(){
                    timer = setInterval(moveSelf,Tabset.automaticTime);
                })
                _btn.hover(function(){
                    clearInterval(timer);
                },function(){
                    timer = setInterval(moveSelf,Tabset.automaticTime);
                })

            }





            function method(){
                _btn.eq(This).addClass("active").siblings().removeClass("active");
                if(Tabset.method == "left"){
                    _tablistParent.width(interval_w*len);
                    _tablistParent.stop().animate({left:-interval_w*This},Tabset.speed)
                }
                if(Tabset.method == "top"){
                    _tablistParent.height(interval_h*len);
                    _tablistParent.stop().animate({top:-interval_h*This},Tabset.speed)
                }
                if(Tabset.method == "fade"){
                    _tablist.eq(0).fadeIn(Tabset.speed).siblings().hide();
                    _tablist.eq(This).fadeIn(Tabset.speed).siblings().hide();
                }

            }




        }//tap:function()
    });//$.fn.extend
}(jQuery));



