

export const LETTER_POOL = {
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




/********* Helper function ****************/
export let letterArr = () => {
  let allLetters = [];
  for (const [letter, freq] of Object.entries(LETTER_POOL)){
    let currentLetterArr = new Array(freq).fill(letter);
    // Spread syntax - could also use the concat() method
    allLetters.push(...currentLetterArr);
  }
  return allLetters;
};


export const drawLetters = () => {
  // Implement this method for wave 1
  const currentLetterBank = letterArr();
  const deck = [];

  while (deck.length < 10) {
    const randoIdx = Math.floor(Math.random() * currentLetterBank.length);
    const randoLetter = currentLetterBank[randoIdx];
    deck.push(randoLetter);
    currentLetterBank.splice(randoIdx, 1);
  }

  return deck;
};


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2

  // for (let i = 0; i < input.length; i++) {
  //   let letterIdx = lettersInHand.indexOf(input[i])
  //   if (letterIdx == -1){
  //     return false;
  //   }
  //   else {
  //     lettersInHand.splice(letterIdx, 1);
  //   }
  // }
  // return true;

  const letterCheck = lettersInHand.includes(input[input.length-1]);
  const idx = lettersInHand.indexOf(input[input.length-1]);

  if (!letterCheck) {
    return false;
  }

  else if (letterCheck && input.length != 1) {

    lettersInHand.splice(idx, 1);
    return usesAvailableLetters(input.slice(0, input.length - 1), lettersInHand);
  }

  else if (letterCheck && input.length == 1) {
    lettersInHand.splice(idx, 1);
    return true;
  }
};


export const scoreWord = (word) => {
  // Implement this method for wave 3
  const scoreChart = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10,
  };

  const bonus = [7, 8, 9, 10];
  let score = 0;

  if (!word) {
    return 0;
  }

  else if (bonus.includes(word.length)) {
    score += 8;
  }

  for (let i = 0; i < word.length; i++){
    if (word[i] == ' '){
      return 0;
    }
    else if (scoreChart[word[i].toUpperCase()]){
      score += scoreChart[word[i].toUpperCase()];
    }
  }
  return score;
};



export const highestScoreFrom = (words) => {
  // Implement this method for wave 4

  // let current_letter = 0;

  

  
};
