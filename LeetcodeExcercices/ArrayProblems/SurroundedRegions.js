
let board = create2DNSizeMatrix(3)

board[0][1] = 'O'
board[1][0] = 'O'
board[1][2] = 'O'
board[2][1] = 'O'

surroundedRegions(board)

function surroundedRegions(board){

    if (board.length == 0){
        return 
    }

    var height = board.length
    var width = board[0].length

    for (var i = 0; i < height; i++){
        for (var j = 0; j < width; j++){
            if (board[i][j] == 'O'){
                board[i][j] = '-'
            }
        }
    }

    for (var t = 0; t < width; t++){
        if (board[0][t] == '-'){
            fludingWater(0, t, height, width)
        }
    }

    for (var r = 0; r < height; r++){
        if (board[r][width - 1] == "-"){
            fludingWater(r, width - 1, height, width)
        }
    }

    for (var b = 0; b < width; b++){
        if (board[height - 1][b] == "-"){
            fludingWater(height - 1, b, height, width)
        }
    }

    for (var l = 0; l < height; l++){
        if (board[l][0] == "-"){
            fludingWater(l, 0, height, width)
        }
    }

    for (var i = 0; i < height; i++){
        for (var j = 0; j < width; j++){
            if (board[i][j] == '-'){
                board[i][j] = 'X'
            }
        }
    }

    function fludingWater(row, collumn, boardHeight, boardWidth){

        if (row < 0 || row >= boardHeight){
            return 
        }
    
        if (collumn < 0 || collumn >= boardWidth){
            return 
        }
    
        if (board[row][collumn] == "-") {
            board[row][collumn] = 'O'
        }else {
            return 
        }
    
        fludingWater(row - 1, collumn, boardHeight, boardWidth)
        fludingWater(row + 1, collumn, boardHeight, boardWidth)
        fludingWater(row, collumn - 1, boardHeight, boardWidth)
        fludingWater(row, collumn + 1, boardHeight, boardWidth)
    }
}



function create2DNSizeMatrix(n){
    var matrix = []
    var lineCounter = 0 
    while (lineCounter < n){
        var line = []
        for (var i = 0; i < n; i++){
            line.push('X')
        }
        matrix.push(line)
        lineCounter++
    }
    return matrix
}