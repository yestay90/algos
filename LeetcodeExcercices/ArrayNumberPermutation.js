 var nums = [1,2,3]

 getPermutation(nums)

 function getPermutation(nums){

    var dicCounter = {}

    for (var i = 0; i < nums.length; i++){
        var keyOfDic = nums[i]
        if (dicCounter[keyOfDic]){
            dicCounter[keyOfDic] = dicCounter[keyOfDic] + 1 
        }else {
            dicCounter[keyOfDic] = 1 
        }
    }

    var permuteValueKeeper = new Array(nums.length)
    var level = 0 
    var resultKeeper = []

    permutUtilRecursive(level, dicCounter, permuteValueKeeper, resultKeeper)

    console.log(resultKeeper)

    function permutUtilRecursive(permuteLevel, dic, permuteValueKeeper, result){
        if (permuteLevel == permuteValueKeeper.length){
            console.log(permuteValueKeeper)
            return 
        }

        for (var key in dic){
            var element = dic[key]
            console.log("key is %s", key)
            if (element > 0) {
                dic[key] = element - 1
                permuteValueKeeper[permuteLevel] = key 
                if (permuteValueKeeper.length - 1 == permuteLevel){
                    var copy = []
                    for (var jx = 0; jx < permuteValueKeeper.length; jx++) {
                        copy.push(permuteValueKeeper[jx])
                    }
                    result.push(copy)

                }
                // result[permuteLevel] = permuteValueKeeper//[permuteLevel]
                permutUtilRecursive(permuteLevel + 1, dic, permuteValueKeeper, result)
                console.log("key is %s", key)
                console.log("element is %d", element)
                dic[key] = element
            }
        }
    }
 }