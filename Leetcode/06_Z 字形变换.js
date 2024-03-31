/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
//1D martix with flag to controll up or down
var convert = function(s, numRows) {
   if(numRows==1 || numRows>=s.length) return s; //
  let mat = new Array(numRows).fill('');
  let flag = true;//can down, else up
  let row = 0;
  for (let i=0; i<s.length; i++) {
    mat[row] += s[i];
    if(flag) row++;
    else row--;
    if(row==0) flag=true;
    else if(row==numRows-1) flag = false;
  }
  return mat.join('');
}

//2D martix
var convert = function(s, numRows) {
  const n = s.length, r=numRows;
  if(r==1 || r>=n) return s;
  let t = (2*r-2);
  let c = Math.floor(n/t)*(r-1)+1;
  let mat = new Array(r).fill(0).map(()=>new Array(c).fill(0));
  for(let i=0, x=0, y=0; i<n; ++i) {
    mat[x][y] = s[i];
    if(i % t < r-1) ++x;
    else {
      --x;
      ++y;
    }
  }
  let ans = '';
  mat.forEach(rows=>{
    rows.forEach(ch=>{
      if(ch !==0) {
        ans += ch;
      }
    })
  });
  return ans;
};
