const fizzBuzzArray = arg1 => {
    let array = [];

    for (x = 1; x <= arg1; x++) {
        switch (0) {
            case x % 15:
                array.push('FizzBuzz');
                break;
            case x % 5:
                array.push('Buzz');
                break;
            case x % 3:
                array.push('Fizz');
                break;
            default:
                array.push(x);
                break;
        }
    }
    return array;
}

const arrayIntersection = (arg1, arg2) => {
    const set1 = new Set(arg1);
    const intersection = [];

    for (let num of arg2) {
        if (set1.has(num)) {
            intersection.push(num);
        }
    }

    return intersection;
}

const displayLikes = arg1 => {
    const text = 'like this';
    if (arg1.length === 0) {
        return `No one ${text}`
    } else if (arg1.length > 4) {
        return `${arg1[0]}, ${arg1[1]} and ${arg1.length - 2} others ${text}`;
    } else if (arg1.length === 4) {
        return `${arg1[0]}, ${arg1[1]} and 2 others ${text}`;
    } else if (arg1.length === 3) {
        return `${arg1[0]}, ${arg1[1]} and ${arg1[2]} ${text}`;
    } else if (arg1.length === 2) {
        return `${arg1[0]} and ${arg1[1]} ${text}`;
    } else return `${arg1} ${text}`;
}

const findMissingNumber = arg1 => {
    for (x = 1; x <= Math.max(...arg1); x++) {
        if (!arg1.includes(x)) {
            return x;
        }
    }
}

const findMissingLetter = arg1 => {
    let start = arg1.sort()[0].charCodeAt(0);
    let finish = arg1.sort()[arg1.length - 1].charCodeAt(0);

    for (x = start; x <= finish; x++) {
        if (!arg1.includes(String.fromCharCode(x))) {
            return String.fromCharCode(x);
        }
    }
}