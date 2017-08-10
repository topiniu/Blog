export default function () {
  /*
  * 联系我按钮动画效果
  */
  $('.j_contact-btn').on('mouseenter', function () {
    $(this).children('svg').css('fill', 'white');
  });
  $('.j_contact-btn').on('mouseleave', function () {
    $(this).children('svg').css('fill', 'black');
  });

}