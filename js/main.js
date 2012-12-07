$(function(){
    $('.document, .window').show();
    $(window).resize(function(){
        var documentWidth = $(document).width(),
            documentHeight = $(document).height(),
            windowWidth = $(window).width(),
            windowHeight = $(window).height();
        $('.document .content').html(documentWidth + ' x ' + documentHeight);
        $('.window .content').html(windowWidth + ' x ' + windowHeight);
    });
    $(window).resize();
});
