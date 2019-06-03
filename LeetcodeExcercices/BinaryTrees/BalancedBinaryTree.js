
function isBalanced(root){

    function isBalancedTree(tree){

        if (tree == null){
            return true
        }

        let leftH = getHeight(tree.left)
        console.log(leftH)
        let rightH = getHeight(tree.right)
        console.log(rightH)

        let diff = Math.abs(rightH - leftH)

        if (diff <= 1 && isBalancedTree(tree.left) && isBalancedTree(tree.right)){   
           return true 
        }else {
            return false 
        }
    }

    function getHeight(tree){
        if (tree == null){
            return 0 
        }

        let heigthL = getHeight(tree.left)
        let heigthR = getHeight(tree.right)       

        return 1 + Math.max(heigthL, heigthR)
    }
}