function solution(list){
  let ans = [];
  
  let startCheck = 0;
  let countHowMany = 0;

  for (let num = 0; num < list.length; num++) {
      if (list[num + 1] - list[num] === 1){
          countHowMany++;
      } else {
          if (countHowMany === 0) {
              ans.push(list[num]);
          } else if (countHowMany >= 2) {
              ans.push(`${list[startCheck]}-${list[startCheck + countHowMany]}`)
          } else {
              for (let i = startCheck; i <= startCheck + countHowMany; i++) {
                  ans.push(list[i]);
              }
          }
          startCheck += (countHowMany + 1);
          countHowMany = 0;
      }
  }
  return ans.join(',');
}