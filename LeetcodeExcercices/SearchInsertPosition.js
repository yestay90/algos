var nums = [1,3,5,6,8]; var target = 2;

var minR = 0
var maxR = nums.length - 1 
var mid = 0; 
while (minR <= maxR){
    mid = (minR + maxR)/2
    mid = ~~(mid)

    if (nums[mid] == target){
        console.log("We found it at index %d", mid)
        break
    } else if (target > nums[mid]){
        console.log("target %d is geater than index %d with value %d", target, mid, nums[mid])
        minR = mid + 1
    }else if (target < nums[mid]){
        console.log("target %d is less than index %d with value %d", target, mid, nums[mid])
        maxR = mid - 1
    }
}
console.log("index is %d", maxR + 1)
