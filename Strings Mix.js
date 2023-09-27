function getCount(string) {
  let count = {};

  for (let i of string) {
    if (!count[i] && (i.charCodeAt(0) >= 97 && i.charCodeAt(0) <= 122)) {
      count[i] = 1;
    } else if (count[i]) {
      count[i]++;
    }
  }

  return count;
}

function mix(s1, s2) {
  let arr = [];

  const s1Count = getCount(s1);
  const s2Count = getCount(s2);

  let maxCount = {};

  for (let i in s1Count) {
    if (s2Count[i]) {
      if (s1Count[i] === s2Count[i] && (s1Count[i] > 1 || s2Count[i] < 1)) {
        maxCount[i] = {
          prefix: "=",
          count: s1Count[i]
        }
      }

      if (s1Count[i] > s2Count[i]) {
        maxCount[i] = {
          prefix: "1",
          count: s1Count[i]
        }
      }

      if (s1Count[i] < s2Count[i]) {
        maxCount[i] = {
          prefix: "2",
          count: s2Count[i]
        }
      }
      
    } else {
      if (s1Count[i] > 1) {
        maxCount[i] = {
          prefix: "1",
          count: s1Count[i]
        }
      }
    }
  }

  for (let i in s2Count) {
    if (s1Count[i] && (s1Count[i] > 1 || s2Count[i] < 1)) {
      if (s2Count[i] === s1Count[i]) {
        maxCount[i] = {
          prefix: "=",
          count: s2Count[i]
        }
      }

      if (s2Count[i] > s1Count[i]) {
        maxCount[i] = {
          prefix: "2",
          count: s2Count[i]
        }
      }

      if (s2Count[i] < s1Count[i]) {
        maxCount[i] = {
          prefix: "1",
          count: s1Count[i]
        }
      }
      
    } else {
      if (s2Count[i] > 1) {
        maxCount[i] = {
          prefix: "2",
          count: s2Count[i]
        }
      }
    }
  }

  console.log(maxCount)

  const sortedObj = Object.keys(maxCount)
  .sort((a, b) => {
    if (maxCount[a].count < maxCount[b].count) {
      return 1;
    } else if (maxCount[a].count > maxCount[b].count) {
      return -1;
    } else {
      const prefixOrder = {'1': 1, '2': 2, '=': 3};

      const aPrefixOrder = prefixOrder[maxCount[a].prefix];
      const bPrefixOrder = prefixOrder[maxCount[b].prefix];

      if (aPrefixOrder < bPrefixOrder) {
        return -1;
      } else if (aPrefixOrder > bPrefixOrder) {
        return 1;
      } else {
        return a.localeCompare(b);
      }
    }
  })
  .reduce((acc, key) => {
    acc[key] = maxCount[key];
    return acc;
  }, {});



  for (let i in sortedObj) {
    arr.push(sortedObj[i].prefix + ":" + i.repeat(sortedObj[i].count));
  }

  return arr.join("/");
}