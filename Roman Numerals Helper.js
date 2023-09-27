const RomanNumerals = {
  toRoman: (number) => {
    let res = "",
      dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      
      roman = ["M", "CM", "D","CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I",];

    dec.map(function (value, index) {
      while (number >= value) {
        res += roman[index];
        number -= value;
      }
    });

    return res;
  },
  fromRoman: (roman) => {
    const conversion = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    return roman
      .match(/CM|CD|XC|XL|IX|IV|\w/g)
      .reduce((accum, roman) => accum + conversion[roman], 0);
  },
};