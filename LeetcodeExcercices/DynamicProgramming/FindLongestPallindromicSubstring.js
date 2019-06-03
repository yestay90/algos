
console.log('starting pallindrom problem')
let answer = findPallindrom('ccc');
console.log('answer', answer);

function findPallindrom(s){

    if (s.length == 0) {
        return ""
    }

    let max = 1; 
    var str = s[0]; 

    for (var i = 0; i < s.length; i++){
       let left = i - 1
       let right = i + 1 

       console.log('left side:', left)
       console.log('right side:', right)

       

       // if all words are the same like example 'aaaaaa'
       while (right < s.length){
           if (s[i] == s[right] && s.substring(i, right + 1).length > max){
                console.log('found two letters comb')
                max = s.substring(i, right + 1).length
                str = s.substring(i, right + 1)
                right++
           }else {
               break 
           }
       }
       // if all words are the same like example 'aaaaaa'
       
       // check if words has odd numbers
       if (s[i] == s[right]){
         left = i 
       }

       while (left >= 0 && right < s.length && s[left] === s[right]){
           console.log('found pallindrom');
           let temp = s.substring(left, right + 1)
           console.log(s.substring(left, right + 1)); 
           
           if (temp.length > max){
               str = s.substring(left, right + 1)
           }
           max = str.length
           left--
           right++
       }
       // check if words has odd numbers

       // check if words has 
    }

    return str 


    function isPallindrom(text){
        if (text.length == 1){
            return true 
        }

        var left = 0
        var right = text.length - 1 
        
        while (right > left){
            
            if (text[right] !== text[left]){
                return false 
            }

            left++
            right--
        }
        

        return true 
    }
}