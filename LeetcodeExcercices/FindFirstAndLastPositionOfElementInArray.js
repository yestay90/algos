
var nums = [5,7,7,10, 8]; var target = 8;

var gj = 0
var startIndex = -1
var endIndex = -1  
for (var i = 0; i < nums.length; i++){

    if (nums[i + gj] == target){

        startIndex = i + gj 

        while (i + gj < nums.length && nums[i + gj] == target){
            gj++; 
        }

        endIndex = i + gj - 1 

        break 

    } else {
        gj = 0 
        startIndex = -1 
        endIndex = -1 
    }
}

console.log("the start index is %d, and end index is %d", startIndex, endIndex)