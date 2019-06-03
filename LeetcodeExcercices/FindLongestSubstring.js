var testStr = "abcabcbb";

console.log("starting test");
var answer = lengthOfLongestSubstringNew(testStr);

console.log(answer);


function lengthOfLongestSubstringNew(s) {
    let n = s.length;
    var set = new Set();
    var ans = 0, i = 0, j = 0;

    while (i < n && j < n){
        if (!(set.has(s[j]))) {
           set.add(s[j++]);
           ans = Math.max(ans, j - i);
        }else {
            set.delete(s[i++]);
        }
    }

    return ans;
}

function lengthOfLongestSubstring(s) {
    
    var n = s.length;
    var ans = 0;

    for (i = 0; i < n; i++){
        for (j= i + 1; j <= n; j++){
            if (allUnique(s, i, j)) {
                ans = Math.max(ans, j - i);
            }
        }
    }
    return ans;
};

function allUnique(text, startIndex, endIndex) {
    var dict = {}; // hastable
    for (var i = startIndex; i < endIndex; i++) {
        if (text[i] in dict) {
            return false 
        }
        dict[text[i]] = text[i];
    }

    return true; 
}