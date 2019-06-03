
class LinkedList {
    constructor(val){
        this.val = val 
        this.next = null 
    }
}

var list = new LinkedList(1)
list.next = new LinkedList(1)
list.next.next = new LinkedList(1)
// list.next.next.next = new LinkedList(3)
// list.next.next.next.next = new LinkedList(4)
// list.next.next.next.next.next = new LinkedList(5)
// list.next.next.next.next.next.next = new LinkedList(6)

var answ = removeLinkedList(list, 1)
console.log(answ)
function removeLinkedList(head, val){

    if (head == null){
        return null 
    }

    if (head.val == val){
        while (head != null && head.val == val){
            head = head.next 
        }
    }

    if (head == null){
        return null 
    }

    var p = head.next 
    var prev = head 

    while (p != null){
        if (p.val == val){
            prev.next = p.next
        }else {
            prev = prev.next
        }
        p = p.next
    }

    return head 
}