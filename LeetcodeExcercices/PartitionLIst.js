class ListNode {
    constructor(val){
        this.val = val
        this.next = null; 
    }
}

var head = new ListNode(1)
var next1 = new ListNode(1)
// var next2 = new ListNode(3)
// var next3 = new ListNode(2)
// var next4 = new ListNode(5)
// var next5 = new ListNode(2)
// var next6 = new ListNode(4)

head.next = next1
// next1.next = next2
// next2.next = next3
// next3.next = next4
// next4.next = next5
// next5.next = next6

var headfomatted = partitionList(head, 2)
console.log(headfomatted)
function partitionList(head, x){

    if (head == null || head.next == null){
        return head 
    }

    var headSuper = new ListNode(-1)
    headSuper.next = head
    head = headSuper
    var search = null; var previous = null; var lessObjectsStart = null; var lessObjectsLast = null 
    var slow = head 
    var fast = head.next

    while (fast != null) {
        if (fast.val >= x && search == null){
            console.log("first found search object %d", fast.val)
            search = fast
            previous = slow

            slow = slow.next 
            fast = fast.next
        } else if (fast.val < x) {
            console.log("less than %d object with value %d", x, fast.val)
            slow.next = fast.next

            if (lessObjectsStart == null){
                lessObjectsStart = fast
                lessObjectsLast = fast
            }else {
                lessObjectsLast.next = fast
                lessObjectsLast = lessObjectsLast.next
            }

            fast.next = null 

            if (slow.val == 5) {
                console.log("heare")
            }

            if (slow == null || slow.next == null){
                break 
            }

            fast = slow.next

        }else {
            console.log("move to the next poing slow is %d, fast is %d", slow.val, fast.val)
            slow = slow.next
            fast = fast.next
        }
    }

    if (lessObjectsStart != null && search != null) {
        previous.next = lessObjectsStart
        lessObjectsLast.next = search
    } else if (search == null){
        return lessObjectsStart
    }
    head = head.next
    return head 
    
}

