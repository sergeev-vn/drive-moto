$('.filter-dropdown__title').on('click', function() {
  $(this).toggleClass('filter-dropdown__title_active');
  $(this).next().slideToggle('fast');
})