var prices = [7,1,5,3,6,4]
var answer = bestProfit(prices)
console.log(answer)
function bestProfit(prices){

    if (prices.length < 2){
        return 0 
    }

    var minPoint = 10000000
    var maxProfit = 0 
    for (var i = 0; i < prices.length; i++){
        if (prices[i] < minPoint){
            minPoint = prices[i]
            console.log("mid point is %d, and index is %d", minPoint, i)
        } else if (prices[i] - minPoint > maxProfit){
            maxProfit = prices[i] - minPoint
        }
    }
    
    return maxProfit
}