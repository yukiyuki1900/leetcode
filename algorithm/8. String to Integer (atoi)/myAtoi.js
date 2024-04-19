/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const str = s.trim();
    let res = 0;
    let sign = 1;
    const safeInter = Math.pow(2, 31) - 1;

    for (let i = 0 , len = str.length ; i < len ; i ++) {
        if (str[i] === '-' && i === 0) {
            sign = -1;
        } else if (str[i] === '+' && i === 0) {
            continue;
        } else if (str[i] !== ' ' && Number.isInteger(Number(str[i]))) {
            if (res > safeInter / 10 || (res === Math.floor(safeInter / 10) && Number(str[i]) > safeInter % 10)) {
                res = safeInter;
                break;
            }
            if (res < - (safeInter - 1) / 10 || (res === - Math.floor(safeInter / 10) && Number(str[i]) > (safeInter + 1) % 10)) {
                res = - safeInter -1;
                break;
            }
            res = res * 10 + sign * Number(str[i]);
        } else {
            break;
        }
    }

    return res;
};