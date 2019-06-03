var matrix = [
    [ 1 , 2, 3, 4, 44],
    [ 5 , 6, 7, 8, 45],
    [ 9 , 10, 11, 12, 46],
    [13, 14, 15, 16, 47],
    [55, 56, 57, 58, 59]
]

if (matrix.length == 0) {
    return []
}

var m = matrix.length // width
var n = matrix[0].length
var i = 0; 
var arrayToReturn = []
while (i < Math.ceil(n/2) && i < Math.ceil(m/2)){
    console.log("left TO right DONE")
    // from left to right 
    var leftEdge = i 
    for (var k = i; k < n - i; k++){
        var value = matrix[i][k]
        console.log(value)
        arrayToReturn.push(value)
    }
    console.log("Top TO Bottom DONE")
    // form top to bottom 
    var rightEdge = n - i
    var bottomEdge = m - i 
    // i + 1 because we dont want to reprint again value
    // bottomEdge - 1 because we dont want to reprint value
    for (var j = i + 1; j < bottomEdge - 1; j++){
        var value = matrix[j][rightEdge - 1]
        console.log(value)
        arrayToReturn.push(value)
    }

    console.log("RIGHT TO LEFT DONE")
    // from right to left 
    if (i != bottomEdge - 1) {
        for (var r = rightEdge - 1; r >= leftEdge; r--){
            var value = matrix[bottomEdge - 1][r]
            console.log(value)
            arrayToReturn.push(value)
        }
    }

    console.log("BOTTOM TO TOP DONE")
    // from bottom to top
    if (i != rightEdge - 1){
        for (var q = bottomEdge - 2; q > i; q--){
            var value = matrix[q][leftEdge]
            console.log(value)
            arrayToReturn.push(value)
        }
    }

    i++
}


