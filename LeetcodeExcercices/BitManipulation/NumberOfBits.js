
var inputs = 11

var ans = numberOfBits(inputs)
console.log(ans)
function numberOfBits(n){

    var bitsStr = ""
    var counter = 0
    while (n >= 2){
        var mode = n % 2
        if (mode == 1){
            counter += 1
        }
        bitsStr = mode + bitsStr
        n = Math.floor(n / 2)
    }
    bitsStr = "1" + bitsStr
    if (n != 0){
        counter += 1
    }
    return bitsStr
}