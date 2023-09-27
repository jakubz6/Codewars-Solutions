function getPINs(observed) {
  let posKeys = [];
  let posPINs = [];
  
  const keys = {
    "1": ["1", "2", "4"],
    "2": ["1", "2" ,"3", "5"],
    "3": ["2", "3", "6"],
    "4": ["1", "4", "5", "7"],
    "5": ["2", "4", "5", "6", "8"],
    "6": ["3", "5", "6", "9"],
    "7": ["4", "7", "8"],
    "8": ["0", "5", "7", "8", "9"],
    "9": ["6", "8", "9"],
    "0": ["0", "8"]
  }
  
  for (let i of observed)
    posKeys.push(keys[i]);
  
  function generatePINs(arrays, index, current) {
    if (index === arrays.length) {
        posPINs.push(current.join(""));
    } else {
      for (let i = 0; i < arrays[index].length; i++) {
        generatePINs(posKeys, index + 1, current.concat(arrays[index][i]));
      }
    }
  }
  
  generatePINs(posKeys, 0, []);
  
  return posPINs;
}