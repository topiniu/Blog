/*
* show more按钮事件
*
*/
export default function () {
  $('.j_opacity-cover').on('click', function () {
    // console.log('hello');
    var jPassageItem = $(this).parents('.j_passage-item');
    var jPassageContent = $(this).siblings('.j_passage-content');
    var jTipText = $(this).children('.j_tip-text');
    var jCover = $(this);


    let height = jPassageItem.height();
    if (height === 500) {

      jPassageContent.css('height', 'auto');
      // jPassageContent.css('-webkit-line-clamp', 19);
      // console.log('entering');
      if (jPassageContent.height() < 438) {
        jPassageItem.css('height', jPassageItem.height() + 70);
        // setTimeout(function () {
        //   jPassageItem.css('height', 500);
        // }, 300);
      } else {
        jPassageItem.css('height', jPassageContent.height() + 62 + 70);
      }
      // jCover.css('background', 'linear-gradient(to bottom, transparent, transparent)');
      // jCover.css('height', 34);

      jCover.addClass('tog_down');
      jTipText.text('收起来');
    } else {
      jPassageItem.css('height', 500);
      jTipText.text('显示全部');
      jCover.removeClass('tog_down');

      // jCover.css('background', 'linear-gradient(to bottom, transparent, white)');
      // jCover.css('height', '30%');

    }
  });
}