/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let result = obj;
  for (let i=0; i <fields.length; i++) {
    let key = fields[i];
    delete result[key];
  }
  return result;
};
