
var inputs = [10, 20, 15, 12, 40, 25, 18]
heapSort(inputs, inputs.length)
console.log(inputs)

function heapSort(arr, n){

    for (var h = inputs.length - 1; h >= 0; h--){
        heapify(h, inputs)
    }

    for (var i = n - 1; i >= 0; i--){
        swapArrayElement(0, i, inputs)
        heapifyStandart(0, i, arr)
    }
}


/* here we are looking at heapify */
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
/* here we are looking at heapify */


function heapify(currentIndex, arr){

    if (isHavingChildrenLeft(currentIndex, arr)) {
        let parent = arr[currentIndex]

        if (isHavingChildrenRight(currentIndex, arr)){
            let maxChildren = Math.max(arr[currentIndex * 2 + 1], arr[currentIndex * 2 + 2])
            if (parent < maxChildren){
                let maxChilrenIndex = maxChildren == arr[currentIndex * 2 + 1] ? currentIndex * 2 + 1 : currentIndex * 2 + 2  
                swapArrayElement(currentIndex, maxChilrenIndex, arr)
                heapify(maxChilrenIndex, arr)
            }
        }else {
            if (parent < arr[currentIndex * 2 + 1]){
                swapArrayElement(currentIndex, currentIndex * 2 + 1, arr)
                heapify(currentIndex * 2 + 1, arr)
            }
        }
    }else {
        console.log("skipping index %d", currentIndex)
    }
}

function swapArrayElement(index1, index2, arr){
    var temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp 
}

function isHavingChildrenLeft(currentIndex, arr){
    var n = arr.length 
    var childrenIndex = 2 * currentIndex + 1 
    return childrenIndex < n ? true : false 
}

function isHavingChildrenRight(currentIndex, arr){
    var n = arr.length 
    var childrenIndex = 2 * currentIndex + 2 
    return childrenIndex < n ? true : false 
}