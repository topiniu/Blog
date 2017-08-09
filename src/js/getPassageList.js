import Passage from './passageEntity.js';
import testFile from '../md/testFile.md';

export default function getPassageList() {
  return [
    // new Passage('Test', testFile, new Date().toDateString())
    new Passage('Test', testFile, '2017-08-08', '2017-08-09')

  ];
}