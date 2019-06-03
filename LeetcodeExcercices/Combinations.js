k = 2
n = 4

var result = []
var path = new Array(k)
var level = 0 
var startingIndex = 0

var dicCount = {}

if (k == 0){
    return []
}

for (var j = 1; j <= n; j++){
    dicCount[j] = 1     
}

permuteUtil(result, path, level, dicCount, startingIndex)
console.log(result)

function permuteUtil(result, path, level, dic, iteratingIndex){

    if (level == path.length){
        return 
    }

    for(var i = iteratingIndex; i < Object.keys(dic).length; i++){
        var element = dic[i+1]
        if (element > 0){
            dic[i+1] = element - 1 

            path[level] = i + 1
        
            if (level == path.length - 1){
                result.push(path.slice())
            }
            permuteUtil(result, path, level + 1, dic, i + 1)
            dic[i+1] = element
        }
    }
}


