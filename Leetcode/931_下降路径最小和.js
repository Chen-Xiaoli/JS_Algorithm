/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
let n = matrix.length;
let dp = new Array(n).fill(0).map(()=>new Array(n).fill(0));

dp[0] = matrix[0];

for(let i=1; i<n; i++) {
    for(let j=0; j<n; j++) {
        if(j==0) {
            dp[i][j] = matrix[i][j] + Math.min(dp[i-1][j], dp[i-1][j+1]);
        }
        else if((j+1) >= n) {
            dp[i][j] = matrix[i][j] + Math.min(dp[i-1][j-1], dp[i-1][j]);
        }
        else dp[i][j] = matrix[i][j] + Math.min(dp[i-1][j-1], dp[i-1][j], dp[i-1][j+1]);

    }
}

return Math.min(...dp[n-1])

};
