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
}

export const drawRandomLetter = (pool) => {
  const randomIndex = Math.floor(Math.random() * pool.length);
  const letter = pool[randomIndex];

  pool.splice(randomIndex, 1);

  return letter;
}