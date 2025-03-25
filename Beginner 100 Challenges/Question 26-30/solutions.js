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

test("Title Case | Collection of 2025 Javascript Testing", () => {
    expect(titleCase("I'm a little tea pot")).toBe("I'm A Little Tea Pot");
    expect(titleCase("sHoRt AnD sToUt")).toBe("Short And Stout");
    expect(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).toBe(
        "Here Is My Handle Here Is My Spout"
    );
});

test("Reverse String | Collection of 2025 Javascript Testing", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("world")).toBe("dlrow");
    expect(reverseString("")).toBe("");
});

test("Is Palindrome | Collection of 2025 Javascript Testing", () => {
    expect(isPalindrome("madam")).toBe(true);
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("")).toBe(true);
});

test("Count Vowels | Collection of 2025 Javascript Testing", () => {
    expect(countVowels("hello")).toBe(2);
    expect(countVowels("why")).toBe(0);
    expect(countVowels("mississippi")).toBe(4);
});

test("Remove Duplicates | Collection of 2025 Javascript Testing", () => {
    expect(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual([1]);
    expect(removeDuplicates([1, 2, 3, 4, 5, true, 1, 'hello', 2, 3, 'hello', true])).toEqual([1, 2, 3, 4, 5, true, 'hello']);
});