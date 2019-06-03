// var x = 1200;

// var y; 
// if (x < 0){
//     x = Math.abs(x);
//     y = x.toString() + "-"; 
// } else {
//     y = x.toString();
// }


// if (y.length == 1) return y;

// var str = "";
// var i; 
// for (i = y.length - 1; i >= 0; i --) {
//     str += y[i];
// }
 
// var returnValue = Number(str);
// console.log(returnValue);
x = 123;
let s = 1;
if (x < 0) s = -1;
x = Math.abs(x);
let ans = 0;
while (x > 0) {
console.log("the ans is %d", ans)
ans = ans * 10 + x % 10;
x = ~~(x / 10);       
console.log("the x is %d", x)
}

ans = ans * s;
let min = Math.pow(2, 31);
let max = Math.pow(2, 31) - 1
if (ans > min || ans < -max) console.log(0);
console.log(ans);