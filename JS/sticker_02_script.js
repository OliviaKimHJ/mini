
let stickerNo = 1; 

$('.sticker-next').on('click', function(){
 if(stickerNo <3){
    $('.best').css('transform', `translateX(-${510*stickerNo}px)`);
    stickerNo++;
  }
});

$('.sticker-previous').on('click', function(){
  if(stickerNo > 1){
     $('.best').css('transform', `translateX(-${510*(stickerNo-2)}px)`);
     stickerNo--;
   }
 });


 let quantity; 
 let Nquantity; 
 let cartLike = $('.cart-like');
 let arr =[];

 $('.minus').on('click',function(){
  quantity = $('input[name=quantity]').val();
  Nquantity =Number(quantity);
   if(Nquantity > 1){
     Nquantity--;
     $('input[name=quantity]').attr('value',Nquantity);
    }
  });
  
  $('.plus').on('click',function(){
    quantity = $('input[name=quantity]').val();
    Nquantity =Number(quantity);
    if(Nquantity != 0 && Nquantity < 10){
      Nquantity++;
      $('input[name=quantity]').attr('value',Nquantity);
      console.log(Nquantity);
    }
  });
  
// 내가 선택한 값들 보여주는 코드
/*
$("select[name=kinds]").on('click', function(){
  quantity = $('input[name=quantity]').val();
  let listname = $("select[name=kinds] option:selected").text();
  cartLike.css('display', 'block');
  cartLike.html(`${listname} 개수 : ${quantity}`);
});
*/



function printList(newlist){
  cartLike.css('display', 'block');
 
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.append(span);
  span.innerHTML = `${newlist.name} 개수 :${newlist.cnt} `;
  li.id = newlist.name;
  const delBtn = document.createElement('button');
  delBtn.innerHTML='X';
  li.append(delBtn);

  $('#cart-list').append(li);

  delBtn.addEventListener('click', deleltList);

}


function deleltList(e){
  let pn = e.target.parentElement;
  arr = arr.filter((list) => list.name !== pn.id);
  saveProduct();
  pn.remove();
}

function saveProduct(){
  localStorage.setItem('listName', JSON.stringify(arr));
}

let getList = localStorage.getItem('listName');

if(getList !== null){
  let parseList = JSON.parse(getList);
  arr = parseList;
  parseList.forEach((data) => {printList(data); });
}

$('.past-btn').on('click', function(e){
  e.preventDefault();
  if($('select[name=kinds] option:selected').val() != 'set'){
    quantity = $('input[name=quantity]').val();
    let listname = $("select[name=kinds] option:selected").text();
    let obj ={
      // key : Date.now(),
      name : listname,
      cnt : quantity,
    };

    arr.push(obj);
    saveProduct(); //arr 저장하지마 로컬에 저장해주는 함수
    printList(obj); // Ul안에 list보여주는 함수
}
});