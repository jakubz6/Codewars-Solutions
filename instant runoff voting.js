function runoff(voters) {
  while (true) {
    let winCount = {};
    
    for (let i = 0; i < voters.length; i++) {
      for (let j = 0; j < voters[i].length; j++) {
        if (winCount[voters[i][j]]) {
          if (j == 0) {
            winCount[voters[i][j]]++;
          }
        } else {
          if (j == 0) {
            winCount[voters[i][j]] = 1;
          } else {
            winCount[voters[i][j]] = 0;
          }
        }
      }
    }
    
    if (Object.values(winCount).length > 1 && new Set(Object.values(winCount)).size === 1) {
      return undefined;
    }
    
    let max = Math.max(...Object.values(winCount));
      
    if ((voters.length / 2) < max) {
      for (let key in winCount) {
        if (winCount[key] === max) {
          return key;
        }
      }
    } else {
      let arr = Object.entries(winCount);

      const min = arr.reduce((acc, [key, value]) => {
        if (value < acc) {
          return value;
        } else {
          return acc;
        }
      }, Infinity);

      arr = arr.filter(([key, value]) => value === min).map(([key, value]) => key);

      let len = arr.length;

      while (len--) {
        for (let i = 0; i < voters.length; i++) {
          for (let j = 0; j < voters[i].length; j++) {
            if (arr.includes(voters[i][j])) {
              voters[i] = voters[i].slice(0, j).concat(voters[i].slice(j + 1));
            }
          }
        }
      }
    }
  }
}