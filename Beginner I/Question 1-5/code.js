

// #QUESTION1 | HELLO WORLD
const helloWorld = () => {
    return 'Hello World!'
}

// #QUESTION2 | GET SUM
const getSum = (a, b) => {
    return a + b;
}

// #QUESTION3 | CALCULATOR
const calculator = (a, b, operator) => {
    switch (operator) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            return a / b;
            break;
        default:
            break;
    }
}

// #QUESTION4 | COUNT OCCURRENCES
const countOccurrences = (a, b) => {
    const arr = a.split('');
    let i = 0;
    for (x = 0; x < a.length; x++) {
        if (b === arr[x]) {
            i++;
        }
    }

    return i;
}

// #QUESTION5 | FIND MAX NUMBER
const findMaxNumber = array => {
    let i = 0;
    for (x = 0; x <= array.length; x++) {
        if (array[x] > i) {
            i = x;
        }
    }

    return i;
}

test("Hello World | Collection of 2025 Javascript Testing", () => {
    expect(helloWorld()).toBe("Hello World!");
  });