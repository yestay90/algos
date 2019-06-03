var n = 3

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

findUniqueBinaryTree(3)

function findUniqueBinaryTree(n){

    // craete dic
    var dic = {}
    for (var i = 1; i <= n; i++){
        if (dic[i]){
            dic[i] += 1
        }else {
            dic[i] = 1
        }
    }

    var level = 0
    // var root = new TreeNode()
    var results = []


    combinationUtil(null, level, dic, results, null)
    console.log(root)

    root = null 
    console.log(root)

    function combinationUtil(tree, level, dic, resultsOutput, root){

        if (tree == null && level != 0) {
            return 
        }

        if (level == n) {
            // var objectCopy = root
            resultsOutput.push(root.copy())
            // tree = null
            return 
        }

        for (var key in dic){
            var element = dic[key]
            if (element > 0){
                var nextTree = null 
                if (tree == null){
                    tree = new TreeNode(key) 
                    nextTree = tree 
                    root = tree 
                }else {
                    if (key > tree.val){
                        tree.right = new TreeNode(key)
                        nextTree = tree.right
                    }else {
                        tree.left = new TreeNode(key) 
                        nextTree = tree.left
                    }
                }
                dic[key] = element - 1 
                combinationUtil(nextTree, level + 1, dic, resultsOutput, root)
                dic[key] = element
            }
        }
    }
}