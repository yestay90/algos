var heights = [];


var l = findLargestRectangleArea(heights)
console.log(l)

function findLargestRectangleArea(heights){

    if (heights.length == 0){
        return 0
    }

    if (heights.length == 1){
        return heights[0]
    }

    var currentMax = 0

    for(var i = 0; i < heights.length; i++){

        if (heights[i] > currentMax){
            currentMax = heights[i]
        }

        var currentMin = heights[i]

        for( var j = i + 1; j < heights.length; j++){
            if (heights[j] < currentMin){
                currentMin = heights[j]
            }

            let area = currentMin * (j - i + 1)

            if (area > currentMax){
                currentMax = area
            }
        }
    }

    return currentMax
}