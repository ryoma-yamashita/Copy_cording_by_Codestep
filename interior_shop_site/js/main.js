$(function() {
  $('.hamburger').on('click', function() {
    $('#header').toggleClass('active');
  });
  $('#mask').on('click', function() {
    $('#header').removeClass('active');
  });
});
