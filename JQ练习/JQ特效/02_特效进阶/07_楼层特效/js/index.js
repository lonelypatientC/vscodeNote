$(function () {
    var ul = $('nav ul')
    var lis = $('nav ul li')
    var boxs = $('.box');
    var liHeight = 32;
    var boxsH = [];
    boxs.each(function () {
        var boxsT = $(this).offset().top
        boxsH.push(boxsT);
    })

    lis.on('click', function () {
        var index = $(this).index();
        var bgPositon = index * liHeight
        ul.animate({
            'backgroundPositionY': bgPositon
        }, 60)
        $(window).scrollTop(boxsH[index]);
    })

    $(window).scroll(function () {
        var scrollTop = Math.ceil($(window).scrollTop());
        for (var i = 0; i < boxsH.length; i++) {
            if (scrollTop >= boxsH[i]) {
                ul.css({
                    'backgroundPositionY': i * liHeight
                })
            }
        }

    })

})