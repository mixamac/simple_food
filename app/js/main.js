$(function () {

  $('.burger-btn').on('click', function () {
    $('.overlay').toggle();
    $('.menu').addClass('active');
    $('body').addClass('no-scroll');
  });

  $('.overlay').on('click', function () {
    $('.overlay').hide();
    $('.menu').removeClass('active');
    $('body').removeClass('no-scroll');
  });

  $('.remove-scroll').on('click', function () {
    $('.overlay').hide();
    $('.menu').removeClass('active');
    $('body').removeClass('no-scroll');
  });

  var header = $('.header');

  $(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition > 5) {
      header.addClass('scroll');
    } else {
      header.removeClass('scroll');
    }
  });

  $('.select-style').styler();

  var priceSlider = $('.price-filter__input').ionRangeSlider({
    type: 'double',
    keyboard: true,
    onStart: function (data) {
      $('#price-from').val(data.from);
      $('#price-to').val(data.to);
    },
    onChange: function (data) {
      $('#price-from').val(data.from);
      $('#price-to').val(data.to);
    },
  }).data("ionRangeSlider");

  $('#price-from, #price-to').on('input', function () {
    var from = $('#price-from').val();
    var to = $('#price-to').val();

    priceSlider.update({
      from: from,
      to: to
    });
  });

  $('.reviews__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg class="reviews__svg" width="11" height="19"><use href="./images/symbol-defs.svg#icon-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="reviews__svg" width="11" height="19"><use href="./images/symbol-defs.svg#icon-right"></use></svg></button>',
    dots: true,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: false,
        }
      },
    ]
  });

  var mixer = mixitup('.popular__list');
});

$(function () {
  $('.top-filter__btn').on('click', function () {
    $('.filter').addClass('active');
    $('.overlay').toggle();
    $('body').addClass('no-scroll');
  });

  $('.filter__btn').on('click', function () {
    $('.overlay').hide();
    $('.filter').removeClass('active');
    $('body').removeClass('no-scroll');
  });

  $('.overlay').on('click', function () {
    $('.overlay').hide();
    $('.filter').removeClass('active');
    $('body').removeClass('no-scroll');
  });
});

$(function () {

  if (window.matchMedia("(min-width: 1199px)").matches) {
    $('.restorant__list').slick('unslick');

  } else {
    $('.restorant__list').slick({
      rows: 1,
      slidesToScroll: 1,
      slidesPerRow: 3,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            rows: 1,
            slidesToScroll: 1,
            slidesPerRow: 2,
            dots: true,
          }
        },
        {
          breakpoint: 675,
          settings: {
            rows: 1,
            slidesToScroll: 1,
            slidesPerRow: 1,
            dots: true,
          }
        },
      ]
    });
  }
});

$(function () {

  if (window.matchMedia("(min-width: 1199px)").matches) {
    $('.promo__list').slick('unslick');

  } else {
    $('.promo__list').slick({
      rows: 1,
      slidesPerRow: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 1080,
          settings: {
            rows: 1,
            slidesToScroll: 1,
            slidesPerRow: 2,
            dots: true,
          }
        },
        {
          breakpoint: 675,
          settings: {
            rows: 1,
            slidesToScroll: 1,
            slidesPerRow: 1,
            dots: true,
          }
        },
      ]
    });
  }
});

$(function () {

  $('.product-slider').slick({
    asNavFor: '.modal-slider__list',
    prevArrow: '<button type="button" class="slick-prev"><svg class="product-slider__svg" width="19" height="32"><use href="./images/symbol-defs.svg#icon-chevron-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="product-slider__svg" width="19" height="32"><use href="./images/symbol-defs.svg#icon-chevron-right"></use></svg></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: false,
          arrows: false,
        }
      },
    ]
  });

  $('.modal-slider__list').slick({
    asNavFor: '.product-slider',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="modal-slider__svg" width="19" height="32"><use href="./images/symbol-defs.svg#icon-chevron-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="modal-slider__svg" width="19" height="32"><use href="./images/symbol-defs.svg#icon-chevron-right"></use></svg></button>',
  });

});

$(function () {

  if ($(window).width() > 991) {
    $('.product-slider__popup').on('click', function () {
      $('.modal-slider').addClass('active');
      $('.overlay').toggle();
      $('body').addClass('no-scroll');
    });

    $('.modal-slider__btn').on('click', function () {
      $('.overlay').hide();
      $('.modal-slider').removeClass('active');
      $('body').removeClass('no-scroll');
    });

    $('.overlay').on('click', function () {
      $('.overlay').hide();
      $('.modal-slider').removeClass('active');
      $('body').removeClass('no-scroll');
    });
  }
});

$(function () {
  $('.star').rateYo({
    starWidth: "16px",
    normalFill: "rgba(193, 193, 193, 0.3)",
    ratedFill: "#ffb800",
    readOnly: true,
    spacing: '7px',
    starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3197_367)"><path d="M0.0229731 6.16432C0.0780973 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141566 6.64478C0.0138168 6.52028 -0.0322151 6.334 0.0229731 6.16432Z"/></g><defs><clipPath id="clip0_3197_367"><rect width="16" height="16" transform="matrix(-1 0 0 1 16 0)"/></clipPath></defs></svg>'
  });

  $('.product-form__input').styler();

  $('.tabs__nav-btn').on('click', function (e) {
    e.preventDefault();
    $('.tabs__nav-btn').removeClass('active');
    $(this).addClass('active');
    $('.tabs__item').removeClass('active');
    $($(this).attr('href')).addClass('active');
  });

  $('.reviews-form__star').rateYo({
    starWidth: "16px",
    normalFill: "rgba(193, 193, 193, 0.3)",
    ratedFill: "#ffb800",
    fullStar: true,
    numStar: 5,
    rating: 0,
    spacing: '5px',
    starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3197_367)"><path d="M0.0229731 6.16432C0.0780973 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141566 6.64478C0.0138168 6.52028 -0.0322151 6.334 0.0229731 6.16432Z"/></g><defs><clipPath id="clip0_3197_367"><rect width="16" height="16" transform="matrix(-1 0 0 1 16 0)"/></clipPath></defs></svg>',
    onChange: function (rating, rateYoInstance) {
      $('#reviews-rating').val(rating);
    }
  });

  $('.recent__list').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg class="recent__svg" width="11" height="19"><use href="./images/symbol-defs.svg#icon-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="recent__svg" width="11" height="19"><use href="./images/symbol-defs.svg#icon-right"></use></svg></button>',
    dots: false,
    arrows: true,
    variableWidth: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          dots: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          variableWidth: false,
        }
      },
      {
        breakpoint: 930,
        settings: {
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 2,
          variableWidth: false,
          arrows: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: false,
          arrows: false,
        }
      },
    ]
  });
});