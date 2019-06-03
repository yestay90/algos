
var answer = sqrt(8)
console.log(answer)

function sqrt(x){

    if (x == 1){
        return 1
    }

    if (x == 0){
        return 0
    }

    var left = 2
    var right = x/2 
    while (left <= right){

        var middle = Math.floor((left + right) / 2)

        var quadratValue = middle * middle //x / middle
        if (quadratValue > x){
            right = middle - 1
        }else if (quadratValue < x) {
            left  = middle + 1 
        } else {
            return middle
        }
    }

    return Math.floor(right)
}