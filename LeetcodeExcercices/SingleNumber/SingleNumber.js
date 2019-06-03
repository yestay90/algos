var nums = [2,2,1]
let answe = singleNumber(nums)
console.log(answe)

function singleNumber(nums){

    var set = new Set()

    for (var i = 0; i < nums.length; i++){
        if (set.has(nums[i])){
            set.delete(nums[i])
        }else {
            set.add(nums[i])
        }
    }

    let iterator = set.values()
    return iterator.next().value
}