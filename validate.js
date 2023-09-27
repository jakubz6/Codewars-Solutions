function isEven(n) {
  return n % 2 === 0 ? true : false;
}

function sumEven(num) {
  return num.split('').map(function (d, i) {
    return isEven(i) ? d * 2 : +d;
  })
}

function sumOdd(num) {
  return num.split('').map(function (d, i) {
    return !isEven(i) ? d * 2 : +d;
  })
}

function reduce(arr) {
  return arr.map(function (d, i) {
    if (+d > 9)
      return d.toString().split('').reduce(function (a, b) { return a + +b }, 0);
    else
      return d;
  })
}

function validate(num) {
  if (!num) return;

  if (typeof num !== 'string') num = num.toString();
  
  let multi;

  if (isEven(num.length)) multi = sumEven(num);

  if (!isEven(num.length)) multi = sumOdd(num);

  let reduced = reduce(multi);

  let sumed = reduced.reduce(function (a, b) { return a + b }, 0)

  return sumed % 10 === 0 ? true : false
}