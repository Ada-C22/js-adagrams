

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




/*********** Helper Functions ****************/
export let letterArr = () => {
  let allLetters = [];
  for (const [letter, freq] of Object.entries(LETTER_POOL)){
    let currentLetterArr = new Array(freq).fill(letter);
    // Spread syntax ...
    allLetters.push(...currentLetterArr);
    
  }
  return allLetters;
};



export const drawLetters = () => {
  // Implement this method for wave 1
  let currentLetterBank = letterArr();
  const deck = [];

  // SHUFFLE THE LIST OF ALL LETTERS - AKA shuffle the current letter bank
  // Fisher-Yates Shuffle Algorithm
  // Reference: https://www.tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript
  
  for (let index = currentLetterBank.length-1; index > 0; index--){
    const randomIndex = Math.floor(Math.random() * (index+1));
    
    const temp = currentLetterBank[index];
    currentLetterBank[index] = currentLetterBank[randomIndex];
    currentLetterBank[randomIndex] = temp;
  }


  while (deck.length < 10) {
    // Randomly select an index from the shuffled list of all letters
    const randoIdx = Math.floor(Math.random() * currentLetterBank.length);
    const randoLetter = currentLetterBank[randoIdx];
    deck.push(randoLetter);
    currentLetterBank.splice(randoIdx, 1);
  }

  return deck;
};


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let newList = [...lettersInHand];
  const lastLetter = input.length-1;
  const letterCheck = newList.includes(input[lastLetter]);
  const idx = lettersInHand.indexOf(input[lastLetter]);

  /* Base Cases */
  if (!letterCheck) {
    return false;
  }

  else if (letterCheck && input.length == 1) {
    newList.splice(idx, 1);
    return true;
  }

  /* Recursive Case */
  else if (letterCheck && input.length != 1) {
    newList.splice(idx, 1);
    return usesAvailableLetters(input.slice(0, lastLetter), newList);
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

  // if (bonus.includes(word.length)) {
  //   score += 8;
  // }

  for (let letter of word){
   letter = letter.toUpperCase();
    if (letter == ' '){
      return 0;
    }
    else if (scoreChart[letter]){
      score += scoreChart[letter];
    }
  }
  return (!bonus.includes(word.length))? score : score += 8;
};



export const highestScoreFrom = (words) => {

  let currentHiScore = scoreWord(words[0]);
  let currentWinner = words[0];
  
  for (let i = 1; i < words.length; i++) {
    const currentScore = scoreWord(words[i]);
    const currentWord = words[i];

    // Short circuiting the tie-break
    if (currentHiScore === currentScore && currentWinner.length < 10 && ((currentWord.length === 10 || currentWord.length < 10 && (currentWinner.length > currentWord.length)) )){
      currentHiScore = currentScore;
      currentWinner = currentWord;
    }

    else if (currentScore > currentHiScore){
      currentHiScore = currentScore;
      currentWinner = currentWord;
    }
  }

  return {word: currentWinner, score: currentHiScore};

};
