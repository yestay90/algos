var nums = [2,0]
var n = nums.length
var dicCount = {}

/* counting values */
for (var i = 0; i < n; i++){
    var value = nums[i]
    if (dicCount[value]){
        dicCount[value] = dicCount[value] + 1 
    }else {
        dicCount[value] = 1 
    }
}

var gi = 0 
var dicValuesNumber = Object.keys(dicCount).length 

var d = 0

while (d < 3) {
    if (dicCount[d]) {
        var numberOfRepeat = dicCount[d]

        for (var j = 0; j < numberOfRepeat; j++){
            if (gi < nums.length){
                nums[gi] = d 
            }
            gi++
        }
    }
    d++ 
}

console.log(nums)