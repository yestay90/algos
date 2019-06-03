
var inputs = [100, 4, 200, 1, 3, 2]

longestConsecutive(inputs)

function longestConsecutive(nums){

    var dic = new Set()
    var max = 0

    for (var i = 0; i < nums.length; i++){
        let value = nums[i]
        dic.add(value)
    }
  
    for (var value of dic){
        var localMax = 0 
        if (dic.has(value - 1)){
            continue;
        }
        while (dic.has(value)){
            console.log("key is %d", dic[value])
            value++
            localMax++    
            console.log("local max is set to %d", localMax)
        }
        if (localMax > max){
            max = localMax
            console.log("max is set to %d", localMax)
        }
    }
}