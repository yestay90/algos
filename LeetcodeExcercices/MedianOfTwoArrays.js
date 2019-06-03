
var nums1 = [1,3];
var nums2 = [2];

var num3 = [];

var i = 0;
var j = 0;
while (i < nums1.length && j < nums2.length) {

    if (nums1[i] < nums2[j]){
        num3.push(nums1[i++]);
    }else {
        num3.push(nums2[j++]);
    }
}

while (i < nums1.length) {
    num3.push(nums1[i++]);
}

while (j < nums2.length) {
    num3.push(nums2[j++]);
}

console.log(num3);

if (num3.length % 2 == 0){
    var medianElement = (num3.length - 1)/2;
    medianElement = Math.floor(medianElement)
    var median = (num3[medianElement] + num3[medianElement + 1])/2;
    console.log("the median is even and is %f", median)
}else {
    var medianElement = (num3.length)/2;
    medianElement = Math.floor(medianElement)
    var median = num3[medianElement];
    
    console.log("the median is odd and is %d", median)
}
