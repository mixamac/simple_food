$(function () {

  var mixer = mixitup('.popular-list');
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