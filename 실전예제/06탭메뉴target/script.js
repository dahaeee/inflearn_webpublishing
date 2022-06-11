$('.tab-btn a').click(function(){
    $(this).addClass('active');
    $(this).siblings('.tab-btn a').removeClass('active');
});

