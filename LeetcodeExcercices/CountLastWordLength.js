var s = "b   a    "

var trimmedWord = trim(s)
console.log(trimmedWord)

var lastcountedWord = countLastWord(trimmedWord)
console.log(lastcountedWord)


function countLastWord(trimmedInputWord){
    var i = trimmedInputWord.length - 1 
    var counter = 0 

    console.log("length of word is %d", i)
    while (i >= 0){
        
        if (trimmedInputWord[i] == " "){
            break  
        }
        counter++
        i-- 
    }

    return counter 
}

function trim(inputStr){

    var i = 0; 

    while (inputStr[i] == " "){
        inputStr = inputStr.slice(i + 1)
    }

    i = inputStr.length - 1 
    while (inputStr[i] == " "){
        inputStr = inputStr.slice(0,i)
        i = inputStr.length - 1 
    }

    return inputStr
}