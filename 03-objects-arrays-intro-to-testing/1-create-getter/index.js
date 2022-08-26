/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const pathElements = path.split('.');

  const getter = function(obj) {
      let result = obj;

      const getElement = function(index) {
            if (index ===pathElements.length || result === undefined) {
              return result;
            }
            result = result[pathElements[index]]
          return getElement(index+1);
    }
    return getElement(0);
  }
  return getter
}
