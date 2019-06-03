//InsertionSortList.js

class ListNode {
    constructor(val){
        this.val = val 
        this.next = null 
    }
}

let start1 = new ListNode(7)
let start2 = new ListNode(8)
let start3 = new ListNode(5)
// let start4 = new ListNode(2)
// let start5 = new ListNode(4)
// let start6 = new ListNode(6)
// let start7 = new ListNode(3)

start1.next = start2
start2.next = start3
// start3.next = start4
// start4.next = start5
// start5.next = start6
// start6.next = start7

let sorted = insertionSort(start1)
console.log(sorted)

function insertionSort(head){

    if (head == null || head.next == null){
        return head 
    }

    var p = head.next
    var prev = head
    while (p != null){
        if (p.val < prev.val){
            var temp = p.next
            putNodeToRightPlace(p)

            prev.next = temp
            p = temp
            
            
            continue
        }

        p = p.next
        prev = prev.next
    }

    return head

    function putNodeToRightPlace(node){
        if (node.val < head.val){
            node.next = head
            head = node 
            return 
        }

        var ps = head
        while (ps != null){
            if (ps.next != null){
                if (node.val >= ps.val && node.val <= ps.next.val){
                    var temp = ps.next
                    ps.next = node
                    node.next = temp 
                    break 
                }
            }else {
                if (ps.val >= node){
                    ps.next = node 
                    node.next = null 
                    break 
                }
            }
            ps = ps.next
        }
    }
}