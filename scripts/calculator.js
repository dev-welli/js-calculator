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
var tempNum = ''; //

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
 /*  
1. Should I use !isNan -> calculate else show 'ERROR'?
2. need to add multiply, divide, dot/decimal conversion DONE
3. need to add second variable for additional calculation? one for display and the other for storage number? DONE
4. need to figure out the plus minus functionality
5. need to figure out how to limit input -> if tempDisplay.length > 8 then pop?
6. need to figure out 4 decimal points - http://www.jacklmoore.com/notes/rounding-in-javascript/
*/

   if (keyValue === 'reset'){
      tempDisplay = '';
      tempNum = '';
      document.getElementById("display").innerHTML = "0";
   }
   else if (keyValue === 'squareRoot'){
      if (isNaN(tempDisplay)){
         document.getElementById("display").innerHTML = "ERROR";
         tempDisplay = '';
         tempNum = '';
      }
      else{
         document.getElementById("display").innerHTML = Math.sqrt(tempDisplay);
         tempDisplay = '';
         tempNum = '';
      }
   }
   else if (keyValue === 'square'){
      if (isNaN(tempDisplay)){
         document.getElementById("display").innerHTML = "ERROR";
         tempDisplay = '';
         tempNum = '';
      }
      else{
         document.getElementById("display").innerHTML = Math.pow(tempDisplay, 2);
         tempDisplay = '';
         tempNum = '';
      }
   }
   else if (keyValue === 'divide'){
         tempDisplay += '÷';
         tempNum += '/';
         document.getElementById("display").innerHTML = tempDisplay;
   }
   else if (keyValue === 'multiply'){
      tempDisplay += 'x';
      tempNum += '*';
      document.getElementById("display").innerHTML = tempDisplay;
   }     
   else if (keyValue === 'equal'){
         tempDisplay = document.getElementById("display").innerHTML = eval(tempNum);
         //tempDisplay = '';
   }
   else{
      tempDisplay += keyValue;
      tempNum += keyValue;
      document.getElementById("display").innerHTML = tempDisplay;
   }
}