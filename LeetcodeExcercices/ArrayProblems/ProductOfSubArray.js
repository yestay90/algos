
var nums = [1, 2, 3, 4]
var ans = productOfSubArray(nums)
console.log(ans)

function productOfSubArray(nums){
    var arrayToReturn = []

    if (nums.length == 0 ){
        return arrayToReturn
    }
    for (var i = 0; i < nums.length; i++){
        var leftSide = 1
        var rightSide = 1
        var l = 0
        var r = i + 1

        while(l < i){
            leftSide *= nums[l]
            l++
        }

        while (r < nums.length){
            rightSide *= nums[r]
            r++ 
        }

        arrayToReturn.push(leftSide * rightSide)
    }

    return arrayToReturn
}