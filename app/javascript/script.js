$(function() {
  $('#go-btn').click(function() {
    $('.main').fadeOut(0);
    $('#modal1').fadeIn(0);
  });
  $('.main-back-btn').click(function() {
    $('#modal1').fadeOut(0);
    $('.main').fadeIn(0);
  });
  $('.back-btn').click(function() {
    $('#modal2').fadeOut(0);
    $('#modal3').fadeOut(0);
    $('#modal4').fadeOut(0);
    $('#modal5').fadeOut(0);
    // $('#modal6').fadeOut(0);
    // $('#modal7').fadeOut(0);
    $('#modal1').fadeIn(0);
  });
  $('.a').click(function() {
    $('#modal1').fadeOut(0);
    $('#modal2').fadeIn(0);
  });
  $('.b').click(function() {
    $('#modal1').fadeOut(0);
    $('#modal3').fadeIn(0);
  });
  $('.c').click(function() {
    $('#modal1').fadeOut(0);
    $('#modal4').fadeIn(0);
  });
  $('.d').click(function() {
    $('#modal1').fadeOut(0);
    $('#modal5').fadeIn(0);
  });
  // $('.e').click(function() {
  //   $('#modal1').fadeOut(0);
  //   $('#modal6').fadeIn(0);
  // });
  // $('.f').click(function() {
  //   $('#modal1').fadeOut(0);
  //   $('#modal7').fadeIn(0);
  // });
});