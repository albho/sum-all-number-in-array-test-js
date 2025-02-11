function sumItems(array) {
  let sum = 0;
  array.forEach(item => {
    if (Array.isArray(item)) {
      sum += sumItems(item);
    } else {
      sum += item;
    }
  });
  return sum;
}

console.log(sumItems([1, 2, 3, 4, 5]));
// console.log(sumItems([[1, 2, [[3], 4]], 5, []]));
module.exports = sumItems;
