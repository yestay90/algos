
let answer = findCount("hot", "cog", ["hot","dot","dog","lot","log", "cog"])
console.log(answer)

function findCount(beginWord, endWord, wordList){

    if (wordList.includes(endWord) == false){
        return 0
    }

    var count = 1
    console.log(beginWord)
    if (wordList.includes(beginWord) == false){
        wordList.unshift(beginWord)
    }else {
        preprocessWordListIfWordhasBeginWord()
    }

    while(wordList.length != 0){
        let firstWord  = wordList.shift()

        if (isAdjacent(firstWord, endWord)){
            console.log(endWord)
            count++ 
            break  
        }

        var isFound = false
        for (var j = 0; j < wordList.length; j++){
            if (isAdjacent(firstWord, wordList[j])){
                console.log(wordList[j])
                isFound = true 
                count++
                if (j != 0){
                    shift(0, j, wordList)
                }
                break 
            }
        }

        if (isFound == false){
            return 0 
        }           
    }

    return count

    function shift(index1, index2, arr){
        var temp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = temp 
    }   

    function preprocessWordListIfWordhasBeginWord(){
        for (var k = 0; k < wordList.length; k++){
            if (wordList[k] == beginWord){
                if (k != 0){
                    shift(0, k, wordList)
                }
            }
        }
    }

    function isAdjacent(str1, str2){

        if (str1.length == str2.length){
            var noMatches = 0
            for (var i = 0; i < str1.length; i ++){
                if (str1[i] != str2[i]){
                    noMatches++ 
                }
            }

            return noMatches == 1 ? true : false 
        }
        return false 
    }
}