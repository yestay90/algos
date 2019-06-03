
var inputs = [3,3,5,0,0,3,1,4]

var maxProfit = maxProfit(inputs)
console.log(maxProfit)

function maxProfit(prices){

    var profits = []

    for (var i = 1; i < prices.length; i++){
        if (prices[i] > prices[i - 1]){
            profits.push(prices[i] - prices[i - 1])
        }
    }

    if (profits.length == 0){
        return 0
    }

    if (profits.length == 1) {
        return profits[0]
    }

    function sortNumber(a,b) {
        return b - a;
    }

    profits.sort(sortNumber)

    return profits[0] + profits[1]
}