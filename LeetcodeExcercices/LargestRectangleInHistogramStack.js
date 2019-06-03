var inputs = [2,1,5,6,2,3]

var maxx = maxHistogram(inputs)
console.log(maxx)

function maxHistogram(heights){
    var stack = []
    var maxArea= 0
    var area= 0
    var i 
    for(i = 0; i< heights.length;){
        let stackLastElement = stack[stack.length - 1]
        if (stack.length == 0 || heights[stackLastElement] <= heights[i]){
            stack.push(i)
            i++
        }else {
            let top = stack.pop()
            if (stack.length == 0){
                area = heights[top] * i 
            }else {
                area = heights[top]*(i - stack[stack.length - 1] - 1)
            }

            if (area > maxArea){
                maxArea = area 
            }
        }
    }

    while(stack.length != 0){
        // let stackLastElement = stack[stack.length - 1]
        let top = stack.pop()
        if (stack.length == 0){
            area = heights[top] * i 
        }else {
            area = heights[top]*(i - stack[stack.length - 1] - 1)
        }

        if (area > maxArea){
            maxArea = area 
        }
    }

    return maxArea
}