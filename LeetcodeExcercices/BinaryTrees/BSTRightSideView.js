
class TreeNode {
    constructor(val){
        this.val = val 
        this.left = this.right = null 
    }
}

var root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.right = new TreeNode(5)
root.right = new TreeNode(3)
root.right.right = new TreeNode(4)

var ans = rightSideView(root)
console.log(ans)

function rightSideView(root){

    var glevel = 0
    var output = []
    util(glevel, root)
    return output

    function util(level, tree){

        if (tree == null){
            return 
        }

        if (level < output.length){
            output[level] = tree.val
        }else {
            output.push(tree.val)
        }

        util(level + 1, tree.left)
        util(level + 1, tree.right)
    }
}