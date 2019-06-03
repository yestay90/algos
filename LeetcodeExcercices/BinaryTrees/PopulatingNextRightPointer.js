class TreeLinkNode{
    constructor(val){
        this.val = val 
        this.left = this.right = this.next = null 
    }
}

let root = new TreeLinkNode(0)
root.left = new TreeLinkNode(1)
root.right = new TreeLinkNode(2)

root.left.left = new TreeLinkNode(3)
root.left.right = new TreeLinkNode(4)

root.right.left = new TreeLinkNode(5)
root.right.right = new TreeLinkNode(6)


var stack = []
var level = 0 
util(root, level)
console.log(root)

function util(tree, level){

    if (tree == null){
        return
    }

    if (stack[level]){
        let lastone = stack[level].pop()
        lastone.next = tree
        stack[level].push(tree)  
    }else {
        stack.push([tree])
    }

    util(tree.left, level + 1)
    util(tree.right, level + 1)

}