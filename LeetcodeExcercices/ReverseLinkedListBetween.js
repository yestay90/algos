
class ListNode {
    constructor(val){
        this.val = val
        this.next = null; 
    }
}

var n = 1; 

var head = new ListNode(1)
var next1 = new ListNode(2)
var next2 = new ListNode(3)
// var next3 = new ListNode(4)
// var next4 = new ListNode(5)

head.next = next1
next1.next = next2
// next2.next = next3
// next3.next = next4

reverseLinkedListBetween(head, 1, 6)
function reverseLinkedListBetween(head, m, n){

    if (head == null){
        return head
    }

    if (head.next == null){
        return head 
    }

    var pointer = head
    var startPointPrev = null 
    
    var counter = 1 
    while(pointer != null && counter < m){        
        startPointPrev = pointer
        pointer = pointer.next
        counter++
    }

    if (pointer == null){
        return head 
    }
 
    var previous = null
    var current = null 
    if (m == 1){
        // previous = null 
        startPointPrev = null
        // current = pointer
    }
    previous = pointer
    current = pointer.next
    
    
    var next = null 
    
    while(current != null && counter != n){
        next = current.next
        current.next = previous
        previous = current
        current = next
        counter++
    }

    if (startPointPrev != null) {
        startPointPrev.next = previous
    }else {
        head = previous
    }

    if (pointer != null){
        pointer.next = current
    }
    return head 
}