$(document).ready(function () {
   $('.hero-slider').slick({
      draggable: false,
      arrows:true,
      dots: true,
      adaptiveHeight: true,
      prevArrow:'<button class="hero-slider__prev"><img src="img/hero/slider-arrow.svg"></button>',
      nextArrow:'<button class="hero-slider__next"><img src="img/hero/slider-arrow.svg"></button>',
      dotsClass: 'hero-slider__pagination',
      customPaging : function(slider, i) {
         return '<div class="hero-slider__pagin"></div>'
     },
   });

   try {
      $('.hero-form__select').msDropDown()
  } catch (e) {
      console.log(e.message)
  }
  const videos = $('.video__item-video iframe')
  const videoImg = $('.video__item-img')
  const videoInfo = $('.video__item-wrap')
  const videoBtn = $('.video__button')

  $(videoBtn).each(function(idx, item) {
    $(item).on('click', () => {
      console.log(idx);
      const src = $(videos).eq(idx).attr('src')
      $(videoBtn).eq(idx).css('display', 'none')
      $(videoInfo).eq(idx).css('display', 'none')
      $(videoImg).eq(idx).css('display', 'none')
      $(videos).eq(idx).attr('src', src + '?autoplay=1');
    })
  })
  $('.works__item-link').fancybox()
  let videoSlider
  $('.video__slider').slick({
    draggable: false,
    arrows:true,
    dots: true,
    infinite: false,
    adaptiveHeight: true,
    prevArrow:'<button class="video-slider__prev"><img src="img/hero/slider-arrow.svg"></button>',
    nextArrow:'<button class="video-slider__next"><img src="img/hero/slider-arrow.svg"></button>',
    dotsClass: 'video-slider__pagination',
    customPaging : function(slider, i) {
      videoSlider = slider
      return `<span class="video-slider__dot">${(i + 1)}</span>/${slider.slideCount}`;
    }
 });
 const videoDot = $('.video-slider__dot').eq(0)
 let videoDotCount = parseInt($(videoDot).text())
 $('.video-slider__next').on('click', () => {
  if (videoDotCount !== videoSlider.slideCount) {
    $(videoDot).text(++videoDotCount)
  } else {
    return
  }
 })

 $('.video-slider__prev').on('click', () => {
 if (videoDotCount !== 1) {
   $(videoDot).text(--videoDotCount)
 } else {
   return
 }
})

  if (document.querySelector('.js-form')) {
      new JustValidate('.js-form', {
          rules: {
            checkbox: {
              required: true
            },
            email: {
              required: true,
              email: true
            },
            name: {
              required: true,
              minLength: 2
            },
            phone:{
              required: true,
              phone: '123-123-123'
            },
            text:{
              required: true,

            },
          messages: {
            name: {
              minLength: 'My custom message about only minLength rule'
            },
            email: 'My custom message about error (one error message for all rules)'
          },  
          },
      })
  }


});

