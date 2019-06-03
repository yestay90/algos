
var inputs = [3,2,1,5,6,4] 
var k = 2
let ans = heapify(inputs, k)
console.log(ans)

function heapify(nums, k){
   
    if (nums.length == 0){
        return 0 
    }
    
    if (nums.length == 1){
        return nums[0]
    }
    
    var n = nums.length
    for (var h = Math.floor(n / 2) - 1; h >= 0; h--){
        heapifyStandart(h, nums.length, nums)
    }
    
    console.log(nums)
    
    var kl = 0
    for (var i = n - 1; i >= 0; i--){
        swapArrayElement(0, i, nums)
        kl += 1
        
        if (kl == k){
            return nums[nums.length - kl] 
        }
        
        heapifyStandart(0, i, nums)
    }
    
    return 0 
    
    function swapArrayElement(index1, index2, arr){
        var temp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = temp 
    }
    
    function heapifyStandart(currentIndex, heapSize ,arr){

        var largestElement = currentIndex
        var leftIndex = 2 * currentIndex + 1
        var rightIndex = 2 * currentIndex + 2

        if (leftIndex < heapSize && arr[currentIndex] < arr[leftIndex]){
            largestElement = leftIndex
        }

        if (rightIndex < heapSize && arr[largestElement] < arr[rightIndex]){
            largestElement = rightIndex
        }

        if (largestElement != currentIndex){
            swapArrayElement(currentIndex, largestElement, arr)
            heapifyStandart(largestElement, heapSize, arr)
        }
    }
}