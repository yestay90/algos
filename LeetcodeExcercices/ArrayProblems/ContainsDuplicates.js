
var inputs = [99,99]

var sn = containsDuplicates(inputs, 2)
console.log(sn)

function containsDuplicates(nums, k){
    for (var i = 0; i < nums.length; i++){
        for (var j = i ; j < nums.length; j++){
            if (nums[i] == nums[j]){
                if (i != j){
                    if (Math.abs(i - j) <= k){
                        return true
                    }      
                }        
            }
        }
    }
    return false 
}