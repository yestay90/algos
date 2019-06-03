
var ans = isHappyNumber(2)
console.log(ans)

function isHappyNumber(n){

    if (n == 0){
        return false 
    }

    var sets = new Set()
    while (n != 1){
        var str = n.toString()
        var sum = 0
        for (var i = 0; i < str.length; i++){
            sum += Math.pow(parseInt(str[i]), 2)
        }
        n = sum 
        if (sets.has(n)){
            return false 
        }
        sets.add(n)
    }

    return true 
}