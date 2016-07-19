/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var pos = 0;
    var len = nums.length;
    for(var i = 0 ; i < len ; i ++) {
        if(nums[i] !== 0) {
            nums[pos] = nums[i];
            pos ++;
        }
    }
    for(var j = pos ; j < len ; j ++) {
        nums[j] = 0;
    }
 };

