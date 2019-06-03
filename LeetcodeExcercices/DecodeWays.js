var str = "101"

var number = decodeWays(str)
console.log(number)

function decodeWays(s){

    if (s.length == 0) {
        return 0
    }

    var arrayStr = s.split("")
    var n = arrayStr.length
    var diagonalNumber = 1

    if (arrayStr[0] == 0){
        return 0
    }

    // if (arrayStr.length == 2){
    //     let first = arrayStr[0]
    //     let second = arrayStr[1]
    //     let summOfStr = Number(first + second)
    //     if (summOfStr < 27){
    //         return 1 
    //     }else {
    //         return 0 
    //     }
    // }

    for (var ik = 0; ik < arrayStr.length; ik++){
        let character = arrayStr[ik]
        if (character == 0){
            diagonalNumber = 0 
        }
    }

    var m = create2DNSizeMatrix(n)
    fillDiagonalWithNumber(m)
    console.log(m)
    let maxComb = dynamicProgram()

    if (diagonalNumber == 0 && n > 2){
        maxComb -= 1
    }

    return maxComb

    function dynamicProgram(){
        var maxCombination = diagonalNumber

        for (var di = 0; di < n; di++){
            var dj = di + 1
            if (dj < n && dj < di + 2){
                let first = arrayStr[di]
                let second = arrayStr[dj]
                let summOfStr = Number(first + second)
                if (first != 0){
                    var previousMax = m[di][dj-1] 
                    if (di > 0){
                        previousMax = m[di - 1][dj -1]
                    }
                    if (summOfStr < 27){
                        m[di][dj] = previousMax + 1
                    }else {
                        m[di][dj] = 0 
                    }

                    if (m[di][dj] > maxCombination){
                        maxCombination = m[di][dj]
                    }
                }else {
                    previousMax = m[di - 1][dj -1]
                    m[di][dj] = previousMax 
                }
                
            }
        }

        return maxCombination
    }

    function fillDiagonalWithNumber(matrix){

        for (var i = 0; i < n; i++){
            for (var j = 0; j < n; j++){
                if (i == j){
                    matrix[i][j] = diagonalNumber
                }
            }
        }
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
}