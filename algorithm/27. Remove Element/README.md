#27. Remove Element

看题目要求，可以忽略新长度后的值，所以使用两个指针left、right
若nums[i] === val: right ++;
若nums[i] !== val: 若nums[left] = nums[right]; left ++; right ++;
