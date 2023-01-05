/* 정규식 */
const regexId = /^\w{4,16}$/;
const regexPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
const regexName = /^[가-힇]{2,8}/;
const regexEmail = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
const regexPhone = /^\d{2,3}-\d{3,4}-\d{4}$/;
const regexYmd = /^\d{8}/;
/* 입력했는지 알 수 있는 변수들 */
let isId = false;
let isPw = false;
let isRPW = false;
let isName = false;
let isEmail = false;
let isPhone = false;
let isYmd = false;

/* 유효성검사 후 보여주는 p태그들 */

let idCheck = $('.id_input_check');
let pwCheck = $('.pw_input_check');
let nameCheck = $('.name_input_check');
let emailCheck = $('.email_input_check');
let phoneCheck = $('.phone_input_check');
let ymdCheck =$('.ymd_input_check');


/* input 정규식-keyup()으로 칠때마다 정규식 지정되게 */
$('#id_txt').on('keyup', function(e){
  let val =$('#id_txt').val();
  isId = regexId.test(val);

  showMsg('아이디', isId, idCheck);
});

$('#id_txt').on('keyup', function(e){
    let val = $('#id_txt').val();
    isId = regexId.test(val);

    showMsg('아이디', isId, idCheck);
});


// pwval : 비밀번호 입력값 저장시킬 변수 - 재확인때 필요 
let pwval;

$('#pw_txt').on('keyup', function(e){
    pwval = $('#pw_txt').val();
    isPw = regexPw.test(pwval);
   
    showMsg('비밀번호', isPw, pwCheck);
});
// 비밀번호 재확인 코드 
$('#re_pw_txt').on('keyup', function(e){
  let val = $('#re_pw_txt').val();
  if(pwval != val){
    $('.pw_input_recheck').html('잘못입력하셨습니다.');
    $('.pw_input_recheck').css('color', 'red');
  }else{
    $('.pw_input_recheck').html('비밀번호가 일치합니다.');
    $('.pw_input_recheck').css('color', 'blue');
  }
});

$('#name_txt').on('keyup', function(e){
    let val = $('#name_txt').val();
    isName = regexName.test(val);
   
    showMsg('이름', isName, nameCheck);
});
$('#phone_txt').on('keyup', function(e){
  
    let val = $('#phone_txt').val();
    isPhone = regexPhone.test(val);
   
    showMsg('번호', isPhone, phoneCheck);
});

$('#email_txt').on('keyup', function(e){
    let val = $('#email_txt').val();
    isEmail = regexEmail.test(val);
   
    showMsg('이메일', isEmail, emailCheck);
});

$('#ymd_txt').on('keyup', function(e){
    let val = $('#ymd_txt').val();
    isYmd = regexYmd.test(val);

    showMsg('생년월일', isYmd, ymdCheck);
});
/*
$('#id_txt').on('keypress', function(e){
  if(e.code == 'Enter'){
    let val = $('#id_txt').val();
    isId = regexId.test(val);

    showMsg('아이디', isId, idCheck);
  }
});


// pwval : 비밀번호 입력값 저장시킬 변수 - 재확인때 필요 
let pwval;

$('#pw_txt').on('keypress', function(e){
  if(e.code == 'Enter'){
    pwval = $('#pw_txt').val();
   
    isPw = regexPw.test(pwval);
   
    showMsg('비밀번호', isPw, pwCheck);
  }
});
// 비밀번호 재확인 코드 
$('#re_pw_txt').on('keypress', function(e){
  if(e.code == 'Enter'){
    let val = $('#re_pw_txt').val();
    if(pwval != val){
      $('.pw_input_recheck').html('잘못입력하셨습니다.');
      $('.pw_input_recheck').css('color', 'red');
    }else{
      isRPW =true;
      $('.pw_input_recheck').html('비밀번호가 일치합니다.');
      $('.pw_input_recheck').css('color', 'blue');
    }
  }
});

$('#name_txt').on('keypress', function(e){
  if(e.code == 'Enter'){
    let val = $('#name_txt').val();
    isName = regexName.test(val);
   
    showMsg('이름', isName, nameCheck);
  }
});
$('#phone_txt').on('keypress', function(e){
  if(e.code == 'Enter'){
    let val = $('#phone_txt').val();
    isPhone = regexPhone.test(val);
   
    showMsg('번호', isPhone, phoneCheck);
  }
});

$('#email_txt').on('keypress', function(e){
  if(e.code == 'Enter'){
    let val = $('#email_txt').val();
    isEmail = regexEmail.test(val);
   
    showMsg('이메일', isEmail, emailCheck);
  }
});

$('#ymd_txt').on('keypress', function(e){
  if(e.code =='Enter'){
    let val = $('#ymd_txt').val();
    isYmd = regexYmd.test(val);

    showMsg('생년월일', isYmd, ymdCheck);
  }
});
*/

/* 정규식 보여주는 메세지 함수*/
function showMsg(name, isX, xCheck){
  if(isX){
    xCheck.html(`사용 가능한 ${name}입니다.`);
    xCheck.css('color', 'blue');
  }else{
    xCheck.html(`사용 불가능한 ${name}입니다.`);
    xCheck.css('color', 'red');
  }
  
  submit();
}
/* 체크박스 */
$('#all').on('click', function(){
  let checkList = $('#all').prop('checked');
  if(checkList){
    $('input:checkbox').prop('checked', true);
  }
  submit();
});
// isId&&isPw&&isRPW&&isName&&isPhone&&isEmail&&isYmd
function submit(){
  if((isId&&isPw&&isRPW&&isName&&isPhone&&isEmail&&isYmd)===true){
    if($('input:checkbox').prop('checked')){
      $('.signupBtn').css('background', 'black');
    }
  }else{
    $('.signupBtn').css('background', 'rgb(160, 161, 157)');
  }
}


