$(function() {

    var scrollOffset = $(window).scrollTop();

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
        
        $("html, body").animate({
            scrollTop: blockOffset - 98
        }, 700)
    });

});