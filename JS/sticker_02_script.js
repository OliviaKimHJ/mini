
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
  let kinds = $('select[name=kinds] option:selected');
  let isHave; // 상품명 로컬스토리지에 있는지 없는지 확인하는 boolean
  let index; // 그 상품명에 대한 위치 저장
  let listname;
  if(kinds.val() != 'set'){
    quantity = $('input[name=quantity]').val();
    listname = kinds.text(); // 상품명 저장시킴
    
    let obj ={
      name : listname,
      cnt : quantity,
    };
    
    if(getList !== null){
      arr.forEach((data, i)=> {
        if(data.name === listname){
          isHave = true;
          index = i;
        }
      });
      
      if(isHave){
        arr[index] = obj;
        
      }else{
        arr.push(obj);
      }
    } 
    saveProduct();
    printList(obj);
  }
  cartLike.css('display', 'block');
});

function printList(newlist){
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

 