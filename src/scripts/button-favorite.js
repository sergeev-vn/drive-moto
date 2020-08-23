$('.button-favorite').on('click', function(e) {
  e.preventDefault();
  $(this).children('.button-favorite__icon').toggleClass('button-favorite__icon_active');
});
