const sumAll = function(startNumber, endNumber) {
  if (endNumber < startNumber) {
    let holder = endNumber;
    endNumber = startNumber;
    startNumber = holder;
  }

  if (startNumber < 0 || endNumber < 0) {
    return 'ERROR';
  }

  if (Number.isInteger(startNumber) == false || Number.isInteger(endNumber) == false) {
    return 'ERROR';
  }

  let sum = 0;

  for(let i = startNumber; i <= endNumber; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
