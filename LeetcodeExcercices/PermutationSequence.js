
var n = 3
var k = 3
var answer = permutationSequence(n, k)
console.log(answer)

function permutationSequence(number, k){

    if (number <= 0){
        return []
    }

    k = k - 1 

    var strToPermute = getSetFromNumber(number)

    var permuteResults = permuteStr(strToPermute, k)

    if (k < permuteResults.length){
        return permuteResults[k]
    }else {
        return []
    }
   

    function permuteStr(str, indexToGet){
        var dicCounter = {}
        for (var i = 0; i < str.length; i++){
            var key = str[i]
            if (dicCounter[key]){
                dicCounter[key] = dicCounter[key] + 1 
            }else {
                dicCounter[key] = 1 
            }
        }

        var level = 0 
        var arrayOfLetters = new Array(str.length)
        var results = []
        permuteUtil(level, arrayOfLetters, results, dicCounter, indexToGet)
        return results
    }

    function permuteUtil(level, strLetters, results, dic, indexToGet){
        if (level == strLetters.length){
            console.log(strLetters)
            return 
        }

        if (k < results.length){
            return 
        }

        for (var key in dic){
            var elementValue = dic[key]
            if (elementValue > 0) {
                dic[key] = elementValue - 1 
                strLetters[level] = key
                if (strLetters.length - 1 == level){
                    results.push(strLetters.join(""))
                }
                permuteUtil(level + 1, strLetters, results, dic)
                dic[key] = elementValue
            }
        }
    }

    function getSetFromNumber(number){

        var i = 0;
        var str = []
        while (i < number){
            str.push(i + 1)
            i++
        }

        return str.join("")
    }
}