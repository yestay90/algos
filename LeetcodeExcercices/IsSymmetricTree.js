

class TreeNode {
    constructor(val){
        this.val = val 
        this.left = this.right = null 
    }
}

var root = new TreeNode(1)
var left1 = new TreeNode(2)
var right1 =new TreeNode(3)
// var left2 = new TreeNode(3)
// var right2 = new TreeNode(4)
// var left3 = new TreeNode(4)
// var right3 = new TreeNode(3)

root.left = left1
root.right = right1
// left1.left = left2
// left1.right = left2
// right1.left = right3
// right1.right = right3

//[1,2,2,null,3,3]

var answer = isSymmetricUtil(root, root)
console.log(answer)

function isSymmetricUtil(p, q){
    if (p == null && q == null){
        return true 
    }

    if (p == null || q == null){
        return false  
    }

    if (p.val != q.val){
        return false 
    }

    var l = isSymmetricUtil(p.left, q.right)
    var r = isSymmetricUtil(q.left, p.right)

    if (l == true && r == true){
        return true 
    }else {
        return false 
    }
}