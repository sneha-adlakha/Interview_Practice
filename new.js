var buttonTranslate=document.querySelector('#buttonTranslate');
var textOne=document.querySelector('#txtOne');
var outputdiv=document.querySelector("#output");

buttonTranslate.addEventListener('click',ClickEventHandler);

function ClickEventHandler(){
console.log("clicked");
   outputdiv.innerText=textOne.value;

}
