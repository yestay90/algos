var inputs = [-2147483648,-2147483647]

var answer = findPeak(inputs)
console.log(answer)

function findPeak(nums){

    var n = nums.length

    if (n <= 2){
        return findMaxElement(nums)
    }

    for (var i = 1; i < n; i++){
        if (i + 1 < n) {
            var prev = nums[i - 1]
            var cur = nums[i]
            var next = nums[i + 1]

            if (cur > prev && cur > next){
                return i
            }
        }
    }

    return findMaxElement(nums)

    function findMaxElement(array){
        var max = -1000000000000
        var maxIndex = 0 
        for (var j = 0; j < array.length; j++){
            if (array[j] > max){
                max = array[j]
                maxIndex = j 
            }
        }
        return maxIndex
    }
}