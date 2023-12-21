// Generating a random number within the range of min to max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage of the function to get a random number between 1 and 10
let randomNumber = getRandomNumber(1, 10);
console.log(randomNumber);
