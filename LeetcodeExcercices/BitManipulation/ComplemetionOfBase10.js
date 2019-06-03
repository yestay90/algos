
complementOfBase10(0)
function complementOfBase10(N){

    if (N == 0){
        return 1
    }

    var binaryRep = getBinaryRep(N)
    
    var reversed = ""
    for (var b = 0; b < binaryRep.length; b++){
        if (binaryRep[b] == '0'){
            reversed += '1'
        }else {
            if (reversed != ""){
                reversed += '0'
            }
        }
    }
    
    
    if (reversed == ""){
        return 0
    }
    let base10Ans = getBase10(reversed)
    

    function getBase10(str){
        var sum = 0
        for (var s = 0; s < str.length; s++){

            var number = parseInt(str[s]) * Math.pow(2, str.length - s - 1)
            sum += number
        }

        return sum 
    }

    function getBinaryRep(n){

        var bitsStr = ""
        
        while (n >= 2){
            var mode = n % 2
            bitsStr = mode + bitsStr
            n = Math.floor(n / 2)
        } 
        if (n != 0){
            bitsStr = "1" + bitsStr
        }
        return bitsStr
    }
}