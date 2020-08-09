$('.tabs__tablist-link').on('click', function(e) {
  e.preventDefault();

  $(this).closest('.tabs').find('.tabs__tablist-item').removeClass('tabs__tablist-item_active');
  $(this).closest('.tabs').find('.tabs__content-item').removeClass('tabs__content-item_active');

  $(this).parent('li').addClass('tabs__tablist-item_active');
  $($(this).attr('href')).addClass('tabs__content-item_active');

  $('.products-slider__list').slick('setPosition');
})


// vanila JS
// $('.search-tabs__tabs').on('click', function(e) {
//   e.preventDefault();
//   if(!(e.target.classList.contains('search-tabs__tabs-link'))) return;
  
//   addActiveClass()

//   function addActiveClass() {
//     for (let i = 0; i < $('.search-tabs__tabs-link').length; i++) {
//       if (e.target === $('.search-tabs__tabs-link')[i]) {
//         removeClasses();
//         $('.search-tabs__tabs-item')[i].classList.add('search-tabs__tabs-item_active');
//         hideContentTabs();
//         showContentTabs(i)
//       }
//     }
//   }

//   function removeClasses() {
//     for (let i = 0; i < $('.search-tabs__tabs-item').length; i++) {
//       $('.search-tabs__tabs-item')[i].classList.remove('search-tabs__tabs-item_active')
//     }
//   }
// })

// function hideContentTabs() {
//   for (let i = 0; i < $('.search-tabs__content-item').length; i++) {
//     $('.search-tabs__content-item')[i].style.display = 'none';
//   }
// }

// showContentTabs(1)
// function showContentTabs(num) {
//   hideContentTabs();
//   $('.search-tabs__content-item')[num].style.display = '';
// }