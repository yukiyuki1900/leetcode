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
var oddEvenList = function(head) {
	if(head === null || head.next === null) {
		return head;
	}
    var oddNode = head;
    var evenNode = head.next;
    var evenHead = head.next;
    var count = 1;
    var cur = evenNode.next;

    while(cur !== null) {
    	if(count%2 == 1) {
    		oddNode.next = cur;
    		oddNode = oddNode.next;
    	}else {
    		evenNode.next = cur;
    		evenNode = evenNode.next;
    	}
    	cur = cur.next;
    	count ++;
    }

    oddNode.next = evenHead;
    evenNode.next = cur;
    return head;
};