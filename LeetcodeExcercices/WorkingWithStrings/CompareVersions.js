
var version1 = "1"
var version2 = "0"

var answer = compareVersionNumbers(version1, version2)
console.log(answer)

function compareVersionNumbers(version1, version2){

        var a1 = version1.split(".")
        var a2 = version2.split('.')

        if (a1.length < a2.length){
            while(a1.length < a2.length){
                a1.push("0")
            }
        }else if (a2.length < a1.length){
            while(a2.length < a1.length){
                a2.push("0")
            }
        }

        for (var i = 0; i < a1.length; i++){
            var n1 = parseInt(a1[i])
            var n2 = parseInt(a2[i])

            if (n1 < n2){
                return -1
            }else if (n1 > n2){
                return 1
            }else {
                continue
            }
        }

        return 0 
}

