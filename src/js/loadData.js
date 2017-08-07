import testFile from '../md/testFile.md';
import Passage from './passageEntity.js';

const __PASSAGELIST = [
  new Passage('Test', testFile, new Date().toDateString())
];

export default function loadData() {
  const self = this;
  console.log(__PASSAGELIST.length);
  for (let i = 0; i < __PASSAGELIST.length; i++) {
    console.log(`title=${__PASSAGELIST[i].title} content=${__PASSAGELIST[i].content} createDate=${__PASSAGELIST[i].createDate}  updateDate=${__PASSAGELIST[i].updateDate}`)
  }
};