$(document).ready(function () {
  maskPhone('.info-form__phone');
  maskPhone('.hero-form__phone');
  maskPhone('.order-popup-form__phone');
  
  $('.hero-slider').slick({
      draggable: false,
      arrows:true,
      dots: true,
      adaptiveHeight: true,
      prevArrow:'.hero-slider__prev',
      nextArrow:'.hero-slider__next',
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
 
  $('[data-fancybox=gallery]').fancybox()

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
              minLength: 17,
            },
            text:{
              required: true,

            },
            select: {
              required: true
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
  if (document.querySelector('.js-form-info')) {
    new JustValidate('.js-form-info', {
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
            minLength: 17,
          },
          text:{
            required: true,

          },
          select: {
            required: true
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
  if (document.querySelector('.js-form-order-popup')) {
    new JustValidate('.js-form-order-popup', {
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
            minLength: 17,
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
        prevArrow:'.video-slider__prev',
        nextArrow:'.video-slider__next',
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
  $('.info-form__btn').on('click', function(){
    if(!$('.info-form__checkbox').prop('checked')){
      $('.info-form__label').addClass('error')
    } else {
      $('.info-form__label').removeClass('error')
    }
 })
  $('.order-popup-form__btn').on('click', function(){
    if(!$('.order-popup-form__checkbox').prop('checked')){
      $('.order-popup-form__label').addClass('error')
    } else {
      $('.order-popup-form__label').removeClass('error')
    }
 })
 //
 $('.hero-form__btn').on('click', function(){
  if(!$('.hero-form__checkbox').prop('checked')){
    $('.hero-form__label').addClass('error')
  } else {
    $('.hero-form__label').removeClass('error')
  }
  if ($('.hero-form__select').val() === null) {
    $('.dd').addClass('error')
  } else {
    $('.dd').removeClass('error').addClass('complete')
  }
})
//
$('.hero-form__select').on('change', function(){
  if($('.hero-form__select').val() === null){
    $('.info-form__label').removeClass('complete').addClass('error')
  } else {
    $('.info-form__label').addClass('complete').removeClass('error')
  }})
//
 $('.info-form__checkbox').on('change', function(){
  if($('.info-form__checkbox').prop('checked')){
    $('.info-form__label').removeClass('error').addClass('complete')
  } else {
    $('.info-form__label').addClass('error').removeClass('complete')
  }})

 $('.order-popup-form__checkbox').on('change', function(){
  if($('.order-popup-form__checkbox').prop('checked')){
    $('.order-popup-form__label').removeClass('error').addClass('complete')
  } else {
    $('.order-popup-form__label').addClass('error').removeClass('complete')
  }})
  //
  $('.hero-form__checkbox').on('change', function(){
    if($('.hero-form__checkbox').prop('checked')){
      $('.hero-form__label').removeClass('error').addClass('complete')
    } else {
      $('.hero-form__label').addClass('error').removeClass('complete')
    }
  })
  //
  $('input').on('input', function () {
    if($(this).hasClass('js-validate-error-field')){
      $(this).addClass('iscomplete')
    } else {
      $(this).removeClass('iscomplete')
    }
  });
  $('textarea').on('input', function () {
    if($(this).hasClass('js-validate-error-field')){
      $(this).addClass('iscomplete')
    } else {
      $(this).removeClass('iscomplete')
    }
  });

  const orderPopup = $('.order-popup__overlay');

  $('button[data-popup=order]').each(function() {
    $('button[data-popup=order] ').on('click', () => {

      if (!orderPopup.hasClass('active')) {
        orderPopup.addClass('active');
      }
    });
  });

  $(orderPopup).on('click', function(event) {

    const target = event.target;

    if (orderPopup.hasClass('active') && $('.order-popup__overlay').is(target) || target.closest('.order-popup__close')) {
      orderPopup.removeClass('active');
    }
  })
});

