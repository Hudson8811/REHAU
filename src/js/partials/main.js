$(document).ready(function () {
   // $("input[name='phone']").mask(" +7 (999) 999-99-99");
   $('.hero-slider').slick({
      draggable: false,
      arrows:true,
      dots: true,
      prevArrow:'<button class="hero-slider__prev"><img src="img/hero/slider-arrow.svg"></button>',
      nextArrow:'<button class="hero-slider__next"><img src="img/hero/slider-arrow.svg"></button>',
      dotsClass: 'hero-slider__pagination',
      customPaging : function(slider, i) {
         return '<div class="hero-slider__pagin"></div>';
     },
   });

   try {
      $('.hero-form__select').msDropDown();
  } catch (e) {
      alert(e.message);
  }
});

