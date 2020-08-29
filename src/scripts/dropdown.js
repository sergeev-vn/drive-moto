$('.filter-dropdown__title').on('click', function() {
  $(this).toggleClass('filter-dropdown__title_active');
  $(this).next().slideToggle('fast');
})

$('.footer__top-title').on('click', function() {
  if (window.innerWidth <= '320') {
    $(this).next().slideToggle('fast');
    $(this).toggleClass('footer__top-title_active');
  }
})
