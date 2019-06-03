var strPermute = "abc"

permuteStr(strPermute)

function permuteStr(stringInput){

    var dicLetterCounter = {}

    for (var i = 0 ; i < stringInput.length; i++){
        var char = stringInput[i]
        if (dicLetterCounter[char]){
            dicLetterCounter[char] = dicLetterCounter[char] + 1 
        }else {
            dicLetterCounter[char] = 1 
        }
    }

    var level = 0
    var permutationDoneStr = new Array(stringInput.length);
    var results = []

    permuteUtil(level, permutationDoneStr, results, dicLetterCounter)


    console.log(results)
}

function permuteUtil(permutationLevel, str, results, dic){
    if (permutationLevel >= str.length){
        console.log(str)
        return 
    }

    for (var key in dic){
        let element = dic[key]
        console.log("key is %s", key)
        if (element > 0){
            dic[key] = element - 1 
            str[permutationLevel] = key
            if (permutationLevel == str.length - 1){
                results.push(str.join(""))
            }

            //   var copyOfDictionary = {}
            //   for (var item in dic)
            //      copyOfDictionary[item] = dic[item]
            permuteUtil(permutationLevel+1, str, results, dic)
            console.log("key is %s", key)
            console.log("element is %d", element)
            dic[key] = element
        }
    }
}
