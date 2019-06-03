
class Queue {
    constructor(){
        this.items = []
    }

    dequeue(){
        if (this.isEmpty() == false){
            return this.items.shift()
        }
    }

    enqueue(element){
        this.items.push(element)
    }

    isEmpty(){
        return this.items.length == 0 
    }
}
class Graph {
    constructor(noOfVertices) 
    { 
        this.noOfVertices = noOfVertices; 
        this.AdjList = new Map(); 
    } 

    addVertex(v){
        this.AdjList.set(v, [])
    }

    addEdge(v,w){
        this.AdjList.get(v).push(w)
        // this.AdjList.get(w).push(v)
    }

    printGraph(){
        var get_keys = this.AdjList.keys()

        for (var i of get_keys){
            var get_values = this.AdjList.get(i)
            var conc = ""

            for (var j of get_values){
                conc += j + " "
            }

            console.log(i + " -> " + conc)

        }
    }

    bfs(startingNode){
        var visited = new Set()

        var q = new Queue()

        visited.add(startingNode)
        q.enqueue(startingNode)
        while (!q.isEmpty()){
            var queuedElement = q.dequeue()
            console.log(queuedElement)

            var get_list = this.AdjList.get(queuedElement)

            for (var i in get_list){
                var neigh = get_list[i]
                if (!visited.has(neigh)){
                    visited.add(neigh)
                    q.enqueue(neigh)
                }
            }
        }
    }

    dfs(startingNode){
        var visited = new Set()

        this.DFSUtil(startingNode, visited)
    }

    DFSUtil(vert, visited){
        visited.add(vert)
        console.log(vert)
        var get_list = this.AdjList.get(vert)

        for (var i in get_list){
            var neigh = get_list[i]
            if (!visited.has(neigh)){
                this.DFSUtil(neigh, visited)
            }
        }
    }

    topSort(){
        var visited = new Set()
        var stack = []
        var gKeys = this.AdjList.keys()
        for (var i of gKeys){
            if (!visited.has(i)){
                this.topSortUtil(i, visited, stack)
            }
        }
        return stack
    }

    topSortUtil(node, visited, stack){
        visited.add(node)
        var neibors = this.AdjList.get(node)

        for (var i in neibors){
            var neigh = neibors[i]
            if (!visited.has(neigh)){
                this.topSortUtil(neigh, visited, stack)
            }
            
        }
        stack.push(node)
    }
}

var inputs = [[1,0],[2,0],[3,1],[3,2]]
var n = 4
let ans = isPossibleToFinishCourse(n, inputs)
console.log(ans)

function isPossibleToFinishCourse(numCourses, prerequisites){

    if (numCourses <= 1){
        return true 
    }
    if (prerequisites.length == 0 || prerequisites[0].length == true){
        return true 
    }
    var g = new Graph(prerequisites.length)
   
    // adding vertices 
    for (var i = 0; i < prerequisites.length; i++){
        let edge = prerequisites[i]
        g.addVertex(edge[0])
    }

    // connecting vertices
    for (var j = 0; j < g.noOfVertices; j++){
        let edge = prerequisites[j]
        g.addEdge(edge[0], edge[1])
    }

    g.printGraph()

    var stack = g.topSort()

    if (numCourses <= stack.length) {
        return true 
    }else {
        return false  
    }
}