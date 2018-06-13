document.addEventListener('DOMContentLoaded', start)

function start(){
   addEventListener()
}

function addEventListener(){
   var input = document.getElementsByClassName("keys")
  //var input = document.querySelectorAll("keys")
   
   for (var i=0; i < input.length; i++){
      input[i].addEventListener("click", calculate)
   }
}

var tempDisplay = ''; // set up temp string for display
var entries = [];  //set up empty array for calculation

/*
function calculate(evt){
   var keyValue = evt.target.id  // recording the key value into variable

   tempDisplay += keyValue;
   document.getElementById("display").innerHTML = tempDisplay;
}
*/

/*
https://stackoverflow.com/questions/50811591/button-id-cannot-ve-retrieved-shown-with-getelementbyid
In that case, that element will be the <img>
If you want to get the ID of the button containing it, then you need to check its parent.
The general solution to this is to recursively checj the tagName of the parentNode until you find a button or run out of parents.
*/

function calculate(evt){

   e = evt.target || evt.srcElement;

   var keyValue;  // recording the key value into variable
   if (e.nodeName === 'BUTTON'){
      keyValue = e.id;
   }
   if (e.nodeName === 'IMG'){
      keyValue = e.parentNode.id;
   }

   tempDisplay += keyValue;
   document.getElementById("display").innerHTML = tempDisplay;
}