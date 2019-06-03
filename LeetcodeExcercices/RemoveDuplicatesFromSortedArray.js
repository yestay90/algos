
var nums1 = [1, 1, 2]
removeDuplicates(nums1)
// recursionFunction(0, nums);

function removeDuplicates(nums) {
    if (nums.length == 0) return 0;
    var i = 0;
    for (var j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

// function recursionFunction(index, arr){

//     n = arr.length; 
//     var localIndex = index; 
//     for (localIndex = 0; localIndex < n; localIndex++){
//         if (arr[localIndex] == arr[localIndex + 1]){
//             // console.log("Deleting number %d at index %d", arr[localIndex], localIndex)
//             arr.splice(localIndex, 1)
//             n--
//             recursionFunction(localIndex, arr);
//         }
//     }
// }