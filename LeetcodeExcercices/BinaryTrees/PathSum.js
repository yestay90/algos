
class TreeNode {
    constructor(val){
        this.val = val
        this.left = this.right = null 
    }
}

var root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(3)
root.left.left.left = new TreeNode(4)
root.left.left.left.left = new TreeNode(5)

var answer = isRootToLeaf(root, 6)
console.log(answer)

function isRootToLeaf(root, sum){

    if (root == null){
        return false 
    }

    if (root.left == null && root.right == null) {
        return sum == root.val;
    }

    var startSum = 0
    var level = 0
    return sumPathUtil(root, startSum)

    function sumPathUtil(tree, sumPath){
        if (tree == null){
            return false 
        }
        
        if (tree.left == null && tree.right == null){
            let sumInTheEnd = sumPath + tree.val
            if (sumInTheEnd == sum){
                return true 
            }else {
                return false 
            }
        }

        let isleft = sumPathUtil(tree.left, sumPath + tree.val)
        let isRight = sumPathUtil(tree.right, sumPath + tree.val)

        if (isleft == true || isRight == true){
            return true 
        }else {
            return false 
        }
    }
}