class Solution {
  hasDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
      for (let x = i + 1; x < nums.length; x++) {
        if (nums[x] === nums[i]) {
          return true;
        }
      }
    }
    return false;
  }
}
