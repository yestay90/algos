var n = 1; 

class ListNode {
    constructor(val){
        this.val = val
        this.next = null; 
    }
}

var head = new ListNode(1)
var next1 = new ListNode(2)
// var next2 = new ListNode(2)
// var next3 = new ListNode(4)
// var next4 = new ListNode(5)
// var next5 = new ListNode(6)

head.next = next1
// next1.next = next2
// next2.next = next3
// next3.next = next4
// next4.next = next5

var rotatedList = rotateList(head, 2)
console.log(rotateList)

function rotateList(head, k){

    if (k == 0){
        return head 
    }

    if (head == null){
        return head
    }

    var slow = head 
    var fast = head 

    var i = 0 
    while (i < k && fast.next != null){
        fast = fast.next
        i++
    }

    while (fast.next != null){
        fast = fast.next
        slow = slow.next
    }

    console.log(slow)
    console.log(fast)
    i = i + 1 // because i starts from zero
    if (i <= k){
        // while (i < k){
        //     k = Math.floor(k / i)
        // }
        k = k % i 
        console.log(k)
        head = rotateList(head, k)
        console.log(head)
    }else {
        fast.next = head 
        head = slow.next
        slow.next = null 
    }
    return head

}