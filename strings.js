// We can escape quotation marks using backslash

var myStr = "I am a \"double quoted\" senteces look at my double quotes \"\""
console.log(myStr)  

// We can also just use single quotes instead of double quotes if we are going to have quotation marks in string

var myStr = 'I am a \"double quoted\" senteces look at my double quotes \"\"'
console.log(myStr)  

/*****
We can escape other characters such as :
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed

****/ 

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myStr)

// Example

var ourStr = "I come first." + "I come second.";

var myStr = "This is the start " + "This is the end"
console.log(myStr)


// We can also use the += operators to concatenate strings
var ourStr = "I come first. ";
ourStr += "I come second.";

console.log(ourStr);

var number = 1;

var concatenate_int = ourStr + number

console.log(concatenate_int)

// To find the length of a string, we use the .length method

var firstName = 'Ricky'
console.log(firstName.length)

// In order to index into a string, we use a bracket notation string[i], where i is the element we want to index into starting counting at 0.

console.log(firstName[0])

// Strings in JavaScript are immutable
var myStr = "Jello World";
myStr = "Hello World";
console.log(myStr)

console.log(firstName[firstName.length - 1])
