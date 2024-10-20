function welcomeToBooleans() {
    return true;
}

// Conditional Statements

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true"
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue){
    if (wasThatTrue) {
        return "Yes, that was true"
    }
    return "No, that was false"
}

console.log(trueOrFalse(true));

// Equality Operator

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal"
}

console.log(testEqual('12'))


// Strict Equality Operator triple '=', this checks for the same data type.

function testStrictEqual(val) {
    if (val === 12) {
        return "Equal";
    }
    return "Not Equal"
}

console.log(testStrictEqual('12'))
// We can use Number() to cast a string into a number
console.log(testStrictEqual(Number('12')))


// Inequality Operator is !=

function testNotEqual(val) {
    if (val != 12) {
        return " Not Equal";
    }
    return "Equal"
}

// There is a strict inequality operator too!

function testStrictNotEqual(val) {
    if (val !== 17) {
        return " Not Equal";
    }
    return "Equal"
}

// We can also use greater than

function testGreaterThan(val) {
    if (val > 100) {
        return " Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under"
}

console.log(testGreaterThan(10))


// We can also use greater than or equal

function testGreaterOrEqual(val) {
    if (val >= 20) {
        return " 20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "10 or Under"
}

console.log(testGreaterOrThan(10))

// We can also use less than

function testLessThan(val) {
    if (val < 25) {
        return " Under 25";
    }
    if (val < 55) {
        return "Under 55";
    }
    return "55 or Over"
}

console.log(testLessThan(10))

// We can also use less than or equal

function testLessThan(val) {
    if (val <= 25) {
        return "  25 or Under";
    }
    if (val <= 55) {
        return "55 or Under";
    }
    return "Under 55"
}

// The And Operator

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
            return "Yes"
        }
    return "No"
}

// The Or Operator

function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside"
}

// The Else statement

function testElse(Val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    return result
}

// The Else If statement

function testElseIf(Val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5"
    }
}
