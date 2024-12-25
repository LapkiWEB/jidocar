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
        slidesToShow: 1,
        arrows: false,
      }
    }
    ]
  });


  $('.product__item').each((index, wrapper) => {
    const navSlider = $(wrapper).find('.slider-nav');
    const forSlider = $(wrapper).find('.slider-for');
    $(forSlider).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: navSlider
    });
    $(navSlider).slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow: $(wrapper).find('.slick-prev'),
      nextArrow: $(wrapper).find('.slick-next'),
      asNavFor: forSlider,
      dots: true,
      arrows: true,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: '0px',
      responsive: [{
        breakpoint: 1550,
        settings: {
          slidesToShow: 4,
          dots: true,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          dots: true,
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 3,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 2,
          dots: true,
          centerMode: false,
          arrows: false,
        }
      },
      ]
    });
  })


    
});



const modalTrigger = document.querySelectorAll('[data-modal]'),
  modal = document.querySelector('.modal'),
  modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  });
});

function clossModel() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', clossModel);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    clossModel();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === "Escape" && modal.classList.contains('show')) {
    clossModel();
  }
});

$('.tab').on('click', function (e) {
  e.preventDefault();

  $($(this).siblings()).removeClass('tab--active');
  $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

  $(this).addClass('tab--active');
  $($(this).attr('href')).addClass('tabs-content--active');

  // $('.product-slider').slick('setPosition');

});

$('.questiontab').on('click', function (e) {
  e.preventDefault();

  $($(this).siblings()).removeClass('questiontab--active');
  $($(this).closest('.questiontabs-wrapper').siblings().find('div')).removeClass('questiontabs-content--active');

  $(this).addClass('questiontab--active');
  $($(this).attr('href')).addClass('questiontabs-content--active');

  // $('.product-slider').slick('setPosition');

});


























