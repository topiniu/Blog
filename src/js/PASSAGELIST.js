import Passage from './passageEntity.js';

import testFile from '../md/testFile.md';
import showjoy_guide_1 from '../md/showjoy_guide1.md';

export default function () {
  const list = [
    /**
     * Type your new passage here!
     * Titile  content  createDate  updateDate  type(FrontEnd or Music or Photography)
     */
    // new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Photography'),
    // new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Photography'),
    // new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Photography'),
    // new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Music'),
    // new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Front-end'),
    // new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Photography'),
    // new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Photography'),
    // new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Front-end'),
    // new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Music'),
    // new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Music'),
    // new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Front-end'),
    // new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Music'),
    new Passage('尚妆前端快速上手-环境搭建', showjoy_guide_1, '2017-08-11', '2017-08-11', 'Front-end')



  ];
  return list;
}