// math operations

let add = function(...args) {
    if (args.length === 0) return 0;

    return args
    .reduce((total, arg) => total + arg);
}

let subtract = function(...args) {
    if (args.length === 0) return 0;

    return args
    .reduce((total, arg) => total - arg)
}

let multiply = function(...args) {
    if (args.length === 0) return 0;

    return args
    .reduce((total, arg) => total * arg)
}

let divide = function(...args) {
    if (args.length === 0) return 0;

    return args
    .reduce((total, arg) => total / arg)
}


// runs the corresponding operator function
let operate = function(num1, operator, num2) {

    if (operator === '+') return add(num1, num2);
    if (operator === '—') return subtract(num1, num2);
    if (operator === '*') return multiply(num1, num2);
    if (operator === '/') return divide(num1, num2);
}

const inputDisplay = document.querySelector('.inputDisplay')
const operatorButton = document.querySelectorAll('.operator');

// gets the operator that is going to be used. Grays out the button to indicate it has been selected
operatorButton.forEach(operatorButton => {
    operatorButton.addEventListener('click', function() {
        operator = operatorButton.innerText;
        operatorButton.style.backgroundColor = 'gray';
        inputDisplay.innerText = '';
        return operator;
    })
})

const digits = document.querySelectorAll('.digit')

// Makes button show on display when clicked
digits.forEach(digits => {
    digits.addEventListener('click', function() {
        number = digits.innerText;
        inputDisplay.innerText += number;
        console.log(inputDisplay.innerText);
    })
})


//clears display
const clear = document.querySelector('.clear')
clear.addEventListener('click', function() {
    if (inputDisplay.innerText != '') {
        inputDisplay.innerText = '';
    }
})














/* what happens when equals is clicked
equalsButton.addEventListener('click', function() {
    inputDisplay.innerText += equalsButton.innerText
    equation = inputDisplay.innerText.split('+')
    operator = getOperator();
    num1 = parseInt(equation[0]);
    num2 = parseInt(equation[1]);

    console.log(operate(num1, operator, num2));
    console.log(operator);
    
})


// displays number that is clicked
const display = document.querySelectorAll('.display')

display.forEach(display => {
    display.addEventListener('click', function() {
        inputDisplay.innerText += display.innerText;
        //console.log(inputDisplay.innerText)
    })
}
)

*/


