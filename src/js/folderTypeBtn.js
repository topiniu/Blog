import loadData from './loadData';

export default function () {
  $('.j_folder').on('mouseenter', function () {
    var svg = $(this).find('.j_type-container-icon');
    var text = $(this).find('.j_folder-text');

    $(svg).css('fill', '#E16B8C');
    $(text).css('color', '#E16B8C')
  });
  $('.j_folder').on('mouseleave', function () {
    var svg = $(this).find('.j_type-container-icon');
    var text = $(this).find('.j_folder-text');

    $(svg).css('fill', '#000000');
    $(text).css('color', '#000000')
  });

  $('.j_folder').on('click', function () {
    var type = $(this).data('type');
    console.log(type);
    loadData(type);
  });
}