var nums = [5, 1, 1]//5, 8, 4, 7, 6, 5, 3, 1]

var permuted = nextPermute(nums)
console.log(permuted)

function nextPermute(nums){
    var n = nums.length 

    if (n == 0 || n == 1){
        return nums 
    }

    var i = n - 1;

    while (i >= 0 && nums[i - 1] >= nums[i]){
        i--
    }

    if (i == 0){
        return nums.sort((a, b) => { return a - b })
    }

    i = i - 1 
    console.log("found break point %d", i)
    var j = i + 1 
    var min = 100000000
    var minj = 0 
    while (j < n){
        if (nums[i] < nums[j]){
            let dif = Math.abs(nums[i] - nums[j])
            if (dif <= min){
                min = dif 
                minj = j 
                console.log("found larger value minj %d", minj)
            }
        }
        j++ 
    }

    // swap 
    swap(nums, i, minj)
    reverse(nums, i + 1)

    return nums

    function swap(nums, i1 , j2){
        var temp = nums[i1]
        nums[i1] = nums[j2]
        nums[j2] = temp 
    }

    function reverse(nums, startIndex){
        var endIndex = nums.length - 1

        while (startIndex < endIndex){
            swap(nums, startIndex, endIndex)
            startIndex++
            endIndex--
        }
    }
}






