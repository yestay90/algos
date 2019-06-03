
var words = ["aba","baa","bab","aaab","aaa","aaaa","aaba"]
var board = [["a","b"],
            ["a","a"]]
            


wordSearch(words, board)

function wordSearch(words, board){

    class TrieNode {
        constructor(){
            this.children = new Map()    
            this.isEnded = false 
        }
    }
    
    class Trie {
        constructor(){
            this.root = new TrieNode()
        }
    
        insert(word){
            var currentNode = this.root
            for (var i = 0; i < word.length; i++){
                let char = word[i]
                let node = currentNode.children.get(char)
                if (node == null){
                    node = new TrieNode()
                    currentNode.children.set(char, node)
                }
                currentNode = node 
            }
            currentNode.isEnded = true 
        } 
    
        search(word){
            var current = this.root
            for (var j = 0; j < word.length; j++){
                let char = word[j]
                let node = current.children.get(char)
                if (node == null){
                    return false 
                }
                current = node 
            }
            return current.isEnded
        }
    
        startsWith(prefix){
            var current = this.root
            for (var f = 0; f < prefix.length; f++){
                let char = prefix[f]
                let node = current.children.get(char)
                if (node == null){
                    return false 
                }
                current = node 
            }
            return true
        }
    
        delete(word){
           this.deleteUtil(this.root, word, 0)
        }
    
        deleteUtil(currentNode, word, index){
    
            if (index == word.length){
                if (currentNode.isEnded == false){
                    return false 
                }
    
                return currentNode.children.size == 0 
            }
    
            var char = word[index]
            var nextNode = currentNode.children.get(char)
            if (nextNode == null){
                return false 
            }
            var shouldDeleteThisNode = this.deleteUtil(nextNode, word, index + 1)
    
            if (shouldDeleteThisNode){
                currentNode.children.delete(char)
                return currentNode.children.size == 0
            }
    
            return false 
        }
    }
    
    function create2DNSizeMatrix(h, w){
        var matrix = []
        var lineCounter = 0 
        while (lineCounter < h){
            var line = []
            for (var i = 0; i < w; i++){
                line.push(false)
            }
            matrix.push(line)
            lineCounter++
        }
        return matrix
    }

    var height = board.length
    var width = board[0].length

    var visited = create2DNSizeMatrix(height, width)
    var result = []
    var trie = new Trie()

    for (var w = 0; w < words.length; w++){
        let word = words[w]
        trie.insert(word)
    }

    for (var i = 0; i < height; i++){
        for (var j = 0; j < width; j++){
            var current = trie.root
            console.log("checking char %@", board[i][j])
            let char = board[i][j]
            utilTraverse(i, j, "", current, visited) 
            visited = create2DNSizeMatrix(height, width)
        }
    }
    

    console.log(result)

    function utilTraverse(row, collumn, word, current, visited){

        visited[row][collumn] = true

        let char = board[row][collumn]
        let node = current.children.get(char)

        if (node == null){
            return  
        }

        
        // [["a","b"],
        //  ["c","d"]]]

        if (node.isEnded == true){
            console.log("word added %@", word + char)
            result.push(word + char)
            trie.delete(word + char)
            visited = create2DNSizeMatrix(height, width)
            return  
        }

        if (row - 1 >= 0 && visited[row -1][collumn] == false){
            utilTraverse(row - 1, collumn, word + char, node, visited) 
            visited[row - 1][collumn] = false        
        }

        if (row + 1 < board.length && visited[row + 1][collumn] == false){
            utilTraverse(row + 1, collumn, word + char, node, visited) 
            visited[row + 1][collumn] = false 
        }

        if (collumn - 1 >= 0 && visited[row][collumn - 1] == false){
            utilTraverse(row, collumn - 1, word + char, node, visited) 
            visited[row][collumn  - 1] = false 
        }

        if (collumn + 1 < board[0].length && visited[row][collumn + 1] == false){
            utilTraverse(row, collumn + 1, word + char, node, visited)
            visited[row][collumn  + 1] = false 
        }
    }
}