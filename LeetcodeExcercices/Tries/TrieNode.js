
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

            return currentNode.children.length == 0 
        }

        var char = word[index]
        var nextNode = currentNode.children.get(char)
        if (nextNode == null){
            return false 
        }
        var shouldDeleteThisNode = this.deleteUtil(currentNode, word, index + 1)

        if (shouldDeleteThisNode){
            currentNode.children.delete(char)
            return currentNode.children.length == 0
        }

        return false 
    }
}

let trie = new Trie();

trie.insert("apple");
console.log("inserting apple")
let ans = trie.search("apple");   // returns true
console.log("search apple: %@", ans)
let ans1 = trie.search("app");     // returns false
console.log("search app: %@", ans1)
let ans2 = trie.startsWith("app"); // returns true
console.log("start with app: %@", ans2)
trie.insert("app");   
console.log("insert app")
let ans3 = trie.search("app");     // returns true
console.log("search app: %@", ans3)




