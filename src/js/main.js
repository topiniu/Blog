import loadData from './loadData.js';
import blurImg from './blurimg.js';
import '../less/navigationBar.less';
import '../less/main.less';
import '../res/mineicon.png';


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
      if (jPassageContent.height() < 438) {
        jPassageItem.css('height', jPassageItem.height() + 50);
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

  });

  // navbtn 动画效果与导航栏展现
  $('.j_right-content').on('mouseenter', function () {
    $('.j_nav-btn').css('height', '35px');
    $('.j_nav-item').eq(0).css({
      'transform': 'rotate(45deg)',
      'top': '7px'
    });
    $('.j_nav-item').eq(1).css({
      'transform': 'rotate(-45deg)',
    });
    $('.j_nav-item-text').fadeOut('fast');

    $('.j_nav-panel').fadeIn('fast');
  });

  $('.j_right-content').on('mouseleave', function () {
    $('.j_nav-btn').css('height', '9px');
    $('.j_nav-item').eq(0).css({
      'transform': 'rotate(0deg)',
      'top': '0px'
    });
    $('.j_nav-item').eq(1).css({
      'transform': 'rotate(0deg)',
    });
    $('.j_nav-item-text').fadeIn('fast');

    $('.j_nav-panel').fadeOut('fast');
  });

  $('.j_contact-btn').on('mouseenter', function () {
    $(this).children('svg').css('fill', 'white');
  });
  $('.j_contact-btn').on('mouseleave', function () {
    $(this).children('svg').css('fill', 'black');
  });

  loadData();

  blurImg();

});