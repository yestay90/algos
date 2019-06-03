

solveNQueenSolution(4)

function solveNQueenSolution(n){
    var positionsToReturn = []
    var boardsToReturn =[]
    var collumnGeneral = 0
    var positions = []
    var board = create2DArray(n,n)

    while (collumnGeneral < board.length){
        var hasSolution = putQueenOnLine(0, collumnGeneral)
        if (hasSolution) {
            collumnGeneral = positions[0] ? positions[0].collumn + 1 : 0
            positionsToReturn.push(positions)
            positions = []

            boardsToReturn.push(board)
            board = create2DArray(n,n)

            if (collumnGeneral == n){
                break 
            }
        }else {
            collumnGeneral++
        }
    }

    var answer = createReturnFormat(positionsToReturn)
    return answer

    function createReturnFormat(positionCollection){
        var arrayCollection = []
        for (var i = 0; i < positionCollection.length; i++){
            var currentPositions= positionCollection[i]

            var arrayOfSTRFormatted = convertPositionsToStringFormat(currentPositions)
            arrayCollection.push(arrayOfSTRFormatted)
        }
        return arrayCollection
    }

    function convertPositionsToStringFormat(positionInputs){

        var arrayToReturn = []
        for(var j = 0; j < positionInputs.length; j++){
            var currrentPosition = positionInputs[j]
            var strToForm = ""
            for (strIndex = 0; strIndex < n; strIndex++){
                if (currrentPosition.collumn == strIndex){
                    strToForm += "Q"
                }else {
                    strToForm += "."
                }
            }
            arrayToReturn.push(strToForm)
        }

        return arrayToReturn
    }


    function create2DArray(numRows, numColumns) {
        let array = [];
     
        for (row = 0; row < numRows; row++){
            array[row] = []
            for(collumn = 0; collumn < numColumns; collumn++) {
                array[row][collumn] = 0
            }
        }
    
        return array; 
    }
    

    function putQueenOnLine(qRow, startingCollumn){

        class Position {
            constructor(rol, collumn){
                this.rol = rol 
                this.collumn = collumn
            }
        }

        if (qRow == board.length) {
            return true 
        }

        var j = startingCollumn
        console.log("starting collumns is %d", j)
        for(j = startingCollumn; j < board[qRow].length; j++){
            if (isAtackedByAnotherQueen(qRow, j) == false) {
    
            console.log("we put queen at row %d, and collumn %d", qRow, j)
            board[qRow][j] = 1    
            var newposition = new Position(qRow, j)
            positions.push(newposition)

            console.log("row is to %d", qRow)
        
            // check new line
            if (putQueenOnLine(qRow + 1, 0) == true){
                console.log("ending true called times")
                return true 
            }
            }
        }
        var lastEntered = positions.pop()
        if (lastEntered != null) {
            board[lastEntered.rol][lastEntered.collumn] = 0 
        }
        return false 
    }



    function isAtackedByAnotherQueen(row, collumn){

        if (isHavingRowConflict(row) == true){
            return true 
        }

        if (isHavingCollumnConflict(collumn) == true){
            return true 
        }

        if (isHavingDiagonalConflict(row, collumn) == true){
            return true 
        }

        return false  

        function isHavingRowConflict(rowInput){
            
            for(var j = 0; j < board[rowInput].length; j++){
                if (board[rowInput][j] == 1){
                    console.log("having conflict at row %d, collumn %d", rowInput, j)
                    return true 
                }
            }

            return false 
        }

        function isHavingCollumnConflict(collumnInput){

            for(var i = 0; i < board.length; i++){
                if (board[i][collumnInput] == 1){
                    console.log("having conflict at row %d, collumn %d", i, collumnInput)
                    return true 
                } 
            }

            return false 
        }

        function isHavingDiagonalConflict(rowInput, collumInput){

            var i = rowInput;
            var j = collumInput;

            while(i >= 0 && j >= 0){
                if (board[i][j] == 1){
                    console.log("having diagonal conflict at row %d, collumn %d", i, j)
                    return true 
                }

                i--;j--;
            }

            var i = rowInput;
            var j = collumInput;

            while (i < board.length && j < board[rowInput].length){
                if (board[i][j] == 1){
                    console.log("having diagonal conflict at row %d, collumn %d", i, j)
                    return true 
                }

                i++;j++;
            }

            var i = rowInput;
            var j = collumInput;

            while (i >= 0 && j < board[rowInput].length){
                if (board[i][j] == 1){
                    console.log("having diagonal conflict at row %d, collumn %d", i, j)
                    return true 
                }

                i--;j++;
            }

            var i = rowInput;
            var j = collumInput;

            while (i < board.length && j >= 0){
                if (board[i][j] == 1){
                    console.log("having diagonal conflict at row %d, collumn %d", i, j)
                    return true 
                }

                i++;j--;
            }

            return false 
        }
    }
}

