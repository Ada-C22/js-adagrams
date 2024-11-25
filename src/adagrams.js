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
}

export const drawLetters = () => {
  const allLetters = [];
  
  // pushed all letters into on arr. 
  for (const [letter, count] of Object.entries(letterPool)) {
    for (let i = 0; i < count; i++) {
      allLetters.push(letter);
    }
  }

  // shuffle and select
  const hand = []
  const handSize = 10
  while (hand.length < handSize) {
    const randomIndex = Math.floor(Math.random() * allLetters.length); // math.floor whole number between 0 to length
    hand.push(allLetters[randomIndex]);
    allLetters.splice(randomIndex,1); // remove used letter.
  }
  return hand;
}

export const usesAvailableLetters = (input, lettersInHand) => {
  // count the letter freq in letters in hand
  const count = {};
  for (const letter of lettersInHand) {
    if (count[letter]) {
      count[letter]++;
    } else {
      count[letter] = 1;
    }
  } 
  
  for (const letter of input) {
    if (letter in count) {
      if (count[letter] > 0) {
          count[letter]--;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

  return true;
}


const scoreChart = {
  'A': 1,
  'E': 1,
  'I': 1,
  'O': 1,
  'U': 1,
  'L': 1,
  'N': 1,
  'R': 1,
  'S': 1,
  'T': 1,
  'D': 2,
  'G': 2,
  'B': 3,
  'C': 3,
  'M': 3,
  'P': 3,
  'F': 4,
  'H': 4,
  'V': 4,
  'W': 4,
  'Y': 4,
  'K': 5,
  'J': 8,
  'X': 8,
  'Q': 10,
  'Z': 10,
}

export const scoreWord = (word) => {
  let score = 0;
  
  if (word.length >= 7) {
    score += 8;
  }

  for (let letter of word.toUpperCase()) {
    
    if (letter in scoreChart) {
      score += scoreChart[letter];
    }
  }

  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
