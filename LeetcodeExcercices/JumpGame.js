var nums = [3,0,8, 2, 0, 0, 1]

createMemoAndStart()

function createMemoAndStart(){

    var memo = []

    const memoStatus = {
        good: 'good',
        bad: 'bad',
        undefined: 'undefined'
    }

    for (var memoIndex = 0; memoIndex < nums.length; memoIndex++){
        var def = memoStatus.undefined
        memo.push(def)
    }

    let answer = canJump(0)
    console.log(answer)

    function canJump(index){

        console.log("we are working with index %d", index)
        if (memo[index] != memoStatus.undefined){
            return memo[index] == memoStatus.good ? true : false
        }
    
        if (index == nums.length - 1){
            memo[index] = memoStatus.good
            return true 
        }
    
        if (index + nums[index] >= nums.length - 1){
            memo[index] = memoStatus.good
            return true 
        }

        var furthestJump = Math.min(index + nums[index], nums.length - 1)
    
        for(var nextPosition = index + 1; nextPosition <= furthestJump; nextPosition++){
            if (canJump(nextPosition) == true){
                memo[nextPosition] = memoStatus.good
                return true 
            }
        }
        
        memo[index] = memoStatus.bad
        return false 
    }
}

