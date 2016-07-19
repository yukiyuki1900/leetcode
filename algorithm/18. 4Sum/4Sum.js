/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var len = nums.length;
    var set = [];

    nums.sort(function(a, b) {
        return a-b;
    });

    for(var i = 0 ; i < len-3 ; i ++) {
        if(i != 0 && nums[i] === nums[i-1]) {
            continue;
        }
        for(var j = i+1 ; j < len-2 ; j ++) {
            if( j != i+1 && nums[j] === nums[j-1]) {
                continue;
            }
            var begin = j+1;
            var end = len-1;
            while(begin < end) {
                var sum = nums[i] + nums[j] + nums[begin] + nums[end];
                if(sum === target) {
                    var _arr = [];
                    _arr.push(nums[i]);
                    _arr.push(nums[j]);
                    _arr.push(nums[begin]);
                    _arr.push(nums[end]);
                    set.push(_arr);
                    begin ++;
                    end --;

                    while(begin < end && nums[begin] === nums[begin-1]) {
                        begin ++;
                    }
                    while(begin < end && nums[end] === nums[end+1]) {
                        end --;
                    }
                }else if(sum < target) {
                    begin ++;
                }else {
                    end --;
                }
            }
        }
    }

    return set;

};

