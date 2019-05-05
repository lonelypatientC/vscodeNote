$(function(){
    var $ul=$('ul')
    var $lis=$('li')
    $lis.mouseover(function(){
        var bp=12;
        var liNum=$(this).index();
        var offset=bp+$(this).width()*liNum;
        $ul.animate({'background-position':offset},60)
    })
})