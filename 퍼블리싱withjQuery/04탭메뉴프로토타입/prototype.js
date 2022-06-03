$('.btn li').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    const tab = $(this).attr('data-alt');
    $('.tabs div').removeClass('active');
    $('#' + tab).addClass('active');
})