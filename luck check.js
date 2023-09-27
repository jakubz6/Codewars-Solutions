function luckCheck(ticket){
  if (/^\d+$/.test(ticket) === false) {
    throw 'invalid input'
  }
  const arr = [];
  const arr1 = [];
  const number = Array.from(String(ticket), Number)
  let l = number.length;
  if (l % 2 === 0) {
    l /= 2;
    for (let i = 0; i < number.length; i++) {
      if (i < l) {
        arr.push(number[i]);
      } else {
        arr1.push(number[i]);
      }
    }
  } else {
    l = ~~(l / 2);
    for (let i = 0; i < number.length; i++) {
      if (i < l) {
        arr.push(number[i]);
      } else if (i > l) {
        arr1.push(number[i]);
      }
    }
  }
  return arr.reduce((sum, curr) => sum + curr,0) === arr1.reduce((sum, curr) => sum + curr,0) ? true : false
}