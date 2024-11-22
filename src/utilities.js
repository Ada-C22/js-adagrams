export const NUM_LETTERS = 10;

export const createLetterPool = () => {
  const LETTER_POOL = [
    ['A', 9], ['B', 2], ['C', 2], ['D', 4], ['E', 12], ['F', 2],
    ['G', 3], ['H', 2], ['I', 9], ['J', 1], ['K', 1], ['L', 4],
    ['M', 2], ['N', 6], ['O', 8], ['P', 2], ['Q', 1], ['R', 6],
    ['S', 4], ['T', 6], ['U', 4], ['V', 2], ['W', 2], ['X', 1],
    ['Y', 2], ['Z', 1],
  ];

  const letterPool = LETTER_POOL.flatMap(([letter, frequency]) =>
    Array(frequency).fill(letter)
  );
  return letterPool;
};

export const drawRandomLetter = (pool) => {
  const randomIndex = Math.floor(Math.random() * pool.length);
  const letter = pool[randomIndex];

  pool.splice(randomIndex, 1);
  return letter;
};

export const getLetterScore = (letter) => {
  const POINT_VALUES = {
    'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2, 'H': 4,
    'I': 1, 'J': 8, 'K': 5, 'L': 1, 'M': 3, 'N': 1, 'O': 1, 'P': 3,
    'Q': 10, 'R': 1, 'S': 1, 'T': 1, 'U': 1, 'V': 4, 'W': 4, 'X': 8,
    'Y': 4, 'Z': 10
  };
  return POINT_VALUES[letter] || 0;
};

export const updateWinner = (currentData, winningData) => {
  const { currentWord, currentScore } = currentData;
  const { winningWord, winningScore } = winningData;

  if (!winningWord || currentScore > winningScore) {
    return { winningWord: currentWord, winningScore: currentScore };
  }
  if (currentScore === winningScore) {
    return { winningWord: tieBreaker(currentWord, winningWord), winningScore };
  }
  return { winningWord, winningScore };
};

export const tieBreaker = (word, winningWord) => {
  if (isMaxLength(winningWord)) {
    return winningWord;
  }
  if (isMaxLength(word, NUM_LETTERS) || word.length < winningWord.length) {
    return word;
  }
  return winningWord;
};

export const isMaxLength = (word) => word.length === NUM_LETTERS;