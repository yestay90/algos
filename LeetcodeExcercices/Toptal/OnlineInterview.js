


console.log("online interview is going to start")
var ans = getChange(5, 0.99)
console.log(ans)

function getChange(M, P){

    //1c, 5c, 10c, 25c, 50c, and $1
    var denominations = [0.01, 0.05, 0.1, 0.25, 0.5, 1]
    var change = M - P  // 5 - 0.99 = 4.1

    var stack = []
    for (var i = denominations.length - 1; i >= 0; i--){

        var numnberDenom = denominations[i]
        if (change > numnberDenom) {
            var remainder = (change % numnberDenom).toFixed(2) //* 100
            console.log("remainder is %d", remainder)
            var numberToInsert  = change - remainder
            stack.push(numberToInsert)
            change = remainder 
        }else if (change < numnberDenom){
            stack.push(0)
        }else {
            stack.push(numnberDenom * 100)
            break 
        }
    }

    return stack//.reversed() // need to reverse 
}