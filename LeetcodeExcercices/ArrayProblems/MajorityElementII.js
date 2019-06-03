
var inputs = [1,1,1,3,3,2,2,2]
var ans = majorityElement(inputs)
console.log(ans)

function majorityElement(nums){
    var dic = {}
    var result = []
    var set = new Set()
    
    for (var i = 0; i < nums.length; i++){
        if (dic[nums[i]]){
            dic[nums[i]] += 1 
            
            if (dic[nums[i]] > Math.floor(nums.length / 3)){
                if (!set.has(nums[i])){
                    result.push(nums[i])
                    set.add(nums[i])
                }
            }
        }else {
            dic[nums[i]] = 1 
        }
    }
    
    return result 
}