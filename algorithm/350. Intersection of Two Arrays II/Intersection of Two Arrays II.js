/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var map = {};
    var result = [];

    for(var i = 0 , len = nums1.length ; i < len ; i ++) {
        if(typeof map[nums1[i]] !== 'undefined') {
            map[nums1[i]] ++;
        }else {
            map[nums1[i]] = 1;
        }
    }

    for(var j = 0 , jlen = nums2.length ; j < jlen ; j ++) {
        if(typeof map[nums2[j]] !== 'undefined' && map[nums2[j]] !== 0) {
            result.push(nums2[j]);
            map[nums2[j]] --;
        }
    }

    return result;
};

