
class TreeNode{
    constructor(val){
        this.val = val 
        this.left = this.right = null 
    }
}

var root = new TreeNode(4)
root.left = new TreeNode(9)
root.right = new TreeNode(0)

root.left.left = new TreeNode(5)
root.left.right = new TreeNode(1)

var answer = sumToR(root)
console.log(answer)

function sumToR(root){
    var sum = 0
    var path = ""

    util(root, path)

    return sum 

    function util(tree, path){
        if (tree == null){
            return 
        }

        var strValue = tree.val.toString()

        if (tree.left == null && tree.right == null){
            var sumValue = path.concat(strValue)
            sum += parseInt(sumValue, 10)
            return 
        }

        // var ssss = path.concat(strValue)

        util(tree.left, path.concat(strValue))
        path.replace(strValue, "")
        util(tree.right, path.concat(strValue))
    }
}