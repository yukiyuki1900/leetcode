/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var result = [-1, -1];
    var len = nums.length;

    if(len <= 0 || nums[0] > target || nums[len-1] < target) {
        return result;
    }

    var i = 0;
    var j = len - 1;

    while(i <= j) {
        if(nums[i] < target) {
            i ++;
        }
        if(nums[j] > target) {
            j --;
        }
        if(nums[i] == target && nums[j] == target) {
            result[0] = i;
            result[1] = j;
            return result;
        }
     }

    return result;

};

