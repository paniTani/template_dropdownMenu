$(function(){

    var $links = $(".menu a");

    $links.on("click", function(){
        var $submenu = $(this).siblings(".submenu");
        $submenu.slideToggle(500);
    });
});

















