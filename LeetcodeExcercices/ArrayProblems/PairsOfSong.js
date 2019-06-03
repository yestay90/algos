
var inputs = [60,60,60]

var ans = pairsOfSong(inputs)
console.log(ans)

function pairsOfSong(time){

    if (time.length == 0){
        return 0
    }

    var count = 0
    for (var i = 0; i < time.length; i++){
        for (var j = i + 1; j < time.length; j++){
            let sum = time[i] + time[j]
            if (sum % 60 == 0){
                count += 1
            }
        }
    }
    
    return count 
}