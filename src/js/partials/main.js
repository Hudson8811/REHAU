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
 
  $('[data-fancybox="gallery]').fancybox()

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
  
  if ($('.video__wrapper')) {
    var $msnry;
    const videoWrapper = document.querySelector('.video__wrapper');
    const videoContainer = document.querySelectorAll('.video-container');

    const createMasonry = () => {
      videoContainer.forEach(item => item.style.cssText = 'position: absolute;');

      $msnry = $('.video__wrapper').masonry({
        itemSelector: '.video-container',
        columnWidth: 1,
        percentPosition: true
      });

      videoWrapper.classList.add('masonry--active');
      
    }

    const createSlider = () => {
      sliderWrap = $('.video__wrapper').slick({
        draggable: false,
        arrows:true,
        dots: true,
        infinite: false,
        adaptiveHeight: true,
        prevArrow:'<button class="video-slider__prev"><img src="img/hero/slider-arrow.svg"></button>',
        nextArrow:'<button class="video-slider__next"><img src="img/hero/slider-arrow.svg"></button>',
        dotsClass: 'video-slider__pagination',
        customPaging : function(slider, i) {
          videoSlider = slider;
          return `<span class="video-slider__dot">${(i + 1)}</span>/${slider.slideCount}`;
        }
      });

      $('.video__wrapper').addClass('slider--active');

      const videoDot = $('.video-slider__dot').eq(0)

      $('.video__wrapper').on('afterChange', function() {
        $(videoDot).text(videoSlider.currentSlide + 1);
      });
    }

     const sliderAdaptive = (media) => {

      if (media.matches) {
        createSlider();

     } else {
       if (document.querySelector('.video__wrapper').classList.contains('slider--active')) {
         $('.video__wrapper').slick('unslick');
         $('.video__wrapper').removeClass('slider--active');
       }
     }

       if (!media.matches && !videoWrapper.classList.contains('masonry--active')) {
          createMasonry();

       } else if (media.matches && videoWrapper.classList.contains('masonry--active')) {
          $msnry.masonry('destroy');
          videoWrapper.classList.remove('masonry--active');
       }

     }
     const videos = $('.video__item-video iframe')
     const videoImg = $('.video__item-img')
     const videoInfo = $('.video__item-wrap')
     const videoBtn = $('.video__button')
   
     $(videoBtn).each(function(idx, item) {
       $(item).on('click', () => {
         const src = $(videos).eq(idx).attr('src')
         $(videoBtn).eq(idx).css('display', 'none')
         $(videoInfo).eq(idx).css('display', 'none')
         $(videoImg).eq(idx).css('display', 'none')
         videoStart()
       })
     })
     //
     function videoStart() {

      var youtube = document.querySelectorAll( ".video__item-video" );
      
      for (var i = 0; i < youtube.length; i++) {
        
        var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
        

          var iframe = document.createElement( "iframe" );

              iframe.setAttribute( "frameborder", "0" );
              iframe.setAttribute( "allowfullscreen", "" );
              iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ youtube[i].dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

              youtube[i].innerHTML = "";
              youtube[i].appendChild( iframe );
      };
      
    }
    //
     const checkWidth = () => {
      const media = window.matchMedia("(max-width: 767px)");
  
      sliderAdaptive(media);
  
      media.addEventListener('change', sliderAdaptive);
    };
  
    checkWidth();
 }

});

