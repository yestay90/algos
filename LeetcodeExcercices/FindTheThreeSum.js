// var a = [-1,0,1,2,-1,-4]
var a = [-1, 2, 1, -4]

function sortNumber(a,b) {
    return a - b;
}

var sortedArray = a.sort(sortNumber)
var answer = findTheThreeSum(sortedArray)
var clothest = 0;
var target = 1; 
console.log(answer)
function findTheThreeSum(nums){

    var result = []
    console.log(nums)

    for (var i = 0; i < nums.length - 2; i++){
        if (i == 0 || nums[i] > nums[i - 1]){
            var startIndex = i + 1; 
            var endIndex = nums.length - 1 

            while (startIndex < endIndex){
                if (nums[i] + nums[startIndex] + nums[endIndex] == target){
                    console.log("number adding %d, %d, %d", nums[i], nums[startIndex], nums[endIndex])
                    result.push([nums[i], nums[startIndex], nums[endIndex]])
                    var currentStartIndex = startIndex
                    while(nums[currentStartIndex] == nums[startIndex] && startIndex < endIndex){
                        startIndex++; 
                    } 
                }else if (nums[i] + nums[startIndex] + nums[endIndex] > target) {
                    console.log("number are %d, %d, %d", nums[i], nums[startIndex], nums[endIndex])
                    var currentEndIndex = endIndex
                        while(nums[currentEndIndex] == nums[endIndex] && startIndex < endIndex){
                            endIndex--;
                        }
                }else { // < 0 
                    console.log("number are %d, %d, %d", nums[i], nums[startIndex], nums[endIndex])
                        var currentStartIndex = startIndex
                        while(nums[currentStartIndex] == nums[startIndex] && startIndex < endIndex){
                            startIndex++; 
                        }
                }
            }
        }
    }

    return result; 
}

// Azamat's answer
// function findTheThreeSum(a){
//     let neg = [];
//     let pos = [];
    
//     for (let n of a)
//         if (n>=0) pos[n] = pos[n]? pos[n]+1:1; 
//         else neg[-n] = neg[-n]?neg[-n]+1:1;
    
//     let ans = [];
//     let pk = [];
//     let nk = [];
    
//     for (let n in pos)
//         pk.push(Number(n));
//     for (let n in neg)
//         nk.push(Number(n));
    
//     for (let i = 0; i < pk.length; i++) {
//         if (pk[i]>2*nk[pk.length-1]) break;
//         if (pos[pk[i]]>1 && neg[pk[i]+pk[i]]) ans.push([-pk[i]-pk[i],pk[i],pk[i]]);
//         for (let j = i+1; j < pk.length; j++) {
//             if (neg[pk[i]+pk[j]]) ans.push([-pk[i]-pk[j],pk[i],pk[j]]);
//         }
//     }
    
//     for (let i = 0; i < nk.length; i++) {
//         if (nk[i]>2*pk[pk.length-1]) break;
//         if (neg[nk[i]]>1 && pos[nk[i]+nk[i]]) ans.push([nk[i]+nk[i],-nk[i],-nk[i]]);
//         for (let j = i+1; j < nk.length; j++) {
//             if (pos[nk[i]+nk[j]]) ans.push([nk[i]+nk[j],-nk[i],-nk[j]]);
//         }
//     }
         
    
//     if (pos[0] && pos[0]>2) ans.push([0,0,0]);
//     return ans;
// }



// var set = [];

// for(i = 0; i < nums.length; i++)
//     for(j = i + 1; j < nums.length; j++)
//         for(y = j + 1; y < nums.length; y++){
//             let sum = nums[i] + nums[j] + nums[y]

//             if (sum == 0){
//                 var newArray = [nums[i], nums[j], nums[y]]
//                 newArray = newArray.sort()

//                 if (set.length == 0) {
//                     set.push(newArray)    
//                 }else if (compareIsArrayInSet(set, newArray) == false){
//                     set.push(newArray)
//                 }
//             }
//         }


// function compareIsArrayInSet(set1, arrToCheck){

//     for (s = 0; s < set1.length; s++){
//         if (compareTwoArrays(set1[s], arrToCheck) == true) {
//             return true 
//         }
//     }

//     return false 
// }

// function compareTwoArrays(arr1, arr2){

//     if (arr1.length == 0 
//         || arr2.length == 0 || arr1.length != arr2.length){
//         return false 
//     }  

//     for (c = 0; c < arr1.length; c++){
//         if (arr1[c] != arr2[c]) {
//             return false 
//         }
//     }

//     return true; 
// }
