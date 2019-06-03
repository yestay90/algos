
class ListNode {
    constructor(val){
        this.val = val
        this.next = null; 
    }
}

var n = 1; 

var head = new ListNode(1)
// var next1 = new ListNode(2)
// var next2 = new ListNode(3)
// var next3 = new ListNode(4)
// var next4 = new ListNode(5)

// head.next = next1
// next1.next = next2
// next2.next = next3
// next3.next = next4

// if (head == null){
//     return 
// }

var fast = head; 
var slow = head; 

for (i = 0; i <= n; i++){
    
    if (fast == null && i == n){
        head = head.next
        return head 
    }

    if (fast == null){
        return head;
    }

    fast = fast.next;
}


while(fast != null){
    fast = fast.next
    slow = slow.next
}


slow.next = slow.next.next

return head 

