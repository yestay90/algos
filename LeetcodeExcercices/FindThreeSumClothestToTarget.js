
var a = [1, -1, 1]

function sortNumber(a,b) {
    return a - b;
}

var sortedArray = a.sort(sortNumber)
var answer = findTheThreeSum(sortedArray, 2)

console.log(answer)
function findTheThreeSum(nums, target){

    class Point {
        constructor(difference, sum){
            this.difference = difference
            this.sum = sum
        }
    }

    var clothest = new Point(10000000, -1);
    var result = []
    console.log(nums)

    for (var i = 0; i < nums.length - 2; i++){
        if (i == 0 || nums[i] > nums[i - 1]){
            var startIndex = i + 1; 
            var endIndex = nums.length - 1 
            if (nums[i] == 0 && nums[startIndex] == 0 && nums[endIndex] == 0){ 
                return 0;
            }
            while (startIndex < endIndex){
                if (nums[i] + nums[startIndex] + nums[endIndex] == target){
                    console.log("number adding %d, %d, %d", nums[i], nums[startIndex], nums[endIndex])
                    clothest.sum = target
                    return clothest.sum
                   
                }else if (nums[i] + nums[startIndex] + nums[endIndex] > target) {
                    console.log("number are %d, %d, %d", nums[i], nums[startIndex], nums[endIndex])
                    
                    var difference = nums[i] + nums[startIndex] + nums[endIndex] - target
                    
                    if (Math.abs(difference) < clothest.difference){
                        clothest.difference = Math.abs(difference)
                        clothest.sum = nums[i] + nums[startIndex] + nums[endIndex]
                    }
                    
                    var currentEndIndex = endIndex
                    while(nums[currentEndIndex] == nums[endIndex] && startIndex < endIndex){
                        endIndex--;
                    }
                }else { // < target
                    console.log("number are %d, %d, %d", nums[i], nums[startIndex], nums[endIndex])
                    var currentStartIndex = startIndex
                    
                    var difference = nums[i] + nums[startIndex] + nums[endIndex] - target  
                    if (Math.abs(difference) < clothest.difference){
                        clothest.difference = Math.abs(difference)
                        clothest.sum = nums[i] + nums[startIndex] + nums[endIndex]
                    }

                    while(nums[currentStartIndex] == nums[startIndex] && startIndex < endIndex){
                        startIndex++; 
                    }
                }
            }
        }
    }

    return clothest.sum; 
}

