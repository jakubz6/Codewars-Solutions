function sumStrings(a, b) {
  let smaller = a.toString().length > b.toString().length ? b : a;
  let bigger = a.toString().length > b.toString().length ? a : b;
  let toAdd = 0;
  let additionResult = [];

  let biggerCut = bigger.slice(bigger.length - smaller.length, bigger.length);
  let biggerRest = bigger.slice(0, bigger.length - smaller.length);

  for (let i = biggerCut.length - 1; i >= 0; i--) {
    let val = (parseInt(smaller[i]) + parseInt(biggerCut[i]) + toAdd).toString();
    if (val.length > 1) {
      if (bigger.length > biggerCut && i === 0) {
        toAdd = parseInt(val[val.length - 2]);
        additionResult.unshift(val[val.length - 1]);
      } else if (bigger.length === biggerCut.length && i === 0) {
        toAdd = 0;
        additionResult.unshift(val);
      } else {
        toAdd = parseInt(val[val.length - 2]);
        additionResult.unshift(val[val.length - 1]);
      }
    } else {
      toAdd = 0;
      additionResult.unshift(val);
    }
  }

  for (let i = biggerRest.length - 1; i >= 0; i--) {
    let val = (parseInt(biggerRest[i]) + toAdd).toString();
    if (val.length > 1) {
      if (i === 0) {
        additionResult.unshift(val)
      } else {
        toAdd = parseInt(val[val.length - 2]);
        additionResult.unshift(val[val.length - 1]);
      }
    } else {
      toAdd = 0;
      additionResult.unshift(val)
    }
  }
  return additionResult.join('').replace(/^0+/, '');
}