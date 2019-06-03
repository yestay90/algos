class TreeNode{
    constructor(val){
        this.val = val
        this.left = this.right = null 
    }
}

var root = new TreeNode(5)
// root.left = new TreeNode(4)
// root.right = new TreeNode(8)

// root.left.left = new TreeNode(11)
// root.left.left.left = new TreeNode(7)
// root.left.left.right = new TreeNode(2)

// root.right.left = new TreeNode(13)
// root.right.right = new TreeNode(4)

// root.right.right.left = new TreeNode(5)
// root.right.right.right = new TreeNode(1)


let answer = pathSumII(root, 5)
console.log(answer)

function pathSumII(root, sum){

    if (root == null){
        return []  
    }

    var sumPath = 0
    var results = []
    var path = []

    if (root.left == null && root.right == null) {
        if (root.val == sum){
            results.push([root.val])
            return results
        } 
    }

    pathSumIIUtil(root, sumPath, results, path)
    return results

    pathSumIIUtil(root, sumPath, results, path)

    function pathSumIIUtil(tree, sumPath, results, path){
        if (tree == null){
            return 
        }

        path.push(tree.val)

        if (tree.left == null && tree.right == null){
            if (sumPath + tree.val == sum){
                results.push(path.slice())
            }
            return
        }

        pathSumIIUtil(tree.left, sumPath + tree.val, results, path)
        if (tree.left != null){
            path.pop()
        }
        pathSumIIUtil(tree.right, sumPath + tree.val, results, path)
        if (tree.right != null){
            path.pop()
        }
    }
}