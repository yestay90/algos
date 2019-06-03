var s = "leetcode"
var wordDict = ["leet", "code"] //["cats","dog","sand","and","cat"]
//"abcd"
// ["a","abc","b","cd"]
// answer is true
// "catsandog"
// ["cats","dog","sand","and","cat"]

let answer = wordBreakMain(s, wordDict)
console.log(answer)

function wordBreakMain(s, wordDict){

    var tableRanges = []
    var beginIndex = 0

    return util(s, wordDict, beginIndex, tableRanges)

    function util(s, wordDict, indexOfS, table){
        if (indexOfS >= s.length){
            console.log("index of s is higher than s : %d", indexOfS)
            if (table.length == 0){
                return false 
            }
           
            // check all ranges are filled
            table.sort(function(a, b){return a[0]-b[0]})
            
            //do we have gap between ranges
            for (var jj = 0; jj < table.length; jj++){
                
                if (jj + 1 != table.length){ // not the last one 
                    if (table[jj][1] + 1 != table[jj + 1][0]){
                        console.log("we have gap")
                        return false 
                    }
                }
            }

            // need to check do we have full range
            if (table[0][0] == 0 && table[table.length - 1][1] == s.length - 1){
                return true 
            }

            return false 
        }

        for (var wi = 0; wi < wordDict.length; wi++){
            let word = wordDict[wi]
            for (var si = indexOfS; si < s.length; si++){
                console.log("index of si: %d", si)
                if (s[si] == word[0]){ // found first letter match
                    console.log("found match first at si: %d, and word is %s", si, word)
                    var startIndex = si 
                    var p = si 
                    while (s[p] == word[p - startIndex] && p < s.length && (p - startIndex) < word.length){
                        p++
                    }
                    if (p - startIndex == word.length){ // we found word
                        si = p  // this is also end point
                        console.log("found the word is %s", word)
                        if (conformanceToTable(startIndex, si - 1, table) == false ){
                            console.log("conformance of word %s is false", word)
                            return false 
                        }else {
                            console.log("conformance of word %s is true", word)
                            if (util(s, wordDict, si, table) == false) {
                                table.pop()
                            }else {
                                return true 
                            }
                            break 
                        }
                    }
                }
            }
        }
        return false 
    }
    
    function conformanceToTable(startI, endI, table){
        if (table.length == 0){
            table.push([startI, endI])
            return true 
        }else {
            for (var ti = 0; ti < table.length; ti++){
                let range = table[ti]
                if (startI >= range[0] && endI <= range[1]) {
                    return false  // 
                }
            }
            // out points are not in index
            table.push([startI, endI])
            return true 
        }
    }
}