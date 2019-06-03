
function findMaxGapInSortedArray(nums){

    if (nums.length <= 1){
        return 0 
    }

    function sortNumber(a,b) {
        return a - b;
    }

    nums.sort(sortNumber)

    maxGap = 0 
    for (var i = 0; i < nums.length - 1; i++){
        maxGap = Math.max(maxGap, nums[i + 1] - nums[i])
    }

    return maxGap
}