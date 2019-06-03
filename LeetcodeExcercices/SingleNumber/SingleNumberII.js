

var nums = [2,2,3, 2]
let answe = singleNumber(nums)
console.log(answe)

function singleNumber(nums){

    var dic = {}
    for (var i = 0; i < nums.length; i++){
        if (dic[nums[i]]){
            dic[nums[i]] += 1
            if (dic[nums[i]] == 3){
                delete dic[nums[i]]
            }
        }else {
            dic[nums[i]] = 1
        }
    }
  
    if (Object.keys(dic).length > 0){
        for (var key in dic){
            return key
        }
    }

    return null 
}

  