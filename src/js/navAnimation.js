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
    if (document.body.clientWidth > 765) {

      $(this).addClass('nav-clicked ');
      $('.j_nav-item-text').fadeOut('fast');
      $('.j_nav-panel').fadeIn('fast');
    }
  });

  $('.j_right-content').on('mouseleave', function () {
    if (document.body.clientWidth > 765) {
      $(this).removeClass('nav-clicked ');
      $('.j_nav-item-text').fadeIn('fast');
      $('.j_nav-panel').fadeOut('fast');
    }
  });

  $('.j_right-content').on('click', function () {
    if (document.body.clientWidth < 766) {
      // console.log($(this).find('.nav-panel').css('display') === 'none');
      if ($(this).find('.nav-panel').css('display') === 'none') {
        $(this).addClass('nav-clicked ');
        $('.j_nav-item-text').fadeOut('fast');
        $('.j_nav-panel').css('height',$(window).height());
        // console.log($(window).height() + ' ss ' + $(document).height() + 'ss' + $(window).innerHeight() +'ss '+ $(window).outerHeight());
        $('.j_nav-panel').fadeIn('fast');
      } else if ($(this).find('.nav-panel').css('display') === 'block') {
        $('.j_nav-panel').fadeOut('fast');
        $(this).removeClass('nav-clicked ');
        $('.j_nav-item-text').fadeIn('fast');
      }
    }

  })

}