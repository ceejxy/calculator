function add(...args) {
    if (args.length === 0) return 0;

    return args
    .reduce((total, arg) => total + arg, 0);
}

function subtract(...args) {
    if (args.length === 0) return 0;

    return args
    .reduce((total, arg) => total - arg)
}

function multiply(...args) {
    if (args.length === 0) return 0;

    return args
    .reduce((total, arg) => total * arg)
}

function divide(...args) {
    if (args.length === 0) return 0;

    return args
    .reduce((total, arg) => total / arg)
}

console.log(divide(90, 200));

