$(function () {
    var cursor = $('div.cursor')
    var ul = $('div.box ul')
    var box = $('div.box')
    var bottom = $('div.bottom')
    var cursorMoveMax = bottom.width() - cursor.width();
    var ulMoveMax = ul.width() - box.width();
    cursor.on('mousedown', function (e) {
        var e = e || window.event;
        $(document).on('mousemove', function (e) {
            var x = e.pageX - cursor.width() / 2;
            cursor.offset({
                left: x
            })
            if (cursor.offset().left < bottom.offset().left) {

                cursor.offset({
                    left: bottom.offset().left
                })
            }
            if (cursor.offset().left + cursor.width() > bottom.offset().left + bottom.width()) {
                cursor.offset({
                    left: bottom.offset().left + bottom.width() - cursor.width()
                })
            }
            var ulMove = -cursor.position().left / cursorMoveMax * ulMoveMax;

            ul.css('marginLeft', ulMove);
        })
        $(document).on('mouseup', function () {
            $(document).off('mousemove')
        })
    })
})