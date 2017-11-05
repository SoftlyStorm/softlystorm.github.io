 $('.sl').slick({
     autoplay: true,
     autoplaySpeed: 3000,
     dots: true,
     arrows: true,
     pauseOnHover: true,
     responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    }
  ]
 });


$(function(){
    $('#nav menu_li').hover(function(){
        $(this).children('menu_sub_ul').stop(false, true).fadeIn(300);         
    },function(){
        $(this).children('menu_sub_ul').stop(false, true).fadeOut(300);
    });
});

