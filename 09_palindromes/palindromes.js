const palindromes = function (str) {
  let refinedStr = str.toLowerCase().replace(/[\W_]/g, "");
  return refinedStr.split("").reverse().join("") === refinedStr;
};

// Do not edit below this line
module.exports = palindromes;
