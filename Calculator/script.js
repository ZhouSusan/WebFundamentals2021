var storedVal = null;
var operator = null;
var displayDiv = document.querySelector("#display");
displayDiv.innerText = "0";

//function that clears all the values
function clr() {
    displayDiv.innerText = "0";
}

function reset()  {
    storedVal = null;
    operator = null;
    clr();
}

//function display values
function press(val) {
    if (display.innerText == "0") {
        displayDiv.innerText = val;
    } else {
        displayDiv.innerText += val;
    }
    return val;
} 


function setOP(sign) {
    if (storedVal == null) {
        storedVal = displayDiv.innerText;
        operator = sign;
    } else if (operator == null) {
        clr();
        operator = sign;
    }else if (storedVal != null) {
        calculate(storedVal, displayDiv.innerText, operator);
        operator = sign;
    } 
    clr();
}

function calculate(value1=storedVal, value2=displayDiv.innerText, sign=operator) {
    if (operator == null) {//check edge case
        press(value1);
    } 
    var num1 = parseFloat(value1);
    var num2 = parseFloat(value2);
    var operatorDic = {
        "+" : function(num1, num2) {return num1 + num2},
        "-" : function(num1, num2) {return num1 - num2},
        "*" : function(num1, num2) {return num1 * num2},
        "/" : function(num1, num2) {return num1 / num2}
    }
    var currentVal = operatorDic[sign](num1, num2);
    console.log(num1, num2, sign);
    displayDiv.innerText = currentVal;
    storedVal = currentVal;
    operator = null;
}
