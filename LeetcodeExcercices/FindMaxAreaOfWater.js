var height = [1,8,6,2,5,4,8,3,7];

var maxArea = 0; 
for (i = 0; i< height.length; i++){
    for(j = i + 1; j< height.length; j++){
        var minHeight = Math.min(height[i], height[j]);
        var currentArea = minHeight * (j - i);
        // console.log("current area is %d", currentArea);
        // console.log("the i is %d, and j is %d", i,j)
        maxArea = Math.max(maxArea, currentArea);
    }
}

// console.log(maxArea)
