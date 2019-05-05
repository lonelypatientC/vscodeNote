(function () {
    $(document).ready(function () {
        tabInit()
    })

    function tabInit() {
        var lis = $('ul.navList li');
        var doms = $('div.dom');

        lis.on("click", function () {
            $(this).siblings().removeClass();
            doms.eq($(this).index()).siblings().css('display', 'none');
            $(this).addClass('selected')
            doms.eq($(this).index()).css('display', 'block');
        })
    }
}())