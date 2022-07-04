const repeatString = function(repeatedWord, num) {
  let string = '';
  
  if (num < 0) {
    return 'ERROR';
  }

  for (let i = 0; i < num; i++) {
    string += repeatedWord;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
