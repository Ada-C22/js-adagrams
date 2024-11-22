export const drawLetters = () => {
  const distOfLetters = {
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
  
  const availableLetters = [];
  const randomDrawnLetters = [];

  for (const letter in distOfLetters) {
    for (let i = 0; i < distOfLetters[letter]; i++) {
        availableLetters.push(letter)
    }
  }
  // Draw 10 letters
  for (let i = 0; i < 10; i++) {
    // picks random number between 0 and total number of elements
    // Math.random() pick decimal number and floor is used to round it up
    const randomIndex = Math.floor(Math.random() * availableLetters.length);
    const removedLetter = availableLetters.splice(randomIndex, 1)[0];
    randomDrawnLetters.push(removedLetter);
  }

  return randomDrawnLetters;
};
  

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
