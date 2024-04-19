/**
 * @param {number[]} height
 * @return {number}
 */

var minfunc = function(a, b) {
    if(a > b) {
        return b;
    }else {
        return a;
    }
}
var maxArea = function(height) {
    var water = 0;
    var left = 0;
    var right = height.length - 1;

    while( left < right ) {
        var container = minfunc(height[left], height[right]) * (right - left);
        if(container > water) {
            water = container;
        }
        if(height[left] < height[right]) {
            left ++;
        }else {
            right --;
        }
    }
    return water;
};

console.log(maxArea([1,1]))