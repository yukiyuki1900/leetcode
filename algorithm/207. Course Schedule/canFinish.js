/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	if (head === null) {
		return null;
	}

	let curNode = head;
	let prev = null;
	let next = null;
	while (curNode) {
		next = curNode.next;
		curNode.next = prev;
		prev = curNode;
		curNode = next;
	}
};