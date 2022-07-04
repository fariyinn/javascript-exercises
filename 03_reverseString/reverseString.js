const reverseString = function(string) {
  let splitString = string.split("");
  let reversedString = splitString.reverse();
  let finalString = reversedString.join("");
  return finalString;
};

// Do not edit below this line
module.exports = reverseString;
