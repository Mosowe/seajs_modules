
seajs.use(['jquery','modules/dialog/sea_dialog','modules/validate/sea_validate', 'modules/dialogPic/sea_dialogPic','modules/tab/sea_tab',
   'modules/drag/sea_drag','modules/rollingPic_pile/sea_rollingPic_pile','modules/rollingPic_tile/sea_rollingPic_tile'],
    function($,dialog,validate,dialogPic){

    $(function(){
        $('.main-wrapper').height(document.documentElement.clientHeight);

    })



        /**
         * dialog对话框
         */
        //按钮1的对话框，click事件触发
        var windows_alert = dialog.gethtml($('.window_alert'));
        $('.btn1').click(function () {
            new dialog.open().init({
                title:'警告',
                width:400,
                height:300,
                html:windows_alert,
                buttons:[
                    {
                        name:'确定',
                        className:'dialog-close'
                    }
                ]
            })
            //写在内部的按钮1对话框内的click事件
            $('.spanc1').click(function(){ // 可以实现
                alert('写在按钮1click事件内部，通过jq的click事件实现！')
            })
        })
        //按钮1对话框的onclick事件
        spanclick = function () {
            alert('写在按钮1click事件外部，通过标签属性onclick实现！')
        }
        //写在外部的按钮1对话框的click事件
        $('.spanc2').click(function(){ // 实现不了
            alert('写在按钮1click事件外部，通过jq的click事件实现！')
        })
        //按钮2的对话框，onclick事件触发
        var windows_info = dialog.gethtml($('.window_info'));
        btn2show = function(){
            new dialog.open().init({
                title:'信息',
                width:500,
                height:300,
                html:windows_info,
                buttons:[
                    {
                        name:'取消',
                        className:'false dialog-close'
                    },
                    {
                        name:'关闭不刷新页面',
                        className:'true',
                        method:'getInfo(false)'
                    },
                    {
                        name:'关闭刷新页面',
                        className:'true',
                        method:'getInfo(true)'
                    }
                ]
            })

        }
        //按钮2对话框内的按钮onclick事件
        getInfo = function(bool){
            var name = $('.dlname').val();
            var phone = $('.dlphone').val();
            if(name == '' || phone == ''){
                new dialog.open().init({
                    title:'警告',
                    width:300,
                    height:200,
                    html:'<p>姓名或电话不能为空！</p>',
                    buttons:[
                        {
                            name:'确定',
                            className:'dialog-close'
                        }
                    ]
                })
            } else {
                console.log(name,phone);
                dialog.close(bool);
            }
        }


        /**
         * 表单验证
         */

        // 方式一：validate.re(el,method)
        // $('.re-email').click(function(){
        //     alert(validate.re($('.email'),'email'))
        // });
        //方式二:validate.method(el)
        $('.re-email').click(function(){
            alert(validate.email($('.email')))
        });
        $('.re-phone').click(function(){
            alert(validate.phone($('.phone')))
        });
        $('.re-web').click(function(){
            alert(validate.web($('.web')))
        });
        $('.re-idcard').click(function(){
            alert(validate.idcard($('.idcard')))
        });
        $('.re-qqnum').click(function(){
            alert(validate.qq($('.qqnum')))
        });
        $('.re-zip').click(function(){
            alert(validate.zip($('.zip')))
        });
        $('.re-chinese').click(function(){
            alert(validate.chinese($('.chinese')))
        });

        /**
         * tab切换
         */
        $('.tab-listbox').tab({
            btnlist:".tab-menu-item",
            tablist:".tab-item",
            mouseEvent:"click",
            method:"fade",
            automatic:true,
            automaticTime:2000,
            speed:500
        });

        /**
         * dialogPic,图片弹框
         */
        $('.dialogpic-item').click(function(){
            new dialogPic.open().init({
                title:'p',
                content:'.text',
                list:$('.dialogpic-item'),
                active:$(this).index(),
                length:$('.dialogpic-item').length,
                tklistboxShow:true
            })
        });

        /**
         * 拖拽drag
         */
        var dragbox = document.getElementById('drag-box');
        var dragmove = document.getElementById('drag-move');
        drag(dragmove,dragbox);

        /**
         * 轮播图-堆叠 rollingPic_pile
         */
        $(".pilebox").rollingPic_pile({
            leftBtn:".pile-btn01",
            rightBtn:".pile-btn02",
            btnBox:".pile-btn",
            element:".pile-item",
            title:"span",
            showNumber:5,
            direction:"top",
            percent:60
        })
        /**
         * 轮播图-平铺 rollingPic-tile
         */
        $(".tile").rollingPic_tile({
            leftBtn:".tile-btn02",
            rightBtn:".tile-btn01",
            direction:"left",
            carMethod:true,
            btnBox:".tile-btn",
            showList:2
        })




    }// function
); // use
