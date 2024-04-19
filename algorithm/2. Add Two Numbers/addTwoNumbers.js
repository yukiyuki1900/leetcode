/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let resHead = new ListNode(0);
    let cur = resHead;
    let curry = 0;
    while (l1 || l2) {
        let num1 = 0;
        let num2 = 0;
        if (l1) {
            num1 = l1.val;
            l1 = l1.next;
        }
        if (l2) {
            num2 = l2.val;
            l2 = l2.next;
        }
        const sum = num1 + num2 + curry;
        const val = sum % 10;
        const node = new ListNode(val);
        cur.next = node;
        cur = cur.next;
        curry = Math.floor(sum / 10);
    }

    if (curry > 0) {
        const node = new ListNode(curry);
        cur.next = node;
    }

    return resHead.next;
};
