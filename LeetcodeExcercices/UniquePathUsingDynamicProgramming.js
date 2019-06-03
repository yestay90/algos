m = 3
n = 3

var obstacleGrid = new Array(m)

for (var ik = 0; ik < obstacleGrid.length; ik++){
    obstacleGrid[ik] = new Array(n)
}

console.log(obstacleGrid)

for (var i = 0; i < m; i++){
    obstacleGrid[i][0] = 1 
}

for (var j = 0; j < n; j++){
    obstacleGrid[0][j] = 1 
}

for (var i = 1; i < m; i++){
    for (var j = 1; j < n; j++){
        obstacleGrid[i][j] = obstacleGrid[i- 1][j] + obstacleGrid[i][j -1]
    }
}

return obstacleGrid[m - 1][n-1]