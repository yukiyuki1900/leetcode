/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let start = 0;
    let end = 0;
    let sum = 0;
    let res = Number.MAX_SAFE_INTEGER;

    while (end < nums.length) {
        sum += nums[end];

        while (sum >= target) {
            res = Math.min(res, end - start + 1);
            sum -= nums[start];
            start ++;
        }

        end ++;
    }

    return res === Number.MAX_SAFE_INTEGER ? 0 : res;
};