/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const len = height.length;
    const leftHeight = new Array(len);
    const rightHeight = new Array(len);
    leftHeight.fill(0);
    rightHeight.fill(0);

    leftHeight[0] = height[0];
    for (let i = 1 ; i < len ; i ++) {
        leftHeight[i] = Math.max(leftHeight[i-1], height[i]);
    }

    rightHeight[len-1] = height[len-1];
    for (let i = len-2 ; i >= 0 ; i --) {
        rightHeight[i] = Math.max(rightHeight[i+1], height[i]);
    }

    let res = 0;
    for (let i = 0 ; i < len ; i ++) {
        res += (Math.min(leftHeight[i], rightHeight[i]) - height[i]);
    }

    return res;
};