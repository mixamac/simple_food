$(function () {

  var mixer = mixitup('.popular__list');
  mixer.filter('.category-a');
});

$(function () {
  var header = $('.header');

  $(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition > 5) {
      header.addClass('scroll');
    } else {
      header.removeClass('scroll');
    }
  });
});