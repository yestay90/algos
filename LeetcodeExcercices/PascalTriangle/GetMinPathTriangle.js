
var triangle = [[-1],[2,3],[1,-1,-3]]

let anwer = getMinPath(triangle)
console.log(anwer)


function getMinPath(triangle){
    var level = 0
    var minPathSum = 10000000
    var prevIndex = 0
    var sum = 0 
    var savedTable = new Array(triangle.length)
    util(level, prevIndex, sum)

    return minPathSum

    function util(level, prevJ, sum){
        if (level >= triangle.length){
            if (sum < minPathSum){
                minPathSum = sum 
            }
            return 
        }
        var row = triangle[level]

        if (savedTable[level] == null){
            savedTable[level] = new Array(row.length)
        }

        var indexLimit = prevJ + 1
        if (indexLimit >= row.length){
            indexLimit = prevJ
        }
        for (var j = prevJ; j <= indexLimit; j++){
            var sumLocal = sum + row[j]
            if (savedTable[level][j] != null){
                if (sumLocal < savedTable[level][j]){
                    savedTable[level][j] = sumLocal
                    util(level + 1, j, sumLocal)
                    console.log("loop called using saved table at level %d, row is %d", level, row[j])   
                }else {
                    // our path is already bigger
                    console.log("stoped loop called at level %d, row is %d sum is %d", level, j, sumLocal)            
                    continue  
                }
            }else {
                // no saved records on table 
                savedTable[level][j] = sumLocal
                util(level + 1, j, sumLocal)
                console.log("loop called at level %d, row is %d sum is %d", level, j, sumLocal)            
            }
        }
    }
}