function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = 'alpha';
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer
}

console.log(caseInSwitch(2));

function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = 'apple';
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
            default:
                answer ="stuff";
                break;
    }
    return answer
}

console.log(switchOfStuff(2))

function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}

console.log(sequentialSizes(9))


// Replacing if else statement with switch statements.

function chainToSwitch(val) {
    var answer = "";

    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    return answer
}

console.log(chainToSwitch("bob"))