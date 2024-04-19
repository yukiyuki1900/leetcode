/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
	let head = new ListNode(-1);
	let curNode1 = list1;
	let curNode2 = list2;

	let prev = head;
	while (curNode1 && curNode2) {
		if (curNode2.val < curNode1.val) {
			prev.next = curNode2;
			curNode2 = curNode2.next;
		} else {
			prev.next = curNode1;
			curNode1 = curNode1.next;
		}

		prev = prev.next;
	}

	if (curNode1) {
		prev.next = curNode1;
	}

	if (curNode2) {
		prev.next = curNode2;
	}

	return head.next;
};