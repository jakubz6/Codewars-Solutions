function nextBigger(n){
  n = String(n).split("").map(Number);
  let len = n.length;
  let i, j;

  for (i = len - 2; i >= 0; i--) {
    if (n[i] < n[i + 1]) {
      break;
    }
  }

  if (i < 0) {
    return -1;
  } else {
    for (j = len - 1; j > i; j--) {
      if (n[j] > n[i]) {
        break;
      }
    }

    let temp = n[i];
    n[i] = n[j];
    n[j] = temp;

    let tempArr = n.slice(i + 1).reverse();
    n.splice(i + 1, len, ...tempArr);
  }

  return Number(n.join(""));
}