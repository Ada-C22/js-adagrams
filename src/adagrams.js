const LETTER_POOL = {
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

  // Create a copy of LETTER_POOl
  const copiedPool= { ...LETTER_POOL };

  // Create an empty hand to place the 10 letters
  let hand = []
  while(hand.length < 10){
    const keys = Object.keys(copiedPool); // Get an array of keys
    const randomIndex = Math.floor(Math.random() * keys.length); // Generate a random index
    let randomKey = keys[randomIndex]; // Get the key at the random index

    // Check that the randomKey is still available
    if (copiedPool[randomKey] > 0){
      hand.push(randomKey); // If availabe, add it to hand
      copiedPool[randomKey]--; // Decrease the value of randomKey
    }
  }
  return hand;
};


export const usesAvailableLetters = (input, lettersInHand) => {

  // Ensure input and lettersInHand matches 
  const word = input.toUpperCase();
  let upperCaseHand = lettersInHand.map(item => item.toUpperCase());


  // Check every letter in word is in the hand and ..
  for (let char of word){
    const index = upperCaseHand.indexOf(char); // returns -1 if not char
    if (index === -1){
      return false;
    }
    // remove it from the hand
    upperCaseHand.splice(index,1);
  }
  return true;
};