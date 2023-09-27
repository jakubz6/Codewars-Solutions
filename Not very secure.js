const check = function(element) {
  const point = element.charCodeAt();

  if (point >= 48 && point <= 57) {
    return false;
  }
  if (point >= 65 && point <= 90) {
    return false;
  }
  if (point >= 97 && point <= 122) {
    return false;
  }
  return true;
};

function alphanumeric(string){
  const stringArray = string.split('');
  if (stringArray.length) {
    const result = !stringArray.some(check);
    return result;
  }
  return false;
}