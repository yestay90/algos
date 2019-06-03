var inputs = [1]

findSubset(inputs)
function findSubset(nums){

    var results = [[]]

    if (nums.length == 0){
        return [[]]
    }

    var path = []
    var i = 0
    var level = 0
    
    function sortNumber(a,b) {
        return a - b;
    }

    nums.sort(sortNumber)

    for (var ik = 1; ik <= nums.length; ik++){
        subsetToolRecursive(level, path, results, i, ik, nums)
    }

    console.log(results)
}

function subsetToolRecursive(plevel, ppath, presults, pi, maxLevelAllowed, pInputs){

    if (plevel >= maxLevelAllowed){
        console.log("current level is %d, and we inserted path %@", plevel, ppath)
        presults.push(ppath.slice())
        return 
    }

    if (plevel < maxLevelAllowed) {
            for (var di = pi; di < pInputs.length; di++){
                var element = pInputs[di]
                ppath.push(element)
                
                console.log("current key level is %d, we are pushint to path %d", plevel, element)
                subsetToolRecursive(plevel + 1, ppath, presults, di + 1, maxLevelAllowed, pInputs)
                
                let removed = ppath.pop()
                console.log("current key level is %d, we are removing %d from path", plevel, removed)
                while (di < pInputs.length && pInputs[di + 1] == pInputs[di]){
                    di++
                }
            }
    }
}