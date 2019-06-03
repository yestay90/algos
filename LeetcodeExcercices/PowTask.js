
var result = conditionalPower(2, 10)
console.log(result)
function conditionalPower(x, n){
    if (n < 0){
        return 1/ power(x, -n)
    } else {
        return power(x, n)
    }
}

function power(number, degree){
    if (degree == 0){
        return 1 
    }

    v = power(number, Math.floor(degree / 2))

    if (degree % 2 == 0) {
        return v * v 
    }else {
        return v * v * number 
    }
}