
var strs = ["dog","racecar","car"]

if (strs.length == 0) {
    return "";
}

var longestSubstring = strs[0]
for (s = 1; s < strs.length; s++){
    console.log("checkign array id %d", s);
    var currentWord = strs[s];
    longestSubstring = findCommonPrefixeFromTwoString(longestSubstring, currentWord)

    if (longestSubstring == "") {
        return "";
    }
}

console.log(longestSubstring)
return longestSubstring;


function findCommonPrefixeFromTwoString(str1, str2){

    if (str1 == "" || str2 == ""){
        return ""
    }

    var table = create2DArray(str1.length, str2.length);
    // i rows
    // j collumns
    var maxLength = 0;
    var collumn = 0;
    var row = 0; 
    for (i = 0; i < str1.length; i++){
        for(gj = 0; gj < str2.length; gj++){
            if (str1[i] == str2[gj]){
                if (i==0 || gj == 0){
                    table[i][gj] = 1
                }else {
                    table[i][gj] = 1 + table[i-1][gj-1]
                }

                if (table[i][gj] > maxLength) {
                    maxLength = table[i][gj]
                    row = i; 
                    collumn = gj;   
                    // console.log("max coodinate is set two row: %d, collumn: %d", row, collumn)   
                }
            }else {
                // console.log("settings zero on coordinates %d-%d", i, j)
                table[i][gj] = 0 
            }
        }
    }

    // if (row == 0 && collumn == 0){
    //     return ""
    // }

    var substringToReturn = ""
    while(table[row][collumn] != 0){

        substringToReturn = str1[row] + substringToReturn
        collumn--
        row--

        if (row < 0 || collumn < 0){
            break 
        }
    }

    // console.log(substringToReturn)
    return substringToReturn; 
}

function create2DArray(numRows, numColumns) {
	let array = [];
 
    for (row = 0; row < numRows; row++){
        array[row] = []
        for(collumn = 0; collumn < numColumns; collumn++) {
            array[row][collumn] = 0  
        }
    }

	return array; 
}