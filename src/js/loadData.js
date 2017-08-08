import Passage from './passageEntity.js';
import getPassageList from './getPassageList.js';

const __PASSAGELIST = getPassageList();

export default function loadData() {
  const self = this;
  console.log(__PASSAGELIST.length);
  for (let i = 0; i < __PASSAGELIST.length; i++) {
    console.log(`title=${__PASSAGELIST[i].title} content=${__PASSAGELIST[i].content} createDate=${__PASSAGELIST[i].createDate}  updateDate=${__PASSAGELIST[i].updateDate}`)
    var newItem = $('.j_passage-item').clone(true);
    appendItem(newItem, __PASSAGELIST[i].title, __PASSAGELIST[i].content, __PASSAGELIST[i].updateDate);
  }
};
function appendItem(newItem, title, content, updateDate) {

  $(newItem).find('.j_title-text').text(title);
  $(newItem).find('.j_passage-content').html(content);
  $(newItem).find('.j_passage-update-date').text(updateDate);
  $(newItem).css('display', 'block');

  $('.j_left-blog-list-container').append(newItem);
}