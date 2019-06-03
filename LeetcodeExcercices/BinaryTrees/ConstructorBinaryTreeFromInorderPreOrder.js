
class TreeNode {
    constructor(val){
        this.val = val 
        this.left = this.right = null 
    }
}
var preorder = [3,9,20,15,7]
var inorder = [9,3,15,20,7]

var treeConstructed = constructBT(preorder, inorder)

function constructBT(preorder, inorder){

    if (preorder.length == 0 || inorder.length == 0){
        return []
    }
    
    var root = new TreeNode(preorder[0])
    

    constructBTUTIL(root, inorder, preorder)
    return root 

    function constructBTUTIL(currentTree, inOr, preOr){

        if (currentTree == null){
            return 
        }

        var currentElementIndex = getIndexInOrder(currentTree.val, inOr)

        var leftInorder = inOr.slice(0, currentElementIndex)
        var rightInorder = []
        if (currentElementIndex + 1 < inOr.length){
            rightInorder = inOr.slice(currentElementIndex + 1)
        }

        var leftPreOrder = []
        var rightPreOrder = []

        for (var leftI = 0; leftI < preOr.length; leftI++){
            if (isArrayContaining(preOr[leftI], leftInorder)){
                leftPreOrder.push(preOr[leftI])
            }
        }

        for (var rightI = 0; rightI < preOr.length; rightI++){
            if (isArrayContaining(preOr[rightI], rightInorder)){
                rightPreOrder.push(preOr[rightI])
            }
        }

        if (leftInorder.length == 1){
            currentTree.left = new TreeNode(leftInorder[0])
        }

        if (rightInorder.length == 1){
            currentTree.right = new TreeNode(rightInorder[0])
        }

        if (leftPreOrder.length > 1){
            currentTree.left = new TreeNode(leftPreOrder[0])
        }

        if (rightPreOrder.length > 1){
            currentTree.right = new TreeNode(rightPreOrder[0])
        }

        constructBTUTIL(currentTree.left, leftInorder, leftPreOrder)
        constructBTUTIL(currentTree.right, rightInorder, rightPreOrder)
    }

    function getIndexInOrder(value, inorderLocal){
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