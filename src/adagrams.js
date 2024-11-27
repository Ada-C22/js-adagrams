// import { random } from "core-js/core/number";

export const drawLetters = () => {
                                           //  wave 1
                          // Step 1: Define the letterDistribution as an object
  const letterDistribution = {
    A: 9,
    B: 2,
    C: 2,
    D: 4,
    E: 12,
    F: 2,
    G: 3,
    H: 2,
    I: 9,
    J: 1,
    K: 1,
    L: 4,
    M: 2,
    N: 6,
    O: 8,
    P: 2,
    Q: 1,
    R: 6,
    S: 4,
    T: 6,
    U: 4,
    V: 2,
    W: 2,
    X: 1,
    Y: 2,
    Z: 1,
  };

  const letters = Object.keys(letterDistribution); // ['A', 'B', 'C', ...]
  const hand = [];
  const letterCount = { ...letterDistribution }; // Copy of the distribution ... is called the spread operator.It takes all the key-value pairs from an object (or all elements from an array) and "spreads" them into a new object (or array).


  while (hand.length < 10) {
    const randomIndex = Math.floor(Math.random() * letters.length); //  0.23*26=5.98  =>5
    const randomLetter = letters[randomIndex];

    if (letterCount[randomLetter] > 0) {
      hand.push(randomLetter);
      letterCount[randomLetter]--; // Reduce available count so -- is the decrement operator
    }
  }

  return hand;
};


                                                // Implement this method for wave 2
  export const usesAvailableLetters = (input, lettersInHand) => {
    // Step 1: Create a copy of lettersInHand to avoid modifying the original array
  const handCopy = [...lettersInHand];

  // Step 2: Iterate over each letter in the input
  for (const letter of input) {
    const index = handCopy.indexOf(letter); // Find the index of the letter in the hand copy
    if (index === -1) {
      // If the letter is not found, return false
      return false;
    } else {
      // If the letter is found, remove it from the hand copy
      handCopy.splice(index, 1);
    }
  }

  // Step 3: If all letters in the input were found, return true
  return true;
    
};

                                  // Implement this method for wave 3
export const scoreWord = (word) => {
  // Step 1: Define the score chart
  const scoreChart = {
    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z: 10,
  };

  // Step 2: Initialize total score
  let totalScore = 0;

  // Step 3: Iterate over each letter in the word
  for (const letter of word.toUpperCase()) {
    totalScore += scoreChart[letter] || 0; // Add score; default to 0 if letter not found
  }

  // Step 4: Add bonus points for word length
  if (word.length >= 7 && word.length <= 10) {
    totalScore += 8;
  }

  // Step 5: Return the total score
  return totalScore;
};


                      // Implement this method for wave 4
export const highestScoreFrom = (words) => {
  let bestWord = null; // Will hold the winning word object
  let highestScore = 0; // Track the highest score

  for (const word of words) {
    const score = scoreWord(word); // Calculate score using scoreWord from Wave 3

    // If the current word has a higher score, update the bestWord
    if (score > highestScore) {
      bestWord = { word, score };
      highestScore = score;
    } else if (score === highestScore) {
      // Tie-breaking rules
      const isCurrentWordTenLetters = word.length === 10;
      const isBestWordTenLetters = bestWord.word.length === 10;

      if (isCurrentWordTenLetters && !isBestWordTenLetters) {
        // Prefer the word with 10 letters
        bestWord = { word, score };
      } else if (
        !isCurrentWordTenLetters &&
        !isBestWordTenLetters &&
        word.length < bestWord.word.length
      ) {
        // Prefer the shorter word (if no 10-letter words involved)
        bestWord = { word, score };
      }
      // If both words are the same length and score, keep the first word
      // (which is already stored in bestWord)
    }
  }

  return bestWord;
};
