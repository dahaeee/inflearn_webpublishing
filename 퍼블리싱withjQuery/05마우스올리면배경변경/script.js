$('.navi li').mouseenter(function(){
    const changeImage = $(this).attr('data-image');
    $('.photo').css({
        'background-image': 'url('+ changeImage +')'
    });
})

$('.navi li').mouseleave(function(){
    $('.photo').css({
        'background-image': ''
    });
})