
class TreeNode{
    constructor(val){
        this.val = val 
        this.left = this.right = null 
    }
}

var rootP = new TreeNode(6)
rootP.left = new TreeNode(2)
rootP.right = new TreeNode(8)

rootP.left.left = new TreeNode(0)
rootP.left.right = new TreeNode(4)

rootP.right.left = new TreeNode(7)
rootP.right.right = new TreeNode(9)

rootP.left.right.left = new TreeNode(3)
rootP.left.right.right = new TreeNode(5)

var p = new TreeNode(2)
var q = new TreeNode(8)
var answer = lowestCommonAncestor(rootP, p, q)
console.log(answer)

function lowestCommonAncestor(root, p, q){

    var ans = null 

    util(root, p, q)

    return ans 

    function util(currentTree, p, q){

        if (currentTree == null){
            return false   
        }

        var left = util(currentTree.left, p, q) ? 1 : 0
        var right = util(currentTree.right, p, q) ? 1 : 0 

        var mid = (currentTree.val == p.val || currentTree.val == q.val) ? 1 : 0 

        if ((mid + left + right) >= 2){
            ans = currentTree
        }

        return (mid + left + right > 0) 
    }
}