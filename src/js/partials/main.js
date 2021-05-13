$(document).ready(function () {
   // $("input[name='phone']").mask(" +7 (999) 999-99-99");
   $('.hero-slider').slick({
      draggable: false,
      arrows:true,
      dots: true,
      prevArrow:'<img class="hero-slider__prev" src="img/hero/arrow_left.png">',
      nextArrow:'<img class="hero-slider__next" src="img/hero/arrow_right.png">',
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

