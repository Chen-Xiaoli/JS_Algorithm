/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let result = 0;
    heights = [0, ...heights, 0];
    let stack=[];
    stack[0] = 0;
    let mid;
    let left;

    for(let i=1; i<heights.length; i++) {
        if(heights[i] > heights[stack.at(-1)]) {
            stack.push(i)
        } else if(heights[i] == heights[stack.at(-1)]) {
            stack.pop();
            stack.push(i)
        } else {
            while(stack.length && heights[i] < heights[stack.at(-1)]) {
                mid = stack.at(-1);
                stack.pop();
                if(stack.length) {
                    left = stack.at(-1);
                } else {
                    left = mid;
                }
                result = Math.max((i-left-1) * heights[mid], result);
            }
            stack.push(i);

        }
    }

          return result

};
