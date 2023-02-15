const repeatString = function (text, times) {
  if (times < 0) return "ERROR";
  let line = "";
  for (let i = 0; i < times; i++) {
    line += text;
  }
  return line;

  //   return text.repeat(times);
};

// Do not edit below this line
module.exports = repeatString;
