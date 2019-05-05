$(function () {
    var imgs = $('li');
    imgs.on('click', function () {
        var value = 'url(images/' + ($(this).index() + 1) + '.jpg)';
        $('body').css('background', value);
    })
})