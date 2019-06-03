var m = 3
var n = 2

var originI = 0
var originJ = 0 
var results = []
var path = []
var level = 0

findUniquePath(originI, originJ, results, path, m, n, level)
console.log(results)

function findUniquePath(origini, originj, result, path, collumns, rows, level){

    console.log("origin i is %d", origini)
    console.log("origin j is %d", originj)
    console.log("level is %d", level)
    console.log("result is %d", result)
    console.log("path is %d", path)

    // corner cases
    if (collumns == 0 || rows == 0){
        return 
    }

    checkIfReachedSaveThePath()

    if (origini > rows - 1 || originj > collumns - 1){
        return 
    }

    goRight()
    
    findUniquePath(origini, originj, result, path, collumns, rows, level + 1)

    // otkat
    originj--
    // path[level] = ""

    goBottom()
    
    findUniquePath(origini, originj, result, path, collumns, rows, level + 1)
    origini--
    // path[level] = ""

    function goRight(){
        originj++
        if (originj < collumns){
            path[level] = "Right"
        }
    }

    function goBottom(){
        origini++
        if (origini < rows){
            path[level] = "Bottom"
        }
    }

    function checkIfReachedSaveThePath(){
        if (origini == rows-1 && originj == collumns-1){
            result.push(path.slice())
        } 
    }
    // return result
}