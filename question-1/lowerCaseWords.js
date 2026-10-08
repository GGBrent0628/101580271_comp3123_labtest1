// Question 1: ES6 Features
// lowerCaseWords takes a mixed array, filters out non-strings,
// lower-cases the remaining words, and returns a Promise.

const lowerCaseWords = (mixedArray) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(mixedArray)) {
      reject(new Error('Input must be an array'));
      return;
    }

    const words = mixedArray
      .filter((item) => typeof item === 'string')
      .map((word) => word.toLowerCase());

    resolve(words);
  });
};

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));
