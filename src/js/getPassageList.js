import Passage from './passageEntity.js';
import testFile from '../md/testFile.md';

export default function getPassageList() {
  return [
    new Passage('Test', testFile, new Date().toDateString())
  ];
}