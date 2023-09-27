function nextSmaller(n) {
  n = String(n).split("").map(Number);
  let i, j;

  i = n.length - 2;
  while (i >= 0 && n[i] <= n[i + 1]) {
    i--;
  }

  if (i === -1) {
    return -1;
  }

  j = n.length - 1;
  while (n[j] >= n[i]) {
    j--;
  }

  let temp = n[i];
  n[i] = n[j];
  n[j] = temp;

  let l = i + 1;
  let r = n.length - 1;
  while (l < r) {
    temp = n[l];
    n[l] = n[r];
    n[r] = temp;
    l++;
    r--;
  }
  
  if (/^0+/.test(n)) {
    return -1;
  }

  return Number(n.join(""))
}