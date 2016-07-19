/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    this.sum = [0];
    for(var i = 0 , len = nums.length ; i < len ; i ++) {
    	this.sum[i+1] = this.sum[i] + nums[i];
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    var arr = this.nums;
    var sum = this.sum[j+1] - this.sum[i];

    return sum;
};