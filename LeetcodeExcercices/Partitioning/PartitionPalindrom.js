
var input = "aab"

partitionMain(input)

function partitionMain(s){
   
    var allFetchedElements = []
    var result = []
    var index = 0
    util(index, result, allFetchedElements)
    console.log(allFetchedElements)

    function util(currentIndex, result, allResult){

        if (currentIndex >= s.length){
            allResult.push(result.slice())
            return 
        }
        
        for (var j = currentIndex; j < s.length; j++){
            if (isPalindrom(s, currentIndex, j) == true) {
                let substr = s.substring(currentIndex, j + 1)
                result.push(substr)
                util(j + 1, result, allResult)
                result.pop()
            }
        }
    }

    function isPalindrom(str, startIndex, endIndex){
       
        while (startIndex < endIndex){
            console.log("checking letters %s and %s", str[startIndex], str[endIndex])
            if (str[startIndex] != str[endIndex]){
                console.log("no equal")
                return false 
            }
            startIndex++
            endIndex--
        }
        return true 
    }
}