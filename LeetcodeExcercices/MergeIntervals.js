// var intervals = [[2,6], [1,3], [8,11], [9, 12], [10,13] ,[15,18]]
var intervals = [[1,4], [0,4]]
intervalsCheck(intervals)

function intervalsCheck(intervalsInput){

    var intervalsTemp = intervalsInput

    intervalsTemp.sort((a, b) => { return a[0] - b[0]; })

    if (intervalsTemp.length == 0){
        return intervalsTemp
    }
     
    var arrayFormatted = [intervals[0]]
    var i = 1
//[1,3], [2,6], [8,10], [15,18]
    while (i < intervalsTemp.length){

        var lastIndexOfFormattedArray = arrayFormatted.length - 1 
        var lastElementIndex = arrayFormatted[0].length - 1
        if (arrayFormatted[lastIndexOfFormattedArray][lastElementIndex] >= intervalsTemp[i][0]){
            console.log("resetting value")
            arrayFormatted[lastIndexOfFormattedArray][lastElementIndex] = Math.max(intervalsTemp[i][lastElementIndex], arrayFormatted[lastIndexOfFormattedArray][lastElementIndex])
        }else {
            console.log("adding value")
            arrayFormatted.push(intervalsTemp[i])
            lastIndexOfFormattedArray++
        }
        i++
    }

    console.log(arrayFormatted)
    return arrayFormatted
}