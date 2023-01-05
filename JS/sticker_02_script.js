
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
  

$("select[name=kinds]").on('click', function(){
  quantity = $('input[name=quantity]').val();
  let listname = $("select[name=kinds] option:selected").text();
  cartLike.css('display', 'block');
  cartLike.html(`${listname} 개수 : ${quantity}`);
});
