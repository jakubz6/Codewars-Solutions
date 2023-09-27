function multiply(a, b) {
  if (a == 0 || b == 0) return '0';

  console.log(a, b)

  const arr = [];

  let count = 0;
  for (let num = b.length - 1; num >= 0; num--) {

    let sum = "";
    let rest = 0;

    for (let num1 = a.length - 1; num1 >= 0; num1--) {
      let mul = String(Number(b[num]) * Number(a[num1]) + Number(rest));

      if (mul.length > 1) {
        rest = mul[0];
        sum = mul[1] + sum;
      } else {
        sum = mul + sum;
        rest = 0;
      }
    }

    if (rest !== 0)
      sum = rest + sum;

    for (let i = 0; i < count; i++)
      sum = sum + '0';

    arr.push(sum);
    count++;
  }

  const longestNum = arr.reduce((a, b) => a.length >= b.length ? a : b).length;

  for (let i = 0; i < arr.length; i++) {
    let str = "";

    for (let j = 0; j < longestNum - arr[i].length; j++) {
      str += "0";
    }
    arr[i] = str + arr[i];
  }

  let res = "";
  let rest = 0;
  for (let i = arr[0].length - 1; i >= 0; i--) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += Number(arr[j][i]);
    }
    sum = String(sum + rest);

    if (sum.length > 1) {
      rest = Number(sum.slice(0, sum.length - 1));
      res = sum[sum.length - 1] + res;
    } else {
      res = sum + res;
      rest = 0;
    }
  }

  if (rest !== 0) {
    res = rest + res;
  }

  return res.replace(/^0+/, "");
}