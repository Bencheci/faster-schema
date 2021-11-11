/* eslint-disable prefer-rest-params */
export default function mergeObjects() {
  // Variables
  const extended = {};
  let deep = false;
  let i = 0; // Check if a deep merge

  if (typeof arguments[0] === 'boolean') {
    deep = arguments[0];
    i++;
  } // Merge the object into the extended object

  const merge = function (obj) {
    for (const prop in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(prop)) {
        if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
          // If we're doing a deep merge and the property is an object
          // eslint-disable-next-line no-undef
          extended[prop] = extend(true, extended[prop], obj[prop]);
        } else {
          // Otherwise, do a regular merge
          extended[prop] = obj[prop];
        }
      }
    }
  }; // Loop through each object and conduct a merge

  for (; i < arguments.length; i++) {
    merge(arguments[i]);
  }

  return extended;
}
