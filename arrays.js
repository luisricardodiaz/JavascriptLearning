var ourArray = ["John", 23]

var myArray = ["John", 1]

// Nested array

var ourArray = [["the universe", 42],["everything", 101010]];

// Only change code below this line.

var myArray = [["Bulls", 23] , ["White Sox", 45]];

// Example
var ourArray = [50, 60, 70];
var ourData = ourArray[0];

var myArray = [50 ,60, 70];

var myData = myArray[0];
console.log(myData)

// We can mutate arrays since arrays are objects and objects are passed by reference, which means that when you assign an array to a variable, your are actually assigning a reference to the array's memory location.

ourArray[0] = 45;
console.log(ourArray)

// Multi-dimensional 

var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];

// We can index into multi-dimensional arrays
var myData = myArray[3][0][0]
console.log(myData)

// We can use push() to append element to the end of an array

var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"])

console.log(ourArray)

// We can use pop() to get rid of the last element in an array and assign it to a variable

var lastElementRemoved = ourArray.pop()
console.log("lastElementRemoved:", lastElementRemoved)

// We can use shift() to get rid of the first element in an array and assign it to a variable

var firstElementRemoved = ourArray.shift()
console.log("firstElementRemoved:", firstElementRemoved)


// We can use unshift to append element to the beginning of an array
console.log(ourArray)
ourArray.unshift(["King", 32]);
console.log(ourArray)


