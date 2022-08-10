$(function () {
  $('#hamberger').on('click', function () {
    $('#header').toggleClass('open');
  });
  $('#mask').on('click', function () {
    $('#header').removeClass('open');
  });
  $('.nav-menu a').on('click', function() {
    $('#header').removeClass('open');
  });

  // スムーススクロール
  $('.site-nav a[href*="#"]').on('click', function() {
    // aタグ内のhrefから、リンクのid名を取得
    let elmHash = $(this).attr('href');
    // 取得したidの上部からHeaderの高さ分を引いた値を取得
    let pos = $(elmHash).offset().top-80;
    // 取得した位置へのスクロール機能
    $('body, html').animate({scrollTop: pos}, 500);
    return false;
  });

  // slickの導入
  $('.slick-area').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });
});