var digits = [8, 9]

// var i = digits.length - 1
// digits[i] += 1 

// while (digits[i] >= 10 && i >= 0){
//     var temp = digits[i]
//     var remainder = temp % 10

//     digits[i] = remainder
//     i--
//     if (i < 0){
//         digits.splice(0, 0, Math.floor(temp / 10))
//     }else {
//        digits[i] += Math.floor(temp / 10)
//     }
// }

for (var i = digits.length - 1; i >= 0; i--){
    if (digits[i]<9){
        digits[i]++
        return digits
    }

    digits[i] = 0 
}

var result = new Array(digits.length + 1)

result[0] = 1

console.log(result)
return result 


