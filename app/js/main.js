// WOW JS Конфликтует с оверфлоу хайден на бади или секций

$(window).on('scroll', function () {
  let header = document.querySelector('.header-down');
  if ($(this).scrollTop() >= 200) {
    header.classList.add('header__fixed');
  }
  else {
    header.classList.remove('header__fixed');
  }
});


$(function () {

  $('.menu__btn').on('click', (function () {
    if (!$('.nav').hasClass('active')) {
      $('.nav').addClass('active');
      $('.menu__btn').addClass('active');
      $('body').addClass('menu-opened');
      $('.menu-drop').on('click', (e) => {
        e.target.classList.toggle('active');
      })
    } else {
      $('.nav').removeClass('active');
      $('.menu__btn').removeClass('active');
      $('body').removeClass('menu-opened');
      $('.menu-drop').on('click', (e) => {
        e.target.classList.toggle('active');
      })
    }

   

  }));

  $('.global-reviews__inner').slick({
    prevArrow: $('.global-reviews__wrapper .slick-prev'),
    nextArrow: $('.global-reviews__wrapper .slick-next'),
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    // fade: true,
    dots: true,
    arrows: true,
    responsive: [{
      breakpoint: 749,
      settings: {
     
        slidesToShow: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 701,
      settings: {
        // dotsClass: 'slick-dots',
        slidesToShow: 1,
        arrows: false,
      }
    }
    ]
  });

    
});



