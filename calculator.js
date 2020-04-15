//initialise some variables
const displayContents = document.getElementById("window")
const numButtons = document.querySelectorAll('.numbutton')
const operators = document.querySelectorAll('.operator')
const equals = document.getElementById('equals')
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
//operate function
function operate(prev, curr, operator){
    prev = parseFloat(prev)
    curr = parseFloat(curr)
    switch(operator) {
        case "+" :
            return add(prev,curr);
            break;
        case "-" :
            return subtract(prev,curr);
            break;
        case "*" :
            return multiply(prev,curr);
            break;
        case "/" :
            return divide(prev,curr);
    }

}
function testWindow(value){
    displayContents.innerText = value
}
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
equals.addEventListener("click", () =>{
    if (prev){
        curr = displayContents.innerText;
        displayContents.innerText=operate(prev,curr,operator);
        prev = ""
    }
})