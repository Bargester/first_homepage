$(document).ready(function() {
    var $btn = $('.intro_s__arrow');
    $btn.on('click', function(){
        $('html,body').animate({
            scrollTop: $('.intro_s').outerHeight() + 140 - $('.header_s').outerHeight()
        }, 1000)
    });

});

function stickyHeader(){
    var $header = $('.header_s');
    if( $(window).scrollTop() >=500 ){
        $header.addClass('header_s--a');
    }else{
        $header.removeClass('header_s--a');
    }
}

$(window).on('scroll', function(){
    stickyHeader();
})