
class TreeNode {
    constructor(val) {
         this.val = val;
             this.left = this.right = null;
    }
}

var root1 = new TreeNode(1)
var left1 = new TreeNode(2)
// var right1 = new TreeNode(2)
root1.left = left1
// root1.right = right1

var root2 = new TreeNode(1)
// var left2 = new TreeNode(2)
var right2 = new TreeNode(2)
// root2.left = left2
root2.right = right2

var answer = isTheSameTree(root1, root2)
console.log(answer)


function isTheSameTree(p, q){

    if (p == null && q == null){
        return true 
    }

    if (p == null || q == null){
        return false 
    }

    if (p.val != q.val){
        return false 
    }

    var l = isTheSameTree(p.left, q.left)
    var r = isTheSameTree(p.right, q.right)

    return l == r == true
}