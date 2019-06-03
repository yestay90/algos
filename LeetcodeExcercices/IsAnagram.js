
function isAnagram(s, t){

    if (s.length != t.length) return false 

    s = s.toLowerCase()
    t = t.toLowerCase()

    var lettersAndOccurence = {};
     
    for (i = 0; i < s.length; i++){
        var currentLetter = s[i]
        lettersAndOccurence[currentLetter] = lettersAndOccurence[currentLetter] ? lettersAndOccurence[currentLetter] + 1:1;
    }

    for (j = 0; j < t.length; j++){
        var currentLetter = t[j]
        lettersAndOccurence[currentLetter] = lettersAndOccurence[currentLetter] ? lettersAndOccurence[currentLetter] - 1:1;
    }

    for (key in lettersAndOccurence){
        if (lettersAndOccurence[key] != 0){
            return false 
        }
    }

    return true; 
}


var strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

var hashMap = {}

var n = strs.length
var gj = 0;

function sortString(str){
    var arr = str.split('');
    var sorted = arr.sort();
    return sorted.join('');
}

for (gj = 0; gj < n; gj++){
    var currentWord = strs[gj]
    var sortedWord = sortString(currentWord)
    if (!(sortedWord in hashMap)) {
        hashMap[sortedWord] = []
    }
    hashMap[sortedWord].push(currentWord);
}

var result = []

for (keySortedWords in hashMap){
    var subgroups = hashMap[keySortedWords] 
    result.push(subgroups)
}

// while (strs.length != 0){
//     var currentWord = strs.splice(0, 1).pop()
//     console.log("current word is %s", currentWord)
//     --n; 
//     var subgroupArr = [currentWord]
//     while (gj < n && strs.length != 0){
//         console.log("current word to check is %s", strs[gj])
//         if (isAnagram(currentWord, strs[gj])){
//             console.log(" found anagrams are %s and %s", currentWord, strs[gj])
//             var foundWord = strs.splice(gj, 1).pop()
//             subgroupArr.push(foundWord)
//             n--;
//         }else {
//             gj++
//         }
//     }
//     gj = 0 
//     groups.push(subgroupArr)
// }

console.log(groups)