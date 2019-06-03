
class TreeNode {
    constructor(val){
        this.val = val 
        this.left = this.right = null 
    }
}

var start = new TreeNode(3)
start.left = new TreeNode(9)
start.right = new TreeNode(20)
start.right.left = new TreeNode(15)
start.right.right = new TreeNode(7)

levelOrderTraversal(start)

function levelOrderTraversal(root){

    var results = []
    var level = 0

    levelOrderTraversalUtil(root, level, results)

    function levelOrderTraversalUtil(p, level, resultToGather){

        if (p == null) {
            return 
        }
    
        if (level < resultToGather.length){
            resultToGather[level].push(p.val)
        }else {
            resultToGather.push([p.val])
        }
        levelOrderTraversalUtil(p.left, level + 1, resultToGather)
        levelOrderTraversalUtil(p.right, level + 1, resultToGather)
    }
}

