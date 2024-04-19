/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
	if (!lists.length) {
		return null;
	}
	if (lists.length === 1) {
		return lists[0];
	}

	let head = new ListNode(-1);
	let prev = head;
	for (let i = 0, len = lists.length ; i < len ; i ++) {
		let curNode1 = lists[i];
		let curNode2 = prev.next;
		head = prev;

		while(curNode1 && curNode2) {
			if (curNode1.val < curNode2.val) {
				head.next = curNode1;
				curNode1 = curNode1.next;
			} else {
				head.next = curNode2;
				curNode2 = curNode2.next;
			}
			head = head.next;
		}

		if (curNode1) {
			head.next = curNode1;
		}
		if (curNode2) {
			head.next = curNode2;
		}
	}

	return prev.next;
};