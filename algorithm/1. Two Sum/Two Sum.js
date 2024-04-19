// 更优方法：哈希
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {};
    const res = [];

    for (let i = 0 , len = nums.length ; i < len ; i ++) {
        if (Number.isInteger(obj[nums[i]])) {
            res.push(obj[nums[i]]);
            res.push(i);
            return res;
        }
        const temp = target - nums[i];
        obj[temp] = i;
    }
    return res;
};




// 方法二：双指针
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	var len = nums.length;
	var result = [];
	var tmparr = [];

	for(var k = 0 ; k < len ; k ++) {
		tmparr.push(nums[k]);
	}

    tmparr.sort(function(a, b) {
    	return a-b;
    })

    var i = 0;
    var j = len-1;

    while(i < j) {
    	var sum = tmparr[i]+tmparr[j];
    	if(sum === target) {
    		break;
    	}else if(sum > target) {
    		j --;
    	}else if (sum < target) {
    		i ++
    	}
    }

    //查找原数组的下标
    result[0] = nums.indexOf(tmparr[i]);
    if(tmparr[i] === tmparr[j]) {
    	result[1] = nums.indexOf(tmparr[j], i+1);
    }else {
    	result[1] = nums.indexOf(tmparr[j]);
    }

    return result;
};

