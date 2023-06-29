/**
 *
 * @param str: {String}
 * @param symbolsCount: {Number}
 * @returns {String}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
    const front = str.slice(-symbolsCount);
    if (front.length < symbolsCount) {
      return str;
    } else if (front.length < symbolsCount) {
      return str;
    }
    return front + str + front;
  };

/**
 *
 * @param z: {Number}
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.nearest = function nearest(z, x, y) {
    // Calculate the absolute differences between z and x, and z and y
    const diffX = Math.abs(x - z);
    const diffY = Math.abs(y - z);
  
    // Compare the absolute differences and return the value with the smaller difference
    if (diffX < diffY) {
      return x; // x is closer to z or equally distant
    } else if (diffY < diffX){
      return y; // y is closer to z
    } else{
      return z;
    }
  };

/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.removeDuplicate = function removeDuplicate(arr) {
    const result = [];
    const duplicates = {};
  
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
  
      if (!duplicates[item]) {
        result.push(item);
        duplicates[item] = true;
      }
    }
  
    return result;
  };
