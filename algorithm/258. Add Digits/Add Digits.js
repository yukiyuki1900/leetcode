/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(parseInt(num/10) === 0) {
        return num;
    }
    while(parseInt(num/10) >= 1) {
        var tmp = num;
        num = 0;
        while(tmp) {
            num += parseInt(tmp%10);
            tmp = parseInt(tmp/10);
        }
    }
    return num;
};

