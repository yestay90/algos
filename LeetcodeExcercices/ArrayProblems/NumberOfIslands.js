
var inputs = [ 
    [1,1,0,0,0],
    [1,1,1,0,0],
    [0,0,1,1,0],
    [0,0,0,1,1],
]
// [1,1,0,0,0],
//     [1,1,0,0,0],
//     [0,0,1,0,0],
//     [0,0,0,1,1],

var ans = countNumberOfIslands(inputs)
console.log(ans)

function countNumberOfIslands(grid){

    var height = grid.length
    var width = grid[0].length

    var a2 = create2DNSizeMatrix(height, width)
    var islandsCount = 0
    for (var i = 0; i < height; i++){
        for (var j = 0; j < width; j++){
            if (a2[i][j] == false && grid[i][j] == 1){
                islandsCount += 1
                util(i, j)
            }
        }
    }

    return islandsCount

    function util(row, collumn){
        a2[row][collumn] = true 

        if (row - 1 >= 0 && grid[row - 1][collumn] == 1 && a2[row - 1][collumn] == false) {
            util(row - 1, collumn)
        }

        if (row + 1 < height && grid[row + 1][collumn] == 1 && a2[row + 1][collumn] == false) {
            util(row + 1, collumn)
        }

        if (collumn - 1 >= 0 && grid[row][collumn - 1] == 1 && a2[row][collumn - 1] == false) {
            util(row, collumn - 1)
        }        

        if (collumn + 1 < width && grid[row][collumn + 1] == 1 && a2[row][collumn + 1] == false) {
            util(row, collumn + 1)
        }
    }

    function create2DNSizeMatrix(h , w){
        var matrix = []
        var lineCounter = 0 
        while (lineCounter < h){
            var line = []
            for (var i = 0; i < w; i++){
                line.push(false)
            }
            matrix.push(line)
            lineCounter++
        }
        return matrix
    }
}