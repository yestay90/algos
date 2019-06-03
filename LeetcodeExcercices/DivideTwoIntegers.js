var dividend = -2147483648
var divisor = -1


var sum = 0; 
var signKeeper = 1; 

if (dividend < 0 || divisor < 0) {
    signKeeper = -1
} 

if (dividend < 0 && divisor < 0) {
    signKeeper = 1 
}


divisor = Math.abs(divisor)
dividend = Math.abs(dividend)

var counter = 0; 
if (divisor == 1){
    counter = dividend
} else if (dividend >= divisor) {
    while (sum <= dividend - divisor){
        sum += divisor; 
        counter++; 
    }
} else {
    return 0 
}

counter *= signKeeper

let min = Math.pow(2, 31);
    let max = Math.pow(2, 31) - 1;
    if (counter < -min || counter > max) return 0;

console.log(counter)

