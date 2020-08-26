$('.humburger-button').on('click', function() {
  $('.menu-mob__list').toggleClass('menu-mob__list_opened')
  $('.menu-mob__line').toggleClass('menu-mob__line_hide')
  $(this).toggleClass('active')
});