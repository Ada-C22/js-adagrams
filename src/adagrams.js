

export let LETTER_OBJ = {
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
    'Z': 1,
};

export let letterArr = () => {
  let allLetters = [];
  for (const [letter, freq] of Object.entries(LETTER_OBJ)){
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
  

export const makeScoreChart = () =>{
  
  const oneValLetters = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
  const twoValLetters = ['D', 'G'];
  const threeValLetters = ['B', 'C', 'M', 'P'];
  const fourValLetters = ['F', 'H', 'V', 'W', 'Y'];
  const fiveValLetters = ['K'];
  const eightValLetters = ['J', 'X'];
  const tenValLetters = ['Q', 'Z'];

  const scoreMap = new Map();
  scoreMap.set(oneValLetters, 1);
  scoreMap.set(twoValLetters, 2);
  scoreMap.set(threeValLetters, 3);
  scoreMap.set(fourValLetters, 4);
  scoreMap.set(fiveValLetters, 5);
  scoreMap.set(eightValLetters, 8);
  scoreMap.set(tenValLetters, 10);

  return scoreMap;
}

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const scoreChart = makeScoreChart();
  const bonus = [7, 8, 9, 10];
  let score = 0;

  if (word){
    if (bonus.includes(word.length)) {
      score += 8;
    }
  
    for (const letter of word){
    loop2: // loop label to break once condition met!
      for (const [letterArr, value] of scoreChart.entries()){
        if (letterArr.includes(letter.toUpperCase())){
          score += value;
          break loop2;
        }
      }
    }
  
    return score;
  }

  else {
    return 0;
    
  }
  
};



export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  


};
