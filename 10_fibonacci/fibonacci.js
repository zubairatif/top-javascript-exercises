const fibonacci = function (count) {
  count = parseInt(count);
  let list = [];
  if (count < 0) return "OOPS";
  if (count === 0) return 0;
  for (let i = 1; i < count; i++) {
    if (list.length < 2) {
      list.push(1);
    } else {
      list.push(list[i - 2] + list[i - 1]);
    }
  }
  return list[count - 1];

  //   Official Version
  // let a = 0;
  // let b = 1;
  // for (let i = 1; i < count; i++) {
  //   const temp = b;
  //   b = a + b;
  //   a = temp;
  // }
  // return b;
};

// Do not edit below this line
module.exports = fibonacci;
