$(function() {
  $('.hamburger').on('click', function() {
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });

  $('#navi a').on('click', function() {
    $('#header').removeClass('open');
  });

  let pagetop = $('#toTop');

  pagetop.hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });

  pagetop.click(function() {
    $('body,html').animate({scrollTop: 0}, 500);
    return false;
  });
});