// 네비바
const navToggle =document.querySelector('.navbar-toggler');
const listGShow = document.querySelector('.list-group');

// 커리셀 
let no =1;
let carousel = document.querySelector('.carousel');
// 네비바 클릭 함수
navToggle.addEventListener('click',function(){
    listGShow.classList.toggle('show');
    listGShow.style.display = ((listGShow.style.display!='none') ? 'none' : 'block');
});
/*
document.querySelector('.btn1').addEventListener('click', function(){
    carousel.style.transform = 'translateX(0)';
});
document.querySelector('.btn2').addEventListener('click', function(){
    carousel.style.transform = 'translateX(-100vw)';
});
*/
$('.next').on('click', function(){
    if(no < 3 ){
        carousel.style.transform = `translateX(-${no}00vw)`;
        no++;
        console.log(no);
    }
});


$('.previous').on('click', function(){
        if(no > 1){
        carousel.style.transform = `translateX(-${no-2}00vw)`;
        no--;
        console.log(no);
    }
});