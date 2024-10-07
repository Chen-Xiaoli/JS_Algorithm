/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  let dp = new Array(m).fill(0).map(()=>new Array(n).fill(0));
  if(obstacleGrid[0][0] == 1) return 0;

  for(let i=0; i < m; i++) {
    for(let j=0; j<n; j++) {
      if(obstacleGrid[i][j] ==1) continue;
      if(i > 0) dp[i][j] += dp[i-1][j];
      if(j > 0) dp[i][j] += dp[i][j-1];
    }
  }

  return dp[m-1][n-1]
  
}
