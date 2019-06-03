
var ans = combinationSumIII(2, 18)
console.log(ans)
function combinationSumIII(k, n){


    if (n == 0 || k == 0){
        return []
    }

    var result = []
    var startIndex = 1
    var path = []

    util(path, startIndex)

    return result 

    function util(path, currentIndex){

        if (path.length == k){
            if (isSummArrayEqual(path, n)){
                result.push(path.slice())
                console.log("added path %@", path) 
            }
            return 
        }

        for (var j = currentIndex; j < 10; j++){
            path.push(j)
            util(path, j + 1)
            path.pop()
        }
    }

    function isSummArrayEqual(a, number){
        var sum = 0
        for (var k = 0; k < a.length; k++){
            sum += a[k]
        }
        return sum == number 
    }
}