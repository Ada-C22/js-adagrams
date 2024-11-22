const NUM_DRAWN = 10;

export const drawLetters = () => {
    const lettersDrawn = [];
    let letterPool = buildLetterPool();

    for (let i = 0; i < NUM_DRAWN; i++) {
        const randomIndex = Math.floor(Math.random() * letterPool.length);
        [letterPool[randomIndex], letterPool[letterPool.length - 1]] = 
            [letterPool[letterPool.length - 1], letterPool[randomIndex]];
        const selectedLetter = letterPool.pop();
        lettersDrawn.push(selectedLetter);
    }

    return lettersDrawn;
};

const buildLetterPool = () => {
    const LETTER_POOL = {
        'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2, 'G': 3, 'H': 2, 
        'I': 9, 'J': 1, 'K': 1, 'L': 4, 'M': 2, 'N': 6, 'O': 8, 'P': 2, 
        'Q': 1, 'R': 6, 'S': 4, 'T': 6, 'U': 4, 'V': 2, 'W': 2, 'X': 1, 
        'Y': 2, 'Z': 1
    };

    return Object.entries(LETTER_POOL).flatMap(([letter, freq]) => 
        Array(freq).fill(letter)
    );
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
