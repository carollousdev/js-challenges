// #QUESTION6 | TITLE CASE
const titleCase = string => {
    const arr = string.toLowerCase().split(' ');

    const index = arr.map((x) => {
        return x.split('')[0].toUpperCase() + x.slice(1);
    })

    return index.join(' ');
}

// #QUESTION7 | REVERSE STRING
const reverseString = string => {
    let text = "";
    for (x = string.length - 1; x >= 0; x--) {
        text += string[x];
    }

    return text;
}

// #QUESTION8 | IS PALINDROME
const isPalindrome = string => {
    let palindrome = '';
    for (x = 0; x < string.length; x++) {
        if (string[x] === string[string.length - 1 - x]) {
            palindrome += string[x];
        }
    }

    return palindrome === string ?? false;
}

// #QUESTION9 | COUNT VOWELS
const countVowels = string => {
    const array = ['a', 'i', 'u', 'e', 'o'];
    let i = 0;
    for (x = 0; x < string.length; x++) {
        if (array.includes(string[x])) {
            i++;
        }
    }

    return i;
}

// #QUESTION10 | REMOVE DUPLICATES
const removeDuplicates = array => {
    const row = [];
    for (x = 0; x < array.length; x++) {
        if (!row.includes(array[x])) {
            row.push(array[x]);
        }
    }

    return row;
}

