document.addEventListener('DOMContentLoaded', start)

function start(){
   addEventListener()
}

function addEventListener(){
   var input = document.getElementsByClassName("keys")
   
   for (var i=0; i < input.length; i++){
      input[i].addEventListener("click", calculator)
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

function calculator(evt){

   e = evt.target || evt.srcElement;

   var keyValue;  // recording the key value into variable
   if (e.nodeName === 'BUTTON'){
      keyValue = e.id;
   }
   if (e.nodeName === 'IMG'){
      keyValue = e.parentNode.id;
   }


   if (keyValue === 'reset'){
         deleteAll();
   }
   else if (keyValue === 'squareRoot'){
      calculatingSquareRoot();
   }
   else if (keyValue === 'square'){
      calculatingSquare();
   }
   else if (keyValue === 'plusMinus'){
      changingPolarity();
   }
   else if (keyValue === 'divide'){
      division();
   }
   else if (keyValue === 'multiply'){
      multiplication();
   }     
   else if (keyValue === 'equal'){
         calculate();     
   }
   else{
      recordKeyStrokes(keyValue);
   }
}



function deleteAll(){
      tempDisplay = '';
      tempNum = '';
      document.getElementById("display").innerHTML = "0";
}

function errorChecking(){
      if (isNaN(tempDisplay)){
            document.getElementById("display").innerHTML = "ERROR";
            tempDisplay = '';
            tempNum = '';
      }
      else{
         document.getElementById("display").innerHTML = tempDisplay;
         tempNum = tempDisplay;
         
      }
}

//rounding to 4 decimal points
function rounding(){
      tempDisplay = Number(Math.round(tempDisplay+'e4')+'e-4'); 
}

function calculatingSquareRoot(){
      tempDisplay = Math.sqrt(tempDisplay);
      rounding()
      errorChecking();
}

function calculatingSquare(){
      tempDisplay = Math.pow(tempDisplay, 2);
      rounding()
      errorChecking();
}

function changingPolarity(){
      tempDisplay *= -1;
      errorChecking();
}

function division(){
      tempDisplay += '÷';
      tempNum += '/';
      document.getElementById("display").innerHTML = tempDisplay;
}

function multiplication(){
      tempDisplay += 'x';
      tempNum += '*';
      document.getElementById("display").innerHTML = tempDisplay;
}

function recordKeyStrokes(keyValue){
      tempDisplay += keyValue;
      tempNum += keyValue;

      if (tempDisplay.length > 15){
            tempDisplay = tempDisplay.slice(0, -1);
            tempNum = tempNum.slice(0, -1);
      }
      document.getElementById("display").innerHTML = tempDisplay;
}

function calculate(){
      tempDisplay = eval(tempNum);

            if (isNaN(tempDisplay)){
                  document.getElementById("display").innerHTML = "ERROR";
                  tempDisplay='';
                  tempNum='';
            }
            else{
                  document.getElementById("display").innerHTML = tempDisplay;
            }
}