/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let sortOrder = 1;
  if (param=='desc') {
    sortOrder = -1;
  }
  
  let compareArrayElements = (string1, string2) => {
    return sortOrder * string1.localeCompare(string2, ['ru','en'], {caseFirst: 'upper'});
  };

  return [...arr].sort(compareArrayElements);
}
