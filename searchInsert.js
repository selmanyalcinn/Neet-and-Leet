var searchInsert = function (nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    return nums
      .concat(target)
      .sort((a, b) => a - b)
      .indexOf(target);
  }
};
