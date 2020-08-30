
$('.products-slider__list').each(function() {
  $(this).slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: $(this).closest('.products-slider').find('.arrow_next'),
    prevArrow:  $(this).closest('.products-slider').find('.arrow_prev'),
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          arrows: false,
          dots: true,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1176,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 888,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  });
});