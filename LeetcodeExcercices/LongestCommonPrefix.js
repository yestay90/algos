var strs = ["flower", "flow", "flight"];

if (strs.length == 0) {

}

var longestSubstring = strs[0];

for(i = 1; i < strs.length; i++) {

    var currentWord = strs[i];
    var sumCurrentCommonSubstring = "";

    console.log("comparing %s and %s", longestSubstring, currentWord);
    for(j =0; j < currentWord.length; j++){
        if (currentWord[j] == longestSubstring[j]) {
            sumCurrentCommonSubstring += currentWord[j];
        }
    }

    if (sumCurrentCommonSubstring == ""){
        console.log("no substring common");
        break; 
    } else {
        longestSubstring = sumCurrentCommonSubstring
        console.log("the longest substring is %s", longestSubstring);
    }
}