// helloWorld function 
let helloWorld = function () {
    return "Hello, World!";
}
let sayHello = function (input) {
    if(typeof input != "string") {
        return "Hello, World!";
    }if(!isNaN(input)) {
        return "Hello, World!";
    }return "Hello, " + input + "!";
}
let isFive = function (input) {
    return input === 5;
}
let isEven = function (input) {
    return parseFloat(input) % 2 === 0;
}
let isVowel = function (input) {
    return "aeiouAEIOU".indexOf(input) !== -1;
}
let add = function (value1, value2) {
    return Number(value1) + Number(value2)
}