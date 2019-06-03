
let answer = removeElementNew([3,2,2,3], 3);

console.log(answer);

function reverse(x) {

    var y = x.toString();
    if (y.length == 1) return y;

    var str = "";
    var i; 
    for (i = y.length - 1; i >= 0; i --) {
        str += y[i];
    }

    return Number(str);
}

function isValid(s) {
    
    var matches = new Set();
    matches.add('()');
    matches.add("{}");
    matches.add("[]");

    var arrayToKeep = [];
    var stringToCheck = "([{"
    var i;
    for (i = 0; i < s.length; i++){
        if (stringToCheck.includes(s[i])) {
            arrayToKeep.push(s[i]);
        }else {
            if (arrayToKeep.length == 0) {
                return false 
            }
            let currentMatch = arrayToKeep.pop() + s[i];

            if (!(matches.has(currentMatch))){
                return false 
            }
        }
    }

    if (arrayToKeep.length == 0) {
        return true; 
    }else {
        return false;
    }
};

function removeElement(numbers, value){

    var i = 0; 
    for (var j = 0; j < numbers.length; j++){
        if (numbers[j] != value){
            numbers[i] = numbers[j];
            i++;
        }
    }

    return i ; 
}

function removeElementNew(nums, val) {
    var i = 0;
    var n = nums.length;
    while (i < n) {
        if (nums[i] == val) {
            nums[i] = nums[n - 1];
            // reduce array size by one
            n--;
        } else {
            i++;
        }
    }
    return n;
}