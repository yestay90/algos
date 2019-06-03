
class Tree {
    constructor(val){
        this.val = val 
        this.left = this.right = null; 
    }
}

var root = new Tree(1)
root.right = new Tree(2)
root.right.left = new Tree(3)


var result = []
preOrderTraversal(root)
console.log(result)
function preOrderTraversal(tree){
    if (tree == null){
        return 
    }

    result.push(tree.val)
    preOrderTraversal(tree.left)
    preOrderTraversal(tree.right)
}