
var haystack = "hello";
var needle = "ll"

var j = 0; 
var startIndex = -1

if (needle == "") {
    return 0
}

for (var i = 0; i < haystack.length; i++){

    if (haystack[i] == needle[j]) {
        startIndex = i; 
        // check the whole needle
        while (j < needle.length){

            if ((i + j) < haystack.length) {
                if (haystack[i + j] == needle[j]) {
                    j++;     
                }else {
                    break 
                }
            } else {
                break 
            }
        }

        if (j != needle.length){ 
            startIndex = -1 
            j = 0 
        }else {
            break; 
        }
    }
}

return startIndex

console.log(startIndex)