import loadData from './loadData';
import contactBtn from './contactBtn';
import navAnimation from './navAnimation';
import folderBtn from './folderTypeBtn';
import funcBtn from './funcBtn';
import '../less/navigationBar.less';
import '../less/main.less';
import '../res/mineicon.png';

/*
*
* 动画效果与需要在页面加载时执行的事件，比如加载数据，懒加载图片等等
*
*/
$(function () {
  console.log('!!Greetings!!');

  navAnimation();
  contactBtn();
  folderBtn();
  funcBtn();

  loadData('all');


});