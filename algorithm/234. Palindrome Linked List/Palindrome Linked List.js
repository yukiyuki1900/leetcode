/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var arr = [];
    while(head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    var flag = true;
    for(var i = 0 , j = arr.length-1 ; i < j ; i ++ , j --) {
        if(arr[i] !== arr[j]) {
            flag = false;
        }
    }
    return flag;
};