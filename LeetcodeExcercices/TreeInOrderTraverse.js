class TreenNode {
    constructor(val){
        this.val = val
        this.left = this.right = null; 
    }
}

var root = new TreenNode(3)
var next1 = new TreenNode(1)
var next2 = new TreenNode(2)
// var next3 = new TreenNode(4)
// var next4 = new TreenNode(5)
// var next5 = new TreenNode(2)
// var next6 = new TreenNode(4)

root.left = next1
next1.right = next2
// next2.left = next3
// next2.right = next4
// next4.next = next5
// next5.next = next6

var resultsToReturn = []
inOrderTraverseUtil(root, resultsToReturn)
console.log(resultsToReturn)
function inOrderTraverseUtil(tree){

    if (tree == null){
        return 
    }

    inOrderTraverseUtil(tree.left)
    resultsToReturn.push(tree.val)
    console.log(tree.val)
    inOrderTraverseUtil(tree.right)
}