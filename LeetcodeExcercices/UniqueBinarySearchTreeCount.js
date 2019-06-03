
var number = countUniqueBinaryTree(3)
console.log(number)

function countUniqueBinaryTree(n){

    var t = []
    t[0] = 1
    t[1] = 1

    for (var i = 2; i <= n; i++){
        for (var j = 0; j < i; j++){
            if (!t[i]){
                t[i] = 0    
            }
            t[i] += t[j] * t[i - j - 1]
        }
    }

    return t[n]
}