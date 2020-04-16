//initialise some variables
const displayContents = document.getElementById("window")
const numButtons = document.querySelectorAll('.numbutton')
const operators = document.querySelectorAll('.operator')
const equals = document.getElementById('equals')
const plusmin = document.getElementById("dunno")
let prev;
let curr;
let operator = "";
//separate functions for adding, subtracting, etc...
function add(prev, curr) {
    return prev + curr
}
function subtract(prev,curr) {
    return prev - curr
}
function multiply(prev, curr) {
    return prev * curr
}
function divide(prev, curr){
    if (curr === 0){
        return "ERROR ERROR ERROR"
    } return prev / curr;
}
function modulo(prev, curr){
    return prev % curr;
}
//operate function
function operate(prev, curr, operator){
    if (!prev || !curr){
        return "Error"
    }
    prev = parseFloat(prev)
    curr = parseFloat(curr)
    switch(operator) {
        case "+" :
            return add(prev,curr);
        case "-" :
            return subtract(prev,curr);
        case "*" :
            return multiply(prev,curr);
        case "/" :
            return divide(prev,curr);
        case "%" :
            return modulo(prev,curr);
    }

}
// function testWindow(value){
//     displayContents.innerText = value
//
//listen to buttonclicks
document.getElementById("clear").addEventListener("click", () => {
    displayContents.innerText = ""
    prev = 0;
    curr = 0;
});

numButtons.forEach(button => button.addEventListener("click", () => displayContents.innerText += button.innerText)) 

operators.forEach(button => button.addEventListener("click", () => {
    if (!prev){
        prev = displayContents.innerText;
        displayContents.innerText = "";
        operator = button.innerText;
    }

}
));
document.addEventListener('keydown', function(event) {
    if (event.keyCode >= 48 && event.keyCode <= 57){
        displayContents.innerText += event.keyCode - 48
    } else if (event.keyCode >= 96 && event.keyCode <= 105){
        displayContents.innerText += event.keyCode - 96}
    else if (event.keyCode == 107){
        operator = "+"
        prev = displayContents.innerText
        displayContents.innerText = ""
    }
    else if (event.keyCode == 109){
        operator = "-"
        prev = displayContents.innerText
        displayContents.innerText = ""
    }
    else if (event.keyCode == 106){
        operator = "*"
        prev = displayContents.innerText
        displayContents.innerText = ""
    }
    else if (event.keyCode == 111){
        operator = "/"
        prev = displayContents.innerText
        displayContents.innerText = ""
        return
    }
    else if (event.keyCode == 13){
        if (prev){
            curr = displayContents.innerText;
            displayContents.innerText = Math.round(operate(prev,curr,operator) * 10000000) / 10000000;
            if (displayContents.innerText === "NaN") {
                displayContents.innerText = "error"
            }
            prev = ""
            return
        }
    }
});
equals.addEventListener("click", () =>{
    if (prev){
        curr = displayContents.innerText;
        displayContents.innerText= Math.round(operate(prev,curr,operator) * 10000000) / 10000000;
        if (displayContents.innerText === "NaN") {
            displayContents.innerText = prev
        }
        prev = ""
    }
}
)
plusmin.addEventListener("click", () => {alert("Nooit geweten wat deze knop deed");prev = "";curr="";})
