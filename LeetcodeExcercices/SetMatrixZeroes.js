var matrix = [
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
  ]

var formattedMatrix = setZeroesProblem(matrix)

console.log(formattedMatrix)

function setZeroesProblem(matrix){

    var foundCoordinates = []
    var m = matrix.length
    var n = matrix[0].length
    
    for (var i = 0; i < m; i++){
        for (var j = 0; j < n; j++){
            if (matrix[i][j] == 0){
                if (isCrossedByRow(i) == false){
                    setZeroesByRow(i)
                }

                if (isCrossedByCollumn(j) == false){
                    setZeroesByCollumn(j)
                }

                foundCoordinates.push([i,j])
                 
            }
        }
    }

    for (var i = 0; i < m; i++){
        for (var j = 0; j < n; j++){
            if (matrix[i][j] == -111){
                matrix[i][j] = 0
            }
        }
    }

    return matrix

    function setZeroesByRow(rows){
        for (var ik = 0; ik < n; ik++){
            if (matrix[rows][ik] != 0){
                matrix[rows][ik] = -111
            }
        }
    }

    function setZeroesByCollumn(collumn){
        for (var jk = 0; jk < m; jk++){
            if (matrix[jk][collumn] != 0){
                matrix[jk][collumn] = -111 
            }
        }
    }

    function isCrossedByRow(row){
        for (var k = 0; k < foundCoordinates.length; k++){
            var currentCoordinate = foundCoordinates[k]

            if (currentCoordinate[0] == row){
                return true 
            }
        }

        return false 
    }

    function isCrossedByCollumn(collumn){
        for (var k = 0; k < foundCoordinates.length; k++){
            var currentCoordinate = foundCoordinates[k]

            if (currentCoordinate[1] == collumn){
                return true 
            }
        }

        return false 
    }
    
}
