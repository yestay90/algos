
var inputs = ["4","13","5","/","+"]
let answer = evalRPN(inputs)
console.log(answer)

function evalRPN(tokens){

    var set = new Set(["+", "-", "*", "/"])
    var stack = []

    for (var i = 0; i < tokens.length; i++){
        let value = tokens[i]

        if (set.has(value) && stack.length > 1){
            let secondElement = Number(stack.pop())
            let firstElement = Number(stack.pop())
            if (value == "+"){
                stack.push(Math.round(firstElement + secondElement))
            } else if (value == "-"){
                stack.push(Math.round(firstElement - secondElement))
            }else if (value == "*"){
                stack.push(Math.round(firstElement * secondElement))
            } else if (value == "/"){
                let result = (firstElement / secondElement)
                if (result < 0){
                    result = Math.round(result)
                }else {
                    result = Math.floor(result)
                }
                stack.push(result)
            }
        }else {
            stack.push(value)
        }
    }

    return stack.pop()
}