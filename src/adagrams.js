export const drawLetters = () => {
  // Implement this method for wave 1
  // create an object to store letter
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
  // change object to array
  let letterList = [];
  for (let [letter, count] of Object.entries(letterDist)) {
  letterList.push(...Array(count).fill(letter));
  }
  // defind result and copy a temporary array
  let result = [];
  const tempList = [...letterList];
  // use loop to Random pick 10 letter 
  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * tempList.length);
    // append letter in result and drop uesd one
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

  // create new Object for lettersInHand  
  let letterCount = {};
  for (let letter of inHandUpper) {
    if (letter in letterCount) {
    letterCount[letter] += 1;
  } else {
    letterCount[letter] = 1;
  }  
}
  // create new Object for input
  let newInput = {};
  for (let letter of inputUpper) {
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
  // create an object to store letter and values 
  const letterValues = {
    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z: 10
  };
  let score = 0;

  if (!word || word.length === 0) {
    return score;
  }
  for (let letter of word) {
    score += letterValues[letter.toUpperCase()];
    }
    if (word.length >= 7) {
      score += 8;}
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  // create an object store word and score
  let WordAndScore = {};
  let winScore= 0;
  let winWord = '';
  for (let word of words) {
    WordAndScore[word] = scoreWord(word);
  };
  for (let [key,values] of Object.entries(WordAndScore)) {
    if (values > winScore) {
      winScore = values;
      winWord = key;
    } else if (values === winScore) {
      if (key.length === 10 && winWord.length !== 10) {
        winWord = key;
      } else if (key.length < winWord.length && key.length !== 10 && winWord.length !== 10) {
        winWord = key;
      }
    }
  }
  return { word: winWord, score: winScore };
};