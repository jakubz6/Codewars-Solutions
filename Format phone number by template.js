const formatNumber = (number, template) => {
  if(`${number}`.length < template.split('').filter(x => x === '#').length) return "Invalid phone number";
  
  const arr = template.split('');
  const numberArr = `${number}`.split('')
      
  let i = 0;
  
  let res = [];
  
  arr.forEach(x => {
    if(x === "#" ) {
      res.push(numberArr[i]);
      i++;
    } else {
      res.push(x)
    }
  });
  
  return res.join('')
}