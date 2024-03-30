//With Brute force algorithm
// With dynamic programming
//With O(n^2) complexity. Traverse around the center point to both sides
var longestPalindrome = function(s) {
  let sn = ['^', '#', ...[...s].join('#'), '#', '$'];
  let antStr = '';
  for(let i=1, i<sn.length-1; i++){
    let ext=0;
    let extStr = sn[i];
    while(sn[i-ext-1]===sn[i+ext+1]){
      extStr = sn[i-ext-1] + sn[i] + sn[i+ext+1];
      ext++;
     }
    if(extStr.length > antStr.length) antStr = extStr;
  }
  return antStr.replaceAll('#', '')
}

//With O(n) complexity, Manacher's Algorithm
//c is center point, and r is right point for the maximum coverage point.
var longestPalindrome = function(s) {
    let sn = ['^', '#', ...[...s].join('#'), '#', '$'];
    let p = new Array(sn.length).fill(0);
    let c, r = 0;
    for(let i=1; i< sn.length; i++){
      if(r >= i) {
        //p[2*c-i] 表示以c为中心点时， 当前i点的扩展操作p[2*c-i]的值
        p[i] = Math.min(r-i, p[2*c-i]);
      }
      while(sn[i-p[i]-1]===sn[i+p[i]+1]) {
        p[i]++;
      }
      if(p[i]+i>r) {
        r = p[i] + i;
        c = i;
      }
      
    }

  let maxExt = Math.max(...p);
    return  sn.slice(p.indexOf(maxExt)-maxExt, p.indexOf(maxExt)+maxExt+1).join('').replaceAll('#', '');
}
