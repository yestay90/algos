class ListNode {
    constructor(val){
        this.val = val
        this.next = null; 
    }
}

var head = new ListNode()
var next1 = new ListNode(1)
var next2 = new ListNode(1)
var next3 = new ListNode(1)
var next4 = new ListNode(3)
var next5 = new ListNode(4)
var next6 = new ListNode(4)

head.next = next1
next1.next = next2
next2.next = next3
next3.next = next4
next4.next = next5
next5.next = next6

var answer = removeDuplicates(head)
console.log(answer)

function removeDuplicates(head){

    if (head == null || head.next == null){
        return head
    }

    var slow = head
    var fast = head.next
// 1 -- 1 -- 2 -- 2 //
    while (fast != null){

        if (slow.val == fast.val){

            if (slow.val == head.val) {
                while (fast.next != null && fast.val == fast.next.val){
                    fast = fast.next
                }

                if (fast.next != null){
                    slow = fast.next
                    head = fast.next
                    fast = slow.next
                }else {
                    slow = null
                    head = null 
                    fast = null 
                    break  
                }
            } 
         } else if (fast.next != null && fast.val == fast.next.val){
                while (fast.next != null && fast.val == fast.next.val){
                    fast = fast.next
                }

                slow.next = fast.next

                if (slow.next == null){
                    break  
                }else {
                    fast = slow.next
                }

                if (fast == null) {
                    break 
                }
                if (fast.next == null) {
                    break 
                }
        }else {
            fast = fast.next
            slow = slow.next
        }
    }

    return head 
}