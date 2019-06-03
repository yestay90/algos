


var ans = bitWise(17, 19)

console.log(ans)

function bitWise(m, n){

    var res = 0

    while (m > 0 && n > 0){

        var p1 = getMSBFromNumber(m)
        var p2 = getMSBFromNumber(n)

        if (p1 != p2){
            break 
        }

        var numberToSubs = Math.pow(2, p1)
        res += numberToSubs
        m = m - numberToSubs
        n = n - numberToSubs
    }

    return res 

    function getMSBFromNumber(n){
        var bitsStr = ""
       
        while (n >= 2){
            var mode = n % 2
            bitsStr = mode + bitsStr
            n = Math.floor(n / 2)
        }
        if (n != 0){
            bitsStr = n + bitsStr
        }
        return bitsStr.length - 1
    }
}