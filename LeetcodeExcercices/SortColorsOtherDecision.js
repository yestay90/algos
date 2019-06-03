var nums = [2,0,1]


function swapt(arr, index1, index2){
    temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp 
}

var leftIndex = 0
var rightIndex = nums.length - 1
var index = 0 

while (index <= rightIndex){
    var element = nums[index]

    if (element == 0){
        if (leftIndex != index){
            swapt(nums, leftIndex, index)    
        }
        index++
        leftIndex += 1
    }else if (element == 2){
        swapt(nums, rightIndex, index)
        rightIndex -= 1
    }else {
        index++
    }
}

console.log(nums)