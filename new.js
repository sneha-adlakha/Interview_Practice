var buttonTranslate=document.querySelector('#buttonTranslate');
var textOne=document.querySelector('#txtOne');
var outputdiv=document.querySelector("#output");
serverUrl="https://api.funtranslations.com/translate/minion.json"

function constructUrl(text){
   return serverUrl+"?"+""+"text="+text;
}

function errorHandler(error){
   console.log("error occured",error);
   alert("server not responding");
}

function ClickEventHandler(){
   var inputText=textOne.value;
   fetch(constructUrl(inputText))
      .then(response=>response.json())
      .then(json=>
         {
            var translatedValue=json.contents.translated;
            outputdiv.innerText=translatedValue;
         })
         .catch(errorHandler)
};
function clearHandler(){
   textOne.value="";
   outputdiv.innerText="";

}
buttonTranslate.addEventListener('click',ClickEventHandler);
var buttonClear=document.querySelector('#button-Clear');
buttonClear.addEventListener('click',clearHandler);

