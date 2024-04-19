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

// 另一种去重方法
// 用字符串做哈希
// date：2022-08-16
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const len = nums.length;
    const res = [];
    const hash = {};

    if (len < 3) {
        return res;
    }

    const arr = nums.sort((a, b) => a - b);

    let i = 0;
    while (i < len - 2) {
        let start = i + 1;
        let end = len - 1;
        while (start < end) {
            const sum = arr[i] + arr[start] + arr[end];
            if (sum > 0) {
                end --;
            } else if (sum < 0) {
                start ++;
            } else {
                key = `${arr[i]}${arr[start]}${arr[end]}`;
                if (!hash[key]) {
                    res.push([arr[i], arr[start], arr[end]]);
                    hash[key] = 1;
                }
                start ++;
                end --;
            }
        }

        i ++;
    }

    return res;
};

