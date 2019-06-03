
var inputs = [3,1,3,3]
var ans = findMinInRotatedArray(inputs)
console.log(ans)
function findMinInRotatedArray(nums){
    var left = 0
    var right = nums.length

    while (left < right){
        var middle = (left + right) / 2
        middle = Math.floor(middle)
        if (nums[middle] > nums[left]){
            left = middle
        }else if (nums[middle] < nums[left])  {
            right = middle + 1
            break 
        }else if (left == middle) {// we dont have pivot point
            return nums[0]
        }else {
            left = middle
        }
        // we dont have identical 
    }

    if (left >= right){
        return nums[left]
    }

    for (var i = left; i < right; i++){
        if (i + 1 < right && nums[i + 1] < nums[i]){
            return nums[i + 1]
        }
    }

    return nums[left]
}