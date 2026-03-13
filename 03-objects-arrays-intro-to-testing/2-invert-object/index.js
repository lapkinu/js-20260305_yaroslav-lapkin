/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns the new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (obj === null || obj === undefined) {
    return obj;
  }
  const resObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined ||
        (typeof value === 'object' && value !== null) ||
        typeof value === 'function') {
      continue;
    }
    resObj[value] = key;
  }
  return resObj;
}
