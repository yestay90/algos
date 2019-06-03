
var nums = [-2]

findMaxProductSubarray(nums)

function findMaxProductSubarray(nums){

    var currentMaxProduct = nums[0]
    var currentMinProduct = nums[0]
    var prev_maxProduct = nums[0]
    var prev_minProduct = nums[0]
    var ans = nums[0]

    for (var i = 1; i < nums.length; i++){

        currentMaxProduct = Math.max(prev_maxProduct * nums[i], prev_minProduct * nums[i], nums[i])
        currentMinProduct = Math.min(prev_maxProduct * nums[i], prev_minProduct * nums[i], nums[i])
        ans = Math.max(ans, currentMaxProduct)
        prev_maxProduct = currentMaxProduct
        prev_minProduct = currentMinProduct
        
    }

    return ans 
}

// function create2DNSizeMatrix(n){
//     var matrix = []
//     var lineCounter = 0 
//     while (lineCounter < n){
//         var line = []
//         for (var i = 0; i < n; i++){
//             line.push('X')
//         }
//         matrix.push(line)
//         lineCounter++
//     }
//     return matrix
// }

// var n = nums.length
// var a = create2DNSizeMatrix(n)
// var max = -1000000000

// if (nums == null || nums.length == 0) {
//     return nums
// }

// if (nums.length == 1){
//     return nums[0]
// }

// for (var i = 0; i < n; i++){
//     for( var j = i + 1; j < n; j++){
//         if (a[i][j - 1] != "X"){
//             a[i][j] = a[i][j - 1] * nums[j]
//         }else {
//             a[i][j] = nums[i] * nums[j]
//         }

//         if (a[i][j] > max){
//             max = a[i][j]
//         }
//     }
// }

// return max