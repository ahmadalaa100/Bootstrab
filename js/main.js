$(function (){
    var windoHight=$(window).innerHeight(),
        navHight=$(".navbar").innerHeight();

    $('.slider, .carousel-item').height(windoHight-navHight);


    $('.featured-work ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') == 'all'){
            $('.shuffle-imgs .col-md').css('opacity',1);

        }else{
            $('.shuffle-imgs .col-md').css('opacity',0.09);
            $($(this).data('class')).parent().css('opacity',1);
        }
    })
})