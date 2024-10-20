function ourReusableFunction() {
    console.log("Heyya, World")
}

function reusableFunction() {
    console.log("Hi World");
}

function createNumber(max) {
    var random_num = Math.floor(Math.random() * max);
    console.log("random_num :", random_num)
    return random_num
}


function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}

function functionWithArgs(a, b) {
    console.log(a + b)
}

ourFunctionWithArgs(createNumber(3), 5);

var myGlobal = 10;

function fun1() {
    // The program is allowed to read oopsGlobal in line 39 since I do not write var before oopsGlobal
    oopsGlobal = 5;
}

function fun2() {
    var output = ""
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal; 
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output)
}

fun1();
fun2();


var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10))


// Queue in JavaScript

function nextInLine(arr, item) {
    arr.push(item)
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];


console.log(["Before: " + JSON.stringify(testArr)]);
console.log(nextInLine(testArr, 6));
console.log(["After: " + JSON.stringify(testArr)]);