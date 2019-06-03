var nums = [-2,1,-3,4,-1,2,1,-5,4]

var maxSofar = nums[0]
var currentMax = nums[0]

for (var i = 1; i < nums.length; i++){
    
    currentMax = Math.max(nums[i], currentMax + nums[i])
    maxSofar = Math.max(currentMax, maxSofar)
}

