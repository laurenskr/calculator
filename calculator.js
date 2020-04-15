//initialise some variables
const displayContents = document.getElementById("window")
const numButtons = document.querySelectorAll('.numbutton')
let prev;
let curr;
let operator;
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
    switch(operator) {
        case "+" :
            add(prev,curr);
            break;
        case "-" :
            subtract(prev,curr);
            break;
        case "*" :
            multiply(prev,curr);
            break;
        case "/" :
            divide(prev,curr);
            break;
    }

}
function testWindow(value){
    displayContents.innerText = value
}
//listen to buttonclicks
document.getElementById("clear").addEventListener("click", () => displayContents.innerText = "");

numButtons.forEach(button => button.addEventListener("click", () => displayContents.innerText += button.innerText)) 