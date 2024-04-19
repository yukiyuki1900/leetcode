/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
	const node = new ListNode(-1);
	node.next = head;
	let cur = node;

	for (let i = 1 ; i < left ; i ++) {
		cur = cur.next;
	}
	let leftTail = cur;

	let rightNode = cur;
	for (let i = 1 ; i <= right - left + 1 ; i ++) {
		rightNode = rightNode.next;
	}

	const leftNode = leftTail.next;
	cur = rightNode.next;

	leftTail.next = null;
	rightNode.next = null;

	reverseLink(leftNode);
	leftTail.next = rightNode;
	leftNode.next = cur;

	return node.next;
};

var reverseLink = function(head) {
	let cur = head;
	let prev = null;
	let next = null;

	while (cur) {
		next = cur.next;
		cur.next = prev;
		prev = cur;
		cur = next;
	}
}