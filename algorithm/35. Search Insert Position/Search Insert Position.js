/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.length <= 0 || target < nums[0]) {
        return 0;
    }
    for(var i = 0 , len = nums.length ; i < len ; i ++) {
        if(nums[i] === target || nums[i] > target) {
            return i;
        }
    }

    return i;
};

