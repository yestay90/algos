
var nums1 = [1,2,3,0,0,0]; var m = 3;
var nums2 = [2, 5, 6]; var n = 3; 

var answer = mergeTwoSortedArray(nums1, m, nums2, n);
console.log('answer: ',answer)
function mergeTwoSortedArray(nums1, m, nums2, n){

    // Output: [1,2,2,3,5,6]
    // if (n == 0){
    //     return nums1
    // }

    // if (m == 0){
    //     return nums2
    // }

    // need to formate nums1
    var k = nums1.length - 1; // last index of first array
    while (k >= 0 && m > 0 && n > 0) {
        console.log('comparing', nums2[n - 1], nums1[m - 1])
        if (nums2[n - 1] > nums1[m - 1]){
            console.log('replacing', nums1[k])
            console.log('to ', nums2[n - 1])
            nums1[k] = nums2[n - 1]
            n--
        }else {
            console.log('replacing', nums1[k])
            console.log('to ', nums1[m - 1])
            nums1[k] = nums1[m - 1]
            m--
        }
        k--;
    }

    while(m > 0 && k >= 0){
        nums1[k--] = nums1[m - 1]
        m--; 
    }

    while(n > 0 && k >= 0){
        nums1[k--] = nums2[n - 1];
        n--;
    }

    return nums1
}