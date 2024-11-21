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
console.log(letterPool)
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
