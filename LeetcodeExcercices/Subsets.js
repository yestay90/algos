var nums = [1,2,2]

var answer = getCombinatonOfKLevelsInSum(nums)
console.log(answer)

function getCombinatonOfKLevelsInSum(nums){
    
    var n = nums.length

    if (n <= 0){
        return []
    }

    var result = []
    var combination = []
    var startIndex = 0

    for (k = 0; k <= n; k++){
        startIndex = 0 
        combinationUtil(result, combination, startIndex, k, n, nums)
    }

    return result 
}

function combinationUtil(result, currentSeq, startIndex, kLevel, totalNumbers, nums){

    if (kLevel == 0){
        result.push(currentSeq.slice())
        return 
    }

    for (var i = startIndex; i < totalNumbers; i++){
        currentSeq.push(nums[i])
        combinationUtil(result, currentSeq, i + 1, kLevel - 1, totalNumbers, nums)
        currentSeq.pop()
    }
}