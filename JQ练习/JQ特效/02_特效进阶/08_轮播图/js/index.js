$(function () {
    var slider = $('.slider');
    var img = $('.main li');
    var lis = $('.control ul li')
    var pre = $('div.pre');
    var next = $('div.next');
    var index = 0;
    //滚动的内容归位
    img.eq(0).siblings().css('left', '400px');
    var timer;

    function run() {
        timer = setInterval(function () {
            img.eq(index).finish().animate({
                left: '-400px'
            }, 500);
            nextPage();
        }, 1500)
    }

    function stop() {
        clearInterval(timer);
    }

    run();
    slider.hover(stop, run)

    function prePage() {
        //向前翻页
        if (index - 1 < 0) {
            index = 5;
        }
        index = index - 1;
        img.eq(index).css('left', '-400px');
        img.eq(index).finish().animate({
            left: 0
        }, 500);
        lis.eq(index).siblings().removeClass();
        lis.eq(index).addClass('now');
    }

    function nextPage() {
        //向后翻页
        if (index + 1 > 4) {
            index = -1;
        }
        index = index + 1;
        img.eq(index).css('left', '400px');
        img.eq(index).finish().animate({
            left: 0
        }, 500);
        lis.eq(index).siblings().removeClass();
        lis.eq(index).addClass('now');
    }

    pre.on('click', function () {
        img.eq(index).finish().animate({
            left: '400px'
        }, 500);
        prePage();
    })

    next.on('click', function () {
        img.eq(index).finish().animate({
            left: '-400px'
        }, 500);
        nextPage();
    })

    lis.on('click', function () {
        var nowIndex = $(this).index();
        if (nowIndex > index) {
            img.eq(index).finish().animate({
                left: '-400px'
            }, 500);
            index = nowIndex - 1;
            nextPage();
        }
        if (nowIndex < index) {
            img.eq(index).finish().animate({
                left: '400px'
            }, 500);
            index = nowIndex + 1;
            prePage();
        }
    })
})