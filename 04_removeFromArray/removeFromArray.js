const removeFromArray = function (myArray, ...args) {
  return myArray.filter((value) => !args.includes(value));
  //could've used for loop and push for every non-args
};

// Do not edit below this line
module.exports = removeFromArray;
