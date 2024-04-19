/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
	if (root === null) {
		return root;
	}
	var queue = [root];
	
	while (queue.length) {
		var len = queue.length;
		var last = null;
		for(var i = 0 ; i < len ; i ++) {
			var cur = queue.shift();

			if(cur.left) {
				queue.push(cur.left);
			}
			if(cur.right) {
				queue.push(cur.right);
			}

			if (i !== 0) {
				last.next = cur;
			}

			last = cur;
		}
	}

	return root;
};