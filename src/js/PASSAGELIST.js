import Passage from './passageEntity.js';

import testFile from '../md/testFile.md';

export default function () {
  const list = [
    // new Passage('Test', testFile, new Date().toDateString())
    /**
     * Type your new passage here!
     * Titile  content  createDate  updateDate  type(FrontEnd or Music or Photography)
     */
    new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Front-end'),
    new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Photography'),
    new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Photography'),
    new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Photography'),
    new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Music'),
    new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Front-end'),
    new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Photography'),
    new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Photography'),
    new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Front-end'),
    new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Music'),
    new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Music'),
    new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Front-end'),
    new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Music'),
    new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Photography'),
    new Passage('Test', testFile, '2017-08-08', '2017-08-09', 'Front-end')

  ];
  return list;
}