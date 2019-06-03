var nums1 = [1,2,4,5,6,0]
var m = 5
var nums2 = [3]
var n = 1


var i = m - 1
var j = n - 1 
var k = m + n - 1 
if (nums1.length == 0){
    return nums2
}

if (nums2.length == 0){
    return nums1
}

while (i >= 0 && j>=0){
    nums1[k--] = nums1[i] >= nums2[j] ? nums1[i--] : nums2[j--]

    
}

while (j >= 0){
    nums1[k] = nums2[j]
    k--;j--
}


// while (i < m && j < n){
//     if (nums2[j] >= nums1[i - 1] && nums2[j] < nums1[i]){
//         k = i + 1 
//         while (nums1[k] != 0){
//             k++
//         }

//         nums1[k] = nums1[i]
//         nums1[i] = nums2[j]

//         i++;j++
//     } else if (nums1[i] == 0){
//         nums1[i] = nums2[j]
//         i++;j++;
//     } else if (nums2[j] < nums1[i - 1]){
//         k = i 
//         while (nums1[k] != 0){
//             k++
//         }
//         while (k > i - 1){
//             nums1[k] = nums1[k - 1]
//             k--
//         }

//         nums1[i - 1] = nums2[j]
//         i++;j++
//     } else {
//         i++
//     }
// }

// while (j < n){
//     // var k = i + 1 
//     if (nums2[j] < nums1[i - 1]){
//         k = i 
//         while (nums1[k] != 0){
//             k++
//         }
//         while (k > i - 1){
//             nums1[k] = nums1[k - 1]
//             k--
//         }

//         nums1[i - 1] = nums2[j]
//         i++;j++
//     }else {
//         while (nums1[k] != 0){
//             k++
//         }
//         nums1[k] = nums2[j]
//         j++
//     }
// }


console.log(nums1)