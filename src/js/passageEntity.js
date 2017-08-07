export default function Passage(title, content, createDate) {
  this.title = title;
  this.content = content;
  this.createDate = createDate;
  this.updateDate = new Date().toDateString();
}