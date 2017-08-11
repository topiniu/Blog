import Passage from './passageEntity.js';
import getPassageList from './getPassageList.js';
import blurImg from './blurimg';
import showmore from './showMoreBtn'



const f = $('.j_left-blog-list-container');

export default function (type) {

  // console.log('置空');
  f.empty();
  f.css('opacity', '0');

  let __PASSAGELIST = getPassageList(type);

  if (__PASSAGELIST.length === 0) {
    var n = $('<h1>目前没有任何可供阅读的文档</h1>');
    f.append(n);
    // f.fadeIn('slow');
    setTimeout(function () {
      f.css('opacity', '1');
    }, 1000);


    showmore();

    blurImg();

    return;

  }


  const self = this;
  // console.log(__PASSAGELIST.length);
  for (let i = 0; i < __PASSAGELIST.length; i++) {
    // console.log(`title=${__PASSAGELIST[i].title} content=${__PASSAGELIST[i].content} createDate=${__PASSAGELIST[i].createDate}  updateDate=${__PASSAGELIST[i].updateDate}`)
    var newItem = $('.j_passage-item-tem').clone(true);
    appendItem(newItem, __PASSAGELIST[i].title, __PASSAGELIST[i].content, __PASSAGELIST[i].createDate, __PASSAGELIST[i].updateDate, __PASSAGELIST[i].type);
  }
};
function appendItem(newItem, title, content, createDate, updateDate, type) {
  // console.log(type);
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

  // f.append(newItem);
  $(newItem).appendTo(f);
  // console.log('appended');


  showmore();

  blurImg();

  // f.fadeIn('slow');
  $(document).scrollTop(0);

  f.css('display', 'block');
  setTimeout(function () {
    f.css('opacity', '1');
  }, 1000);


}