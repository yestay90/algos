
class ListNode {
    constructor(val){
        this.val = val 
        this.next = null 
    }
}

var beg = new ListNode(1)
var beg2 = new ListNode(2)
beg.next = beg2

var beg3 = new ListNode(3)
beg2.next = beg3 

var beg4 = new ListNode(4)
beg3.next = beg4

var beg5 = new ListNode(5)
beg4.next = beg5

var beg6 = new ListNode(6)
beg5.next = beg6

var beg7 = new ListNode(7)
beg6.next = beg7

var answer = reorderList(beg)
console.log(answer)

function reorderList(head){

    if (head == null){
        return null 
    }

    function getMiddleOfList(head){
        var mid = head 
        var p = head 
        var counter = 0 
        while (p != null){

            if (counter % 2 == 1){
                mid = mid.next
            }

            counter++ 
            p = p.next 
        }

        return mid 
    }

    function reverseList(head){
         // reverse second half head2 
        var prev = null; var curr = next = head 
        while (curr != null){
            var next = curr.next
            curr.next = prev 
            prev = curr
            curr = next 
        }

        head = prev 
        // reverse second half head2 
        return head 
    }

    var mid = getMiddleOfList(head)
    var head2 = mid.next
    mid.next = null 

    head2 = reverseList(head2)

    
    var head1 = head 
    var newlyCreated = new ListNode(head.val)
    var pointerToReturn = newlyCreated
    while (head1 != null || head2 != null){

        if (head1 != null){
            newlyCreated.next = head1
            head1 = head1.next
            newlyCreated = newlyCreated.next
        }

        if (head2 != null){
            newlyCreated.next = head2
            head2 = head2.next
            newlyCreated = newlyCreated.next
        }
    }
    //rearange head1 and head2 
    return pointerToReturn.next
}