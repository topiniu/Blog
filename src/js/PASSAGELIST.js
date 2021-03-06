import Passage from './passageEntity.js';

import testFile from '../md/testFile.md';
import showjoy_guide_1 from '../md/showjoy_guide1.md';
import showjoy_guide_2 from '../md/showjoy_guide2.md';

import in_showjoy_1 from '../md/inshowjoy_1.md';
import usegithook from '../md/usegithook1.md';
import jsbase1 from '../md/jsbase1.md';
import jsbase2 from '../md/jsbase2.md';

import todo_by_wx from '../md/todoByWx.md'


export default function () {
  const list = [
    /**
     * Type your new passage here!
     * Titile  content  createDate  updateDate  type(FrontEnd or Music or Photography)
     */
    new Passage('从零编写一个简易待办小程序-P1', todo_by_wx, '2017-11-13', '2017-11-13', 'Front-end'),
    new Passage('JavaScript高级程序设计读书笔记-P2', jsbase2, '2017-08-28', '2017-08-28', 'Front-end'),
    new Passage('JavaScript高级程序设计读书笔记-P1', jsbase1, '2017-08-21', '2017-08-28', 'Front-end'),
    new Passage('使用Git hook实现直接部署', usegithook, '2017-08-17', '2017-08-17', 'Front-end'),
    new Passage('尚妆前端快速上手-项目概览', showjoy_guide_2, '2017-08-16', '2017-08-16', 'Front-end'),
    new Passage('尚妆前端快速上手-环境搭建', showjoy_guide_1, '2017-08-11', '2017-08-11', 'Front-end'),
    new Passage('三个月在尚妆', in_showjoy_1, '2017-08-14', '2017-08-14', 'Front-end'),
    
  ];
  return list;
}