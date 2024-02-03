$(function() {
  
  // 色
  $('#change-color').click(function() {
  // 文字色赤
  $('#target').css('color', 'red');
  });

  // 変更
  $('#change-text').click(function() {
  // 文字変更
  $('#target').text('Hello!');
  });

  // 消える
  $('#fade-out').click(function() {
  // 文字消える
  $('#target').fadeOut();
  });

  // 現れる
  $('#fade-in').click(function() {
    // 文字現れる
  $('#target').fadeIn();
  });
});