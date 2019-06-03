var str = "42"
// 66
//-24

var ans = basicCalculator(str)
console.log(ans)

function basicCalculator(s){

    var stack = []
    var set = new Set(["-", "+", "*", "/", " "])

    for (var i = 0; i < s.length; i++) {
        if (s[i] == " "){
            continue
        }

        if (stack.length == 0) {
            stack.push(s[i])
            continue
        }

        if (set.has(s[i])){
            stack.push(s[i])
        }else {
            
            var numberWhole = s[i]
            console.log(numberWhole)
            var j = i + 1    
            while(!set.has(s[j]) && j < s.length) {
                numberWhole += s[j]
                console.log(numberWhole)
                j++ 
            }

            if (stack.length == 0 && j == s.length){
                stack.push(numberWhole)
                break 
            }
            
            i = j - 1
            let oper = stack.pop()
            if (oper == "/"){
                let popedNumber = parseFloat(stack.pop()) 
                let cal = (popedNumber / parseFloat(numberWhole)).toFixed(2)
                stack.push(cal)
            }else if (oper == "*"){
                let popedNumber = parseFloat(stack.pop())
                let cal = (popedNumber * parseFloat(numberWhole)).toFixed(2)
                stack.push(cal)
            }else if (oper == "-" || oper == "+") {
                stack.push(oper)
                stack.push(numberWhole)
            }
        }
    }

    while(stack.length > 1){
        let p1 = parseInt(stack.shift())
        let oper = stack.shift()
        let p2 = parseInt(stack.shift())

        if (oper == "+"){
            var cal = p1 + p2; stack.unshift(cal)
        }else {
            var cal = p1 - p2; stack.unshift(cal)
        }
    }

    return Math.floor(stack.pop())
}