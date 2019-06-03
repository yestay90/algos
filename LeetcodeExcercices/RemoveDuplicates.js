
var nums = [0,0,1,1,1,1,2,3,3]

var length = removeDuplicates(nums)

function removeDuplicates(nums){

    if (nums.length <= 1){
        return nums.length
    }

    var i = 0
    var count = 0 
    var n = nums.length
    while (i < n - 1){
        if (nums[i] == nums[i + 1]){
            count += 1
            if (count >= 2){
                nums.splice(i+1, 1)
                n--
                count-- 
            }else {
                i++
            }
             
        }else {
            count = 0 
            i++
        }

        
    }

    return nums.length
}