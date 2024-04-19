/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (head === null || head.next === null) {
		return null;
	}

	var slow = head;
	var fast = head;
	
	while (fast !== null) {
		if (fast.next === null) {
			return null;
		} else {
			fast = fast.next.next;
		}
		slow = slow.next;

		if (fast === slow) {
			var ent = head;
			while (slow != ent) {
				ent = ent.next;
				slow = slow.next;
			}

			return ent;
		}
	}

	return null;
};