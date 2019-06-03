
var obstacleGrid = [
    [0,1,0],
    [0,1,0],
    [0,0,0]
]

if (obstacleGrid[0][0] == 1){
    return 0 
}

var m = obstacleGrid.length
var n = obstacleGrid[0].length

var isRowObtableFound = false 
for (var i = 0; i < m; i++){
    if (obstacleGrid[i][0] == 1){
        obstacleGrid[i][0] = 0
        isRowObtableFound = true 
    }else {
        if (isRowObtableFound) {
            obstacleGrid[i][0] = 0 
        }else {
            obstacleGrid[i][0] = 1 
        }
    }
}

var isCollumnObstacleFound = false 
for (var j = 1; j < n; j++){
    if (obstacleGrid[0][j] == 1){
        obstacleGrid[0][j] = 0
        isCollumnObstacleFound = true 
    }else {
        if (isCollumnObstacleFound){
            obstacleGrid[0][j] = 0 
        }else {
            obstacleGrid[0][j] = 1 
        }
    }
}

for (var i = 1; i < m; i++){
    for (var j = 1; j < n; j++){
        if (obstacleGrid[i][j] == 1){
            obstacleGrid[i][j] = 0 
        } else {
            obstacleGrid[i][j] = obstacleGrid[i- 1][j] + obstacleGrid[i][j -1]
        }
    }
}

return obstacleGrid[m - 1][n-1]
