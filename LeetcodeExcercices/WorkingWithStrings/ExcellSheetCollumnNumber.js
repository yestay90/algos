
var ans = convertLettersToNumber("ZY")
console.log(ans)

function convertLettersToNumber(s){
    var dic = {}
    dic["A"] = 1
    dic["B"] = 2
    dic["C"] = 3
    dic["D"] = 4
    dic["E"] = 5
    dic["F"] = 6
    dic["G"] = 7
    dic["H"] = 8
    dic["I"] = 9
    dic["J"] = 10
    dic["K"] = 11
    dic["L"] = 12
    dic["M"] = 13
    dic["N"] = 14
    dic["O"] = 15
    dic["P"] = 16
    dic["Q"] = 17
    dic["R"] = 18
    dic["S"] = 19
    dic["T"] = 20
    dic["U"] = 21
    dic["V"] = 22
    dic["W"] = 23
    dic["X"] = 24
    dic["Y"] = 25
    dic["Z"] = 26

    var number = dic[s[0]]
    var n = s.length 
    for (var i = 0; i < n; i++){
        if (i + 1 < n){
            number = number * 26
            number += dic[s[i + 1]]
        }
    }

    return number
}