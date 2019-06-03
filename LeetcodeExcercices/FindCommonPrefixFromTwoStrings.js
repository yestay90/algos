
findCommonPrefixeFromTwoString("sunflower", "flower")

function findCommonPrefixeFromTwoString(str1, str2){

    var table = create2DArray(str1.length, str2.length);
    // i rows
    // j collumns
    var maxLength = 0;
    var collumn = 0;
    var row = 0; 
    for (i = 0; i < str1.length; i++){
        for(j = 0; j < str2.length; j++){
            if (str1[i] == str2[j]){
                if (i==0 || j == 0){
                    table[i][j] = 1
                }else {
                    table[i][j] = 1 + table[i-1][j-1]
                }

                if (table[i][j] > maxLength) {
                    maxLength = table[i][j]
                    row = i; 
                    collumn = j;   
                    console.log("max coodinate is set two row: %d, collumn: %d", row, collumn)   
                }
            }else {
                console.log("settings zero on coordinates %d-%d", i, j)
                table[i][j] = 0 
            }
        }
    }

    if (row == 0 && collumn == 0){
        return ""
    }

    var substringToReturn = ""
    while(table[row][collumn] != 0){

        substringToReturn = str1[row] + substringToReturn
        collumn--
        row--

        if (row < 0 || collumn < 0){
            break 
        }
    }

    console.log(substringToReturn)
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