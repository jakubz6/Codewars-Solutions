const partSize = 15;
const partDivider = 10 ** partSize;

function add(...summands) {
  let resultParts = [];
  
  let i = 0;
  let overflow = false;
  
  while (true) {
    const start = -partSize * (i + 1);
    const end = i === 0 ? undefined : -partSize * i;
    
    let sum = overflow ? 1 : 0;
    overflow = false;

    let emptyPart = true;
    
    for (const summand of summands) {
      const part = summand.slice(start, end);
      
      if (part.length > 0) {
        emptyPart = false;
        sum += Number(part);
      }
    }
    
    if (emptyPart && sum === 0) {
      break;
    }
    
    if (sum >= partDivider) {
      overflow = true;
      sum -= partDivider;
    }
    
    resultParts.push(String(sum));
    
    i++;
  }
  
  return resultParts.reverse().map((part, index) => {
    return index === 0 ? part : part.padStart(partSize, '0');
  }).join('');
}