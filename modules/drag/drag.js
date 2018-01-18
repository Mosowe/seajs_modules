// JavaScript Document
function drag(obj,box){
    obj.onmousedown = function(ev){
        var ev = ev || event;
        var dragl = ev.clientX - this.offsetLeft;
        var dragt = ev.clientY - this.offsetTop;

        if(obj.setCapture){//设置全局捕获==>取消浏览器默认的文字拖拽（ie8及以下）
            obj.setCapture();
        }

        document.onmousemove = function(ev){
            var ev =ev || event;
            var leftArea = ev.clientX - dragl;
            var topArea = ev.clientY - dragt;
            var w=null,h=null;
            if(box == document){
                w = document.documentElement.clientWidth
                h = document.documentElement.clientHeight
            }else{
                w = box.scrollWidth;
                h = box.scrollHeight;
            }

            if(leftArea < 20){
                leftArea = 0;
            }else if(leftArea>w-obj.offsetWidth-20){
                leftArea = w-obj.offsetWidth;
            }
            if(topArea < 20){
                topArea = 0;
            }else if(topArea>h-obj.offsetHeight-20){
                topArea = h -obj.offsetHeight;
            }

            obj.style.left =  leftArea + 'px';
            obj.style.top =  topArea + 'px';
        }
        document.onmouseup = function(){
            document.onmousemove =null;
            document.onmouseup = null;
            if(obj.releaseCapture){//取消全局捕获
                obj.releaseCapture();
            }
        }
        return false;//取消浏览器默认的文字拖拽
    }
}
