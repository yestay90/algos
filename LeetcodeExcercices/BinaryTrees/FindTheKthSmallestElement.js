
class TreeNode {
    constructor(val){
        this.val = val 
        this.right = this.left = null 
    }
}

var root = new TreeNode(5)
root.left = new TreeNode(3)
root.right = new TreeNode(6)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(4)
root.left.left.left = new TreeNode(1)

var ans = findKthSmallestElement(root, 1)
console.log(ans)

function findKthSmallestElement(root, k){

    if (root == null){
        return null 
    }

    var result = []

    util(root)

    return result.pop()

    function util(tree){

        if (tree == null){
            return 
        }

        if (result.length == k){
            console.log("value is higher than k")
            return 
        }

        console.log("current val is %d", tree.val)

        util(tree.left)

        if (result.length == k){
            console.log("value is higher than k")
            return 
        }

        console.log("adding value to result %d", tree.val)
        result.push(tree.val)

        util(tree.right)
    }
}