
console.log("here we are")

function findMaxDepthOfTree(root){
    var max = 0
    var level = 0 

    depthUtil(root, level)
    return max 

    function depthUtil(p, level){

        if (p == null){
            if (level > max){
                max = level 
            }
            return 
        }

        depthUtil(p.left, level + 1)
        depthUtil(p.right , level + 1)
    }
}

