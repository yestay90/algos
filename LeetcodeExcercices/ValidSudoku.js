// var board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

var board = [
    [".","4",".",".","9","3",".",".","."],
    [".",".",".",".",".",".",".","3","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".","4",".",".",".",".",".","6"],
    ["2",".","3",".",".",".",".","6","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".","4",".","."],
    [".",".",".","1",".",".",".",".","."],
    [".",".",".","4","7",".",".",".","."]
]
  if (isValidByCollumn(board) == false){
      return false 
  }

  if (isValidByRows(board) == false){
      return false 
  }

  for (var i = 0; i < board.length; i = i + 3){
      for (var j = 0; j < board[i].length; j = j + 3){
            if (isValidSubBox(board, i, j) == false) {
                return false 
            }
      }
  }

  console.log("sub boxes are valid")

  function isValidSubBox(tableSudoku, rowID, collumnID){
    var subBoxSet = new Set();
    for (var si = rowID; si < rowID + 3; si++){
        for (var sj = collumnID; sj < collumnID + 3; sj++){
            var currentNumber = tableSudoku[si][sj]
            console.log("checking number %d at coordiante %d, %d", currentNumber, si, sj)
            if (subBoxSet.has(currentNumber)){
                console.log("this number is repeated %d", currentNumber)
                return false; 
            }else if (currentNumber != "."){
                subBoxSet.add(currentNumber)
                console.log("we added this number %d to set", currentNumber)
            }
        }
    }

    return true; 
  }

  function isValidByRows(tableSudokuByRow){

    var ri = 0; 
    var rj = 0 
    for(rj = 0; rj < tableSudokuByRow.length; rj++){
        var setByRows = new Set()
        for (ri = 0; ri < tableSudokuByRow.length; ri++){
            var currentNumber = tableSudokuByRow[ri][rj]
            console.log("checking number %d at coordiante %d, %d", currentNumber, ri, rj)
            if (setByRows.has(currentNumber)){
                console.log("this number is repeated %d", currentNumber)
                return false; 
            }else if (currentNumber != "."){
                setByRows.add(currentNumber)
                console.log("we added this number %d to set", currentNumber)
            }
        }
    }

    return true; 
  }

  function isValidByCollumn(tableSudokuByCollumn){

    for (var ci = 0; ci < tableSudokuByCollumn.length; ci++){
        var setByCollumn = new Set();
        for(var cj = 0; cj < tableSudokuByCollumn[ci].length; cj ++){
            var currentNumber = tableSudokuByCollumn[ci][cj]
            console.log("checking number %d at coordiante %d, %d", currentNumber, ci, cj)
            if (setByCollumn.has(currentNumber)){
                console.log("this number is repeated %d", currentNumber)
                return false; 
            }else if (currentNumber != "."){
                setByCollumn.add(currentNumber)
                console.log("we added this number %d to set", currentNumber)
            }
        }
    }
  }