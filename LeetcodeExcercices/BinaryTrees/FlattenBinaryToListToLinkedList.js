
class TreeNode {
    constructor(val){
        this.val = val 
        this.left = this.right = null 
    }
}

var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(5)

root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)

root.right.right = new TreeNode(6)

flatten(root)

function flatten(root){

    util(root)
    console.log(newTree)
}

function util(tree){

    if (tree == null){
        return 
    }

    if (tree.left == null && tree.right == null){
        return 
    }

    util(tree.left)
    util(tree.right)

    if (tree.left == null){
        return 
    }

    let leftSide = tree.left
    var pointer = tree.left
    while(pointer.right != null){
        pointer = pointer.right
    }
    pointer.right = tree.right
    tree.right = leftSide
    tree.left = null 
}