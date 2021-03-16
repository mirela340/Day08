// Only change code below this line

function randomRangeNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  }
  randomRangeNumber(7, 50);
  console.log(randomRangeNumber(3, 10));
  
  // Only change code above this line
  module.exports = randomRangeNumber;