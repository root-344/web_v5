$(function() {
  $('#go-btn').click(function() {
    $('.main').fadeOut(0);
    $('#modal1').fadeIn(0);
  });
  $('.back-btn').click(function() {
    $('#modal1').fadeOut(0);
    $('#modal2').fadeOut(0);
    $('.main').fadeIn(0);
  });
  $('.a').click(function() {
    $('#modal1').fadeOut(0);
    $('#modal2').fadeIn(0);
  });

});