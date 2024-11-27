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
    const LETTER_SCORES = {
        'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1,
        'F': 4, 'G': 2, 'H': 4, 'I': 1, 'J': 8,
        'K': 5, 'L': 1, 'M': 3, 'N': 1, 'O': 1,
        'P': 3, 'Q': 10, 'R': 1, 'S': 1, 'T': 1,
        'U': 1, 'V': 4, 'W': 4, 'X': 8, 'Y': 4, 'Z': 10
    };

    let totalPoints = 0;

    for (const letter of word.toUpperCase()) {
        if (LETTER_SCORES[letter]) {
            totalPoints += LETTER_SCORES[letter];
        }
    }

    if (word.length >= 7 && word.length <= 10) {
        totalPoints += 8;
    }

    return totalPoints;
}

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
    let winningWord = '';
    let winningScore = 0;

    for (let word of words) {
        let score = scoreWord(word);

        if (winningScore === score) {
              if (word.length === 10 && winningWord.length !== 10){
                winningWord = word;
              }else if (word.length < winningWord.length && winningWord.length !== 10){
                winningWord = word;
              }   
            } else if (winningScore < score){
              winningScore = score
              winningWord = word
            }
          }
          return {word: winningWord, score: winningScore}
        };