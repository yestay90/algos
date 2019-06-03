
var ans = isIsomorphic("egg", "add")

console.log(ans)

function isIsomorphic(s, t){

    if (s.length != t.length){
        return false 
    }

    var dic1 = {}
    var dic2 = {}

    for (var i = 0; i < s.length; i++){
        if (dic1[s[i]]){
            dic1[s[i]] += 1
        }else {
            dic1[s[i]] = 1 
        }

        if (dic2[t[i]]){
            dic2[t[i]] += 1
        }else {
            dic2[t[i]] = 1 
        }
    }

    for (var c = 0; c < s.length; c++){
        var n1 = dic1[s[c]]
        var n2 = dic2[t[c]]

        if (n1 != n2){
            return false 
        }
    }

    return true 
}