$(function () {
  $('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1106,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.btn__menu').on('click', function () {
    $('.menu__list').slideToggle();
  });
});

  window.addEventListener('resize',function(){
  if ($(window).width() < 580) {
    var $footer__menu1 = $('#footer__menu1');
    var $footer__menu2 = $('#footer__menu2');

    var $menu1 = $('#list__menu1');
    var $menu2 = $('#list__menu2');

    $footer__menu1.click(function () {

      if ($menu1.hasClass('active')) {

        $menu1.slideDown('normal').removeClass('active');
      }
      else {

        $menu1.slideUp('normal').addClass('active');
      }
    });

    $footer__menu2.click(function () {

      if ($menu2.hasClass('active')) {

        $menu2.slideDown('normal').removeClass('active');
      }
      else {

        $menu2.slideUp('normal').addClass('active');
      }
    });
  }else if ($(window).width() > 581){
    $menu1.addClass('active');
    $menu2.addClass('active');
  }
});