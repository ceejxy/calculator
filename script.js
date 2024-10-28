let add = function(...args) {
    if (args.length === 0) return 0;

    return args
    .reduce((total, arg) => total + arg, 0);
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

let operate = function(num1, operator, num2) {

    if (operator === '+') return add(num1, num2);
    if (operator === '—') return subtrat(num1, num2);
    if (operator === '*') return multiply(num1, num2);
    if (operator === '/') return divide(num1, num2);

}

const addButton = document.querySelector('.plus')
addButton.addEventListener('click', function() {
    operator = addButton.innerText;
    num1 = 2
    num2 = 9

  console.log(operate(num1, operator, num2));

})

const inputDisplay = document.querySelector('.inputDisplay')
const digit = document.querySelectorAll('.digit') 

digit.forEach(digit => {
    digit.addEventListener('click', function() {
        inputDisplay.innerText += digit.innerText;
    })
})

const clear = document.querySelector('.clear')

clear.addEventListener('click', function() {
    if (inputDisplay.innerText != '') {
        inputDisplay.innerText = '';
    }
})


