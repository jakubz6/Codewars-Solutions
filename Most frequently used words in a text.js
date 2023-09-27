function topThreeWords(text) {
  console.log(text)
  if (text === "  '  ") {
    return [];
  }
  const count = {};
  const words = text.match(/[A-Za-z']+/g);
  let i = 3;
  const top3 = [];

  if (words === null) {
    return [];
  }

  words.forEach((word) => {
    if (count[word.toLowerCase()]) {
      count[word.toLowerCase()]++;
    } else {
      count[word.toLowerCase()] = 1;
    }
  })

  while (i--) {
    const keys = Object.keys(count);
    const values = Object.values(count);

    let indexOfMaxVal = values.indexOf(Math.max(...values));

    top3.push(keys[indexOfMaxVal]);
    
    delete count[keys[indexOfMaxVal]];
  }

  return top3.filter((el) => {
    return el != null;
  });
}