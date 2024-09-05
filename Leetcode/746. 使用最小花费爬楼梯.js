/**
 * @param {number[]} cost
 * @return {number}

 time complexity: O(n)
 space complexity: O(1),

 动态规划
 */
var minCostClimbingStairs = function(cost) {

let min = 0;
let end = cost.length;
let a = cost[end-1];
let b = cost[end-2];
if(cost.length == 2) {
   min = Math.min(a, b);
} else {
    for(let i=end-3; i > 0; i--) {
    min = Math.min(cost[i] + a, cost[i] + b);
    a = b;
    b = min;
}
min = Math.min(cost[0] + a, cost[0] + b, b);
}
return min;
};
