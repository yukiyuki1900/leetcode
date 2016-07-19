/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var positive = function(num) {
    if(num < 0) {
        return -num;
    }else {
        return num;
    }
}

var threeSumClosest = function(nums, target) {
    var begin = 0;
    var end = 0;
    var sum = 0;
    var closet = 9999999;
    var result = 0;
    var dis = 0;

    nums.sort(function(a, b) {
        return  a-b;
    })

    for(var i = 0 , len = nums.length ; i < len ; i ++) {

        while(i < len && nums[i] == nums[i-1]) {
            i ++;
        }

        begin = i+1;
        end = len - 1;

        while(begin < end) {
            sum = nums[i] + nums[begin] + nums[end];
            dis = sum - target;
            dis = positive(dis);

            if(dis < closet) {
                closet = dis;
                result = sum;
            }
            if(sum === target) {
                return target;
            }else if(sum > target) {
                end --;
            }else {
                begin ++;
            }
        }
    }

    return result;
};

