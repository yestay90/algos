
class TreeNode {
    constructor(val) {
         this.val = val;
             this.left = this.right = null;
    }

    copy() {
        var leftCopy = null;
        var rightCopy = null;
        if (this.left != null) {
            leftCopy = this.left.copy();
        }
        if (this.right != null) {
            rightCopy = this.right.copy();
        }
        var copyValue = new TreeNode(this.val)
        copyValue.left = leftCopy
        copyValue.right = rightCopy
        return copyValue
    }
}


var root = new TreeNode(3)
var next1 = new TreeNode(1)
var next2 = new TreeNode(5)
var next3 = new TreeNode(0)
var next4 = new TreeNode(2)
var next5 = new TreeNode(4)
var next6 = new TreeNode(6)

root.left = next1
root.right = next2
next1.left = next3
next1.right = next4
next2.left = next5
next2.right = next6

var answer = isValid(root, null)
console.log(answer)
function isValid(tree, minValue, maxValue){

    if (tree == null){
        return true 
    }

    if (minValue != null && tree.val <= minValue){
        return false 
    }

    if (maxValue != null && tree.val >= maxValue){
        return false 
    }

    if (tree.right != null){
        if (tree.val >= tree.right.val){
            return false 
        } 
    }

    if (tree.left != null){
        if (tree.left.val >= tree.val){
            return false 
        }
    }

    var l = isValid(tree.left, minValue, tree.val)
    var r = isValid(tree.right, tree.val, maxValue)

    if (l == true && r == true){
        return true 
    }else {
        return false 
    }
}