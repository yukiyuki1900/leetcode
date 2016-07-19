/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var result = [];

    if(nums.length === 0) {
        return result;
    }

    for(var i = 0 , len = nums.length ; i < len ; i ++) {
        var start = nums[i];
        while((i + 1) < nums.length && (nums[i+1] - nums[i]) === 1) {
            i ++;
        }
        var end = nums[i];

        if(start === end) {
            result.push(''+start);
        }else {
            result.push(''+start+'->'+end);
        }
    }
    return result;
};