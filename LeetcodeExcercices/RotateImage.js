var matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

var n = matrix.length
for (var i = 0; i < Math.floor(n/2); i++){
    last = matrix.length - 1 
    for (var j = 0; j < n/2; j++){
        var temp = matrix[i][j]
        matrix[i][j] = matrix[last - j][i]
        matrix[last - j][i] = matrix[last - i][last - j]
        matrix[last - i][last - j] = matrix[j][last - i]
        matrix[j][last - i] = temp
    }
}

console.log("done")