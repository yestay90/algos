
class TreeNode {
    constructor(val) {
        this.val = val 
        this.left = this.right = null 
    }
}

var start = new TreeNode(1)
start.left = new TreeNode(2)
start.right = new TreeNode(3)
start.left.left = new TreeNode(4)
// start.right.left = new TreeNode(15)
start.right.right = new TreeNode(5)

var ansser = zigzagOrderTraversal(start)
console.log(ansser)


function zigzagOrderTraversal(root){

    var results = []
    var level = 0

    zigzagUtil(root, results, level)

    return results

    function zigzagUtil(p, resultsToGather, level){
        if (p == null){
            return 
        }

        if (level < resultsToGather.length){
            
            if (level % 2 == 0){
                resultsToGather[level].push(p.val)
            }else {
                
                resultsToGather[level].unshift(p.val)
            }
        }else {
            resultsToGather.push([p.val]) 
        }
        zigzagUtil(p.left, resultsToGather, level + 1)
            zigzagUtil(p.right, resultsToGather, level + 1)
    }
}