
console.log('starting pallindrom problem')
let answer = findPallindromMy('ababa');
console.log('answer', answer);

function findPallindromMy(s){
    if (s.length == 0) {
        return ""
    }

    var centerPoint = 0
    var max = 1
    var isOdd = true 

    for (var i = 0; i < s.length; i++){
        
        let maxTemp1 = findMaxPallindrom(s, i, i);
        let maxTemp2 = findMaxPallindrom(s, i, i + 1);
        
        if (maxTemp1 > maxTemp2 && maxTemp1 > max){
            isOdd = true 
            max = maxTemp1
            centerPoint = i 
        }else if (maxTemp2 > maxTemp1 && maxTemp2 > max){
            isOdd = false
            max = maxTemp2
            centerPoint = i 
        }
    }

    if (!isOdd){
        const leftE = Math.ceil(centerPoint - (max - 1)/2)
        const rightE = centerPoint + max/2 + 1
        return s.substring(leftE, rightE)
    }else {
        const leftE = centerPoint - (max - 1)/2
        const rightE = centerPoint + max/2 + 1 
        return s.substring(leftE, rightE)
    }

    function findMaxPallindrom(str, left, right){
        
        var leftInc = left 
        var rightInc = right 
        while (leftInc >= 0 && rightInc < str.length && str[leftInc] == str[rightInc]){
            leftInc--;
            rightInc++;
        }

        return rightInc - leftInc - 1 
    }
}

// function findPallindrom(s){

//     if (s.length == 0) {
//         return ""
//     }

//     var centerPoint = 0
//     var max = 1
//     var isOdd = true 

//     for (var i = 0; i < s.length; i++){
       
//         let j = 1 ;
//         while (i - j >= 0 && i + j <= s.length - 1 && s[i - j] === s[i + j]){
//             // odd case 
//             console.log('comparing', s[i - j], s[i + j])
//             if (j * 2 + 1 > max){
//                 max = j * 2 + 1
//                 centerPoint = i  
//                 isOdd = true 
//             }
//             j++; 
//         }
     
//         j = 1; //abba
//         while ((i - j + 1) >= 0 && (i + j) <= s.length - 1 && s[i - j + 1] === s[i + j]){
//             console.log('comparing:', s[i - j + 1], s[i + j]);
//             if (j * 2 > max){
//                 max = j * 2;
//                 centerPoint = i;
//                 isOdd = false 
//             }
//             j++;
//         }
//     }
// // abba
//     if (isOdd) {
//         const leftSubs = centerPoint - (max - 1)/2
//         const rightSubs = centerPoint + (max - 1)/2 + 1
//         return s.substring(leftSubs, rightSubs) 
//     }
//     const leftSubs = centerPoint - max/2 + 1;
//     const rightSubs = centerPoint + (max)/2 + 1
//     return s.substring(leftSubs, rightSubs)
// }