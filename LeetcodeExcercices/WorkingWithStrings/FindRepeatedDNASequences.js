
var inputs = "AAAAAAAAAAA"


var ans = findRepeatedDNASeq(inputs)
console.log(ans)

function findRepeatedDNASeq(s){

    var dic = {}
    var output = []

    if (s.length < 10){
        return output
    }

    for (var i = 0; i < s.length - 9; i++){
        var dna = s.substring(i, i + 10)

        if (dic[dna]){
            var element = dic[dna]
            dic[dna] = element + 1 
            if (dic[dna] == 2){
                output.push(dna)
            }
        }else {
            dic[dna] = 1
        }
    }

    return output
}