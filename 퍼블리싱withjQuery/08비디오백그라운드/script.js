$('.trigger').click(function(){
    $(this).toggleClass('active');
    $('.modal-gnb').fadeToggle();
})

const bgm = document.getElementById('myAudio');
bgm.volume = 0.2;
