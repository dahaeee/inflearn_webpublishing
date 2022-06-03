$('.btn li').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    const result = $(this).attr('data-alt');
    $('.tabs div').removeClass('active');
    $('#' + result).addClass('active');
})