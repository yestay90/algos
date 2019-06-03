
var mat = [
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0]
]

var ans = maxSquare(mat)
console.log(ans)

function maxSquare(matrix){

    var height = matrix.length 
    var width = (matrix.length > 0) ? matrix[0].length : 0 

    var dp = create2dMatrix(height + 1, width + 1)
    var maxSquare = 0
    for(var i = 1; i < height; i++){
        for(var j = 1; j < width; j++){
            if (matrix[i - 1][j - 1] == 1){
                if (height == 2 && width == 3){
                    console.log("here")
                }
                dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j -1]) + 1 
                maxSquare = Math.max(maxSquare, dp[i][j])
            }
        }
    }

    return maxSquare * maxSquare

    function create2dMatrix(h, w){
        var gLineArray= []
        var lineCounter = 0
        while (lineCounter < h){
           var newLine = [] 
           for (var mi = 0; mi < w; mi++){
             newLine.push(0)
           }
           gLineArray.push(newLine)
           lineCounter++
        }
        
       
        return gLineArray
    }
}