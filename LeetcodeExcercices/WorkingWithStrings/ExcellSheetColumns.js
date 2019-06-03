
var answer = excellSheetCollumns(52)
console.log(answer)

function excellSheetCollumns(n){

    var dic = {}
    dic[1] = "A"
    dic[2] = "B"
    dic[3] = "C"
    dic[4] = "D"
    dic[5] = "E"
    dic[6] = "F"
    dic[7] = "G"
    dic[8] = "H"
    dic[9] = "I"
    dic[10] = "J"
    dic[11] = "K"
    dic[12] = "L"
    dic[13] = "M"
    dic[14] = "N"
    dic[15] = "O"
    dic[16] = "P"
    dic[17] = "Q"
    dic[18] = "R"
    dic[19] = "S"
    dic[20] = "T"
    dic[21] = "U"
    dic[22] = "V"
    dic[23] = "W"
    dic[24] = "X"
    dic[25] = "Y"
    dic[26] = "Z"
    
    var str = ""

    while (n >= 27){
        var mode = n % 26
        if (mode == 0){
            mode = 26
            n = n - 1
        }
        
        str = dic[mode] + str

        n = Math.floor(n / 26)
    }

    if (n >= 1 && n < 27){
        str = dic[n] + str 
    }

    return str 
}