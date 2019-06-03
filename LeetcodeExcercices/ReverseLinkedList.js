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
var next3 = new ListNode(4)
var next4 = new ListNode(5)

head.next = next1
next1.next = next2
next2.next = next3
next3.next = next4


reverseLinkedLIst(head)
console.log(head)
function reverseLinkedLIst(head){

    var prev = null;
    var current = head;
    var next = head.next

    while (current != null){

        next = current.next
        current.next = prev
        prev = current
        current = next
    }

    head = prev
}