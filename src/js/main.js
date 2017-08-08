import loadData from './loadData.js';
import blurImg from './blurImg.js';
import '../less/navigationBar.less';
import '../less/main.less';


$(function () {
  console.log('Greetings!! Hello there!');
  // 动画效果显示导航栏
  $('.j_top-navigation-bar-container').css('display', 'flex');
  $('.j_ani-nav-background').css('left', '0');

  $('.j_opacity-cover').on('click', function () {
    // console.log('hello');
    var jPassageItem = $(this).parents('.j_passage-item');
    var jPassageContent = $(this).siblings('.j_passage-content');
    var jTipText = $(this).children('.j_tip-text');

    let height = jPassageItem.height();
    if (height === 500) {

      jPassageContent.css('height', 'auto');
      // jPassageContent.css('-webkit-line-clamp', 19);
      // console.log('entering');
      if (jPassageContent.height() < 500) {
        jPassageItem.css('height', jPassageContent.height() + 62 + 50);
        setTimeout(function () {
          jPassageItem.css('height', 500);
        }, 300);
        return;
      }
      jPassageItem.css('height', jPassageContent.height() + 62 + 50);
      jTipText.text('收起来');
    } else {
      jPassageItem.css('height', 500);
      jTipText.text('显示全部');
      setTimeout(function () {
        jPassageContent.css('height', 438);
      }, 1000);
    }

  })

  blurImg();
});