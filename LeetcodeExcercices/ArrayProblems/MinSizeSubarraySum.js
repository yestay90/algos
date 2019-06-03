
var s = 11 
var nums = [1,2,3,4,5]

var ans = minSizeSubarraySum(s, nums)
console.log(ans)

function minSizeSubarraySum(s, nums){

    var minCount = 1000000000000
    for (var i = 0; i < nums.length; i++){
        var sum = 0; var j = i 
        while(j < nums.length){
            sum += nums[j]
            if (sum >= s){
                break 
            }
            j++
        }
        console.log("the initial index is %d, and last index is %d", i, j)
        if (j == nums.length && sum < s){
            if (minCount == 1000000000000){
                minCount = 0
            }
            break 
        }
        minCount = Math.min(minCount, j - i + 1)
    }
    return minCount
}