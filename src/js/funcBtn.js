export default function () {
  // console.log('haha');
  $('.j_fullScreen').on('click', function () {
    console.log(0);
    let text = $(this).text();
    console.log(text);
    if (text === '全屏阅读') {
      $('.j_left-blog-list-container').css('width', '100%');
      $(this).text('退出全屏');
    } else {
      $('.j_left-blog-list-container').css('width', '78%');
      $(this).text('全屏阅读');
    }
  });

  $('.j_test-btn').on('click', function () {
    console.log('haha');
  })
  $('.j_me').on('click', function () {
    let r = $('.j_right-personal-info-container');
    let l = $('.j_left-blog-list-container');
    if ($(this).find('a').text() === '我') {
      r.addClass('show-per-info');
      l.removeClass('show-passage-item ');
      l.css('display', 'none');

      setTimeout(function () {
        r.css('opacity', '1');
      }, 800);
      $(this).find('a').text('文章');

    } else {
      r.removeClass('show-per-info');
      r.css('opacity', '0');

      l.css('opacity', '0');
      l.css('display', 'block');

      setTimeout(function () {
        l.css('opacity', '1');
      }, 800);
      $(this).find('a').text('我');
    }
    $(document).scrollTop(0);

  })
}