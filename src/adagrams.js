const letterPool = {
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
}

const scoreObj = {
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
  Z: 10
}

export const drawLetters = () => {
const letterArray = [];
for (const [letter, freq] of Object.entries(letterPool)) {
  for (let num = 0; num < freq; num++) {
    letterArray.push(letter);
  };
}
// console.log(letterArray)

const hand = [];
const letterArrayLen = letterArray.length;
const letterCount  = {};

while (hand.length < 10 ){
  let index = Math.floor(Math.random()*letterArrayLen);
  let newLetter = letterArray[index];
  if (!letterCount[newLetter]) {
    letterCount[newLetter] = 0;
  }
  
  if (letterCount[newLetter] < letterPool[newLetter]){
    hand.push(newLetter);
    letterCount[newLetter] +=1;
  }
}
console.log(hand)
return hand;
};
// Implement this method for wave 1

export const usesAvailableLetters = (input, lettersInHand) => {
  let inputUp = input.toUpperCase();
  // create an object with frequency of the letters in the input
  // create an object with frequency of the letters in the lettersInHand
  const inputCount = {};
  const letterInHandCount = {};

  for (const letter of inputUp) {
    if(!inputCount[letter]){
      inputCount[letter] = 1;
    } else {
      inputCount[letter] +=1; 
    }
  }

  for (const char of lettersInHand) {
    if (!letterInHandCount[char]) {
      letterInHandCount[char] = 1;
    } else {
      letterInHandCount[char] +=1;
    }
  }
// compare if the letter from input is in lettersInHand and it's frequency is not higher
  for (const inputLetter of inputUp) {
    if (!letterInHandCount[inputLetter] || inputCount[inputLetter] > letterInHandCount[inputLetter]){
      return false;
    } 
  }
  return true;  
  };
  
  // Implement this method for wave 2


export const scoreWord = (word) => {  
  if (word.length === 0) return 0; 
  const wordUp = word.toUpperCase();
  let score =0;
  for (const letter of wordUp) {
    score += scoreObj[letter]
  }
  if (wordUp.length >=7){
    score += 8;
  }   
  return score;

  // Implement this method for wave 3
};


export const highestScoreFrom = (words) => {
const wordScoreObj = {};
for (const word of words) {
  wordScoreObj[word] = scoreWord(word);
}
let maxScore = 0;
let maxScoreWords = [];
for (const [word, wScore] of Object.entries(wordScoreObj)) {
  if (wScore > maxScore) {
    maxScore = wScore;
    maxScoreWords = [word];
  } else if (maxScore === wScore) {
    maxScoreWords.push(word);
  }
}
if (maxScoreWords.length === 1){
  return { word: maxScoreWords[0], score: maxScore };
} else {
    let bestScoreWord = maxScoreWords[0];
    for (const maxWord of maxScoreWords){
      if (maxWord.length === 10){
        bestScoreWord = maxWord; 
         break;
      } else if (maxWord.length < bestScoreWord.length) {
        bestScoreWord = maxWord;
      } 
    } 
    return { word: bestScoreWord, score: maxScore};
  } 
};
