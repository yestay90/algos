var board = [
    ["A","B","C","E"],
    ["S","F","E","S"],
    ["A","D","E","E"]
]

var word = "ABCESEEEFS"

var answer = searchWordGeneral(board, word)
console.log(answer)

function searchWordGeneral(board, word){

    var h = board.length
    var w = board[0].length
    var userLetttersCoordinates = []
    var level = 0 

    for (var ii = 0; ii < h; ii++){
        for (var jj = 0; jj < w; jj++){
            if (board[ii][jj] == word[level]){
                var coordinatesToSave = [ii, jj]
                userLetttersCoordinates.push(coordinatesToSave)
                if (searchUtil(level + 1, ii, jj, word, board, userLetttersCoordinates)){
                    return true
                }
                userLetttersCoordinates = []
            }
        }
    }

    return false 

    function searchUtil(level, row, collumn, word, board, usedLetters){
        if (level >= word.length){
            return true 
        }

        if (row == 1 && collumn == 3){
            console.log("found it")
        }

        // check left 
        var leftMoveIndex = collumn - 1 
        if (leftMoveIndex >= 0) {
            console.log("checking left, row and collumn:", row, leftMoveIndex)
            if (board[row][leftMoveIndex] == word[level] && isUsedThisCoord(row, leftMoveIndex, usedLetters) == false){
                var saveCoor = [row, leftMoveIndex]
                usedLetters.push(saveCoor)
                console.log("**** found match with character %s ****", word[level])
                if (searchUtil(level+1, row, leftMoveIndex, word, board, usedLetters)){
                    return true 
                }
                usedLetters.pop()
            }
        }
        
        // check right
        var rightMoveIndex = collumn + 1 
        if (rightMoveIndex < w) {
            console.log("checking right, row and collumn:", row, rightMoveIndex)
            if (board[row][rightMoveIndex] == word[level] && isUsedThisCoord(row, rightMoveIndex, usedLetters) == false){
                var saveCoord = [row, rightMoveIndex]
                usedLetters.push(saveCoord)
                console.log(" *** found match with character %s ***", word[level])
                if (searchUtil(level+1, row, rightMoveIndex , word, board, usedLetters)){
                    return true 
                }
                usedLetters.pop()
            }
        }

        // check top
        var topMoveIndex = row - 1
        if (topMoveIndex >= 0){
            console.log("checking top, row and collumn:", topMoveIndex, collumn)
            if (board[topMoveIndex][collumn] == word[level] && isUsedThisCoord(topMoveIndex, collumn, usedLetters) == false){
                var saveCoord = [topMoveIndex, collumn]
                usedLetters.push(saveCoord)
                console.log(" *** found match with character %s ***", word[level])
                if (searchUtil(level+1, topMoveIndex, collumn , word, board, usedLetters)){
                    return true 
                }
                usedLetters.pop()
            }
        }

        // checkBottom 
        var bottomMoveIndex = row + 1 
        if (bottomMoveIndex < h){
            console.log("checking bottom, row and collumn:", bottomMoveIndex, collumn)
            if (board[bottomMoveIndex][collumn] == word[level] && isUsedThisCoord(bottomMoveIndex, collumn, usedLetters) == false){
                var saveCoord = [bottomMoveIndex, collumn]
                usedLetters.push(saveCoord)
                console.log(" *** found match with character %s ***", word[level])
                if (searchUtil(level+1, bottomMoveIndex, collumn , word, board, usedLetters)){
                    return true 
                }
                usedLetters.pop()
            }
        }

        console.log("we get false when reaching the end:")
        console.log("the row and collum are: %d, %d", row, collumn)
        return false 
    }

    function isUsedThisCoord(row, collumn, savedCoordinates){

        for (var ik = 0; ik < savedCoordinates.length; ik++){
            var currentCoord = savedCoordinates[ik]
            if (currentCoord[0] == row && currentCoord[1] == collumn){
                console.log("we found it saved coordinates %d %d:", row, collumn)
                return true 
            }
        }

        return false 
    }
}