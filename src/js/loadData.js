import Passage from './passageEntity.js';
import getPassageList from './getPassageList.js';
import blurImg from './blurimg';
import showmore from './showMoreBtn'


export default function (type) {

  console.log('置空');
  $('.j_left-blog-list-container').empty();
  $('.j_left-blog-list-container').css('opacity', '0');

  let __PASSAGELIST = getPassageList(type);


  const self = this;
  // console.log(__PASSAGELIST.length);
  for (let i = 0; i < __PASSAGELIST.length; i++) {
    // console.log(`title=${__PASSAGELIST[i].title} content=${__PASSAGELIST[i].content} createDate=${__PASSAGELIST[i].createDate}  updateDate=${__PASSAGELIST[i].updateDate}`)
    var newItem = $('.j_passage-item-tem').clone(true);
    appendItem(newItem, __PASSAGELIST[i].title, __PASSAGELIST[i].content, __PASSAGELIST[i].createDate, __PASSAGELIST[i].updateDate, __PASSAGELIST[i].type);
  }
};
function appendItem(newItem, title, content, createDate, updateDate, type) {
  console.log(type);
  $(newItem).find('.j_title-text').text(title);
  $(newItem).find('.j_passage-content').html(content);
  $(newItem).find('.j_type-text').text(type);

  $(newItem).find('.j_passage-update-date').text(
    updateDate.split('-')[0] + '年' +
    updateDate.split('-')[1] + '月' +
    updateDate.split('-')[2] + '日'
  );
  $(newItem).find('.j_opacity-cover').attr(
    'title',
    '创建于' +
    createDate.split('-')[0] + '年' +
    createDate.split('-')[1] + '月' +
    createDate.split('-')[2] + '日'
  );

  $(newItem).css('display', 'block');
  $(newItem).removeClass(' j_passage-item-tem');
  $(newItem).addClass(' j_passage-item');

  // $('.j_left-blog-list-container').append(newItem);
  $(newItem).appendTo($('.j_left-blog-list-container'));
  console.log('appended');

  showmore();

  blurImg();

  // $('.j_left-blog-list-container').fadeIn('slow');
  setTimeout(function () {
    $('.j_left-blog-list-container').css('opacity', '1');

  }, 1000);


}