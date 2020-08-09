
$('.products-slider__list').each(function() {
  $(this).slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: $(this).closest('.products-slider').find('.arrow_next'),
    prevArrow:  $(this).closest('.products-slider').find('.arrow_prev'),
  });
});