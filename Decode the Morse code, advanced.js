var decodeBits = function(bits){
  let decodedBits = "";

  bits = bits.replace(/^[0]+|[0]+$/g, '');

  const arr = [];
  let buff = "";
  for (let i = 0; i < bits.length; i++) {
      buff += bits[i];
      if (bits[i + 1] !== bits[i]) {
          arr.push(buff);
          buff = "";
      }
  }
  bits = arr;

  let unit = Math.min(...bits.map(item => item.length));

  for (let i of bits) {
      if (i === "1".repeat(unit)) {
         decodedBits += "."; 
      } else if (i === "1".repeat(unit * 3)) {
          decodedBits += "-";
      } else if (i === "0".repeat(unit * 3)) {
          decodedBits += " ";
      } else if (i === "0".repeat(unit * 7)) {
          decodedBits += "   ";
      }
  }

  return decodedBits;
}

var decodeMorse = function(morseCode){
  let decodedMorse = "";

  morseCode = morseCode.trim().split(" ");

  for (let letter of morseCode) {
      if (letter !== "") {
          decodedMorse += MORSE_CODE[letter];
      } else {
          decodedMorse += " ";
      }
  }

  return decodedMorse.replace(/\s\s+/g, ' ');
}