getRow(3)

function getRow(rowIndex){

    var result = []
    var level = 0
    util(level)
    console.log(result)

    function util(level){
        if (level >= rowIndex){
            return 
        }

        var path = []

        for (var j = 0; j <= level; j++){
            if (j == 0 || j == level){
                path.push(1)
            }else {
                var prev = result[level - 1]
                let calculated = prev[j - 1] + prev[j]
                path.push(calculated)
            }
        }
        result.push(path)
        util(level + 1)
    }
}