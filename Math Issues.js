Math.round = function (number) {
  let string = number.toString();
  let array = string.split('.');

  if (array.length === 1) {
    return number;
  } else {
    let decimals = array[1]
    if (Number(decimals.split('')[0]) < 5) {
      return Number(array[0]);
    } else {
      return Number(array[0]) + 1;
    }
  }
};

Math.ceil = function (number) {
  let string = number.toString()
  let array = string.split('.')
  if (array.length === 1) {
    return number;
  } else {
    return Number(array[0]) + 1
  }
};

Math.floor = function (number) {
  let string = number.toString()
  let array = string.split('.')
  if (array.length === 1) {
    return number;
  } else {
    return Number(array[0]);
  }
};