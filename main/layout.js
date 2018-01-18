// document.getElementById('iframe').style.height = (document.documentElement.clientHeight-71) + 'px';
// var textWord = document.getElementsByClassName('textWord');
// for (var i = 0; i < textWord.length; i++) {
//     autoTextarea(textWord[i])
// }
// autoTextarea($('textWord')[0]);


$(function(){

    $('#iframe').height(document.documentElement.clientHeight-71);
    $('#main-wrapper').height(document.documentElement.clientHeight);
    $('.top-menu .top-nav li').hover(function () {
        $(this).find('.second-nav').stop().slideToggle();

    }).click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    })
})




