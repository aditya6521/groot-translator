window.onload=function(){

var inputTxt=document.querySelector("#inputText");    
var button=document.querySelector("#bts-button");
var outputTxt=document.querySelector("#outputText");

var serverUrl="https://api.funtranslations.com/translate/groot.json";

function updatedUrl(text){            //updating the server url with user text
    return serverUrl + "?" + "text=" + text
}


function clickHandler(){
    console.log("testinggggg")
   // outputTxt.innerText=inputTxt.value;
    var userInputText=inputTxt.value;

    fetch(updatedUrl(userInputText))
    .then(response => response.json())
    .then(json=>{var translated=json.contents.translated;
        outputTxt.innerText= translated;})
}

button.addEventListener("click", clickHandler)

}