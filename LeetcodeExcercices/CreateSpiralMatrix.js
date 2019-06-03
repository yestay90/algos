
var n = 5 

if (n == 0){
    return []
}

var simpleMatrix = create2DNSizeMatrix(n)
console.log(simpleMatrix)

var spiralMatrix = fillMatrixInSpiralForm(simpleMatrix, n)
console.log(spiralMatrix)

function fillMatrixInSpiralForm(matrix, n){

    var leftMargin = 0 
    var rightMargin = matrix[0].length
    var bottomMargin = matrix.length
    var topMargin = 0 

    var i = 0
    while(i < n*n){

        /* going from left to right */
        for (var k = leftMargin; k < rightMargin; k++){
            matrix[topMargin][k] = i + 1 
            i++
        }
        topMargin++

        /* going from top to bottom */
        for (var j = topMargin; j < bottomMargin; j++){
            matrix[j][rightMargin - 1] = i+1
            i++
        }
        rightMargin--

        /* going from right to left */
        if (leftMargin != rightMargin){
            for (var b = rightMargin - 1; b>=leftMargin; b--){
                matrix[bottomMargin - 1][b] = i+1
                i++
            }
        }
        bottomMargin--
        
        /*going from bottom to top */
        if (topMargin != bottomMargin){
            for (var u = bottomMargin - 1; u >= topMargin; u--){
                matrix[u][leftMargin] = i + 1
                i++
            }
        }
        leftMargin++
    }

    return matrix
}

function create2DNSizeMatrix(n){

    var matrix = []
    var lineCounter = 0 
    while (lineCounter < n){
        var line = []
        for (var i = 0; i < n; i++){
            line.push(0)
        }
        matrix.push(line)
        lineCounter++
    }
    return matrix
}