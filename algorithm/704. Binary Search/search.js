/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const tmp = left + Math.floor((right - left) / 2);
        if (nums[tmp] === target) {
            return tmp;
        }
        if (nums[tmp] < target) {
            left = tmp + 1;
        } else {
            right = tmp -1;
        }
    }
    return -1;
};