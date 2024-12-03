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

  // $('.menu-drop-one').on('click', (e) => {
  //   if (!$('.menu-drop-one').hasClass('active')) {
  //     $('.menu-drop-one').addClass('active');
  //   } else {
  //     $('.menu-drop-one').removeClass('active');
  //   }
  // })

  // $('.menu-drop-two').on('click', (e) => {
  //   if (!$('.menu-drop-two').hasClass('active')) {
  //     $('.menu-drop-two').addClass('active');
  //   } else {
  //     $('.menu-drop-two').removeClass('active');
  //   }
  // })

    
});
