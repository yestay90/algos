
var input = "  "
var arrayCollected = collectWordsToArray(input)
var reversed = getReversedString(arrayCollected)
console.log(reversed)

function getReversedString(arrayWords){
    var str = ""

    while (arrayWords.length != 0){
        var popedWord = arrayWords.pop()
        if (str.length > 0){
            str += " "
        }
        str += popedWord
    }

    return str 
}

function collectWordsToArray(str){

    var arrayWords = []
    var i = 0
    var word = ""
    var n = str.length
    while (i < n){
        if (str[i] != " "){
            word += str[i]
        }else {
            if (word.length > 0){
                arrayWords.push(word)
                word = ""
            }
        }
        i++
    }

    if (word.length > 0){ //if the last word doesnt have space after
        arrayWords.push(word)
        word = ""
    }

    return arrayWords
}