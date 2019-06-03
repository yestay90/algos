
var inputs = [0,1,2,4,5,7]
var ans = summaryRange(inputs)
console.log(ans)

function summaryRange(nums){

    var starIndex = null; var middleIndex = null; var endIndex = null; 
    var result = []
    for (var i = 0; i < nums.length; i++){
        console.log("current nums is %d", nums[i])

        if (starIndex == null){
            starIndex = nums[i]; middleIndex = nums[i]
            continue
        }

        if (nums[i] == middleIndex + 1){
            endIndex = nums[i]
            middleIndex = endIndex

            if (i == nums.length - 1){
                result.push(starIndex.toString() + "->" + endIndex.toString())
                break 
            }
        }else {
            if (endIndex == null){
                result.push(starIndex.toString())
                starIndex = nums[i]; middleIndex = nums[i]
            }else {
                result.push(starIndex.toString() + "->" + endIndex.toString())
                starIndex = nums[i]; middleIndex = nums[i]
                endIndex = null 
            }

            if (i == nums.length - 1){
                result.push(starIndex.toString())
                break 
            }
        }
    }

    return result
}