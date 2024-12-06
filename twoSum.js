const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (
      nums.includes(target - nums[i]) &&
      i != nums.indexOf(target - nums[i])
    ) {
      return [i, nums.indexOf(target - nums[i])];
    }
  }
};
