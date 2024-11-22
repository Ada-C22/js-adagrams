const LETTERPOOL = {
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

const LETTERPOINTS = {
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
  'W': 4,
  'Y': 4,
  'K': 5,
  'J': 8,
  'X': 8,
  'Q': 10,
  'Z': 10
}

const createPool = letterPool => {
  let newLetterPool = '';

  for (const [letter, frequency] of Object.entries(letterPool)) {
    newLetterPool += letter.repeat(frequency);
  };

  return newLetterPool;
}

export const drawLetters = () => {
  let letterPool = createPool(LETTERPOOL);
  let chosenLetters = [];

  while (chosenLetters.length < 10) {
    let randomIndex = Math.floor(Math.random() * 26);
    let randomLetter = letterPool[randomIndex];

    if (letterPool.includes(randomLetter)) {
      chosenLetters.push(randomLetter)
      letterPool = letterPool.replace(randomLetter, '');
    }
  }
  return chosenLetters;
  
};

export const usesAvailableLetters = (input, lettersInHand) => {
  if (input.length > lettersInHand.length) {
    return false;
  }

  let handOfLetters = [...lettersInHand];

  input = input.toUpperCase();

  for (let letter of input) {
    if (!handOfLetters.includes(letter) || !handOfLetters) {
      return false;
    }
    const letterIndex = handOfLetters.indexOf(letter);
    handOfLetters.splice(letterIndex, 1);
  };
  return true;
};

/*
  score = 0

    word_uppercase = word.upper()
    for letter in word_uppercase:
        for letters, points in LETTER_POINTS.items():
            if letter in letters:
                score += points
    
    if len(word) in range(7,11):
        score += 8

    return score
*/

export const scoreWord = (word) => {
  if (!word) {
    return 0;
  }
  let score = 0;

  for (const letter of word.toUpperCase()) {
    score += LETTERPOINTS[letter];
  }
  
  if (word.length > 6) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
