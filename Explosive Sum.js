const cache = new Map();

function sum (n) {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return 0;
  }
  
  const dataFromCache = cache.get(n);

  if (dataFromCache) return dataFromCache;
  
  let result = 0;
  let q = 1;

  let l = n - ((3 * Math.pow(q, 2) - q) / 2);
  let r = n - ((3 * Math.pow(q, 2) + q) / 2);

  while (l >= 0) {
    result += Math.pow(-1, q + 1) * (sum(l) + sum(r));
    
    q++;
   
    l = n - ((3 * Math.pow(q, 2) - q) / 2);
    r = n - ((3 * Math.pow(q, 2) + q) / 2);
  }

  cache.set(n, result);
  
  return result;
}