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
var next5 = new ListNode(6)

head.next = next1
next1.next = next2
next2.next = next3
next3.next = next4
next4.next = next5


var pointer = head 
// while (pointer.next != null) {
    
    console.log("Swapping values %d and %d", pointer.val, pointer.next.val)
    // pointer = swap(pointer, pointer.next)
    head = recursionSwap(pointer)
    console.log("Current value of pointer %d", pointer.val)
  

console.log(head)

function recursionSwap(nodeInTheBegining){

    if (nodeInTheBegining == null || nodeInTheBegining.next == null)  {
        return nodeInTheBegining
    }
    
    nodeInTheBegining = swap(nodeInTheBegining, nodeInTheBegining.next)    
  
    if (nodeInTheBegining.next.next != null){
        nodeInTheBegining.next.next = recursionSwap(nodeInTheBegining.next.next)
    }

    return nodeInTheBegining
}

function swap(node1, node2){
    var temp = node1;
    temp.next = node2.next;
    node2.next = temp
    node1 = node2 
    return node1
}