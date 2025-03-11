export function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
}

export function reverseString(string) {
  if (string === "") return "";
  return reverseString(string.slice(1)) + string.slice(0, 1);
}

export const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    return a / b;
  },
  multiply: (a, b) => {
    return a * b;
  },
};

export function caesarCipher(string, shift) {
  shift = shift % 26;
  let resultString = "";
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];

  for (let letter of string) {
    if (isSymbolOrNumber(letter)) {
      resultString += letter;
      continue;
    }
    let lowerCase = letter === letter.toLowerCase();
    if (lowerCase) {
      const index = (alphabet.indexOf(letter) + shift) % 26;
      resultString += alphabet[index];
    } else {
      letter = letter.toLowerCase();
      const index = (alphabet.indexOf(letter) + shift) % 26;
      resultString += alphabet[index].toUpperCase();
    }
  }

  return resultString;
}

function isSymbolOrNumber(letter) {
  return /[^a-zA-Z]/.test(letter);
}

export function analyzeArray(array) {
  const result = {};

  result.average = calcAverage(array);
  result.min = calcMin(array);
  result.max = calcMax(array);
  result.length = calcLength(array);

  return result;
}

function calcAverage(array) {
  let sum = array.reduce((acc, current) => acc + current, 0);
  return sum / array.length;
}

function calcMin(array) {
  return Math.min(...array);
}

function calcMax(array) {
  return Math.max(...array);
}

function calcLength(array) {
  return array.length;
}
