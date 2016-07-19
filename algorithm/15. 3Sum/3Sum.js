/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var num = [];
    var begin = 0;
    var end = 0;
    var sum = 0;

    if(nums.length < 3) {
        return num;
    }

    nums.sort(function(a, b) {
        return  a-b;
    })

    for(var i = 0 , len = nums.length ; i < len ; i ++) {
        if(nums[i] > 0) {
            break;
        }

        while(i < len && nums[i] == nums[i-1]) {
            i ++;
        }

        begin = i+1;
        end = len - 1;

        while(begin < end) {
            sum = nums[i] + nums[begin] + nums[end];

            if(sum == 0) {
                var temp = [];
                temp.push(nums[i]);
                temp.push(nums[begin]);
                temp.push(nums[end]);
                num.push(temp);

                begin ++;
                end --;

                while(begin < end  && nums[begin] == nums[begin-1]) {
                    begin ++;
                }
                while(begin < end && nums[end] == nums[end+1]) {
                    end --;
                }
            }else if(sum > 0) {
                end --;
            }else {
                begin ++;
            }
        }
    }
    return num;
};

