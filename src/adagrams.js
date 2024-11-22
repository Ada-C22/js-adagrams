export const drawLetters = () => {
  // Implement this method for wave 1
  const letterDist = {
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
    Z: 1
  };

  let letterList = []
  for (let [letter, count] of Object.entries(letterDist)) {
  letterList.push(...Array(count).fill(letter));
  }

  let result = []
  const tempList = [...letterList];

  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * tempList.length);
    result.push(tempList[randomIndex]);
    tempList.splice(randomIndex, 1);
  }
  return result;

};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  // change to uppercase
  const inHandUpper = lettersInHand.map(letter => letter.toUpperCase());
  const inputUpper = input.toUpperCase();

  // create Object for lettersInHand  
  let letterCount = {};
  for (let letter of inHandUpper) {
    if (letter in letterCount) {
    letterCount[letter] += 1;
  } else {
    letterCount[letter] = 1;
  }  
}
  // create Object for input
  let newInput = {}
  for (const letter of inputUpper) {
    if (letter in newInput) {
      newInput[letter] += 1;
    } else {
      newInput[letter] = 1;
    }
  }
  // compare if input total match lettersInHand
  let result = false;
  for (let [letter, count] of Object.entries(newInput)) {    
    if ((letter in letterCount) && (letterCount[letter] >= count)) {
      result = true;
    } else {
      result = false;
      break;
    }
  }
  return result;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
