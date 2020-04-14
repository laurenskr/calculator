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