
var strs = ["flower","flow","flight"]

if (strs == null || strs.length == 0){
    return ""
}

var longestSubstrignPrefix = strs[0];

for (s = 1; s < strs.length; s++){

    var currentWord = strs[s];

    longestSubstrignPrefix = findPrefixInTheBeginning(longestSubstrignPrefix, currentWord)

    if (longestSubstrignPrefix == ""){
        return ""
    }
}

function findPrefixInTheBeginning(str1, str2){

    var minLength = Math.min(str1.length, str2.length)

    if (minLength == 0){
        return ""
    }

    var sumToReturn = ""

    for (i = 0; i < minLength; i++){
        if (str1[i] == str2[i]){
            sumToReturn += str1[i];
        }else {
            break 
        }
    }

    return sumToReturn
}