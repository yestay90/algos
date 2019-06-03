var intervals = [[1,5],[6,8]]
var newInterval = [0,9]

var intervalsTemp = intervals

var iCounterOfInsertedIndex = 0 

if (intervalsTemp.length == 0) {
    intervalsTemp.push(newInterval)
    return intervalsTemp
}

while (iCounterOfInsertedIndex <= intervalsTemp.length - 1){

    if ((iCounterOfInsertedIndex + 1) <= intervalsTemp.length - 1) {
        console.log("inserted value")
        if (newInterval[0] > intervalsTemp[iCounterOfInsertedIndex][0] && newInterval[0] < intervalsTemp[iCounterOfInsertedIndex + 1][0] && newInterval[1] > intervalsTemp[iCounterOfInsertedIndex][1]){
            intervalsTemp.splice(iCounterOfInsertedIndex + 1, 0, newInterval);
            ++iCounterOfInsertedIndex
            break
        }else if (newInterval[0] < intervalsTemp[iCounterOfInsertedIndex][0]){
            intervalsTemp.splice(iCounterOfInsertedIndex, 0, newInterval);
            break 
        }
        
    }else {
          // console.log("pushed value")
        if (newInterval.start > intervalsTemp[iCounterOfInsertedIndex][0]){
            intervalsTemp.push(newInterval)
        }else {
            intervalsTemp.splice(iCounterOfInsertedIndex, 0, newInterval);
        }
        break 
    }
    iCounterOfInsertedIndex++ 
}

console.log(intervalsTemp)
var returnValue = mergeIntervals(intervalsTemp, iCounterOfInsertedIndex)

console.log(returnValue)

function mergeIntervals(intervalsTemp, insertedIndex){

    var intervalsTemp = intervalsTemp
    // intervalsTemp.sort((a, b) => { return a[0] - b[0]; })

    if (intervalsTemp.length == 0){
        return intervalsTemp
    }
     
    var arrayFormatted = []
    for (var i = 0; i < insertedIndex; i++){
        arrayFormatted.push(intervalsTemp[i])
    }
    var i = insertedIndex

    if (arrayFormatted.length == 0){
        arrayFormatted = [intervalsTemp[0]]
        i = 1 
    }

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