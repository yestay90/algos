var postOrder = [9,15,7,20,3]
var inorder = [9,3,15,20,7]

class TreeNode {
    constructor(val){
        this.val = val 
        this.right = this.left = null 
    }
}

var answer = createBinaryTree(inorder, postOrder)
console.log(answer)

function createBinaryTree(inorder, postorder){

    if (inorder.length == 0 || postorder.length == 0){
        return null 
    }

    // var lastPoint = postOrder.length - 1
    var root = new TreeNode(postorder.pop())

    createUtil(root, inorder, postorder)

    return root 

    function createUtil(currentTree, inO, postO){
        
        if (currentTree == null){
            return null 
        }

        var treeValue = currentTree.val
        var treeValueIndex = getIndexIn(treeValue, inO)

        var leftInorder = inO.slice(0, treeValueIndex)
        var rightInOrder = []
        if (treeValueIndex + 1 < inO.length) {
            rightInOrder = inO.slice(treeValueIndex + 1)
        } 

        var leftPostOrder = []
        var rightPostOrder = []

        for (var m = 0; m < postO.length; m++){
            if (isArrayContaining(postO[m], leftInorder)){
                leftPostOrder.push(postO[m])
            }

            if (isArrayContaining(postO[m], rightInOrder)){
                rightPostOrder.push(postO[m])
            }
        }

        if (leftInorder.length == 1){
            currentTree.left = new TreeNode(leftInorder[0])
        }

        if (rightInOrder.length == 1){
            currentTree.right = new TreeNode(rightInOrder[0])
        }

        if (leftPostOrder.length > 1){
            currentTree.left = new TreeNode(leftPostOrder.pop())
        }

        if (rightPostOrder.length > 1){
            currentTree.right = new TreeNode(rightPostOrder.pop())
        }

        createUtil(currentTree.left, leftInorder, leftPostOrder)
        createUtil(currentTree.right, rightInOrder, rightPostOrder)
    }

    function getIndexIn(value, inorderLocal){
        for (var j = 0; j < inorderLocal.length; j++){
            if (inorderLocal[j] == value){
                return j
            }
        }
        return null
    }

    function isArrayContaining(valueLocal, arrayLocal){
        for (var k = 0; k < arrayLocal.length; k++){
            if (arrayLocal[k] == valueLocal){
                return true 
            }
        }

        return false 
    } 
}