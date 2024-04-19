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
var deleteDuplicates = function(head) {
	var dump = new ListNode(0, head);
	var cur = dump;

	while (cur.next && cur.next.next) {
		if (cur.next.val === cur.next.next.val) {
			var x = cur.next.val;
			while(cur.next && cur.next.val === x) {
				cur.next = cur.next.next;
			}
		}else {
			cur = cur.next;
		}
	}

	return dump.next;
};