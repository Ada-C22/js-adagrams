const letterPool = {
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



const letters = [
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'];

const weights = [
  9, 2, 2, 4, 12, 2, 3, 2,
  9, 1, 1, 4,  2, 6, 8, 2,
  1, 6, 4, 6,  4, 2, 2, 1,
  2, 1
];

let totalWeight=0;
for (const weight of weights) {
  totalWeight += weight;
}


const weightedRandomLetter = () => {

  const randomNum = Math.random() * totalWeight; 
  
  let currentWeight = 0;
  for (let i = 0; i < letters.length; i++) {
    currentWeight += weights[i];
    if (currentWeight >= randomNum) {
      return letters[i]
    }
  }
};


export const drawLetters = () => {
  // Implement this method for wave 1
  const drawnLetters = []
  let i=0;
  const letterFreq = {};

  while( i < 10){
    const randomLetter = weightedRandomLetter()
      if (randomLetter in letterFreq) {
        letterFreq[randomLetter] += 1;
      } else {
        letterFreq[randomLetter] = 1;
      }
    if (letterFreq[randomLetter] <= letterPool[randomLetter]){
      drawnLetters.push(randomLetter);
      i++
    }
  }
return drawnLetters
};

export const usesAvailableLetters = (input, lettersInHand) => {
 for (const letter of input){
  if (lettersInHand.includes(letter)){
    const index = lettersInHand.indexOf(letter);
    if (index !== -1) {
      lettersInHand.splice(index, 1);
    }
  } else {
    return false;
  }
  }
  return true
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};

