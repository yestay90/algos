
var input = "0P"

var answer = validPalindrom(input)
console.log(answer)

function validPalindrom(s){

    var formattedStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().replace(/\s/g, "")
    console.log(formattedStr)
    let n = formattedStr.length
    var i = 0
    while (i < n/2){
        console.log("checking letters %s and %s", formattedStr[i], formattedStr[n - 1 - i])
        if (formattedStr[i] != formattedStr[n - 1 - i]){
            // console.log("no equal")
            return false 
        }
        i++
    }
    return true 
}