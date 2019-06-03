
var inputs = [1,2,3,4,5,6,7]
var k = 3 

var rotatedArray = rotateArray(inputs, k)
console.log(rotateArray)
function rotateArray(nums, k){

    var i = 0
    while (i < k){
        var removedLast = nums.pop()
        nums.unshift(removedLast)
        i++
    }

    return nums 
}