class Node {
    constructor(val){
        this.val = val 
        this.next = null 
    }
}

var a = new Node(4)
a.next = new Node(1)
a.next.next = new Node(8)
a.next.next.next = new Node(4)
a.next.next.next = new Node(5)

var b = new Node(5)
b.next = new Node(0)
b.next.next = new Node(1)
b.next.next.next = new Node(8)
b.next.next.next.next = new Node(0)
b.next.next.next.next.next = new Node(5)

var answ = findIntersection(a, b)
console.log(answ)

function findIntersection(headA, headB){

    var p1 = headA

    while (p1 != null){
        var p2 = headB 
        while (p2 != null){
            if (p1.val == p2.val){
                return p1 
            }
            p2 = p2.next
        }
        p1 = p1.next
    }

    return null 
}