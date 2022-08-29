/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size==0 || string=='') {
    return '';
  }

  if (size == undefined) {
    return string;
  }
  
  let result = string[0];
  let tempSize = 1;
  let currentChar = string[0];
  
  for (let index=1; index<string.length; index++) {
    if (currentChar == string[index]) {
      if (tempSize<size) {
        result += string[index];
        tempSize+=1;
      }
    } 
    else {
      currentChar = string[index];
      result += string[index];
      tempSize = 1;
    }
  }
  return result;
}
