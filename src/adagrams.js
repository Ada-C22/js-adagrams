export const drawLetters = () => {
  // Implement this method for wave 1
    const LETTER_POOL = {
        'A': 9,
        'B': 2,
        'C': 2,
        'D': 4,
        'E': 12,
        'F': 2,
        'G': 3,
        'H': 2,
        'I': 9,
        'J': 1,
        'K': 1,
        'L': 4,
        'M': 2,
        'N': 6,
        'O': 8,
        'P': 2,
        'Q': 1,
        'R': 6,
        'S': 4,
        'T': 6,
        'U': 4,
        'V': 2,
        'W': 2,
        'X': 1,
        'Y': 2,
        'Z': 1
    };

    const myDictionary = {};
    const myList = [];
    const letters = Object.keys(LETTER_POOL);

    while (Object.keys(myDictionary).length < 10) {
        const letter = letters[Math.floor(Math.random() * letters.length)];
        if (myDictionary[letter]) {
            if (myDictionary[letter] < LETTER_POOL[letter]) {
                myDictionary[letter]++;
            }
        } else {
            myDictionary[letter] = 1;
        }
    }

    for (const key in myDictionary) {
        myList.push(key);
    }

    return myList;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
    const wordDictionary = {};
    for (const letter of input.toUpperCase()) {
        if (wordDictionary[letter]) {
            wordDictionary[letter] += 1;
        } else {
            wordDictionary[letter] = 1;
        }
    }
    for (const letter of lettersInHand) {
        if (wordDictionary[letter]) {
            wordDictionary[letter] -= 1;
        }
    }

    return Object.values(wordDictionary).reduce((sum, value) => sum + value, 0) === 0;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
