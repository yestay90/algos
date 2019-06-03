var a = "1011"
var b = "1011"

a = a.split("").map(function (x) { 
    return parseInt(x, 10); 
  });
b = b.split("").map(function (x) { 
    return parseInt(x, 10); 
  });

  /* My solution
if (b.length > a.length){
    var temp = b 
    b = a 
    a = temp
}

var remainder = 0 
var i = a.length - 1
var j = b.length - 1 

while (i>=0 && j>=0){
    var sum = a[i] + b[j]
    var mod = sum % 2
    var sumWithRemainder = mod + remainder
    a[i] = sumWithRemainder % 2

    if (sum >= 2 || sumWithRemainder >= 2){
        remainder = 1 
    }else {
        remainder = 0 
    }

    i--
    j--
}

if (remainder > 0) {
    if (i == j){
        a.splice(0, 0, remainder)
    }else {
        a[i] += remainder 
        while (a[i] >= 2 && i >= 0){
            var temp = a[i]
            var remainder = temp % 2
        
            a[i] = remainder
            i--
            if (i < 0){
                a.splice(0, 0, 1)
            }else {
               a[i] += 1
            }
        }
    }
}

var answer = a.join("")
console.log(answer)

*/

// someone's solution

var i = a.length - 1
var j = b.length - 1 
var carry = 0

var result = []
while (i >= 0 || j >= 0){
    var sum = carry
    if (i>=0){
        sum += a[i--] 
        // i-- 
    }

    if (j>=0){
        sum += b[j]
        j--
    }

    result.splice(0,0, sum % 2)
    carry = Math.floor(sum / 2) 
}

if (carry > 0){
    result.splice(0,0, 1)
}

return result.join("")