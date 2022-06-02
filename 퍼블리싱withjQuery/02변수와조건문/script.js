$('.login button').click(function(){
    var age = $('#id').val();

    if(age == '') {
        alert('나이를 입력하세요.');
    }else if(age < 20) {
        alert('미성년자입니다.');
    }else if(age >= 20) {
        alert('성인입니다.');
    }else {
        alert('입력내용을 숫자로 넣으세요.');
    }
});


