document.addEventListener('DOMContentLoaded', start)

function start(){
   addEventListener()
}

function addEventListener(){
   var input = document.getElementsByClassName("keys")
   
   for (var i=0; i < input.length; i++){
      input[i].addEventListener("click", calculate)
   }
}

var tempDisplay = ''; // set up temp string for display
var entries = [];  //set up empty array for calculation


function calculate(evt){
   var keyValue = evt.target.id  // recording the key value into variable

   tempDisplay += keyValue;
   document.getElementById("display").innerHTML = tempDisplay;
}