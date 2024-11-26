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
    
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
