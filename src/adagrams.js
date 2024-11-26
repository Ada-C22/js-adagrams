export const drawLetters = () => {
  const letterPool = {
    'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2, 'G': 3,
    'H': 2, 'I': 9, 'J': 1, 'K': 1, 'L': 4, 'M': 2, 'N': 6,
    'O': 8, 'P': 2, 'Q': 1, 'R': 6, 'S': 4, 'T': 6, 'U': 4,
    'V': 2, 'W': 2, 'X': 1, 'Y': 2, 'Z': 1
};

// Create a list of letters based on the pool
let lettersList = [];
for (const [letter, count] of Object.entries(letterPool)) {
    for (let i = 0; i < count; i++) {
        lettersList.push(letter);
    }
}

// Generate a hand of 10 random letters
let hand = [];
let temporaryLettersList = [...lettersList];

for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * temporaryLettersList.length);

    // Remove the letter from the list
    const randomLetter = temporaryLettersList.splice(randomIndex, 1)[0];
    hand.push(randomLetter);
}

return hand;
  // Implement this method for wave 1
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  // Loop through each letter in the input string
  for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    
    // Check if the letter is in lettersInHand
    if (!lettersInHand.includes(letter)) {
      return false; // Return false if any letter is not in the hand
    }
    
    // If the letter is in the hand, remove it from the hand (so it can't be reused)
    // This ensures that a letter can only be used as many times as it appears in the hand
    const index = lettersInHand.indexOf(letter);
    lettersInHand.splice(index, 1); // Remove the letter from the hand
  }

  // If we made it here, it means all letters in input are available in the hand
  return true;
};







export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
