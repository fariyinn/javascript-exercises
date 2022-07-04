const removeFromArray = function(...allArguments) {
  const initialArray = allArguments[0];
  return initialArray.filter(item => !allArguments.includes(item))
}

// Do not edit below this line
module.exports = removeFromArray;