var weights = [1,2,3,4,5,6,7,8,9,10]; var D = 5

var ans = minimumCap(weights, D)
console.log(ans)

function minimumCap(weights, d){


    var shipCapStart = 0
    for (var j = 0; j < weights.length; j++){
        if (weights[j] > shipCapStart){
            shipCapStart = weights[j]
        }
    }

    var dayCount = 100000
    while (dayCount > d){
        var sum = 0 
        var dayCount = 0 
        //[1,2,3,4,5,6,7,8,9,10];
        for (var i = 0; i < weights.length; i++){
            if (sum + weights[i] > shipCapStart){
                dayCount += 1
                console.log("sending products on day %d at index %d, with capacity: %d", dayCount,i, sum)
                sum = weights[i]
            }else if (sum + weights[i] == shipCapStart) {
                dayCount += 1
                console.log("sending products on day %d at index %d, with capacity: %d", dayCount,i, sum + weights[i])
                sum = 0
            }else {
                sum += weights[i]
            }
        }

        if (sum > 0){
            dayCount += 1
        }

        if (dayCount > d){
            shipCapStart += 1
            console.log("increasing ship capacity")
        }
    }

    return shipCapStart
}