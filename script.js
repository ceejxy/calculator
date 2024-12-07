// math operations

let add = function(nums) {
    if (nums.length === 0) return 0;

    return nums
    .reduce((total, num) => total + num);
}

let subtract = function(nums) {
    if (nums.length === 0) return 0;

    return nums
    .reduce((total, num) => total - num)
}

let multiply = function(nums) {
    if (nums.length === 0) return 0;

    return nums
    .reduce((total, num) => total * num)
}

let divide = function(nums) {
    if (nums.length === 0) return 0;

    return nums
    .reduce((total, num) => total / num)
}

let percent = function(num) {
    return num / 100;
}


// get numbers operator for equation 

const digits = document.querySelectorAll('.digit')

digits.forEach(digit => {
    digit.addEventListener('click', () => {
        document.querySelector('.display').innerHTML += digit.innerText;
    })
})


const plusMinus = document.querySelector('.plusMinus')

plusMinus.addEventListener('click', function() {

    const regex = /\-/

    if (regex.test(document.querySelector('.display').innerHTML)) {
        document.querySelector('.display').innerHTML = document.querySelector('.display').innerHTML.slice(1);
    } else document.querySelector('.display').prepend('-')
})


const operators = document.querySelectorAll('.operator')

operators.forEach(operator => {
    operator.addEventListener('click', () => {

        const regex = /\d/g;

        if (regex.test(document.querySelector('.display').innerHTML)) {
            document.querySelector('.display').innerHTML += operator.innerHTML;
        } else return;
  
    })
})

const clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', function() {
    document.querySelector('.display').innerHTML = ''
});


const equals = document.querySelector('.equals')
equals.addEventListener('click', function() {

    if (document.querySelector('.display').innerHTML.includes('+')) {
        let nums = document.querySelector('.display').innerHTML.split('+')
        nums = nums.map(num => parseFloat(num));

        console.log(add(nums));

        document.querySelector('.display').innerHTML = add(nums);
    }

    if (document.querySelector('.display').innerHTML.includes('—')) {
        let nums = document.querySelector('.display').innerHTML.split('—')
        nums = nums.map(num => parseFloat(num));

        console.log(nums)
        console.log(subtract(nums));

        document.querySelector('.display').innerHTML = subtract(nums);
    }

    if (document.querySelector('.display').innerHTML.includes('X')) {
        let nums = document.querySelector('.display').innerHTML.split('X')
        nums = nums.map(num => parseFloat(num));

        console.log(nums)
        console.log(multiply(nums));

        document.querySelector('.display').innerHTML = multiply(nums);
    }

    if (document.querySelector('.display').innerHTML.includes('÷')) {
        let nums = document.querySelector('.display').innerHTML.split('÷')
        nums = nums.map(num => parseFloat(num));

        console.log(nums)
        console.log(divide(nums));

        document.querySelector('.display').innerHTML = divide(nums);
    }

    if (document.querySelector('.display').innerHTML.includes('%')) {
        let num = document.querySelector('.display').innerHTML
        num = parseFloat(num);

        console.log(num)
        console.log(percent(num));

        document.querySelector('.display').innerHTML = percent(num);
    }

 })




// when a user selects a number, display the number, when they select a operator, add that operator to the number and then clear the screen, then when they select the second number split it into an array and run the specific operation function