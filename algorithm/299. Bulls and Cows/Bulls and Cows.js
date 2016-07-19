/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var a = [];
    var b = [];
    var bull = 0;
    var cow = 0;
    var x, y;

    for(var i = 0 , len = secret.length; i < len ; i ++) {
    	x = parseInt(secret[i]);
    	y = parseInt(guess[i]);

    	if(x === y) {
    		bull ++;
    	}else {
    		if(!b[x]) {
    			if(typeof a[x] === 'undefined') {
    				a[x] = 1;
    			}else {
    				a[x] ++;
    			}
    		}else {
    			b[x] --;
    			cow ++;
    		}

            if(!a[y]){
                if(typeof b[y] === 'undefined') {
                    b[y] = 1;
                }else {
                    b[y] ++;
                }

            }else {
                a[y] --;
                cow ++;
            }
    	}

    }

    return bull+'A'+cow+'B';
};
