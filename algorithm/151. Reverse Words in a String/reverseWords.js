/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var str = s.replace(/(^\s*)|(\s*$)/g, '').replace(/(\s+)/g, ' ');
    let tmp = '';
    let arr = str.split(' ');

    for(let i = 0 , len = arr.length ; i < len/2 ; i ++) {
        tmp = arr[i];
        arr[i] = arr[len-1-i]
        arr[len-1-i] = tmp;
    }

    return arr.join(' ');
};