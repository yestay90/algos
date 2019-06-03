
class Queue{
    constructor(){
        this.items = []
    }

    enqueue(val){
        this.items.push(val)
    }

    dequeue(){
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length == 0 
    }
}

class TreeNode {
    constructor(val){
        this.val = val 
        this.right = this.left = null 
    }
}

var root = new TreeNode(4)
root.left = new TreeNode(2)
root.right = new TreeNode(7)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(9)

var newRoot = invertBinaryTree(root)
console.log(newRoot)

function invertBinaryTree(root){

    var q = new Queue()
    q.enqueue(root)

    while(!q.isEmpty()){
        var dequed = q.dequeue()

        var temp = dequed.right
        dequed.right = dequed.left
        dequed.left = temp 

        if (dequed.left != null){
            q.enqueue(dequed.left)
        }

        if (dequed.right != null){
            q.enqueue(dequed.right)
        }
    }

    return root
}