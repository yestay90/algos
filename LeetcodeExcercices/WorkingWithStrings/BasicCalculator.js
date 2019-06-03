
var input = "(1+(4+5+2)-3)+(6+8)"
var ans = basicCalculator(input)
console.log(ans)


function basicCalculator(str){

    var stack = []

    for (var i = 0; i < str.length; i++){
        console.log("checking char %s", str[i])
        if (str[i] == "(" || str[i] == "+" || str[i] == "-"){
            stack.push(str[i])
        }else if (str[i] == ")"){
            var number = stack.pop()
            var leftBracket = stack.pop()
            if (stack.length == 0){
                stack.push(number)
            }else {
                var operation = stack.pop()
                var number = stack.pop()
                if (operation == "+"){
                    var res = number + parseInt(str[i])
                    stack.push(res)
                }else if (operation == "-"){
                    var res = number - parseInt(str[i])
                    stack.push(res)
                }
            }
        }else {
            if (stack.length == 0){
                stack.push(parseInt(str[i]))
            }else {
                var operation = stack.pop()

                if (operation == "("){
                    stack.push(operation)
                    stack.push(parseInt(str[i]))
                    continue
                }

                var number = stack.pop()
                if (operation == "+"){
                    var res = number + parseInt(str[i])
                    stack.push(res)
                }else if (operation == "-"){
                    var res = number - parseInt(str[i])
                    stack.push(res)
                }
            }
        }
    }

    return stack.pop()
}