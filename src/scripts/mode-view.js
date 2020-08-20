$('.mode-view__btn').on('click', function() {
  $('.mode-view__btn').removeClass('mode-view__btn_active');
  $(this).addClass('mode-view__btn_active');
  
  if ($('.mode-view__icon-list').parent().hasClass('mode-view__btn_active')) {
    $('.catalog-product').addClass('catalog-product_list-active');
  } else {
    $('.catalog-product').removeClass('catalog-product_list-active');
  }
})