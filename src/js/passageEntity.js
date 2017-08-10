export default function Passage(title, content, createDate, updateDate, type) {
  this.title = title;
  this.content = content;
  this.createDate = createDate;
  this.updateDate = updateDate;
  this.type = type; // Front-end、Music、Photography
}