const palindromes = function (str) {
  //   let lowRegStr = str.toLowerCase().replace(/[\W_]/g, "");
  //   let reverseStr = lowRegStr.split("").reverse().join("");
  //   return reverseStr === lowRegStr;
  let refinedStr = str.toLowerCase().replace(/[\W_]/g, "");
  return (
    str.toLowerCase().replace(/[\W_]/g, "").split("").reverse().join("") ===
    refinedStr
  );
};

// Do not edit below this line
module.exports = palindromes;
