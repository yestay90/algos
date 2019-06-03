
var grid = [
    [0,1],
    [1,0]
]

var sumCost = getMinimumPathSum(grid)
console.log(sumCost)

function getMinimumPathSum(grid){

    var m = grid.length
    var n = grid[0].length

    var sumMatrix = new Array(m)

    for (var ik = 0; ik < m; ik++){
        sumMatrix[ik] = new Array(n)
    }

    sumMatrix[0][0] = grid[0][0]

    for (var i = 1; i < m; i++){
        sumMatrix[i][0] = sumMatrix[i - 1][0] + grid[i][0]
    }

    for (var j = 1; j < n; j++){
        sumMatrix[0][j] = sumMatrix[0][j-1] + grid[0][j]
    }

    for (var i = 1; i < m; i++){
        for (var j = 1; j < n; j++){
            sumMatrix[i][j] = Math.min(sumMatrix[i-1][j], sumMatrix[i][j-1]) + grid[i][j]
        }
    }

    return sumMatrix[m -1 ][n - 1]
}