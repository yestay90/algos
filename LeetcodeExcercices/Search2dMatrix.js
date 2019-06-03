matrix = [
    []
  ]

var answer = search2dMartrix(matrix, 5)
console.log(answer)

function search2dMartrix(matrix, target){

    if (matrix.length == 0) {
        return false 
    }

    var lowIndex = 0
    var upperIndex = matrix.length - 1 

    while (lowIndex <= upperIndex){
        var middleIndex = Math.floor((lowIndex + upperIndex) /2) 

        var elementVertical = matrix[middleIndex][0]

        if (elementVertical == null){
            return false 
        }

        if (target < elementVertical){
            upperIndex = middleIndex - 1 
        }else if (target > elementVertical){
            lowIndex = middleIndex + 1 
        }else {
            return true 
        }
    }

    if (upperIndex < 0){
        return false 
    }

    var searchLine = matrix[upperIndex]

    var leftIndex = 0
    var rightIndex = searchLine.length - 1

    while (leftIndex <= rightIndex){
        var middleHorizontalIndex = Math.floor((leftIndex + rightIndex) / 2)

        var element = searchLine[middleHorizontalIndex]

        if (target < element){
            rightIndex = middleHorizontalIndex - 1 
        }else if (target > element) {
            leftIndex = middleHorizontalIndex + 1
        }else {
            return true 
        }
    }

    return false 
}