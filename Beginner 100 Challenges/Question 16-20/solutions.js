const areAllCharactersUnique = str => {
    const charSet = new Set();
    for (const char of str) {
        if (!charSet.has(char)) {
            charSet.add(char);
        } else return false;
    }

    return true;
}

const findFirstNonRepeatingCharacter = str => {
    const charCount = new Map();
    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (let x of charCount) {
        if (x[1] === 1) {
            return x[0];
        }
    }

    return null;
}

const numSimulations = () => {
    return Math.floor(Math.random() * 6 + 1);
}


const diceGameSimulation = num => {
    const results = [];
    for (x = 0; x < num; x++) {
        dice1 = numSimulations();
        dice2 = numSimulations();
        sum = dice1 + dice2;
        if (sum === 7 || sum === 11) {
            result = 'win';
        } else if (sum === 2 || sum === 3 || sum === 12) {
            result = 'lose';
        } else result = 'roll again';

        results.push({ dice1, dice2, sum, result });
    }

    return results;
}

const formatPhoneNumber = arr => {
    const zipCode = arr.slice(0, 3).join('');
    const streetCode = arr.slice(3, 6).join('');
    const uniqCode = arr.slice(6).join('');

    return `(${zipCode}) ${streetCode}-${uniqCode}`
}

const validateEmail = str => {
    const pattern = /^[A-Za-z0-9._]+@[A-Za-z.]+\.[A-Za-z]{2,}$/;
    return pattern.test(str);
}