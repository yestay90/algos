
var inputs = [2, 1, 1, 2]

var ans = findMaxMoney(inputs)
console.log(ans)

function findMaxMoney(nums){

    var starI = 0
    var sumMoney = 0
    var maxSum = 0 
    util(starI, sumMoney)

    function util(startIndex, sum){
        if (startIndex >= nums.length) {
            return 
        }

        for (var i = startIndex; i < nums.length; i++){
            sum += nums[i]
            maxSum = Math.max(maxSum, sum)
            util(i + 2, sum)
            sum -= nums[i]
        }
    }

    return maxSum
}