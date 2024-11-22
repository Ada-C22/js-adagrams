import letterPool  from './letterPool.js';
import scoreChart from './scoreChart.js';

console.log(scoreChart)
console.log(letterPool)
export const drawLetters = () => {
  // Implement this method for wave 1
  let hand = []
  let letterCounts = { ...letterPool};
  let availabeLetters = [];
  while (hand.length <10 ){
    

   
    for (let letter in letterCounts){
      if (letterCounts[letter]> 0) {
        availabeLetters.push(letter);
      }
    }
    if (availabeLetters.length === 0){
      break
    }
    let index = Math.floor(Math.random() * availabeLetters.length);
    let chooseLetter = availabeLetters[index]
    letterCounts[chooseLetter] -=1;
    hand.push(chooseLetter)
  }
  return hand; 
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
