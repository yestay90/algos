
var number = decode("100")
console.log("number of ways: ,", number)

function decode(s){
    if (s == null || s.length == 0 || s[0] == '0'){
        return 0
    }

    if (s.length == 1){
        return 1 
    }

    var n = s.length
    var dp = new Array(n)
    for (var j = 0; j< dp.length; j++){
        dp[j] = 0
    }
    dp[0] = 1
    let substr = s[0] + s[1]
    var numberToCompare = Number(substr)
    if (numberToCompare > 26){
        if (s[1] != '0'){
            dp[1] = 1
        }else {
            dp[1] = 0
        }
    }else {
        if (s[1] != '0'){
            dp[1] = 2
        }else {
            dp[1] = 1 
        }
    }

    for (var i = 2; i < s.length; i++){
        if (s[i] != '0'){
            dp[i] += dp[i - 1]
        }
        let substr2 = s[i - 1] + s[i]
        var val = Number(substr2)
        if (val <= 26 && val >= 10){
            dp[i] += dp[i -2]
        }
    }

    return dp[s.length - 1]
}