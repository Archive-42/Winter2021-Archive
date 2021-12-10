# D1-Graphs I

{% embed url="https://replit.com/@bgoonz/graphs\#main.py" caption="" %}

\*\*\*\*

{% embed url="https://gist.github.com/bgoonz/4dc35438f8c293cf68e81c0d73ddfe1a" caption="" %}

![](../../.gitbook/assets/image%20%284%29%20%286%29%20%285%29%20%281%29%20%289%29.png)

## Objective 01 - Describe what a graph is, explain its components, provide examples of its useful applications, and draw each of the different graph types

### Overview <a id="overview"></a>

#### What Are Graphs? <a id="what-are-graphs"></a>

Graphs are collections of related data. They’re like trees, except connections can be made from any node to any other node, even forming loops. By this definition, _all trees are graphs, but not all graphs are trees._

#### Components of Graphs <a id="components-of-graphs"></a>

![https://camo.githubusercontent.com/134d2271d2ff5cedb2f05ede63326cb12f8253d2/68747470733a2f2f692e696d6775722e636f6d2f456232536b68482e6a7067](https://camo.githubusercontent.com/134d2271d2ff5cedb2f05ede63326cb12f8253d2/68747470733a2f2f692e696d6775722e636f6d2f456232536b68482e6a7067)

We call the nodes in a graph **vertexes** \(or **vertices** or **verts**\), and we call the connections between the verts **edges**.

An edge denotes a relationship or linkage between the two verts.

#### What Graphs Represent <a id="what-graphs-represent"></a>

Graphs can represent any multi-way relational data.

A graph could show a collection of cities and their linking roads.

It could show a collection of computers on a network.

It could show a population of people who know each other and [Kevin Bacon \(Links to an external site.\)](https://en.wikipedia.org/wiki/Six_Degrees_of_Kevin_Bacon).

It could represent trade relationships between nations.

It could represent the money owed in an ongoing poker night amongst friends.

And so on.

#### Types of Graphs <a id="types-of-graphs"></a>

**Directed and Undirected Graphs**

The nature of the relationship that we represent determines if we should use a directed or undirected graph. If we could describe the relationship as "one way", then a directed graph makes the most sense. For example, representing the owing of money to others \(debt\) with a directed graph would make sense.

![https://camo.githubusercontent.com/a17434989386f6f18a16851b5aeb8bbf92a129eb/68747470733a2f2f692e696d6775722e636f6d2f766677527244522e6a7067](https://camo.githubusercontent.com/a17434989386f6f18a16851b5aeb8bbf92a129eb/68747470733a2f2f692e696d6775722e636f6d2f766677527244522e6a7067)

Directed graphs can also be bidirectional. For example, road maps are directed since all roads are one-way; however, most streets consist of lanes in both directions.

![https://camo.githubusercontent.com/a6113174942b0d66c04a6e12bc67db2a8b8959d5/68747470733a2f2f692e696d6775722e636f6d2f6d386d4133676f2e6a7067](https://camo.githubusercontent.com/a6113174942b0d66c04a6e12bc67db2a8b8959d5/68747470733a2f2f692e696d6775722e636f6d2f6d386d4133676f2e6a7067)

If the relationship's nature is a mutual exchange, then an undirected graph makes the most sense. For example, we could use an undirected graph to represent users who have exchanged money in the past. Since an "exchange" relationship is always mutual, an **undirected** graph makes the most sense here.

![https://camo.githubusercontent.com/6b782a86e1920d53411b88e1510c7efd0bed2bc2/68747470733a2f2f692e696d6775722e636f6d2f534a4e3036776a2e6a7067](https://camo.githubusercontent.com/6b782a86e1920d53411b88e1510c7efd0bed2bc2/68747470733a2f2f692e696d6775722e636f6d2f534a4e3036776a2e6a7067)

**Cyclic and Acyclic Graphs**

If you can form a cycle \(for example, follow the edges and arrive again at an already-visited vert\), the graph is **cyclic**. For instance, in the image below, you can start at B and then follow the edges to C, E, D, and then back to B \(which you’ve already visited\).

![https://camo.githubusercontent.com/e23529f1bd2dfe3227dee64fe174252b0c310d1a/68747470733a2f2f692e696d6775722e636f6d2f58764d44616c302e6a7067](https://camo.githubusercontent.com/e23529f1bd2dfe3227dee64fe174252b0c310d1a/68747470733a2f2f692e696d6775722e636f6d2f58764d44616c302e6a7067)

_Note: any undirected graph is automatically cyclic since you can always travel back across the same edge._

If you cannot form a cycle \(for example, you cannot arrive at an already-visited vert by following the edges\), we call the graph **acyclic**. In the example below, no matter which vert you start at, you cannot follow edges in such a way that you can arrive at an already-visited vert.

![https://camo.githubusercontent.com/321029108b001c2f2c3ea86c775f6a87b8436d6d/68747470733a2f2f692e696d6775722e636f6d2f4c58416d376d762e6a7067](https://camo.githubusercontent.com/321029108b001c2f2c3ea86c775f6a87b8436d6d/68747470733a2f2f692e696d6775722e636f6d2f4c58416d376d762e6a7067)

**Weighted Graphs**

**Weighted graphs** have values associated with the edges. We call the specific values assigned to each edge **weights**.

![https://camo.githubusercontent.com/405834c88f7cd436bc69aebf9bc3f20072857d3e/68747470733a2f2f692e696d6775722e636f6d2f726a4d6a716b332e6a7067](https://camo.githubusercontent.com/405834c88f7cd436bc69aebf9bc3f20072857d3e/68747470733a2f2f692e696d6775722e636f6d2f726a4d6a716b332e6a7067)

The weights represent different data in different graphs. In a graph representing road segments, the weights might represent the length of the road. The higher the total weight of a route on the graph, the longer the trip is. The weights can help decide which particular path we should choose when comparing all routes.

We can further modify weights. For example, if you were building a graph representing a map for bicycle routes, we could give roads with bad car traffic or very steep inclines unnaturally large weights. That way, a routing algorithm would be unlikely to take them. \(This is how Google Maps avoids freeways when you ask it for walking directions.\)

_Note:_ [_Djikstra's Algorithm \(Links to an external site.\)_](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) _is a graph search variant that accounts for edge weights._

**Directed Acyclic Graphs \(DAGs\)**

A **directed acyclic graph \(DAG\)** is a directed graph with no cycles. In other words, we can order a DAG’s vertices linearly in such a way that every edge is directed from earlier to later in the sequence.

![https://camo.githubusercontent.com/4a276dc53718bd990dd5a8e62e99352f28965f0e/68747470733a2f2f692e696d6775722e636f6d2f6e71684d37757a2e6a7067](https://camo.githubusercontent.com/4a276dc53718bd990dd5a8e62e99352f28965f0e/68747470733a2f2f692e696d6775722e636f6d2f6e71684d37757a2e6a7067)

A DAG has several applications. DAGs can model many different kinds of information. Below is a small list of possible applications:

- A spreadsheet where a vertex represents each cell and an edge for where one cell's formula uses another cell's value.
- The milestones and activities of largescale projects where a topological ordering can help optimize the projects' schedule to use as little time as possible.
- Collections of events and their influence on each other like family trees or version histories.

It is also notable that git uses a DAG to represent commits. A commit can have a child commit, or more than one child commit \(in a branch\). A child could come from one parent commit or two \(in the case of a merge\). But there’s no way to go back and form a repeating loop in the git commit hierarchy.

### Follow Along <a id="follow-along"></a>

Before you draw graphs on your own, let's draw some graphs together. For each graph, we will have a description.

#### Exercise 1 <a id="exercise-1"></a>

_Draw an undirected graph of 8 verts._

Remember, from our definitions above that an undirected graph has bidirectional edges. So, we can draw eight verts and then connect them with solid lines \(not arrows\) anyway we see fit.

![https://camo.githubusercontent.com/de48eaaa53f7fead48f3d09e394f8b1342f7d226/68747470733a2f2f692e696d6775722e636f6d2f6d6964443358642e6a7067](https://camo.githubusercontent.com/de48eaaa53f7fead48f3d09e394f8b1342f7d226/68747470733a2f2f692e696d6775722e636f6d2f6d6964443358642e6a7067)

#### Exercise 2 <a id="exercise-2"></a>

_Draw a directed graph of 7 verts._

A directed graph has at least one edge that is _not_ bidirectional. So, again, we can draw our seven verts and then connect them with edges. This time, we need to make sure that one of the edges is an arrow pointing in only one direction.

![https://camo.githubusercontent.com/53c2b80679e6731818f5bb72fecdf17579dd0f70/68747470733a2f2f692e696d6775722e636f6d2f3870436f6568412e6a7067](https://camo.githubusercontent.com/53c2b80679e6731818f5bb72fecdf17579dd0f70/68747470733a2f2f692e696d6775722e636f6d2f3870436f6568412e6a7067)

#### Exercise 3 <a id="exercise-3"></a>

_Draw a cyclic directed graph of 5 verts._

This drawing will be similar to one for Exercise 2 because it is a directed graph. However, in this graph, we also need to ensure that it has at least one cycle. Remember that a cycle is when you can follow the graph's edges and arrive at a vertex that you've already visited.

To draw this graph, we will draw our five verts and then draw our edges, making sure that we create at least one cycle.

![https://camo.githubusercontent.com/8609287c7507ded66414ab2be7154d68436b82ac/68747470733a2f2f692e696d6775722e636f6d2f4a424f7572506e2e6a7067](https://camo.githubusercontent.com/8609287c7507ded66414ab2be7154d68436b82ac/68747470733a2f2f692e696d6775722e636f6d2f4a424f7572506e2e6a7067)

#### Exercise 4 <a id="exercise-4"></a>

_Draw a directed acyclic graph \(DAG\) of 8 verts._

Again, this graph will be directed. The difference is that it will be acyclic—we can order a DAG’s vertices linearly so that every edge is directed from earlier to later in the sequence.

For this graph, we will draw our eight verts in a line from left to right. We will then draw our edges, making sure that the edges always point from left to right \(earlier to later in the sequence\).

![https://camo.githubusercontent.com/f9f74a9565045797142f292f619840371fc04698/68747470733a2f2f692e696d6775722e636f6d2f4d4e4c5a6f6f482e6a7067](https://camo.githubusercontent.com/f9f74a9565045797142f292f619840371fc04698/68747470733a2f2f692e696d6775722e636f6d2f4d4e4c5a6f6f482e6a7067)

### Challenge <a id="challenge"></a>

Draw one graph for each of the descriptions below:

1. Undirected graph of 4 verts.
2. Directed graph of 5 verts.
3. Cyclic directed graph of 6 verts.
4. DAG of 7 verts.

### Additional Resources <a id="additional-resources"></a>

- [https://medium.com/basecs/a-gentle-introduction-to-graph-theory-77969829ead8 \(Links to an external site.\)](https://medium.com/basecs/a-gentle-introduction-to-graph-theory-77969829ead8)

![](../../.gitbook/assets/image%20%284%29%20%286%29%20%285%29%20%281%29%20%284%29.png)

## Objective 02 - Represent a graph as an adjacency list and an adjacency matrix and compare and contrast the respective representations

### Overview <a id="overview"></a>

#### Graph Representations <a id="graph-representations"></a>

Two common ways to represent graphs in code are **adjacency lists** and **adjacency matrices**. Both of these options have strengths and weaknesses. When deciding on a graph implementation, it's essential to understand what type of data you will store and what operations you need to run on the graph.

Below is an example of how we would represent a graph with an adjacency matrix and an adjacency list. Notice how we represent the relationship between verts C and D when using each type.

![https://camo.githubusercontent.com/ff694105bfdaea68ee3a73c75cf604ac8f020e1c/68747470733a2f2f692e696d6775722e636f6d2f7369476d7138582e6a7067](https://camo.githubusercontent.com/ff694105bfdaea68ee3a73c75cf604ac8f020e1c/68747470733a2f2f692e696d6775722e636f6d2f7369476d7138582e6a7067)

**Adjacency List**

In an adjacency list, the graph stores a list of vertices. For each vertex, it holds a list of each connected vertex.

![https://camo.githubusercontent.com/0e81024228bd0b1dd29f33c47b0896b7a978e911/68747470733a2f2f692e696d6775722e636f6d2f476953746d4e682e6a7067](https://camo.githubusercontent.com/0e81024228bd0b1dd29f33c47b0896b7a978e911/68747470733a2f2f692e696d6775722e636f6d2f476953746d4e682e6a7067)

Below is a representation of the graph above in Python:

```python
class Graph:
    def __init__(self):
        self.vertices = {
                            "A": {"B"},
                            "B": {"C", "D"},
                            "C": {"E"},
                            "D": {"F", "G"},
                            "E": {"C"},
                            "F": {"C"},
                            "G": {"A", "F"}
                        }
```

Notice that this adjacency _list_ doesn't use any lists. The `vertices` collection is a `dictionary` which lets us access each collection of edges in O\(1\) constant time. Because a `set` contains the edges, we can check for edges in O\(1\) constant time.

**Adjacency Matrix**

![https://camo.githubusercontent.com/0e81024228bd0b1dd29f33c47b0896b7a978e911/68747470733a2f2f692e696d6775722e636f6d2f476953746d4e682e6a7067](https://camo.githubusercontent.com/0e81024228bd0b1dd29f33c47b0896b7a978e911/68747470733a2f2f692e696d6775722e636f6d2f476953746d4e682e6a7067)

Here is the representation of the graph above in an adjacency matrix:

```python
class Graph:
    def __init__(self):
        self.edges = [[0,1,0,0,0,0,0],
                      [0,0,1,1,0,0,0],
                      [0,0,0,0,1,0,0],
                      [0,0,0,0,0,1,1],
                      [0,0,1,0,0,0,0],
                      [0,0,1,0,0,0,0],
                      [1,0,0,0,0,1,0]]
```

We represent this matrix as a two-dimensional array–a list of lists. With this implementation, we get the benefit of built-in edge weights. `0` denotes no relationship, but any other value represents an edge label or edge weight. The drawback is that we do not have a built-in association between the vertex values and their index.

In practice, implementing both the adjacency list and adjacency matrix would contain more information by including `Vertex` and `Edge` classes.

#### Tradeoffs <a id="tradeoffs"></a>

Adjacency matrices and adjacency lists have strengths and weaknesses. Let's explore their tradeoffs by comparing their attributes and the efficiency of operations.

In all the following examples, we are using the following shorthand to denote the graph's properties:

| Shorthand | Property                              |
| :-------- | :------------------------------------ |
| V         | Total number of vertices in the graph |
| E         | Total number of edges in the graph    |
| e         | Average number of edges per vertex    |

**Space Complexity**

**Adjacency Matrix**

_Complexity_: `O(V^2)` space

Consider a dense graph where each vertex points to each other vertex. Here, the total number of edges will approach V^2. This fact means that regardless of whether you choose an adjacency list or an adjacency matrix, both will have a comparable space complexity. However, dictionaries and sets are less space-efficient than lists. So, for dense graphs \(graphs with a high average number of edges per vertex\), the adjacency matrix is more efficient because it uses lists instead of dictionaries and sets.

**Adjacency List**

_Complexity_: `O(V+E)` space

Consider a sparse graph with 100 vertices and only one edge. An adjacency list would have to store all 100 vertices but only needs to keep track of that single edge. The adjacency matrix would need to store 100x100=10,000 connections, even though all but one would be 0.

_Takeaway: The worst-case storage of an adjacency list occurs when the graph is dense. The matrix and list representation have the same complexity \(`O(V^2)`\). However, for the general case, the list representation is usually more desirable. Also, since finding a vertex's neighbors is a common task, and adjacency lists make this operation more straightforward, it is most common to use adjacency lists to represent graphs._

**Add Vertex**

**Adjacency Matrix**

_Complexity_: `O(V)` time

For an adjacency matrix, we would need to add a new value to the end of each existing row and add a new row.

```python
for v in self.edges:
  self.edges[v].append(0)
v.append([0] * len(self.edges + 1))
```

for v in self.edges: self.edges\[v\].append\(0\)  
v.append\(\[0\] \* len\(self.edges + 1\)\)

Remember that with Python lists, appending to the end of a list is `O(1)` because of over-allocation of memory but can be `O(n)` when the over-allocated memory fills up. When this occurs, adding the vertex can be `O(V^2)`.

**Adjacency List**

_Complexity_: `O(1)` time

Adding a vertex is simple in an adjacency list:

```python
self.vertices["H"] = set()
```

Adding a new key to a dictionary is a constant-time operation.

_Takeaway: Adding vertices is very inefficient for adjacency matrices but very efficient for adjacency lists._

**Remove Vertex**

**Adjacency Matrix**

_Complexity_: `O(V^2)`

Removing vertices is inefficient in both representations. In an adjacency matrix, we need to remove the removed vertex's row and then remove that column from each row. Removing an element from a list requires moving everything after that element over by one slot, which takes an average of `V/2` operations. Since we need to do that for every single row in our matrix, that results in `V^2` time complexity. We need to reduce each vertex index after our removed index by one as well, which doesn't add to our quadratic time complexity but adds extra operations.

**Adjacency List**

_Complexity_: `O(V)`

We need to visit each vertex for an adjacency list and remove all edges pointing to our removed vertex. Removing elements from sets and dictionaries is an `O(1)` operation, resulting in an overall `O(V)` time complexity.

_Takeaway: Removing vertices is inefficient in both adjacency matrices and lists but more efficient in lists._

**Add Edge**

**Adjacency Matrix**

_Complexity_: `O(1)`

Adding an edge in an adjacency matrix is simple:

```python
self.edges[v1][v2] = 1
```

**Adjacency List**

_Complexity_: `O(1)`

Adding an edge in an adjacency list is simple:

```python
self.vertices[v1].add(v2)
```

Both are constant-time operations.

_Takeaway: Adding edges to both adjacency matrices and lists is very efficient._

**Remove Edge**

**Adjacency Matrix**

_Complexity_: `O(1)`

Removing an edge from an adjacency matrix is simple:

```python
self.edges[v1][v2] = 0
```

**Adjacency List**

_Complexity_: `O(1)`

Removing an edge from an adjacency list is simple:

```python
self.vertices[v1].remove(v2)
```

Both are constant-time operations.

_Takeaway: Removing edges from both adjacency matrices and lists is very efficient._

**Find Edge**

**Adjacency Matrix**

_Complexity_: `O(1)`

Finding an edge in an adjacency matrix is simple:

```python
return self.edges[v1][v2] > 0
```

**Adjacency List**

_Complexity_: `O(1)`

Finding an edge in an adjacency list is simple:

```python
return v2 in self.vertices[v1]
```

Both are constant-time operations.

_Takeaway: Finding edges in both adjacency matrices and lists is very efficient._

**Get All Edges from Vertex**

You can use several commands if you want to know all the edges originating from a particular vertex.

**Adjacency Matrix**

_Complexity_: `O(V)`

In an adjacency matrix, this is complicated. You would need to iterate through the entire row and populate a list based on the results:

```python
v_edges = []
for v2 in self.edges[v]:
    if self.edges[v][v2] > 0:
        v_edges.append(v2)
return v_edges
```

**Adjacency List**

_Complexity_: `O(1)`

With an adjacency list, this is as simple as returning the value from the vertex dictionary:

```python
return self.vertex[v]
```

_Takeaway: Fetching all edges is less efficient in an adjacency matrix than an adjacency list._

**Summary**

Let's summarize all this complexity information in a table:

| type | Space | Add Vert | Remove Vert | Add Edge | Remove Edge | Find Edge | Get All Edges |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Matrix | O\(V^2\) | O\(V\) | O\(V^2\) | O\(1\) | O\(1\) | O\(1\) | O\(V\) |
| List | O\(V+E\) | O\(1\) | O\(V\) | O\(1\) | O\(1\) | O\(1\) | O\(1\) |

In most practical use-cases, an adjacency list will be a better choice for representing a graph. However, it is also crucial that you be familiar with the matrix representation. Why? Because there are some dense graphs or weighted graphs that could have better space efficiency when represented by a matrix.

### Follow Along <a id="follow-along"></a>

![https://camo.githubusercontent.com/335012587396b095af8f6a8f28e2d2aedb3d84d0/68747470733a2f2f692e696d6775722e636f6d2f796931503441462e6a7067](https://camo.githubusercontent.com/335012587396b095af8f6a8f28e2d2aedb3d84d0/68747470733a2f2f692e696d6775722e636f6d2f796931503441462e6a7067)

Together, we will now use the graph shown in the picture above and represent it in both an adjacency list and an adjacency matrix.

#### Adjacency List <a id="adjacency-list-8"></a>

First, the adjacency list:

```python
class Graph:
    def __init__(self):
        self.vertices = {
                            "A": {"B": 1},
                            "B": {"C": 3, "D": 2},
                            "C": {},
                            "D": {},
                            "E": {"D": 1}
                        }
}
```

The difference between this implementation and the previous adjacency list is that this representation allows our edges to have weights.

#### Adjacency Matrix <a id="adjacency-matrix-8"></a>

Now, we need to implement an adjacency matrix. Remember, that one benefit of the matrix is how easy it is to represent edge weights:

```python
class Graph:
    def __init__(self):
        self.edges = [[0,1,0,0,0],
                      [0,0,3,2,0],
                      [0,0,0,0,0],
                      [0,0,0,0,0],
                      [0,0,0,1,0]]
```

### Challenge <a id="challenge"></a>

![https://camo.githubusercontent.com/b6251eb484344b565ae2753682c645f85283ab28/68747470733a2f2f692e696d6775722e636f6d2f634a366c656b4d2e6a7067](https://camo.githubusercontent.com/b6251eb484344b565ae2753682c645f85283ab28/68747470733a2f2f692e696d6775722e636f6d2f634a366c656b4d2e6a7067)

1. Using the graph shown in the picture above, write python code to represent the graph in an adjacency list.
2. Using the same graph you used for the first exercise, write python code to represent the graph in an adjacency matrix.
3. Write a paragraph that compares and contrasts the efficiency of your different representations.

### Additional Resources <a id="additional-resources"></a>

- [https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs](https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs)

![](../../.gitbook/assets/image%20%284%29%20%286%29%20%285%29%20%281%29%20%2811%29.png)

## Objective 03 - Implement user-defined Vertex and Graph classes that allow basic operations

### Overview <a id="overview"></a>

We will now use dictionaries to implement the graph abstract data type in Python. We need to have two classes. First, the `Graph` class that will keep track of the vertices in the graph instance. Second, the `Vertex` class, which we will use to represent each vertex contained in a graph. Both classes will have methods that allow you to complete the basic operations for interacting with graphs and vertices.

### Follow Along <a id="follow-along"></a>

#### The `Vertex` Class <a id="the-vertex-class"></a>

Let's start by defining a `Vertex` class and defining its initialization method \(`__init__`\) and its `__str__` method so we can print out a human-readable string representations of each vertex:

```python
class Vertex:
    def __init__(self, value):
        self.value = value
        self.connections = {}

    def __str__(self):
        return str(self.value) + ' connections: ' + str([x.value for x in self.connections])
```

The next thing we need for our `Vertex` class is a way to other vertices that are connected and the `weight` of the connection edge. We will call this method `add_connection`.

```python
class Vertex:
    def __init__(self, value):
        self.value = value
        self.connections = {}

    def __str__(self):
        return str(self.value) + ' connections: ' + str([x.value for x in self.connections])

    def add_connection(self, vert, weight = 0):
        self.connections[vert] = weight
```

Let's now add three methods that allow us to get data out of our `Vertex` instance objects. These three methods will be `get_connections` \(retrieves all currently connected vertices\), `get_value` \(retrieves the value of the vertex instance\), and `get_weight` \(gets the edge weight from the vertex to a specified connected vertex\).

```python
class Vertex:
    def __init__(self, value):
        self.value = value
        self.connections = {}

    def __str__(self):
        return str(self.value) + ' connections: ' + str([x.value for x in self.connections])

    def add_connection(self, vert, weight = 0):
        self.connections[vert] = weight

    def get_connections(self):
        return self.connections.keys()

    def get_value(self):
        return self.value

    def get_weight(self, vert):
        return self.connections[vert]
```

We've finished our `Vertex` class. Now, let's work on our `Graph` class.

#### The `Graph` Class <a id="the-graph-class"></a>

Our graph class's primary purpose is to be a way that we can map vertex names to specific vertex objects. We also want to keep track of the number of vertices that our graph contains using a `count` property. We will do so using a dictionary. Let's start by defining an initialization method \(`__init__`\).

```python
class Graph:
    def __init__(self):
        self.vertices = {}
        self.count = 0
```

Next, we need a way to add vertices to our graph. Let's define an `add_vertex` method.

```python
class Graph:
    def __init__(self):
        self.vertices = {}
        self.count = 0

    def add_vertex(self, value):
        self.count += 1
        new_vert = Vertex(value)
        self.vertices[value] = new_vert
        return new_vert
```

We also need a way to add an edge to our graph. We need a method that can create a connection between two vertices and specify the edge's weight. Let's do so by defined an `add_edge` method.

```python
class Graph:
    def __init__(self):
        self.vertices = {}
        self.count = 0

    def add_vertex(self, value):
        self.count += 1
        new_vert = Vertex(value)
        self.vertices[value] = new_vert
        return new_vert

    def add_edge(self, v1, v2, weight = 0):
        if v1 not in self.vertices:
            self.add_vertex(v1)
        if v2 not in self.vertices:
            self.add_vertex(v2)
        self.vertices[v1].add_connection(self.vertices[v2], weight)
```

Next, we need a way to retrieve a list of all the vertices in our graph. We will define a method called `get_vertices`.

```python
class Graph:
    def __init__(self):
        self.vertices = {}
        self.count = 0

    def add_vertex(self, value):
        self.count += 1
        new_vert = Vertex(value)
        self.vertices[value] = new_vert
        return new_vert

    def add_edge(self, v1, v2, weight = 0):
        if v1 not in self.vertices:
            self.add_vertex(v1)
        if v2 not in self.vertices:
            self.add_vertex(v2)
        self.vertices[v1].add_connection(self.vertices[v2], weight)

    def get_vertices(self):
        return self.vertices.keys()
```

Last, we will override a few built-in methods \(`__contains__` and `__iter__`\) that are available on objects to make sure they work correctly with `Graph` instance objects.

```python
class Graph:
    def __init__(self):
        self.vertices = {}
        self.count = 0

    def __contains__(self, vert):
        return vert in self.vertices

    def __iter__(self):
        return iter(self.vertices.values())

    def add_vertex(self, value):
        self.count += 1
        new_vert = Vertex(value)
        self.vertices[value] = new_vert
        return new_vert

    def add_edge(self, v1, v2, weight = 0):
        if v1 not in self.vertices:
            self.add_vertex(v1)
        if v2 not in self.vertices:
            self.add_vertex(v2)
        self.vertices[v1].add_connection(self.vertices[v2], weight)

    def get_vertices(self):
        return self.vertices.keys()
```

Let's go ahead and test our class definitions and build up a graph structure in a Python interactive environment.

```python
>>> g = Graph()
>>> for i in range(8):
...     g.add_vertex(i)
...
<__main__.Vertex object at 0x7fd0f183f5e0>
<__main__.Vertex object at 0x7fd0f183fdc0>
<__main__.Vertex object at 0x7fd0f183fe20>
<__main__.Vertex object at 0x7fd0f183fb50>
<__main__.Vertex object at 0x7fd0f183fee0>
<__main__.Vertex object at 0x7fd0f183ff40>
<__main__.Vertex object at 0x7fd0f183ffd0>
<__main__.Vertex object at 0x7fd0f183ffa0>
>>> g.vertices
{0: <__main__.Vertex object at 0x7fd0f183f5e0>, 1: <__main__.Vertex object at 0x7fd0f183fdc0>, 2: <__main__.Vertex object at 0x7fd0f183fe20>, 3: <__main__.Vertex object at 0x7fd0f183fb50>, 4: <__main__.Vertex object at 0x7fd0f183fee0>, 5: <__main__.Vertex object at 0x7fd0f183ff40>, 6: <__main__.Vertex object at 0x7fd0f183ffd0>, 7: <__main__.Vertex object at 0x7fd0f183ffa0>}
>>> g.add_edge(0,1,3)
>>> g.add_edge(0,7,2)
>>> g.add_edge(1,3,4)
>>> g.add_edge(2,2,1)
>>> g.add_edge(3,6,5)
>>> g.add_edge(4,0,2)
>>> g.add_edge(5,2,3)
>>> g.add_edge(5,3,1)
>>> g.add_edge(6,2,3)
>>> g.add_edge(7,1,4)
>>> for v in g:
...     for w in v.get_connections():
...         print("( %s, %s )" % (v.get_value(), w.get_value()))
...
( 0, 1 )
( 0, 7 )
( 1, 3 )
( 2, 2 )
( 3, 6 )
( 4, 0 )
( 5, 2 )
( 5, 3 )
( 6, 2 )
( 7, 1 )
>>>
```

### Challenge <a id="challenge"></a>

Load the `Vertex` class and `Graph` class into an interactive Python environment and use the classes to create an instance of the graph shown below.

![https://camo.githubusercontent.com/335012587396b095af8f6a8f28e2d2aedb3d84d0/68747470733a2f2f692e696d6775722e636f6d2f796931503441462e6a7067](https://camo.githubusercontent.com/335012587396b095af8f6a8f28e2d2aedb3d84d0/68747470733a2f2f692e696d6775722e636f6d2f796931503441462e6a7067)

### Additional Resources <a id="additional-resources"></a>

- [https://www.geeksforgeeks.org/generate-graph-using-dictionary-python/](https://www.geeksforgeeks.org/generate-graph-using-dictionary-python/)

![](../../.gitbook/assets/image%20%284%29%20%286%29%20%285%29%20%281%29%20%287%29.png)

![](../../.gitbook/assets/image%20%284%29%20%286%29%20%285%29%20%281%29%20%283%29.png)
