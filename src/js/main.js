/**
 * Created by 93203 on 2016/7/17.
 */
$(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        // nav: true,
        // navText: ['<','>'],
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

    //响应式图片脚本
    function makeImageResponsive() {
        var win_width = $(window).width();
        var img_width = $('.ad .item img');
        // var i = 0;
        img_width.each(function () {
            if (win_width <= 480){
                $(this).attr('src','img/ad001.png')
            }else if(win_width <= 800){
                $(this).attr('src','img/ad001-m.png')
            }else{
                $(this).attr('src','img/ad001-l.png')
            }

        })
    }
    $(window).on('resize load', makeImageResponsive);
});
