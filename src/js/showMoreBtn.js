/*
* show more按钮事件
*
*/
export default function () {
  $('.j_opacity-cover').on('click', function () {
    var jPassageItem = $(this).parents('.j_passage-item');
    var jPassageContent = $(this).siblings('.j_passage-content');
    var jTipText = $(this).children('.j_tip-text');
    var jCover = $(this);


    let height = jPassageItem.height();
    if (height === 500 || (document.body.clientWidth < 766 && height === 400)) {

      jPassageContent.css('height', 'auto');
      if (jPassageContent.height() < 438) {
        jPassageItem.css('height', jPassageItem.height() + 70);

      } else {
        jPassageItem.css('height', jPassageContent.height() + 62 + 70);
      }

      jCover.addClass('tog_down');
      jTipText.text('收起来');
    } else {
      jPassageItem.css('height', 500);
      jTipText.text('显示全部');
      jCover.removeClass('tog_down');
    }
  });

  $('.j_opacity-cover').on('mouseenter', function () {
    if (document.body.clientWidth > 766) {
      console.log('hover event');
      $(this).css('height', '100%');
    }
  })
}