export default function () {

  /* 
  * 动画效果显示导航栏
  * 目前已经更改了导航栏样式和逻辑，但仍保留原来的代码
  */
  // $('.j_top-navigation-bar-container').css('display', 'flex');
  // $('.j_ani-nav-background').css('left', '0');


  /* 
  * navbtn 动画效果与导航栏展现
  * 这是新的导航栏模块
  */
  $('.j_right-content').on('mouseenter', function () {
    $('.j_nav-btn').css('height', '35px');
    $('.j_nav-item').eq(0).css({
      'transform': 'rotate(45deg)',
      'top': '3.5px'
    });
    $('.j_nav-item').eq(1).css({
      'transform': 'rotate(-45deg)',
      'top': '-3.5px'
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
      'top': '0px'
    });
    $('.j_nav-item-text').fadeIn('fast');

    $('.j_nav-panel').fadeOut('fast');
  });

}