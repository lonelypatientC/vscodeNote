(function () {
    $(function () {
        waterfallInit();
        $(window).on("resize", waterfallInit);
        $(window).on("scroll",checkAndOnload);
    })

    //瀑布流布局初始化
    function waterfallInit() {

        var items = $("div.box div")
        var itemWidth = items.outerWidth();

        var winWidth = $(window).width();
        var column = Math.floor(winWidth / itemWidth);

        var itemArr = [];
        for (var i = 0; i < column; i++) {
            itemArr[i] = 0;
        }

        // var minHeight = Math.min.apply(null,itemArr);
        items.each(function () {
            var minArr = minAndIndex(itemArr);

            var minHeight = minArr[0];
            var itemIndex = minArr[1];
            $(this).css({
                "left": itemIndex * itemWidth,
                "top": minHeight
            })

            var height = $(this).outerHeight();
            itemArr[itemIndex] += height;
        })


    }
    //滚动到最底部加载新的图片
    function checkAndOnload(){
        //获取屏幕高度
        var winHeight=$(window).height();
        var scollTop=$(window).scrollTop();
        var scollBottom=winHeight+scollTop;
        //最后一张图片一半的位置
        var maxHeight=$('div.box div:last').offset().top+$('div.box div:last').height()/2;
        if(scollBottom>maxHeight){
            $('div.box div').clone(true).appendTo($('.box'));
            waterfallInit();
            maxHeight=$('div.box div:last').offset().top+$('div.box div:last').height()/2;
        }
    }

    /**
     *
     * @description 获取数组的最小值和它的下标
     * @param {Array} arr
     * @returns [min,index] 最小值和它的下标
     */
    function minAndIndex(arr) {
        var min = arr[0];
        var index = 0;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
                index = i;
            }
        }
        return [min, index]

    }
}())