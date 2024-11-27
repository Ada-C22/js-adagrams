export const drawLetters = () => {
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

  const pool = [];
  for(const letter in letterPool) {
    for (let i = 0; i < letterPool[letter]; i++) {
      pool.push(letter);
    }
  }

  for (let i = pool.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[randomIndex]] = [pool[randomIndex], pool[i]];
  }

  const hand =pool.slice(0, 10);

  return hand; 
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const count = [...lettersInHand];

  for (const letter of input) {
    const index = count.indexOf(letter);

    if (index === -1) {
      return false;
    } else {
      count.splice(index, 1);
    }
  }
  return true;
};

export const scoreWord = (word) => {
  if (!word) {
    return 0
  }

  const scoreChart = {
    'A': 1,
    'B': 3,
    'C': 3,
    'D': 2,
    'E': 1,
    'F': 4,
    'G': 2,
    'H': 4,
    'I': 1,
    'J': 8,
    'K': 5,
    'L': 1,
    'M': 3,
    'N': 1,
    'O': 1,
    'P': 3,
    'Q': 10,
    'R': 1,
    'S': 1,
    'T': 1,
    'U': 1,
    'V': 4,
    'W': 4,
    'X': 8,
    'Y': 4,
    'Z': 10
  }

  let score = 0;
  for (const char of word.toUpperCase()) {
    score += scoreChart[char] || 0;
  }

  if (word.length >= 7 && word.length <= 10) {
    score += 8;
  }

  return score
};

export const highestScoreFrom = (words) => {
  let bestWord = null;
  let highestScore = 0;

  for (const word of words) {
    const score = scoreWord(word);

    if (
      score > highestScore ||
      (score === highestScore &&
        (word.length === 10 ||
          (bestWord && word.length < bestWord.length && bestWord.length !== 10)))
    ) {
      highestScore = score;
      bestWord = word;
    }
  }
  const tiedWords = words.filter((word) => scoreWord(word) === highestScore);

  if (tiedWords.length > 1) {
    bestWord = tiedWords.reduce((best, word) => {
      if (best === null) return word;

      if (word.length === 10 && best.length !== 10) {
        return word; 
      }
      if (best.length === 10 && word.length !== 10) {
        return best; 
      }
      if (word.length < best.length) {
        return word; 
      }
      if (word.length === best.length) {
        return best; 
      }
      return best;
    }, null);
  }

  return { word: bestWord, score: highestScore };
};


