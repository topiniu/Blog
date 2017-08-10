export default function () {
  console.log('haha');
  $('.j_fullScreen').on('click', function () {
    console.log(0);
    let text = $(this).text();
    console.log(text);
    if (text === '全屏阅读') {
      $('.j_left-blog-list-container').css('width', '100%');
      $(this).text('退出全屏');
    } else {
      $('.j_left-blog-list-container').css('width', '600px');
      $(this).text('全屏阅读');

    }
  });
}