
var A = -3; var B = 0; var C = 3; var D = 4; var E = 0; var F = -1; var G = 9;
var H = 2;

var ans = findRectArea(A, B, C, D, E, F, G, H)
console.log(ans)
function findRectArea(A, B, C, D, E, F, G, H){

    var a1 = Math.abs(C - A) * Math.abs(D - B)
    var a2 = Math.abs(G - E) * Math.abs(H - F)
    var totalArea = a1 + a2
    console.log("total area is %@", totalArea)

    let height = Math.min(D, H) - Math.max(B, F)
    let length = Math.min(C, G) - Math.max(A, E)

    return totalArea - (Math.abs(length) * Math.abs(height))
}