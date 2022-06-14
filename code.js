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