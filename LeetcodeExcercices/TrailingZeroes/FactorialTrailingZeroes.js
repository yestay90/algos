
var ans = countTrailingZeroes(30)
console.log(ans)

function countTrailingZeroes(n){

    var s = 1 
    for (var i = 1; i <= n; i++){
        s *= i 
    }

    var counter = 0
    while (s % 1 == 0){
        s = s / 10
        if (s % 1 == 0){
            counter += 1
        }
    }

    return counter
}