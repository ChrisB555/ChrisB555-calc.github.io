const display = document.querySelector(".mainDisplay");
const numbers = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".allClear");
const clearLast = document.querySelector(".lastEntry");
let num1 = "";
let num2 = "";
let result = null;
let lastOperation = "";
let decimal = false;
let tempResult = "";

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    if (event.target.innerText === "." ) {
      decimal = true;
    } 
    num2 += event.target.innerText;
    display.innerText = num2;
  });
});

operation.forEach((op) => {
  op.addEventListener("click", (event) => {
    if (!num2) return;
    let operationSign = event.target.innerText; 
    lastOperation = operationSign;
    if (num1 && num2 && lastOperation) {
      operate();
    } else {  
      result = parseFloat(num2);
    }
    clearVar(operationSign);
  });
});
function clearVar(name = "") { 
  num1 += num2 + " " + name + " ";
  display.innerText = num1;
  num2 = "";
  tempResult.innerText = result;
}

function operate() {
  result = parseFloat(result);
  num2 = parseFloat(num2);
  if (lastOperation === "*") {
    result *= num2;
   display.innerText = result;
  } 
  else if (lastOperation === "+") {
    result += num2;
    display.innerText = result;
  } else if (lastOperation === "-") {
    result -= num2;
    display.innerText = result;
  } else if (lastOperation === "/") {
    result /= num2;
    display.innerText = result;
  } else if (lastOperation === "%") {
    result %= num2;
    display.innerText = result;
  }
  
}

equal.addEventListener("click", () => {
  if (!num2 ) return;
  if( !isFinite(result)) {
    if(isNaN(result)){
      result = "No good"
    }else {
      result = "broken";
    }
  }
  operate();
  clearVar();
  display.innerText = result;
  tempResult = "";
  num2 = result;
  num1 = "";
});

clear.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  display.innerText = 0;
  result = "";
  tempResult.innerText = "";
});

clearLast.addEventListener("click", () => {
  num2 = num2.slice(0,-1) ;
  display.innerText = num2;  
});
