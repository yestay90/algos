
class TreeNode {
    constructor(val){
        this.val = val 
        this.left = this.right = null 
    }
}

class Queue {
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

var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
bfs(root)
function bfs(root){
    if (root == null){
        return 
    }

    var result = []
    let q = new Queue()
    q.enqueue(root)
    while (!q.isEmpty()){
        var el = q.dequeue()
        result.push(el.val)
        if (el.left != null){
            q.enqueue(el.left)
        }

        if (el.right != null){
            q.enqueue(el.right)
        }
    }
    console.log("array is %@", result)
    console.log("array size %d", result.length)
}