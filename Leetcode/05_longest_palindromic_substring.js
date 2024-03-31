//With Brute force algorithm
// With dynamic programming, O(n^2) time complexity, O(n^2) sapce complexity.
/*
State Equation, 
j-i=0, d[i][j] = 1
j-i=1, d[i][j] = s[i] == s[j]
j-i=2, d[i][j] = s[i] == s[j]
j-i=3, d[i][j] = s[i] == s[j] && d[i+1][j-1]
*/
var longestPalindrome = function(s) { 
  let d = new Array(s.length).fill(false);
  for(let index=0; index < s.length; index++){
    d[index] = new Array(s.length).fill(false);
  }
  let subStr = '';
  let mexDis = 0;
  //呈倒三角开始遍历，先里后外
  for(let i=s.length-1; i>=0; i--) {
    for(let j=i; j < s.length; j++){
      d[i][j] = (s[i]==s[j]) && (((j-i)<3) || d[i+1][j-1])
      if(d[i][j] && mexDis < j-i) {
        subStr = s.substring(i, j+1);
        mexDis = j-i;
      }
    }
  }
  return subStr
}

//With slide window, O(n^2) time complexity, O(n^2) sapce complexity
var longestPalindrome = function(s) {
  
}

//With O(n^2) time complexity, O(n) sapce complexity. Traverse around the center point to both sides
var longestPalindrome = function(s) {
  //把字符串长度变成奇数，方便寻找中心点
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

//With O(n) time complexity, O(n) sapece complexity. Manacher's Algorithm
//c is center point, and r is right point for the maximum coverage point.
var longestPalindrome = function(s) {
    //把字符串长度变成奇数，方便寻找中心点
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
