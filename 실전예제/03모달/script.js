// fade in out
// $('.modal-notice').click(function(){
//     $('.modal').fadeIn();
// })
// $('.btn-close').click(function(){
//     $('.modal').fadeOut();
// })

// animation
$('.modal-notice').click(function(){
    $('.modal').addClass('active');
})
$('.btn-close').click(function(){
    $('.modal').removeClass('active');
})

// 바닐라 JS
// let modal = document.getElementById('modal-notice');
//-> modal에 id 넣어주면됨

// function openModal() {
//     modal.classList.add('active');
// }

// function closeModal() {
//     modal.classList.remove('active');
// }