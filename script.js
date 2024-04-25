const firstBasket=document.querySelector('.basket-1 span');
const secondBasket=document.querySelector('.basket-2 span');
const leftArrow =document.querySelector('.left-arrow');
const rightArrow=document.querySelector('.right-arrow');

const totalAppples=10;
let secondBasketAppleCount=0;
let firstBasketAppleCount=totalAppples-secondBasketAppleCount;

function updateBasketCounts(){

  firstBasket.innerText=firstBasketAppleCount;
  secondBasket.innerText=secondBasketAppleCount;
}


rightArrow.addEventListener('click', ()=>{
  if(firstBasketAppleCount>0){
    firstBasketAppleCount--;
    secondBasketAppleCount++;
    updateBasketCounts()
  }
});

leftArrow.addEventListener('click', ()=>{
  if(secondBasketAppleCount>0){
    secondBasketAppleCount--;
    firstBasketAppleCount++;
    updateBasketCounts()
  }
});