
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

var uniqueSubtrees = generateTrees(3)
console.log(uniqueSubtrees)

function generateTrees(n){
    if (n == 0){
        return []
    }

    return helper(1, n)

    function helper(m, n){
        var result = []
        if (m > n){
            result.push(null)
            return result
        }

        for (var i = m; i <=n; i++){
            var ls = helper(m, i - 1)
            var rs = helper(i + 1, n)

            for (var l in ls) {
                for (var r in rs){
                    var curr = new TreeNode(i)
                    curr.left = l
                    curr.right = r 
                    result.push(curr)
                }
            }
        }

        return result
    }
}

