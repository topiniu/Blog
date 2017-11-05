import contactBtn from './contactBtn';
import navAnimation from './navAnimation';
import folderBtn from './folderTypeBtn';
import funcBtn from './funcBtn';
// import 'github-markdown-css';
// import 'highlight.js'

import '../res/mineicon.png';

/*
*
* 动画效果与需要在页面加载时执行的事件，比如加载数据，懒加载图片等等
*
*/
$(function () {
  console.log('!!Greetings!!');

  navAnimation();// 加载导航条动画
  contactBtn();// 初始化联系我button
  folderBtn();// 初始化文件夹按钮
  funcBtn();// 初始化其他功能按钮

  // 根据navgateTo字段滚动到相应文章
  let navToTitle = getParam('navigateTo');
  // console.log(navToTitle);
  if(navToTitle != ''){
    navigateTo(navToTitle);
  }
  // $(document).scrollTop(0);

});
function navigateTo(name){
  let flagScroll = -1;

  let doms = $('.j_passage-item');
  for(let i = 0; i < doms.length; i++){
    if($(doms[i]).attr('data-title') === name){
      flagScroll = i;
    }
  }
  if(flagScroll != -1 && doms.length > 0){
    let num = parseInt($(doms[0]).height()) + parseInt($(doms[0]).css('margin-bottom'));
    // console.log(num);
    document.body.scrollTop = flagScroll * num;
    // $(doms[flagScroll]).css('animation','light-once 5s linear 1s');
    setTimeout(function(){
      $(doms[flagScroll]).find('.j_passage-title').find('p').css('color','white');
      $(doms[flagScroll]).find('.j_passage-title').find('span').css('background','white');       
      $(doms[flagScroll]).find('.j_passage-title').css('background-color','black');
    },800);

    setTimeout(function(){
      $(doms[flagScroll]).find('.j_passage-title').css('background-color','white');
      $(doms[flagScroll]).find('.j_passage-title').find('span').css('background','black');
      $(doms[flagScroll]).find('.j_passage-title').find('p').css('color','black');
    },1500);
    
  }

};
function getParam(name){
  // let result = '';
  // console.log(name);
  
  let url = location.search.split('?')[1];
  let params = url.split('&');
  let key = '';
  let value = '';

  for(let i = 0; i < params.length; i++){
    key = params[i].split('=')[0];    
    if(key === name){
      value = params[i].split('=')[1];
      // console.log(value);
    }
  }
    return decodeURIComponent(value);
}