var s = "leetcode"
var wordDict = ["leet","code"]

breakWordDP(s, wordDict)

function breakWordDP(s, wordDict){

    let T = create2DNSizeMatrix(s.length)

    for (var l = 1; l <= s.length; l++){
        for ( var i = 0; i < s.length - l + 1; i++){
            var j = i + l - 1
            let substr = s.substring(i, j + 1)

            if (isWordInDict(substr)){
                T[i][j] = i 
                continue
            }
            // find k split
            for (var k = i + 1; k <= j; k++){
                if (T[i][k -1] != -1 && T[k][j] != -1){
                    T[i][j] = k 
                    break; 
                }
            }
        }
    }

    if (T[0][s.length - 1] == -1){
        return false  
    }else {
        return true 
    }

    // create space separte word from string is possible

    function isWordInDict(word){
        for (var d = 0; d < wordDict.length; d++){
            let wordFromArr = wordDict[d]
            if (word == wordFromArr){
                return true
            }
        }
        return false 
    }

    function create2DNSizeMatrix(n){

        var matrix = []
        var lineCounter = 0 
        while (lineCounter < n){
            var line = []
            for (var i = 0; i < n; i++){
                line.push(-1)
            }
            matrix.push(line)
            lineCounter++
        }
        return matrix
    }

}