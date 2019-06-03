
var array = [
    []
  ]

var ans = search(array, 4)
console.log(ans)

function search(matrix, target) {

    if (matrix.length == 0) {
        return false 
    }
    
    var top = 0 
    var bottom = matrix.length > 0 ? matrix.length - 1 : 0  

    for (var i = 0 ; i <= bottom; i++){
        var selectedRow = matrix[i]

        var left = 0 
        var right = matrix.length > 0 ? matrix[0].length - 1 : 0 

        while (left <= right){
            var mid = Math.floor((left + right) / 2)

            if (selectedRow[mid] > target) {
                right = mid - 1 
            } else if (selectedRow[mid] < target) {
                left = mid + 1 
            }else {
                return true 
            }
        }
    }

    return false 
}