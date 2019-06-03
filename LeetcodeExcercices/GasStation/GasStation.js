
var gas = [1,2,3,4,5]
var cost = [3,4,5,1,2]

function getPoint(gas, cost){
    var minPointSum = 10000000000
    var s = 0
    var position = 0
    for (var i = 0; i < gas.length; i++){
        s += gas[i] - cost[i]
        if (s < minPointSum){
            minPointSum = s 
            position = i % gas.length
        }
    }

    if (s >= 0){
        return position
    }
    return - 1
}