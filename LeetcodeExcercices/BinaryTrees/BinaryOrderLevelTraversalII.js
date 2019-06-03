

class TreeNode {
    constructor(val){
        this.val = val 
        this.right = this.left = null 
    }
}

var root = new TreeNode(3)
root.left = new TreeNode(9)
// root.left.left = new TreeNode(12)
// root.left.right = new TreeNode(13)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

var level = 0
var results = []
var answer = []

traverseBottomTopLeftRight(root, level, results)
console.log(results)

function traverseBottomTopLeftRight(root, level, results){

    var queue = []
    queue.push(root)

    while (!(queue.length == 0)){
        var n = queue.length
        
        for (var j = 0; j < n; j++){

            var dequeued = queue.shift()

            if (dequeued == null){
                break 
            }

            results.push(dequeued.val)
    
            if (dequeued.left != null){
                queue.push(dequeued.left)
            }

            if (dequeued.right != null){
                queue.push(dequeued.right)
            }
        }
        answer.splice(0, 0,results)
        results = []
    }
}