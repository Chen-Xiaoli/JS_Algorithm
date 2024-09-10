/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  let maxVal = 0;
  for(const val of nums) {
    maxVal = Math.max(val, maxVal);
  }

  let sum = new Array(maxVal + 1).fill(0);

  for(const val of nums) {
    sum[val] += val;
  }

  return robs(sum)
  
}

var robs = function(nums) {
  let dp = [];
  dp[0] = 0;
  dp[1] = nums[0];
  let len = nums.length;

  for(i=2; i<=len; i++) {
    dp[i] = Math.max(dp[i-1], dp[i-2] + num[i-1]);
  }
  return dp[len]
}
