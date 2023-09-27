function solution(input, markers) {
  const strings = input.split('\n');
  const array = [];
  
  for (let string of strings) {
      let retStr = '';
      for (let char of string) {
          if(markers.some((item) => item === char)) {
              break;
          } else {
              retStr += char;
          }
      }
      array.push(retStr.trim());
  }
  return array.join('\n');
}