var x = 121;
var y = x; 
// need to reverse 

if (x < 0) {
    console.log("not a palindrom")
}

var returnValue = 0;

while (x > 0) {

    let leftover = x % 10;
    returnValue = returnValue * 10;
    returnValue += leftover;
    x = ~~(x/10);
}

// console.log(returnValue);
// console.log(y);
if (returnValue == y){
    console.log("true")
}else {
    console.log("false")
}