
console.log('starting pallindrom problem')
let answer = findPallindrom('abba');
console.log('answer', answer);

function findPallindrom(s){

    if (s.length == 0) {
        return ""
    }

    var centerPoint = 0
    var max = 1
    var isOdd = true 

    for (var i = 0; i < s.length; i++){
       
        let j = 1 ;
        while (i - j >= 0 && i + j <= s.length - 1 && s[i - j] === s[i + j]){
            // odd case 
            if (j * 2 + 1 > max){
                max = j * 2 + 1
                centerPoint = i  
                isOdd = true 
            }
            j++; 
        }
     
        j = 1; 
        while ((i - j + 1) >= 0 && (i + j) <= s.length - 1 && s[i - j + 1] === s[i + j]){
            if (j * 2 > max){
                max = j * 2;
                centerPoint = i;
                isOdd = false 
            }
            j++;
        }
    }

    if (!isOdd) return s.substring(centerPoint - (max - 1)/2, centerPoint + (max - 1)/2 + 1) 
    return s.substring(centerPoint - max/2 + 1, centerPoint + (max)/2 + 1)
}