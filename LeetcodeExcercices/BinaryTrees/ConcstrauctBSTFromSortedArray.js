class TreeNode {
    constructor(val){
        this.val = val 
        this.left = this.right = null
    }
}
var arrayInput = [-10, 0]

var element = createBSTFromSortedArray(arrayInput)
console.log(element)

function createBSTFromSortedArray(arr){

    if (arr.length == 0) {
        return null 
    }

    var startIndex = 0
    var endIndex = arr.length - 1

    let root = bstUTIL(arr, startIndex, endIndex)
    console.log(root)
    return root
}

function bstUTIL(arr, startI, endI){
  
    if (startI > endI) {
        return null     
    }

    let midIndex = Math.floor((startI + endI) / 2)
    let midElement = arr[midIndex]
    let tree = new TreeNode(midElement)
  
    tree.left = bstUTIL(arr, startI, midIndex - 1)
    tree.right = bstUTIL(arr, midIndex + 1, endI)

    return tree  
}