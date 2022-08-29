/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (obj ===undefined) {
    return obj;
  }
  
  let array = Object.entries(obj);
  let result = {};
  
  for (const element of array) {
    result[element[1]] = element[0];
    }
  return result;
}
