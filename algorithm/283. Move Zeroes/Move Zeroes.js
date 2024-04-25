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


//  2024-4-23 快慢指针
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const len = nums.length;
  
    if (len === 1) {
      return nums;
    }
  
    let left = 0;
    let right = 0;
    while (right < len) {
      if (nums[right] === 0) {
        right ++;
      } else {
        nums[left] = nums[right];
        left ++;
        right ++;
      }
    }
  
    for (let i = left; i < len; i ++) {
      nums[i] = 0;
    }
  
    return nums;
};

