var searchInsert = function (nums, target) {
  const index = nums.findIndex((num) => num === target);
  if (index < 0) {
    const newArr = [...nums, target].sort((a, b) => a - b);
    return newArr.indexOf(target);
  }
  return index;
};
