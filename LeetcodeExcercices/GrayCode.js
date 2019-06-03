
grayCode(1)

function grayCode(n){

    if (n == 0){
        return [n]
    }

    var arr = [[0],[1]]
    if (n == 1){
        var convertedArrayResult = convertBinNumbersToDecimals(arr)
        return convertedArrayResult
    }

    var begN = 1

    grayCodeTool(begN, n, arr)
    
    console.log(arr)
    var convertedArrayResult = convertBinNumbersToDecimals(arr)
    console.log(convertedArrayResult)

    function grayCodeTool(i, endN, arr){
    
        if (i >= n){
            return 
        }

        mirrorint(arr)
        addingValues(arr)

        grayCodeTool(i + 1, endN, arr)

        function mirrorint(inputArray){
            var arrayL = inputArray.length - 1
            while (arrayL >= 0){
                inputArray.push(inputArray[arrayL--].slice())
            }
        }
       
        function addingValues(inputArray){
            var halfIndex = Math.floor((0 + inputArray.length)/2)

            for (var j = 0; j < halfIndex; j++){
                inputArray[j].unshift(0)
            }

            for (k = halfIndex; k <inputArray.length; k++){
                inputArray[k].unshift(1)
            }
        }
    }

    function convertBinNumbersToDecimals(arrayOfBinary){
        var convertedArray = []
        for (var itemIndex = 0; itemIndex < arrayOfBinary.length; itemIndex++) {
            var item = arrayOfBinary[itemIndex]
            var itemvalues = item.length
            var convertedNumber = 0 
            for (var j = 0; j < item.length; j++){
                convertedNumber += item[j] * Math.pow(2, itemvalues-- - 1)
            }
            convertedArray.push(convertedNumber)
        }
        return convertedArray
    }
}