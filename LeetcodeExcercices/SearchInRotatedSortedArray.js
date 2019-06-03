var nums = [2,5,6,0]
var target = 0

var answer = search(nums, target)
console.log(answer)

function search(nums, target){

    var leftIndex = 0 
    for (var i = 0; i < nums.length - 1; i++){
        if (nums[i] == target){
            return true 
        }

        if (nums[i] > nums[i + 1]){
            leftIndex = i + 1 
            break 
        }
    }

    var rightIndex = nums.length 
    while (leftIndex <= rightIndex){
        var m = Math.floor((leftIndex + rightIndex) / 2)

        if (nums[m] == target){
            return true 
        }else if (nums[m] > target){
            rightIndex = m - 1 
        }else {
            leftIndex = m  + 1 
        }
    }

    return false 
}