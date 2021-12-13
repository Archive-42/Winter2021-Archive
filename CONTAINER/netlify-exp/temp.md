<div align="center">



# **Fundamental Data Structures in JavaScript** 
## _(and a bit of python pseudo code)_

</div>
---


- [**Fundamental Data Structures in JavaScript**](#fundamental-data-structures-in-javascript)
  - [_(and a bit of python pseudo code)_](#and-a-bit-of-python-pseudo-code)
  - [</div>](#div)
  - [Resuorces:](#resuorces)
    - [Data Structures & Algorithms Resource List Part 1](#data-structures--algorithms-resource-list-part-1)
      - [Here’s some more](#heres-some-more)
    - [Algorithms](#algorithms)
  - [- <span id="2d44"><a href="http://aleksandar-prokopec.com/resources/docs/p137-prokopec.pdf" class="markup--anchor markup--li-anchor">Cache-Tries: O(1) Concurrent Lock-Free Hash Tries (2018)</a></span>](#--cache-tries-o1-concurrent-lock-free-hash-tries-2018)
      - [A simple to follow guide to Lists Stacks and Queues, with animated gifs, diagrams, and code examples](#a-simple-to-follow-guide-to-lists-stacks-and-queues-with-animated-gifs-diagrams-and-code-examples)
      - [“So…this sounds a lot like an Array…”](#sothis-sounds-a-lot-like-an-array)
    - [Types of Linked Lists](#types-of-linked-lists)
    - [Linked List Methods](#linked-list-methods)
    - [Time and Space Complexity Analysis](#time-and-space-complexity-analysis)
    - [Time Complexity — Access and Search](#time-complexity--access-and-search)
      - [Scenarios](#scenarios)
      - [Discussion](#discussion)
    - [Time Complexity — Insertion and Deletion](#time-complexity--insertion-and-deletion)
      - [Scenarios](#scenarios-1)
      - [Discussion](#discussion-1)
    - [Space Complexity](#space-complexity)
      - [Scenarios](#scenarios-2)
      - [Discussion](#discussion-2)
    - [Stacks and Queues](#stacks-and-queues)
    - [What is a Stack?](#what-is-a-stack)
    - [What is a Queue?](#what-is-a-queue)
    - [Stack and Queue Properties](#stack-and-queue-properties)
    - [Time and Space Complexity Analysis](#time-and-space-complexity-analysis-1)
      - [Time Complexity — Access and Search](#time-complexity--access-and-search-1)
      - [Time Complexity — Insertion and Deletion](#time-complexity--insertion-and-deletion-1)
      - [Space Complexity](#space-complexity-1)
    - [When should we use Stacks and Queues?](#when-should-we-use-stacks-and-queues)
  - [Graphs:](#graphs)
    - [Graph Data Structure Interview Questions At A Glance](#graph-data-structure-interview-questions-at-a-glance)
      - [What is a Graph?](#what-is-a-graph)
      - [Why is it important to learn Graphs?](#why-is-it-important-to-learn-graphs)
      - [How many types of graphs are there?](#how-many-types-of-graphs-are-there)
      - [What is the time complexity (big-O) to add/remove/get a vertex/edge for a graph?](#what-is-the-time-complexity-big-o-to-addremoveget-a-vertexedge-for-a-graph)
    - [Graph Representations](#graph-representations)
    - [Adjacency Matrix](#adjacency-matrix)
    - [Tradeoffs](#tradeoffs)
      - [Space Complexity](#space-complexity-2)
      - [Add Vertex](#add-vertex)
      - [Remove Vertex](#remove-vertex)
      - [Add Edge](#add-edge)
      - [Remove Edge](#remove-edge)
      - [Find Edge](#find-edge)
      - [Get All Edges from Vertex](#get-all-edges-from-vertex)
    - [Breadth-First Search](#breadth-first-search)
      - [BFS](#bfs)
    - [Coloring BFS](#coloring-bfs)
    - [BFS Pseudocode](#bfs-pseudocode)
    - [BFS Steps](#bfs-steps)
    - [Depth-First Search](#depth-first-search)
      - [DFS](#dfs)
    - [DFS Pseudocode](#dfs-pseudocode)
    - [DFS Steps](#dfs-steps)
    - [Connected Components](#connected-components)
    - [Uses](#uses)
    - [How to find connected componnents](#how-to-find-connected-componnents)
    - [Bonus Python Question](#bonus-python-question)
    - [Review of Concepts](#review-of-concepts)
    - [Undirected Graph](#undirected-graph)
    - [Types](#types)
    - [Dense Graph](#dense-graph)
    - [Sparse Graph](#sparse-graph)
    - [Weighted Graph](#weighted-graph)
    - [Directed Graph](#directed-graph)
    - [*Undirected* Graph](#undirected-graph-1)
    - [Node Class](#node-class)
    - [Adjacency Matrix](#adjacency-matrix-1)
      - [Stacks](#stacks)
      - [Queues](#queues)
    - [Data Structures… Under The Hood](#data-structures-under-the-hood)
    - [Data Structures Reference](#data-structures-reference)
    - [Array](#array)
    - [Linked List](#linked-list)
    - [Queue](#queue)
    - [Stack](#stack)
    - [Tree](#tree)
    - [Binary Search Tree](#binary-search-tree)
    - [Binary Search Tree](#binary-search-tree-1)
    - [Graph](#graph)
    - [Heap](#heap)
    - [Adjacency list](#adjacency-list)
    - [Adjacency matrix](#adjacency-matrix-2)
    - [Arrays](#arrays)
  - [Pointers](#pointers)
    - [Linked lists](#linked-lists)
  - [Doubly Linked Lists](#doubly-linked-lists)
    - [Not cache-friendly](#not-cache-friendly)
    - [Hash tables](#hash-tables)
    - [Breadth-First Search (BFS) and Breadth-First Traversal](#breadth-first-search-bfs-and-breadth-first-traversal)
    - [Graph Data Structure: Directed, Acyclic, etc](#graph-data-structure-directed-acyclic-etc)
    - [Binary numbers](#binary-numbers)

## Resuorces:


### Data Structures & Algorithms Resource List Part 1

Guess the author of the following quotes:

> *Talk is cheap. Show me the code.*

> *Software is like sex: it’s better when it’s free.*

> *Microsoft isn’t evil, they just make really crappy operating systems.*

<figure><img src="https://cdn-images-1.medium.com/max/800/0*rbMyH5LxQQFozL7F" class="graf-image" /></figure>### Update:

#### Here’s some more

- <span id="56aa"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/Framework%20and%20thoughts%20about%20learning%20data%20structure%20and%20algorithm.md" class="markup--anchor markup--li-anchor">The Framework for Learning Algorithms and intense problem solving exercises</a></span>
- <span id="805e"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/why_i_recommend_algs4.md" class="markup--anchor markup--li-anchor">Algs4: Recommended book for Learning Algorithms and Data Structures</a></span>
- <span id="2bf9"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/AnalysisOfDynamicProgramming.md" class="markup--anchor markup--li-anchor">An analysis of Dynamic Programming</a></span>
- <span id="f697"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/OptimalSubstructure.md" class="markup--anchor markup--li-anchor">Dynamic Programming Q&amp;A — What is Optimal Substructure</a></span>
- <span id="a35b"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/DetailsaboutBacktracking.md" class="markup--anchor markup--li-anchor">The Framework for Backtracking Algorithm</a></span>
- <span id="34eb"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/DetailedBinarySearch.md" class="markup--anchor markup--li-anchor">Binary Search in Detail: I wrote a Poem</a></span>
- <span id="c7c9"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/SlidingWindowTechnique.md" class="markup--anchor markup--li-anchor">The Sliding Window Technique</a></span>
- <span id="35dd"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/common_knowledge/linuxProcess.md" class="markup--anchor markup--li-anchor">Difference Between Process and Thread in Linux</a></span>
- <span id="fb0e"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/common_knowledge/OnlinePraticePlatform.md" class="markup--anchor markup--li-anchor">Some Good Online Practice Platforms</a></span>
- <span id="0f7b"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/AnalysisOfDynamicProgramming.md" class="markup--anchor markup--li-anchor">Dynamic Programming in Details</a></span>
- <span id="845b"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/OptimalSubstructure.md" class="markup--anchor markup--li-anchor">Dynamic Programming Q&amp;A — What is Optimal Substructure</a></span>
- <span id="2cc7"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/LongestCommonSubsequence.md" class="markup--anchor markup--li-anchor">Classic DP: Longest Common Subsequence</a></span>
- <span id="57a3"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/EditDistance.md" class="markup--anchor markup--li-anchor">Classic DP: Edit Distance</a></span>
- <span id="e2c1"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/ThrowingEggsinHighBuildings.md" class="markup--anchor markup--li-anchor">Classic DP: Super Egg</a></span>
- <span id="39a3"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/SuperEggDropAdvanced.md" class="markup--anchor markup--li-anchor">Classic DP: Super Egg (Advanced Solution)</a></span>
- <span id="c579"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/StrategiesForSubsequenceProblem.md" class="markup--anchor markup--li-anchor">The Strategies of Subsequence Problem</a></span>
- <span id="0ec0"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/GameProblemsInDynamicProgramming.md" class="markup--anchor markup--li-anchor">Classic DP: Game Problems</a></span>
- <span id="44c0"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/IntervalScheduling.md" class="markup--anchor markup--li-anchor">Greedy: Interval Scheduling</a></span>
- <span id="efef"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/KMPCharacterMatchingAlgorithmInDynamicProgramming.md" class="markup--anchor markup--li-anchor">KMP Algorithm In Detail</a></span>
- <span id="635b"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/BestTimeToBuyAndSellStock.md" class="markup--anchor markup--li-anchor">A solution to all Buy Time to Buy and Sell Stock Problems</a></span>
- <span id="0a3f"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/HouseRobber.md" class="markup--anchor markup--li-anchor">A solution to all House Robber Problems</a></span>
- <span id="c1b0"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/FourKeysKeyboard.md" class="markup--anchor markup--li-anchor">4 Keys Keyboard</a></span>
- <span id="dc7f"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/RegularExpression.md" class="markup--anchor markup--li-anchor">Regular Expression</a></span>
- <span id="12b8"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/LongestIncreasingSubsequence.md" class="markup--anchor markup--li-anchor">Longest Increasing Subsequence</a></span>
- <span id="5fbd"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/Framework%20and%20thoughts%20about%20learning%20data%20structure%20and%20algorithm.md" class="markup--anchor markup--li-anchor">The Framework for Learning Algorithms and intense problem solving exercises</a></span>
- <span id="0dd7"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/why_i_recommend_algs4.md" class="markup--anchor markup--li-anchor">Algs4: Recommended book for Learning Algorithms and Data Structures</a></span>
- <span id="5c73"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/binary_heap_implements_priority_queues.md" class="markup--anchor markup--li-anchor">Binary Heap and Priority Queue</a></span>
- <span id="f0a9"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/LRU_algorithm.md" class="markup--anchor markup--li-anchor">LRU Cache Strategy in Detail</a></span>
- <span id="ea8d"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/The_Manipulation_Collection_of_Binary_Search_Tree.md" class="markup--anchor markup--li-anchor">Collections of Binary Search Operations</a></span>
- <span id="e58e"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/MonotonicStack.md" class="markup--anchor markup--li-anchor">Special Data Structure: Monotonic Stack</a></span>
- <span id="8578"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/Monotonic_queue.md" class="markup--anchor markup--li-anchor">Special Data Structure: Monotonic Stack</a></span>
- <span id="aa92"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/design_Twitter.md" class="markup--anchor markup--li-anchor">Design Twitter</a></span>
- <span id="3bc6"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/reverse_part_of_a_linked_list_via_recursion.md" class="markup--anchor markup--li-anchor">Reverse Part of Linked List via Recursion</a></span>
- <span id="f3ce"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/ImplementQueueUsingStacksImplementStackUsingQueues.md" class="markup--anchor markup--li-anchor">Queue Implement Stack/Stack implement Queue</a></span>
- <span id="6631"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/ThewaytoAlgorithmlearning.md" class="markup--anchor markup--li-anchor">My Way to Learn Algorithm</a></span>
- <span id="df10"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/DetailsaboutBacktracking.md" class="markup--anchor markup--li-anchor">The Framework of Backtracking Algorithm</a></span>
- <span id="f891"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/DetailedBinarySearch.md" class="markup--anchor markup--li-anchor">Binary Search in Detail</a></span>
- <span id="05c2"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/Subset_Permutation_Combination.md" class="markup--anchor markup--li-anchor">Backtracking Solve Subset/Permutation/Combination</a></span>
- <span id="2184"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/double_pointer.md" class="markup--anchor markup--li-anchor">Diving into the technical parts of Double Pointers</a></span>
- <span id="1622"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/SlidingWindowTechnique.md" class="markup--anchor markup--li-anchor">Sliding Window Technique</a></span>
- <span id="4514"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/The_key_to_resolving_TwoSum_problems.md" class="markup--anchor markup--li-anchor">The Core Concept of TwoSum Problems</a></span>
- <span id="6a0d"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/CommonBitManipulation.md" class="markup--anchor markup--li-anchor">Common Bit Manipulations</a></span>
- <span id="cf84"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/Implementing_the_functions_of_a_calculator.md" class="markup--anchor markup--li-anchor">Breaking down a Complicated Problem: Implement a Calculator</a></span>
- <span id="cecf"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/PancakesSorting.md" class="markup--anchor markup--li-anchor">Pancake Sorting Algorithm</a></span>
- <span id="03c5"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/prefix_sum.md" class="markup--anchor markup--li-anchor">Prefix Sum: Intro and Concept</a></span>
- <span id="3463"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/string_multiplication.md" class="markup--anchor markup--li-anchor">String Multiplication</a></span>
- <span id="14f7"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/flood_fill.md" class="markup--anchor markup--li-anchor">FloodFill Algorithm in Detail</a></span>
- <span id="3778"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/IntervalMerging.md" class="markup--anchor markup--li-anchor">Interval Scheduling: Interval Merging</a></span>
- <span id="cb70"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/IntervalIntersection.md" class="markup--anchor markup--li-anchor">Interval Scheduling: Intersections of Intervals</a></span>
- <span id="02b6"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/RussianDollEnvelopes.md" class="markup--anchor markup--li-anchor">Russian Doll Envelopes Problem</a></span>
- <span id="dfec"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/several_counter_intuitive_probability_problems.md" class="markup--anchor markup--li-anchor">A collection of counter-intuitive Probability Problems</a></span>
- <span id="782c"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/Shuffle_Algorithm.md" class="markup--anchor markup--li-anchor">Shuffle Algorithm</a></span>
- <span id="438d"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/RecursionInDetail.md" class="markup--anchor markup--li-anchor">Recursion In Detail</a></span>
- <span id="8524"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/LRU_algorithm.md" class="markup--anchor markup--li-anchor">How to Implement LRU Cache</a></span>
- <span id="c35b"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/Print_PrimeNumbers.md" class="markup--anchor markup--li-anchor">How to Find Prime Number Efficiently</a></span>
- <span id="7d80"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/EditDistance.md" class="markup--anchor markup--li-anchor">How to Calculate Minimium Edit Distance</a></span>
- <span id="ed1d"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/UsingBinarySearchAlgorithm.md" class="markup--anchor markup--li-anchor">How to use Binary Search</a></span>
- <span id="473b"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/Trapping_Rain_Water.md" class="markup--anchor markup--li-anchor">How to efficiently solve Trapping Rain Water Problem</a></span>
- <span id="d97b"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/RemoveDuplicatesfromSortedArray.md" class="markup--anchor markup--li-anchor">How to Remove Duplicates From Sorted Array</a></span>
- <span id="ea68"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/TheLongestPalindromicSubstring.md" class="markup--anchor markup--li-anchor">How to Find Longest Palindromic Substring</a></span>
- <span id="177f"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/reverse-nodes-in-k-group.md" class="markup--anchor markup--li-anchor">How to Reverse Linked List in K Group</a></span>
- <span id="7e76"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/valid-parentheses.md" class="markup--anchor markup--li-anchor">How to Check the Validation of Parenthesis</a></span>
- <span id="0d7c"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/missing_elements.md" class="markup--anchor markup--li-anchor">How to Find Missing Element</a></span>
- <span id="a78f"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/Find-Duplicate-and-Missing-Element.md" class="markup--anchor markup--li-anchor">How to Find Duplicates and Missing Elements</a></span>
- <span id="8f44"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/check_palindromic_linkedlist.md" class="markup--anchor markup--li-anchor">How to Check Palindromic LinkedList</a></span>
- <span id="53d5"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/ReservoirSampling.md" class="markup--anchor markup--li-anchor">How to Pick Elements From an Infinite Arbitrary Sequence</a></span>
- <span id="7c8e"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/Seatscheduling.md" class="markup--anchor markup--li-anchor">How to Schedule Seats for Students</a></span>
- <span id="dab2"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/Union-find-Explanation.md" class="markup--anchor markup--li-anchor">Union-Find Algorithm in Detail</a></span>
- <span id="6a63"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/Union-Find-Application.md" class="markup--anchor markup--li-anchor">Union-Find Application</a></span>
- <span id="850c"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/one-line-code-puzzles.md" class="markup--anchor markup--li-anchor">Problems that can be solved in one line</a></span>
- <span id="b435"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/findSebesquenceWithBinarySearch.md" class="markup--anchor markup--li-anchor">Find Subsequence With Binary Search</a></span>
- <span id="e2e0"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/common_knowledge/linuxProcess.md" class="markup--anchor markup--li-anchor">Difference Between Process and Thread in Linux</a></span>
- <span id="b421"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/common_knowledge/linuxshell.md" class="markup--anchor markup--li-anchor">You Must Know About Linux Shell</a></span>
- <span id="be57"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/common_knowledge/SessionAndCookie.md" class="markup--anchor markup--li-anchor">You Must Know About Cookie and Session</a></span>
- <span id="7539"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/common_knowledge/Cryptology.md" class="markup--anchor markup--li-anchor">Cryptology Algorithm</a></span>
- <span id="3628"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/common_knowledge/OnlinePraticePlatform.md" class="markup--anchor markup--li-anchor">Some Good Online Practice Platforms</a></span>

### Algorithms

- <span id="bdee"><a href="https://github.com/coells/100days" class="markup--anchor markup--li-anchor">100 days of algorithms</a></span>
- <span id="2e05"><a href="https://github.com/marcosfede/algorithms" class="markup--anchor markup--li-anchor">Algorithms</a> — Solved algorithms and data structures problems in many languages.</span>
- <span id="05d6"><a href="http://jeffe.cs.illinois.edu/teaching/algorithms/" class="markup--anchor markup--li-anchor">Algorithms by Jeff Erickson</a> (<a href="https://github.com/jeffgerickson/algorithms" class="markup--anchor markup--li-anchor">Code</a>) (<a href="https://news.ycombinator.com/item?id=26074289" class="markup--anchor markup--li-anchor">HN</a>)</span>
- <span id="a17f"><a href="https://www.reddit.com/r/compsci/comments/5uz9lb/top_algorithmsdata_structuresconcepts_every/ddy8azz/" class="markup--anchor markup--li-anchor">Top algos/DS to learn</a></span>
- <span id="9ab0"><a href="https://www.nayuki.io/category/programming" class="markup--anchor markup--li-anchor">Some neat algorithms</a></span>
- <span id="142f"><a href="https://stackabuse.com/mathematical-proof-of-algorithm-correctness-and-efficiency/" class="markup--anchor markup--li-anchor">Mathematical Proof of Algorithm Correctness and Efficiency (2019)</a></span>
- <span id="85a6"><a href="https://github.com/algorithm-visualizer/algorithm-visualizer" class="markup--anchor markup--li-anchor">Algorithm Visualizer</a> — Interactive online platform that visualizes algorithms from code.</span>
- <span id="9b84"><a href="https://mitpress.mit.edu/books/algorithms-optimization" class="markup--anchor markup--li-anchor">Algorithms for Optimization book</a></span>
- <span id="565c"><a href="https://www.algorithm-archive.org/" class="markup--anchor markup--li-anchor">Collaborative book on algorithms</a> (<a href="https://github.com/algorithm-archivists/algorithm-archive" class="markup--anchor markup--li-anchor">Code</a>)</span>
- <span id="b313"><a href="http://index-of.co.uk/Algorithms/Algorithms%20in%20C.pdf" class="markup--anchor markup--li-anchor">Algorithms in C by Robert Sedgewick</a></span>
- <span id="f0e0"><a href="http://mimoza.marmara.edu.tr/~msakalli/cse706_12/SkienaTheAlgorithmDesignManual.pdf" class="markup--anchor markup--li-anchor">Algorithm Design Manual</a></span>
- <span id="53a1"><a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/" class="markup--anchor markup--li-anchor">MIT Introduction to Algorithms course (2011)</a></span>
- <span id="7f59"><a href="http://codecapsule.com/2012/01/18/how-to-implement-a-paper/" class="markup--anchor markup--li-anchor">How to implement an algorithm from a scientific paper (2012)</a></span>
- <span id="cd31"><a href="https://github.com/scandum/quadsort" class="markup--anchor markup--li-anchor">Quadsort</a> — Stable non-recursive merge sort named quadsort.</span>
- <span id="3695"><a href="https://github.com/resumejob/system-design-algorithms" class="markup--anchor markup--li-anchor">System design algorithms</a> — Algorithms you should know before system design.</span>
- <span id="959b"><a href="http://www.cs.sjtu.edu.cn/~jiangli/teaching/CS222/files/materials/Algorithm%20Design.pdf" class="markup--anchor markup--li-anchor">Algorithms Design book</a></span>
- <span id="bc44"><a href="http://greenteapress.com/complexity/html/index.html" class="markup--anchor markup--li-anchor">Think Complexity</a></span>
- <span id="b149"><a href="https://github.com/TheAlgorithms/Rust" class="markup--anchor markup--li-anchor">All Algorithms implemented in Rust</a></span>
- <span id="e8ad"><a href="https://walkccc.github.io/CLRS/" class="markup--anchor markup--li-anchor">Solutions to Introduction to Algorithms book</a> (<a href="https://github.com/walkccc/CLRS" class="markup--anchor markup--li-anchor">Code</a>)</span>
- <span id="6f0a"><a href="https://www.jamisbuck.org/mazes/" class="markup--anchor markup--li-anchor">Maze Algorithms (2011)</a> (<a href="https://news.ycombinator.com/item?id=23429368" class="markup--anchor markup--li-anchor">HN</a>)</span>
- <span id="9a09"><a href="https://page.skerritt.blog/algorithms/" class="markup--anchor markup--li-anchor">Algorithmic Design Paradigms book</a> (<a href="https://github.com/brandonskerritt/AlgorithmsBook" class="markup--anchor markup--li-anchor">Code</a>)</span>
- <span id="dbff"><a href="https://wordsandbuttons.online/" class="markup--anchor markup--li-anchor">Words and buttons Online Blog</a> (<a href="https://github.com/akalenuk/wordsandbuttons" class="markup--anchor markup--li-anchor">Code</a>)</span>
- <span id="089a"><a href="https://www.chrislaux.com/" class="markup--anchor markup--li-anchor">Algorithms animated</a></span>
- <span id="4eb6"><a href="https://jiahai-feng.github.io/posts/cache-oblivious-algorithms/" class="markup--anchor markup--li-anchor">Cache Oblivious Algorithms (2020)</a> (<a href="https://news.ycombinator.com/item?id=23662434" class="markup--anchor markup--li-anchor">HN</a>)</span>
- <span id="4001"><a href="http://blog.ezyang.com/2012/03/you-could-have-invented-fractional-cascading/" class="markup--anchor markup--li-anchor">You could have invented fractional cascading (2012)</a></span>
- <span id="6fb5"><a href="https://labuladong.gitbook.io/algo-en/" class="markup--anchor markup--li-anchor">Guide to learning algorithms through LeetCode</a> (<a href="https://github.com/labuladong/fucking-algorithm/tree/english" class="markup--anchor markup--li-anchor">Code</a>) (<a href="https://news.ycombinator.com/item?id=24167297" class="markup--anchor markup--li-anchor">HN</a>)</span>
- <span id="be96"><a href="https://cstheory.stackexchange.com/questions/34/how-hard-is-unshuffling-a-string" class="markup--anchor markup--li-anchor">How hard is unshuffling a string?</a></span>
- <span id="6f50"><a href="https://sites.uclouvain.be/absil/amsbook/" class="markup--anchor markup--li-anchor">Optimization Algorithms on Matrix Manifolds</a></span>
- <span id="1a1c"><a href="https://runestone.academy/runestone/books/published/pythonds/index.html" class="markup--anchor markup--li-anchor">Problem Solving with Algorithms and Data Structures</a> (<a href="https://news.ycombinator.com/item?id=24287622" class="markup--anchor markup--li-anchor">HN</a>) (<a href="https://www.cs.auckland.ac.nz/compsci105s1c/resources/ProblemSolvingwithAlgorithmsandDataStructures.pdf" class="markup--anchor markup--li-anchor">PDF</a>)</span>
- <span id="a16e"><a href="https://github.com/TheAlgorithms/Python" class="markup--anchor markup--li-anchor">Algorithms implemented in Python</a></span>
- <span id="34d4"><a href="https://github.com/TheAlgorithms/Javascript" class="markup--anchor markup--li-anchor">Algorithms implemented in JavaScript</a></span>
- <span id="911d"><a href="https://github.com/williamfiset/Algorithms" class="markup--anchor markup--li-anchor">Algorithms &amp; Data Structures in Java</a></span>
- <span id="3bd3"><a href="https://github.com/scandum/wolfsort" class="markup--anchor markup--li-anchor">Wolfsort</a> — Stable adaptive hybrid radix / merge sort.</span>
- <span id="f3ea"><a href="https://github.com/fcampelo/EC-Bestiary" class="markup--anchor markup--li-anchor">Evolutionary Computation Bestiary</a> — Bestiary of evolutionary, swarm and other metaphor-based algorithms.</span>
- <span id="c434"><a href="http://elementsofprogramming.com/" class="markup--anchor markup--li-anchor">Elements of Programming book</a> — Decomposing programs into a system of algorithmic components. (<a href="http://www.pathsensitive.com/2020/09/book-review-elements-of-programmnig.html" class="markup--anchor markup--li-anchor">Review</a>) (<a href="https://news.ycombinator.com/item?id=24635947" class="markup--anchor markup--li-anchor">HN</a>) (<a href="https://lobste.rs/s/bqnhbo/book_review_elements_programmnig" class="markup--anchor markup--li-anchor">Lobsters</a>)</span>
- <span id="8d6b"><a href="https://cp-algorithms.com/" class="markup--anchor markup--li-anchor">Competitive Programming Algorithms</a></span>
- <span id="6a45"><a href="https://github.com/akshitagit/CPP" class="markup--anchor markup--li-anchor">CPP/C</a> — C/C++ algorithms/DS problems.</span>
- <span id="9ea4"><a href="https://www.adamconrad.dev/blog/how-to-design-an-algorithm/" class="markup--anchor markup--li-anchor">How to design an algorithm (2018)</a></span>
- <span id="5c20"><a href="https://www.youtube.com/playlist?list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx" class="markup--anchor markup--li-anchor">CSE 373 — Introduction to Algorithms, by Steven Skiena (2020)</a></span>
- <span id="2f4f"><a href="http://homepages.math.uic.edu/~lreyzin/f20_mcs501/" class="markup--anchor markup--li-anchor">Computer Algorithms II course (2020)</a></span>
- <span id="9132"><a href="https://notebook.drmaciver.com/posts/2019-04-30-13:03.html" class="markup--anchor markup--li-anchor">Improving Binary Search by Guessing (2019)</a></span>
- <span id="d90f"><a href="https://blog.acolyer.org/2020/10/19/the-case-for-a-learned-sorting-algorithm/" class="markup--anchor markup--li-anchor">The case for a learned sorting algorithm (2020)</a> (<a href="https://news.ycombinator.com/item?id=24823611" class="markup--anchor markup--li-anchor">HN</a>)</span>
- <span id="f8c6"><a href="https://github.com/liuxinyu95/AlgoXY" class="markup--anchor markup--li-anchor">Elementary Algorithms</a> — Introduces elementary algorithms and data structures. Includes side-by-side comparisons of purely functional realization and their imperative counterpart.</span>
- <span id="7c37"><a href="https://sahandsaba.com/combinatorial-generation-for-coding-interviews-in-python.html" class="markup--anchor markup--li-anchor">Combinatorics Algorithms for Coding Interviews (2018)</a></span>
- <span id="4220"><a href="https://github.com/ZoranPandovski/al-go-rithms" class="markup--anchor markup--li-anchor">Algorithms written in different programming languages</a> (<a href="https://zoranpandovski.github.io/al-go-rithms/" class="markup--anchor markup--li-anchor">Web</a>)</span>
- <span id="e79b"><a href="https://johnlekberg.com/blog/2020-10-25-seq-align.html" class="markup--anchor markup--li-anchor">Solving the Sequence Alignment problem in Python (2020)</a></span>
- <span id="fc55"><a href="https://github.com/bingmann/sound-of-sorting" class="markup--anchor markup--li-anchor">The Sound of Sorting</a> — Visualization and “Audibilization” of Sorting Algorithms. (<a href="https://panthema.net/2013/sound-of-sorting/" class="markup--anchor markup--li-anchor">Web</a>)</span>
- <span id="a360"><a href="https://danlark.org/2020/11/11/miniselect-practical-and-generic-selection-algorithms/" class="markup--anchor markup--li-anchor">Miniselect: Practical and Generic Selection Algorithms (2020)</a></span>
- <span id="5d05"><a href="https://chasewilson.dev/blog/slowest-quicksort/" class="markup--anchor markup--li-anchor">The Slowest Quicksort (2019)</a></span>
- <span id="a4f7"><a href="https://blog.sigplan.org/2020/11/17/functional-algorithm-design-part-0/" class="markup--anchor markup--li-anchor">Functional Algorithm Design (2020)</a></span>
- <span id="2c4b"><a href="https://milofultz.com/2020/12/27/atlb-notes" class="markup--anchor markup--li-anchor">Algorithms To Live By — Book Notes</a></span>
- <span id="885a"><a href="http://people.csail.mit.edu/jsolomon/share/book/numerical_book.pdf" class="markup--anchor markup--li-anchor">Numerical Algorithms (2015)</a></span>
- <span id="0002"><a href="https://blog.vespa.ai/using-approximate-nearest-neighbor-search-in-real-world-applications/" class="markup--anchor markup--li-anchor">Using approximate nearest neighbor search in real world applications (2020)</a></span>
- <span id="85a7"><a href="https://arxiv.org/pdf/1911.06347.pdf" class="markup--anchor markup--li-anchor">In search of the fastest concurrent Union-Find algorithm (2019)</a></span>
- <span id="5d1b"><a href="https://www.cs.princeton.edu/courses/archive/fall13/cos521/" class="markup--anchor markup--li-anchor">Computer Science 521 Advanced Algorithm Design</a></span>

------------------------------------------------------------------------

<figure><img src="https://cdn-images-1.medium.com/max/800/0*2fb7io8VD9z8080F.jpg" class="graf-image" /></figure>### Data Structures:

- <span id="fd86"><a href="https://github.com/floyernick/Data-Structures-and-Algorithms" class="markup--anchor markup--li-anchor">Data Structures and Algorithms implementation in Go</a></span>
- <span id="cbae"><a href="https://softwareengineering.stackexchange.com/questions/155639/which-algorithms-data-structures-should-i-recognize-and-know-by-name" class="markup--anchor markup--li-anchor">Which algorithms/data structures should I “recognize” and know by name?</a></span>
- <span id="0e28"><a href="https://xlinux.nist.gov/dads/" class="markup--anchor markup--li-anchor">Dictionary of Algorithms and Data Structures</a></span>
- <span id="e10f"><a href="https://g1thubhub.github.io/data-structure-zoo.html" class="markup--anchor markup--li-anchor">Phil’s Data Structure Zoo</a></span>
- <span id="f159"><a href="https://stratos.seas.harvard.edu/files/stratos/files/periodictabledatastructures.pdf" class="markup--anchor markup--li-anchor">The Periodic Table of Data Structures</a> (<a href="https://news.ycombinator.com/item?id=18314555" class="markup--anchor markup--li-anchor">HN</a>)</span>
- <span id="dc3c"><a href="https://www.cs.usfca.edu/~galles/visualization/Algorithms.html" class="markup--anchor markup--li-anchor">Data Structure Visualizations</a> (<a href="https://news.ycombinator.com/item?id=19082943" class="markup--anchor markup--li-anchor">HN</a>)</span>
- <span id="8405"><a href="http://blog.amynguyen.net/?p=853" class="markup--anchor markup--li-anchor">Data structures to name-drop when you want to sound smart in an interview</a></span>
- <span id="9893"><a href="https://pdziepak.github.io/2019/05/02/on-lists-cache-algorithms-and-microarchitecture/" class="markup--anchor markup--li-anchor">On lists, cache, algorithms, and microarchitecture (2019)</a></span>
- <span id="6c1d"><a href="http://web.stanford.edu/class/cs166/handouts/100%20Suggested%20Final%20Project%20Topics.pdf" class="markup--anchor markup--li-anchor">Topics in Advanced Data Structures (2019)</a> (<a href="https://news.ycombinator.com/item?id=19780387" class="markup--anchor markup--li-anchor">HN</a>)</span>
- <span id="ddce"><a href="http://web.stanford.edu/class/cs166/" class="markup--anchor markup--li-anchor">CS166 Advanced DS Course (2019)</a></span>
- <span id="f73e"><a href="https://courses.csail.mit.edu/6.851/fall17/" class="markup--anchor markup--li-anchor">Advanced Data Structures (2017)</a> (<a href="https://news.ycombinator.com/item?id=20044876" class="markup--anchor markup--li-anchor">HN</a>)</span>
- <span id="df52"><a href="https://github.com/jamesroutley/write-a-hash-table" class="markup--anchor markup--li-anchor">Write a hash table in C</a></span>
- <span id="602e"><a href="https://github.com/prabhupant/python-ds" class="markup--anchor markup--li-anchor">Python Data Structures and Algorithms</a></span>
- <span id="6894"><a href="https://vaibhavsagar.com/blog/2018/07/29/hamts-from-scratch/" class="markup--anchor markup--li-anchor">HAMTs from Scratch (2018)</a></span>
- <span id="4481"><a href="https://github.com/JoeKarlsson/data-structures" class="markup--anchor markup--li-anchor">JavaScript Data Structures and Algorithms</a></span>
- <span id="e30d"><a href="http://codecapsule.com/2012/11/07/ikvs-implementing-a-key-value-store-table-of-contents/" class="markup--anchor markup--li-anchor">Implementing a Key-Value Store series</a></span>
- <span id="355f"><a href="https://opendatastructures.org/" class="markup--anchor markup--li-anchor">Open Data Structures</a> — Provide a high-quality open content data structures textbook that is both mathematically rigorous and provides complete implementations. (<a href="https://github.com/patmorin/ods" class="markup--anchor markup--li-anchor">Code</a>)</span>
- <span id="53bb"><a href="https://www.csee.usf.edu/~kchriste/energy/ipl10.pdf" class="markup--anchor markup--li-anchor">A new analysis of the false positive rate of a Bloom filter (2009)</a></span>
- <span id="9e20"><a href="https://lampwww.epfl.ch/papers/idealhashtrees.pdf" class="markup--anchor markup--li-anchor">Ideal Hash Trees</a></span>
- <span id="5f72"><a href="http://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=0265C1992F573129BCC7D4AF7734DBF7?doi=10.1.1.592.5377&amp;rep=rep1&amp;type=pdf" class="markup--anchor markup--li-anchor">RRB-Trees: Efficient Immutable Vectors</a></span>
- <span id="162a"><a href="https://github.com/jdan/ocaml-data-structures" class="markup--anchor markup--li-anchor">Some data structures and algorithms written in OCaml</a></span>
- <span id="523d"><a href="https://shachaf.net/w/b-trees" class="markup--anchor markup--li-anchor">Let’s Invent B(+)-Trees</a> (<a href="https://news.ycombinator.com/item?id=23001831" class="markup--anchor markup--li-anchor">HN</a>)</span>
- <span id="33f1"><a href="https://github.com/hydro-project/anna" class="markup--anchor markup--li-anchor">Anna</a> — Low-latency, cloud-native KVS.</span>
- <span id="9365"><a href="https://www.aleksandra.codes/persistent-data-structures" class="markup--anchor markup--li-anchor">Persistent data structures thanks to recursive type aliases (2019)</a></span>
- <span id="b266"><a href="https://yetanotherdevblog.com/lsm/" class="markup--anchor markup--li-anchor">Log-Structured Merge-Trees (2020)</a></span>
- <span id="41ad"><a href="https://sagi.io/bloom-filters-for-the-perplexed/" class="markup--anchor markup--li-anchor">Bloom Filters for the Perplexed (2017)</a></span>
- <span id="af99"><a href="https://yetanotherdevblog.com/bloom-filters/" class="markup--anchor markup--li-anchor">Understanding Bloom Filters (2020)</a></span>
- <span id="2878"><a href="https://yetanotherdevblog.com/dense-vs-sparse-indexes/" class="markup--anchor markup--li-anchor">Dense vs. Sparse Indexes (2020)</a></span>
- <span id="0fcf"><a href="https://www.techiedelight.com/list-of-problems/" class="markup--anchor markup--li-anchor">Data Structures and Algorithms Problems</a></span>
- <span id="bdb9"><a href="https://blog.pragmaticengineer.com/data-structures-and-algorithms-i-actually-used-day-to-day/" class="markup--anchor markup--li-anchor">Data Structures &amp; Algorithms I Actually Used Working at Tech Companies (2020)</a> (<a href="https://lobste.rs/s/n8tyip/data_structures_algorithms_i_actually" class="markup--anchor markup--li-anchor">Lobsters</a>) (<a href="https://news.ycombinator.com/item?id=23841491" class="markup--anchor markup--li-anchor">HN</a>)</span>
- <span id="c7c3"><a href="https://onatm.dev/2020/08/10/let-s-implement-a-bloom-filter/" class="markup--anchor markup--li-anchor">Let’s implement a Bloom Filter (2020)</a> (<a href="https://news.ycombinator.com/item?id=24102617" class="markup--anchor markup--li-anchor">HN</a>)</span>
- <span id="e238"><a href="https://ourmachinery.com/post/data-structures-part-1-bulk-data/" class="markup--anchor markup--li-anchor">Data Structures Part 1: Bulk Data (2019)</a> (<a href="https://lobste.rs/s/t8mrxn/data_structures_part_1_bulk_data" class="markup--anchor markup--li-anchor">Lobsters</a>)</span>
- <span id="afba"><a href="https://www.freecodecamp.org/news/learn-all-about-data-structures-used-in-computer-science/" class="markup--anchor markup--li-anchor">Data Structures Explained</a></span>
- <span id="5a14"><a href="https://rcoh.me/posts/cache-oblivious-datastructures/" class="markup--anchor markup--li-anchor">Introduction to Cache-Oblivious Data Structures (2018)</a></span>
- <span id="5ced"><a href="https://thedailycoding.com/" class="markup--anchor markup--li-anchor">The Daily Coding newsletter</a> — Master JavaScript and Data Structures.</span>
- <span id="63dd"><a href="https://www.cs.bham.ac.uk/~jxb/DSA/dsa.pdf" class="markup--anchor markup--li-anchor">Lectures Note for Data Structures and Algorithms (2019)</a></span>
- <span id="60bc"><a href="https://abhinavsarkar.net/posts/continuation-defunctionalization/" class="markup--anchor markup--li-anchor">Mechanically Deriving Binary Tree Iterators with Continuation Defunctionalization (2020)</a></span>
- <span id="446e"><a href="https://cp-algorithms.com/data_structures/segment_tree.html" class="markup--anchor markup--li-anchor">Segment Tree data structure</a></span>
- <span id="3a88"><a href="https://medium.com/@gballet/structure-of-a-binary-state-tree-part-1-48c587836d2f" class="markup--anchor markup--li-anchor">Structure of a binary state tree (2020)</a></span>
- <span id="86fd"><a href="https://github.com/sushinoya/fundamentals" class="markup--anchor markup--li-anchor">Introductory data structures and algorithms</a></span>
- <span id="1344"><a href="https://heap.io/blog/engineering/applying-textbook-data-structures-for-real-life-wins" class="markup--anchor markup--li-anchor">Applying Textbook Data Structures for Real Life Wins (2020)</a> (<a href="https://news.ycombinator.com/item?id=24761105" class="markup--anchor markup--li-anchor">HN</a>)</span>
- <span id="6bfa"><a href="https://www.youtube.com/watch?v=9XAx279s7gs" class="markup--anchor markup--li-anchor">Michael Scott — Nonblocking data structures lectures (2020)</a> — Nonblocking concurrent data structures are an increasingly valuable tool for shared-memory parallel programming.</span>
- <span id="fb01"><a href="https://github.com/cksystemsgroup/scal" class="markup--anchor markup--li-anchor">Scal</a> — High-performance multicore-scalable data structures and benchmarks. (<a href="http://scal.cs.uni-salzburg.at/" class="markup--anchor markup--li-anchor">Web</a>)</span>
- <span id="9fd5"><a href="https://github.com/HazyResearch/hyperbolics" class="markup--anchor markup--li-anchor">Hyperbolic embedding implementations</a></span>
- <span id="1d48"><a href="https://github.com/prathyvsh/morphisms-of-computational-structures" class="markup--anchor markup--li-anchor">Morphisms of Computational Constructs</a> — Visual catalogue + story of morphisms displayed across computational structures.</span>
- <span id="aeb8"><a href="http://djkooks.github.io/build-your-own-kv-store" class="markup--anchor markup--li-anchor">What is key-value store? (build-your-own-x) (2020)</a></span>
- <span id="f9af"><a href="https://stackoverflow.com/questions/500607/what-are-the-lesser-known-but-useful-data-structures" class="markup--anchor markup--li-anchor">Lesser Known but Useful Data Structures</a></span>
- <span id="7fbe"><a href="https://martin.kleppmann.com/2020/12/02/bloom-filter-hash-graph-sync.html" class="markup--anchor markup--li-anchor">Using Bloom filters to efficiently synchronize hash graphs (2020)</a></span>
- <span id="658b"><a href="https://llimllib.github.io/bloomfilter-tutorial/" class="markup--anchor markup--li-anchor">Bloom Filters by Example</a> (<a href="https://github.com/llimllib/bloomfilter-tutorial" class="markup--anchor markup--li-anchor">Code</a>)</span>
- <span id="8210"><a href="https://crypto.stanford.edu/pbc/notes/zdd/" class="markup--anchor markup--li-anchor">Binary Decision Diagrams</a> (<a href="https://news.ycombinator.com/item?id=25342922" class="markup--anchor markup--li-anchor">HN</a>)</span>
- <span id="c232"><a href="https://mochromatic.com/3-steps-to-designing-better-data-structures-in-elixir/" class="markup--anchor markup--li-anchor">3 Steps to Designing Better Data Structures (2020)</a></span>
- <span id="8b59"><a href="https://matteding.github.io/2019/04/25/sparse-matrices/" class="markup--anchor markup--li-anchor">Sparse Matrices (2019)</a> (<a href="https://news.ycombinator.com/item?id=25601288" class="markup--anchor markup--li-anchor">HN</a>)</span>
- <span id="43b6"><a href="https://github.com/xtaci/algorithms" class="markup--anchor markup--li-anchor">Algorithms &amp; Data Structures in C++</a></span>
- <span id="605a"><a href="https://drs.is/post/fancy-tree-traversals/" class="markup--anchor markup--li-anchor">Fancy Tree Traversals (2019)</a></span>
- <span id="b725"><a href="https://drs.is/post/robson-traversal/" class="markup--anchor markup--li-anchor">The Robson Tree Traversal (2019)</a></span>
- <span id="f67a"><a href="http://cr.yp.to/data.html" class="markup--anchor markup--li-anchor">Data structures and program structures</a></span>
- <span id="c4c4"><a href="http://cr.yp.to/cdb.html" class="markup--anchor markup--li-anchor">cdb</a> — Fast, reliable, simple package for creating and reading constant databases.</span>
- <span id="3ca0"><a href="https://pgm.di.unipi.it/" class="markup--anchor markup--li-anchor">PGM-index</a> — Learned indexes that match B-tree performance with 83x less space. (<a href="https://news.ycombinator.com/item?id=25899286" class="markup--anchor markup--li-anchor">HN</a>) (<a href="https://github.com/gvinciguerra/PGM-index" class="markup--anchor markup--li-anchor">Code</a>)</span>
- <span id="da38"><a href="https://minimalmodeling.substack.com/p/structural-and-pure-attributes" class="markup--anchor markup--li-anchor">Structural and pure attributes</a></span>
- <span id="2d44"><a href="http://aleksandar-prokopec.com/resources/docs/p137-prokopec.pdf" class="markup--anchor markup--li-anchor">Cache-Tries: O(1) Concurrent Lock-Free Hash Tries (2018)</a></span>
---
---






#### A simple to follow guide to Lists Stacks and Queues, with animated gifs, diagrams, and code examples

<figure><img src="https://cdn-images-1.medium.com/max/2560/0*ph952PPOmG5uz_Pv" class="graf-image" /></figure>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*zhC6dP1hb2rq2qt2.png" class="graf-image" /></figure>### Linked Lists

<figure><img src="https://cdn-images-1.medium.com/max/800/0*znES1vYRV3Zvk9-e.gif" class="graf-image" /></figure>In the university setting, it’s common for Linked Lists to appear early on in an undergraduate’s Computer Science coursework. While they don’t always have the most practical real-world applications in industry, Linked Lists make for an important and effective educational tool in helping develop a student’s mental model on what data structures actually are to begin with.

Linked lists are simple. They have many compelling, reoccurring edge cases to consider that emphasize to the student the need for care and intent while implementing data structures. They can be applied as the underlying data structure while implementing a variety of other prevalent abstract data types, such as Lists, Stacks, and Queues, and they have a level of versatility high enough to clearly illustrate the value of the Object Oriented Programming paradigm.

They also come up in software engineering interviews quite often.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*OYmTpAK6tyDQzoIE.gif" class="graf-image" /></figure>### What is a Linked List?

A Linked List data structure represents a linear sequence of “vertices” (or “nodes”), and tracks three important properties.

**Linked List Properties:**

<figure><img src="https://cdn-images-1.medium.com/max/800/1*z-i1wE6QPOtqxGiW_B6WuA.png" class="graf-image" /></figure>The data being tracked by a particular Linked List does not live inside the Linked List instance itself. Instead, each vertex is actually an instance of an even simpler, smaller data structure, often referred to as a “Node”.

Depending on the type of Linked List (there are many), Node instances track some very important properties as well.

**Linked List Node Properties:**

<figure><img src="https://cdn-images-1.medium.com/max/800/1*vagMBs5Quwv8b8tvF4W6Og.png" class="graf-image" /></figure>Property Description `value`: The actual value this node represents.`next`The next node in the list (relative to this node).`previous`The previous node in the list (relative to this node).

**NOTE:** The `previous` property is for Doubly Linked Lists only!

Linked Lists contain *ordered* data, just like arrays. The first node in the list is, indeed, first. From the perspective of the very first node in the list, the *next* node is the second node. From the perspective of the second node in the list, the *previous* node is the first node, and the *next* node is the third node. And so it goes.

#### “So…this sounds a lot like an Array…”

Admittedly, this does *sound* a lot like an Array so far, and that’s because Arrays and Linked Lists are both implementations of the List ADT. However, there is an incredibly important distinction to be made between Arrays and Linked Lists, and that is how they *physically store* their data. (As opposed to how they *represent* the order of their data.)

Recall that Arrays contain *contiguous* data. Each element of an array is actually stored *next to* it’s neighboring element *in the actual hardware of your machine*, in a single continuous block in memory.

*An Array’s contiguous data being stored in a continuous block of addresses in memory.*

Unlike Arrays, Linked Lists contain *non-contiguous* data. Though Linked Lists *represent* data that is ordered linearly, that mental model is just that — an interpretation of the *representation* of information, not reality.

In reality, in the actual hardware of your machine, whether it be in disk or in memory, a Linked List’s Nodes are not stored in a single continuous block of addresses. Rather, Linked List Nodes live at randomly distributed addresses throughout your machine! The only reason we know which node comes next in the list is because we’ve assigned its reference to the current node’s `next` pointer.

*A Singly Linked List’s non-contiguous data (Nodes) being stored at randomly distributed addresses in memory.*

For this reason, Linked List Nodes have *no indices*, and no *random access*. Without random access, we do not have the ability to look up an individual Linked List Node in constant time. Instead, to find a particular Node, we have to start at the very first Node and iterate through the Linked List one node at a time, checking each Node’s *next* Node until we find the one we’re interested in.

So when implementing a Linked List, we actually must implement both the Linked List class *and* the Node class. Since the actual data lives in the Nodes, it’s simpler to implement the Node class first.

### Types of Linked Lists

There are four flavors of Linked List you should be familiar with when walking into your job interviews.

**Linked List Types:**

<figure><img src="https://cdn-images-1.medium.com/max/800/1*ZoYIEJaOpPiYAuqtPLt8yw.png" class="graf-image" /></figure>***Note:****These Linked List types are not always mutually exclusive.*

For instance:

- <span id="a0e8">Any type of Linked List can be implemented Circularly (e.g. A Circular Doubly Linked List).</span>
- <span id="c0ff">A Doubly Linked List is actually just a special case of a Multiply Linked List.</span>

You are most likely to encounter Singly and Doubly Linked Lists in your upcoming job search, so we are going to focus exclusively on those two moving forward. However, in more senior level interviews, it is very valuable to have some familiarity with the other types of Linked Lists. Though you may not actually code them out, *you will win extra points by illustrating your ability to weigh the tradeoffs of your technical decisions* by discussing how your choice of Linked List type may affect the efficiency of the solutions you propose.

### Linked List Methods

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*9EnhpQAeV03_DyEZIyiTCw.png" class="graf-image" /></figure>

Linked Lists are great foundation builders when learning about data structures because they share a number of similar methods (and edge cases) with many other common data structures. You will find that many of the concepts discussed here will repeat themselves as we dive into some of the more complex non-linear data structures later on, like Trees and Graphs.

### Time and Space Complexity Analysis

Before we begin our analysis, here is a quick summary of the Time and Space constraints of each Linked List Operation. The complexities below apply to both Singly and Doubly Linked Lists:

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*Enb9YaqRxzS87ML83Loasw.png" class="graf-image" /></figure>

Before moving forward, see if you can reason to yourself why each operation has the time and space complexity listed above!

### Time Complexity — Access and Search

#### Scenarios

1. <span id="16fe">We have a Linked List, and we’d like to find the 8th item in the list.</span>
2. <span id="a9f7">We have a Linked List of sorted alphabet letters, and we’d like to see if the letter “Q” is inside that list.</span>

#### Discussion

Unlike Arrays, Linked Lists Nodes are not stored contiguously in memory, and thereby do not have an indexed set of memory addresses at which we can quickly lookup individual nodes in constant time. Instead, we must begin at the head of the list (or possibly at the tail, if we have a Doubly Linked List), and iterate through the list until we arrive at the node of interest.

In Scenario 1, we’ll know we’re there because we’ve iterated 8 times. In Scenario 2, we’ll know we’re there because, while iterating, we’ve checked each node’s value and found one that matches our target value, “Q”.

In the worst case scenario, we may have to traverse the entire Linked List until we arrive at the final node. This makes both Access & Search **Linear Time** operations.

### Time Complexity — Insertion and Deletion

#### Scenarios

1. <span id="2462">We have an empty Linked List, and we’d like to insert our first node.</span>
2. <span id="ae0b">We have a Linked List, and we’d like to insert or delete a node at the Head or Tail.</span>
3. <span id="290b">We have a Linked List, and we’d like to insert or delete a node from somewhere in the middle of the list.</span>

#### Discussion

Since we have our Linked List Nodes stored in a non-contiguous manner that relies on pointers to keep track of where the next and previous nodes live, Linked Lists liberate us from the linear time nature of Array insertions and deletions. We no longer have to adjust the position at which each node/element is stored after making an insertion at a particular position in the list. Instead, if we want to insert a new node at position `i`, we can simply:

1. <span id="7675">Create a new node.</span>
2. <span id="adf9">Set the new node’s `next` and `previous` pointers to the nodes that live at positions `i` and `i - 1`, respectively.</span>
3. <span id="1bf6">Adjust the `next` pointer of the node that lives at position `i - 1` to point to the new node.</span>
4. <span id="9580">Adjust the `previous` pointer of the node that lives at position `i` to point to the new node.</span>

And we’re done, in Constant Time. No iterating across the entire list necessary.

“But hold on one second,” you may be thinking. “In order to insert a new node in the middle of the list, don’t we have to lookup its position? Doesn’t that take linear time?!”

Yes, it is tempting to call insertion or deletion in the middle of a Linked List a linear time operation since there is lookup involved. However, it’s usually the case that you’ll already have a reference to the node where your desired insertion or deletion will occur.

For this reason, we separate the Access time complexity from the Insertion/Deletion time complexity, and formally state that Insertion and Deletion in a Linked List are **Constant Time** across the board.

***Note:*** *Without a reference to the node at which an insertion or deletion will occur, due to linear time lookup, an insertion or deletion in the middle of a Linked List will still take Linear Time, sum total.*

### Space Complexity

#### Scenarios

1. <span id="12d2">We’re given a Linked List, and need to operate on it.</span>
2. <span id="7c5f">We’ve decided to create a new Linked List as part of strategy to solve some problem.</span>

#### Discussion

It’s obvious that Linked Lists have one node for every one item in the list, and for that reason we know that Linked Lists take up Linear Space in memory. However, when asked in an interview setting what the Space Complexity *of your solution* to a problem is, it’s important to recognize the difference between the two scenarios above.

In Scenario 1, we *are not* creating a new Linked List. We simply need to operate on the one given. Since we are not storing a *new* node for every node represented in the Linked List we are provided, our solution is *not necessarily* linear in space.

In Scenario 2, we *are* creating a new Linked List. If the number of nodes we create is linearly correlated to the size of our input data, we are now operating in Linear Space.

***Note****: Linked Lists can be traversed both iteratively and recursively. If you choose to traverse a Linked List recursively, there will be a recursive function call added to the call stack for every node in the Linked List. Even if you’re provided the Linked List, as in Scenario 1, you will still use Linear Space in the call stack, and that counts.*

------------------------------------------------------------------------

### Stacks and Queues

Stacks and Queues aren’t really “data structures” by the strict definition of the term. The more appropriate terminology would be to call them abstract data types (ADTs), meaning that their definitions are more conceptual and related to the rules governing their user-facing behaviors rather than their core implementations.

For the sake of simplicity, we’ll refer to them as data structures and ADTs interchangeably throughout the course, but the distinction is an important one to be familiar with as you level up as an engineer.

Now that that’s out of the way, Stacks and Queues represent a linear collection of nodes or values. In this way, they are quite similar to the Linked List data structure we discussed in the previous section. In fact, you can even use a modified version of a Linked List to implement each of them. (Hint, hint.)

These two ADTs are similar to each other as well, but each obey their own special rule regarding the order with which Nodes can be added and removed from the structure.

Since we’ve covered Linked Lists in great length, these two data structures will be quick and easy. Let’s break them down individually in the next couple of sections.

### What is a Stack?

Stacks are a Last In First Out (LIFO) data structure. The last Node added to a stack is always the first Node to be removed, and as a result, the first Node added is always the last Node removed.

The name Stack actually comes from this characteristic, as it is helpful to visualize the data structure as a vertical stack of items. Personally, I like to think of a Stack as a stack of plates, or a stack of sheets of paper. This seems to make them more approachable, because the analogy relates to something in our everyday lives.

If you can imagine adding items to, or removing items from, a Stack of…literally anything…you’ll realize that every (sane) person naturally obeys the LIFO rule.

We add things to the *top* of a stack. We remove things from the *top* of a stack. We never add things to, or remove things from, the *bottom* of the stack. That’s just crazy.

Note: We can use JavaScript Arrays to implement a basic stack. `Array#push` adds to the top of the stack and `Array#pop` will remove from the top of the stack. In the exercise that follows, we’ll build our own Stack class from scratch (without using any arrays). In an interview setting, your evaluator may be okay with you using an array as a stack.

------------------------------------------------------------------------

### What is a Queue?

Queues are a First In First Out (FIFO) data structure. The first Node added to the queue is always the first Node to be removed.

The name Queue comes from this characteristic, as it is helpful to visualize this data structure as a horizontal line of items with a beginning and an end. Personally, I like to think of a Queue as the line one waits on for an amusement park, at a grocery store checkout, or to see the teller at a bank.

If you can imagine a queue of humans waiting…again, for literally anything…you’ll realize that *most* people (the civil ones) naturally obey the FIFO rule.

People add themselves to the *back* of a queue, wait their turn in line, and make their way toward the *front*. People exit from the *front* of a queue, but only when they have made their way to being first in line.

We never add ourselves to the front of a queue (unless there is no one else in line), otherwise we would be “cutting” the line, and other humans don’t seem to appreciate that.

Note: We can use JavaScript Arrays to implement a basic queue. `Array#push` adds to the back (enqueue) and `Array#shift` will remove from the front (dequeue). In the exercise that follows, we’ll build our own Queue class from scratch (without using any arrays). In an interview setting, your evaluator may be okay with you using an array as a queue.

### Stack and Queue Properties

Stacks and Queues are so similar in composition that we can discuss their properties together. They track the following three properties:

**Stack Properties | Queue Properties:**

<figure><img src="https://cdn-images-1.medium.com/max/800/1*aZCnZJzaeY74DTb2CTRuFA.png" class="graf-image" /></figure>Notice that rather than having a `head` and a `tail` like Linked Lists, Stacks have a `top`, and Queues have a `front` and a `back` instead. Stacks don’t have the equivalent of a `tail` because you only ever push or pop things off the top of Stacks. These properties are essentially the same; pointers to the end points of the respective List ADT where important actions way take place. The differences in naming conventions are strictly for human comprehension.

------------------------------------------------------------------------

Similarly to Linked Lists, the values stored inside a Stack or a Queue are actually contained within Stack Node and Queue Node instances. Stack, Queue, and Singly Linked List Nodes are all identical, but just as a reminder and for the sake of completion, these List Nodes track the following two properties:

### Time and Space Complexity Analysis

Before we begin our analysis, here is a quick summary of the Time and Space constraints of each Stack Operation.

Data Structure Operation Time Complexity (Avg)Time Complexity (Worst)Space Complexity (Worst)Access`Θ(n)O(n)O(n)`Search`Θ(n)O(n)O(n)`Insertion`Θ(1)O(1)O(n)`Deletion`Θ(1)O(1)O(n)`

Before moving forward, see if you can reason to yourself why each operation has the time and space complexity listed above!

#### Time Complexity — Access and Search

When the Stack ADT was first conceived, its inventor definitely did not prioritize searching and accessing individual Nodes or values in the list. The same idea applies for the Queue ADT. There are certainly better data structures for speedy search and lookup, and if these operations are a priority for your use case, it would be best to choose something else!

Search and Access are both linear time operations for Stacks and Queues, and that shouldn’t be too unclear. Both ADTs are nearly identical to Linked Lists in this way. The only way to find a Node somewhere in the middle of a Stack or a Queue, is to start at the `top` (or the `back`) and traverse downward (or forward) toward the `bottom` (or `front`) one node at a time via each Node’s `next` property.

This is a linear time operation, O(n).

#### Time Complexity — Insertion and Deletion

For Stacks and Queues, insertion and deletion is what it’s all about. If there is one feature a Stack absolutely must have, it’s constant time insertion and removal to and from the `top` of the Stack (FIFO). The same applies for Queues, but with insertion occurring at the `back` and removal occurring at the `front` (LIFO).

Think about it. When you add a plate to the top of a stack of plates, do you have to iterate through all of the other plates first to do so? Of course not. You simply add your plate to the top of the stack, and that’s that. The concept is the same for removal.

Therefore, Stacks and Queues have constant time Insertion and Deletion via their `push` and `pop` or `enqueue` and `dequeue` methods, O(1).

#### Space Complexity

The space complexity of Stacks and Queues is very simple. Whether we are instantiating a new instance of a Stack or Queue to store a set of data, or we are using a Stack or Queue as part of a strategy to solve some problem, Stacks and Queues always store one Node for each value they receive as input.

For this reason, we always consider Stacks and Queues to have a linear space complexity, O(n).

### When should we use Stacks and Queues?

At this point, we’ve done a lot of work understanding the ins and outs of Stacks and Queues, but we still haven’t really discussed what we can use them for. The answer is actually…a lot!

For one, Stacks and Queues can be used as intermediate data structures while implementing some of the more complicated data structures and methods we’ll see in some of our upcoming sections.

For example, the implementation of the breadth-first Tree traversal algorithm takes advantage of a Queue instance, and the depth-first Graph traversal algorithm exploits the benefits of a Stack instance.

Additionally, Stacks and Queues serve as the essential underlying data structures to a wide variety of applications you use all the time. Just to name a few:

## Graphs:

### Graph Data Structure Interview Questions At A Glance

Because they’re just about the most important data structure there is.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*D_VTiLB2q1sax7Dd.png" class="graf-image" /></figure>### Graphs

**graph**: collections of data represented by nodes and connections between nodes  
**graphs**: way to formally represent network; ordered pairs  
**graphs**: modeling relations between many items; Facebook friends (you = node; friendship = edge; bidirectional); twitter = unidirectional  
**graph theory**: study of graphs  
**big O of graphs**: G = V(E)

trees are a type of graph

Components required to make a graph:

- <span id="ca43">**nodes or vertices**: represent objects in a dataset (cities, animals, web pages)</span>
- <span id="a2ee">**edges**: connections between vertices; can be bidirectional</span>
- <span id="fc4a">**weight**: cost to travel across an edge; optional (aka cost)</span>

Useful for:

- <span id="769d">maps</span>
- <span id="19f3">networks of activity</span>
- <span id="93d9">anything you can represent as a network</span>
- <span id="45a1">multi-way relational data</span>

Types of Graphs:

- <span id="f259">**directed**: can only move in one direction along edges; which direction indicated by arrows</span>
- <span id="1bfb">**undirected**: allows movement in both directions along edges; bidirectional</span>
- <span id="e813">**cyclic**: weighted; edges allow you to revisit at least 1 vertex; example weather</span>
- <span id="52d4">**acyclical**: vertices can only be visited once; example recipe</span>

Two common ways to represent graphs in code:

- <span id="4380">**adjacency lists**: graph stores list of vertices; for each vertex, it stores list of connected vertices</span>
- <span id="dedc">**adjacency matrices**: two-dimensional array of lists with built-in edge weights; denotes no relationship</span>

Both have strengths and weaknesses.

<figure><img src="https://cdn-images-1.medium.com/max/800/1*PunyRdBT24D0NkD5AdhL9Q.png" class="graf-image" /></figure>### Questions

#### What is a Graph?

A Graph is a data structure that models objects and pairwise relationships between them with nodes and edges. For example: Users and friendships, locations and paths between them, parents and children, etc.

#### Why is it important to learn Graphs?

Graphs represent relationships between data. Anytime you can identify a relationship pattern, you can build a graph and often gain insights through a traversal. These insights can be very powerful, allowing you to find new relationships, like users who have a similar taste in music or purchasing.

#### How many types of graphs are there?

Graphs can be directed or undirected, cyclic or acyclic, weighted or unweighted. They can also be represented with different underlying structures including, but not limited to, adjacency lists, adjacency matrices, object and pointers, or a custom solution.

#### What is the time complexity (big-O) to add/remove/get a vertex/edge for a graph?

It depends on the implementation. (<a href="https://github.com/LambdaSchool/Graphs/tree/master/objectives/graph-representations" class="markup--anchor markup--p-anchor">Graph Representations</a>). Before choosing an implementation, it is wise to consider the tradeoffs and complexities of the most commonly used operations.

### Graph Representations

The two most common ways to represent graphs in code are adjacency lists and adjacency matrices, each with its own strengths and weaknesses. When deciding on a graph implementation, it’s important to understand the type of data and operations you will be using.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*J7ZaHRxtBYCkaiQZ.png" class="graf-image" /></figure>### Adjacency List

In an adjacency list, the graph stores a list of vertices and for each vertex, a list of each vertex to which it’s connected. So, for the following graph…

…an adjacency list in Python could look something like this:

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

Note that this adjacency list doesn’t actually use any lists. The `vertices` collection is a `dictionary` which lets us access each collection of edges in O(1) constant time while the edges are contained in a `set` which lets us check for the existence of edges in O(1) constant time.

### Adjacency Matrix

Now, let’s see what this graph might look like as an adjacency matrix:

    class Graph:
        def __init__(self):
            self.edges = [[0,1,0,0,0,0,0],
                          [0,0,1,1,0,0,0],
                          [0,0,0,0,1,0,0],
                          [0,0,0,0,0,1,1],
                          [0,0,1,0,0,0,0],
                          [0,0,1,0,0,0,0],
                          [1,0,0,0,0,1,0]]

We represent this matrix as a two-dimensional array, or a list of lists. With this implementation, we get the benefit of built-in edge weights but do not have an association between the values of our vertices and their index.

In practice, both of these would probably contain more information by including Vertex or Edge classes.

### Tradeoffs

Both adjacency matrices and adjacency lists have their own strengths and weaknesses. Let’s explore their tradeoffs.

For the following:

    V: Total number of vertices in the graph
    E: Total number of edges in the graph
    e: Average number of edges per vertex

#### Space Complexity

- <span id="f8f8">**Adjacency Matrix**: O(V ^ 2)</span>
- <span id="1946">**Adjacency List**: O(V + E)</span>

Consider a sparse graph with 100 vertices and only one edge. An adjacency list would have to store all 100 vertices but only needs to keep track of that single edge. The adjacency matrix would need to store 100x100=10,000 possible connections, even though all but one would be 0.

Now consider a dense graph where each vertex points to each other vertex. In this case, the total number of edges will approach V² so the space complexities of each are comparable. However, dictionaries and sets are less space efficient than lists so for dense graphs, the adjacency matrix is more efficient.

Takeaway: Adjacency lists are more space efficient for **sparse** graphs while adjacency matrices become efficient for **dense** graphs.

#### Add Vertex

- <span id="6257">**Adjacency Matrix**: O(V)</span>
- <span id="6a8f">**Adjacency List**: O(1)</span>

Adding a vertex is extremely simple in an adjacency list:

    self.vertices["H"] = set()

Adding a new key to a dictionary is a constant-time operation.

For an adjacency matrix, we would need to add a new value to the end of each existing row, then add a new row at the end.

    for v in self.edges:
      self.edges[v].append(0)
    v.append([0] * len(self.edges + 1))

Remember that with Python lists, appending to the end of a list is usually O(1) due to over-allocation of memory but can be O(n) when the over-allocated memory fills up. When this occurs, adding the vertex can be O(V²).

Takeaway: Adding vertices is very efficient in adjacency lists but very inefficient for adjacency matrices.

#### Remove Vertex

- <span id="8226">**Adjacency Matrix**: O(V ^ 2)</span>
- <span id="85fd">**Adjacency List**: O(V)</span>

Removing vertices is pretty inefficient in both representations. In an adjacency matrix, we need to remove the removed vertex’s row, then remove that column from each other row. Removing an element from a list requires moving everything after that element over by one slot which takes an average of V/2 operations. Since we need to do that for every single row in our matrix, that results in a V² time complexity. On top of that, we need to reduce the index of each vertex after our removed index by 1 as well which doesn’t add to our quadratic time complexity, but does add extra operations.

For an adjacency list, we need to visit each vertex and remove all edges pointing to our removed vertex. Removing elements from sets and dictionaries is a O(1) operation, so this results in an overall O(V) time complexity.

Takeaway: Removing vertices is inefficient in both adjacency matrices and lists but more inefficient in matrices.

#### Add Edge

- <span id="dbbe">**Adjacency Matrix**: O(1)</span>
- <span id="3968">**Adjacency List**: O(1)</span>

Adding an edge in an adjacency matrix is quite simple:

    self.edges[v1][v2] = 1

Adding an edge in an adjacency list is similarly simple:

    self.vertices[v1].add(v2)

Both are constant-time operations.

Takeaway: Adding edges to both adjacency lists and matrices is very efficient.

#### Remove Edge

- <span id="b417">**Adjacency Matrix**: O(1)</span>
- <span id="d794">**Adjacency List**: O(1)</span>

Removing an edge from an adjacency matrix is quite simple:

    self.edges[v1][v2] = 0

Removing an edge from an adjacency list is similarly simple:

    self.vertices[v1].remove(v2)

Both are constant-time operations.

Takeaway: Removing edges from both adjacency lists and matrices is very efficient.

#### Find Edge

- <span id="dc68">**Adjacency Matrix**: O(1)</span>
- <span id="2b87">**Adjacency List**: O(1)</span>

Finding an edge in an adjacency matrix is quite simple:

    return self.edges[v1][v2] > 0

Finding an edge in an adjacency list is similarly simple:

    return v2 in self.vertices[v1]

Both are constant-time operations.

Takeaway: Finding edges from both adjacency lists and matrices is very efficient.

#### Get All Edges from Vertex

- <span id="798e">**Adjacency Matrix**: O(V)</span>
- <span id="fa79">**Adjacency List**: O(1)</span>

Say you want to know all the edges originating from a particular vertex. With an adjacency list, this is as simple as returning the value from the vertex dictionary:

    return self.vertex[v]

In an adjacency matrix, however, it’s a bit more complicated. You would need to iterate through the entire row and populate a list based on the results:

    v_edges = []
    for v2 in self.edges[v]:
        if self.edges[v][v2] > 0:
            v_edges.append(v2)
    return v_edges

Takeaway: Fetching all edges is more efficient in an adjacency list than an adjacency matrix.

### Breadth-First Search

Can use breadth-first search when searching a graph; explores graph outward in rings of increasing distance from starting vertex; never attempts to explore vertex it is or has already explored

#### BFS

<figure><img src="https://cdn-images-1.medium.com/max/800/0*WOvrysI4fX6ePqN-.gif" class="graf-image" /></figure>### Applications of BFS

- <span id="149a">pathfinding, routing</span>
- <span id="9ab5">web crawlers</span>
- <span id="31af">find neighbor nodes in P2P network</span>
- <span id="13aa">finding people/connections away on social network</span>
- <span id="4f5f">find neighboring locations on graph</span>
- <span id="d1b5">broadcasting on a network</span>
- <span id="4061">cycle detection in a graph</span>
- <span id="0f7f">finding connected components</span>
- <span id="a86f">solving several theoretical graph problems</span>

### Coloring BFS

It’s useful to color vertexes as you arrive at them and as you leave them behind as already searched.

**unlisted**: white  
**vertices whose neighbors are being explored**: gray  
**vertices with no unexplored neighbors**: black

### BFS Pseudocode

    def BFS(graph, start_vert):
        for v of graph.vertices:
            v.color = white
        start_vert.color = gray
        queue.enqueue(start_vert)
        while !queue isEmpty():
        # peek at head but don't dequeue
        u = queue[0]
        for v of u.neighbors:
            if v.color == white:
                v.color == gray
                queue.enqueue(v)
        queue.dequeue()
        u.color = black

### BFS Steps

1. <span id="ccee">Mark graph vertices white.</span>
2. <span id="26e7">Mark starting vertex gray.</span>
3. <span id="863c">Enqueue starting vertex.</span>
4. <span id="b8d8">Check if queue is not empty.</span>
5. <span id="2dc5">If not empty, peek at first item in queue.</span>
6. <span id="0e5c">Loop through that vertex’s neighbors.</span>
7. <span id="1a9e">Check if unvisited.</span>
8. <span id="7165">If unvisited, mark as gray and enqueue vertex.</span>
9. <span id="338b">Dequeue current vertex and mark as black.</span>
10. <span id="8460">Repeat until all vertices are explored.</span>

### Depth-First Search

dives down the graph as far as it can before backtracking and exploring another branch; never attempts to explore a vertex it has already explored or is in the process of exploring; exact order will vary depending on which branches get taken first and which is starting vertex

#### DFS

<figure><img src="https://cdn-images-1.medium.com/max/800/0*DZVdn1kWaiJXQ_zc.gif" class="graf-image" /></figure>### Applications of DFS

- <span id="044e">preferred method for exploring a graph if we want to ensure we visit every node in graph</span>
- <span id="b086">finding minimum spanning trees of weighted graphs</span>
- <span id="c419">pathfinding</span>
- <span id="281e">detecting cycles in graphs</span>
- <span id="6739">solving and generating mazes</span>
- <span id="20b5">topological sorting, useful for scheduling sequences of dependent jobs</span>

### DFS Pseudocode

    # recursion
    def explore(graph):
        visit(this_vert)
        explore(remaining_graph)

    # iterative
    def DFS(graph):
        for v of graph.verts:
            v.color = white
            v.parent = null
        for v of graph.verts:
            if v.color == white:
                DFS_visit(v)

    def DFS_visit(v):
        v.color = gray
        for neighbor of v.adjacent_nodes:
            if neighbor.color == white:
                neighbor.parent = v
                DFS_visit(neighbor)
        v.color = black

### DFS Steps

1. <span id="b45a">Take graph as parameter.</span>
2. <span id="a012">Marks all vertices as unvisited.</span>
3. <span id="1bd5">Sets vertex parent as null.</span>
4. <span id="0f24">Passes each unvisited vertex into DFS\_visit().</span>
5. <span id="9011">Mark current vertex as gray.</span>
6. <span id="8df7">Loops through its unvisited neighbors.</span>
7. <span id="927d">Sets parent and makes recursive call to DFS\_visit().</span>
8. <span id="6d4c">Marks vertex as black.</span>
9. <span id="e753">Repeat until done.</span>

### Connected Components

**connected components**: in a disjoint graph, groups of nodes on a graph that are connected with each other

### Uses

- <span id="0c54">typically very large graphs, networks</span>
- <span id="1bdc">social networks</span>
- <span id="66be">networks (which devices can reach one another)</span>
- <span id="210c">epidemics (how spread, who started, where next)</span>

**key to finding connected components**: searching algorithms, breadth-first search

### How to find connected componnents

- <span id="4bd0">for each node in graph:</span>
- <span id="6e20">has it been explored</span>
- <span id="40be">if no, do BFS</span>
- <span id="96f4">all nodes reached are connected</span>
- <span id="e152">if yes, already in connected component</span>
- <span id="3f15">go to next node</span>

**strongly connected components**: any node in this group can get to any other node

### Bonus Python Question

    '''

    This Bellman-Ford Code is for determination whether we can get

    shortest path from given graph or not for single-source shortest-paths problem.

    In other words, if given graph has any negative-weight cycle that is reachable

    from the source, then it will give answer False for "no solution exits".

    For argument graph, it should be a dictionary type

    such as

    graph = {

    'a': {'b': 6, 'e': 7},

    'b': {'c': 5, 'd': -4, 'e': 8},

    'c': {'b': -2},

    'd': {'a': 2, 'c': 7},

    'e': {'b': -3}

    }

### Review of Concepts

<figure><img src="https://cdn-images-1.medium.com/max/1200/0*oOYEgDBV2yhim9SC" class="graf-image" /></figure>

- <span id="9d7a">A graph is any collection of nodes and edges.</span>
- <span id="7a3a">A graph is a less restrictive class of collections of nodes than structures like a tree.</span>
- <span id="8d05">It doesn’t need to have a root node (not every node needs to be accessible from a single node)</span>
- <span id="6fac">It can have cycles (a group of nodes whose paths begin and end at the same node)</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*nN2X6TCy0JSh4mfL.gif" alt="Cycles in a graph" class="graf-image" /><figcaption>Cycles in a graph</figcaption></figure>-   <span id="783b">Cycles are not always “isolated”, they can be one part of a larger graph. You can detect them by starting your search on a specific node and finding a path that takes you back to that same node.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*0EdGqDUlj_HEnyEc.png" class="graf-image" /></figure>-   <span id="fe92">Any number of edges may leave a given node</span>
-   <span id="915b">A Path is a sequence of nodes on a graph</span>

### Undirected Graph

**Undirected Graph:** An undirected graph is one where the edges do not specify a particular direction. The edges are bi-directional.

### Types

<figure><img src="https://cdn-images-1.medium.com/max/800/1*u8Nu829gPtxU6J0siwljJA.png" class="graf-image" /></figure>

### Dense Graph

- <span id="7b24">Dense Graph — A graph with lots of edges.</span>
- <span id="5682">“Dense graphs have many edges. But, wait! ⚠️ I know what you must be thinking, how can you determine what qualifies as “many edges”? This is a little bit too subjective, right? ? I agree with you, so let’s quantify it a little bit:</span>
- <span id="0e05">Let’s find the maximum number of edges in a directed graph. If there are |V| nodes in a directed graph (in the example below, six nodes), that means that each node can have up to |v| connections (in the example below, six connections).</span>
- <span id="59d8">Why? Because each node could potentially connect with all other nodes and with itself (see “loop” below). Therefore, the maximum number of edges that the graph can have is |V|\\\*|V| , which is the total number of nodes multiplied by the maximum number of connections that each node can have.”</span>
- <span id="146f">When the number of edges in the graph is close to the maximum number of edges, the graph is dense.</span>

### Sparse Graph

- <span id="5e53">Sparse Graph — Few edges</span>
- <span id="37f5">When the number of edges in the graph is significantly fewer than the maximum number of edges, the graph is sparse.</span>

### Weighted Graph

- <span id="755c">Weighted Graph — Edges have a cost or a weight to traversal</span>

### Directed Graph

- <span id="416f">Directed Graph — Edges only go one direction</span>

### *Undirected* Graph

- <span id="6030">Undirected Graph — Edges don’t have a direction. All graphs are assumed to be undirected unless otherwise stated</span>

### Node Class

Uses a class to define the neighbors as properties of each node.

### Adjacency Matrix

The row index will correspond to the source of an edge and the column index will correspond to the edges destination.

- <span id="ab18">When the edges have a direction, `matrix[i][j]` may not be the same as `matrix[j][i]`</span>
- <span id="3499">It is common to say that a node is adjacent to itself so `matrix[x][x]` is true for any node</span>
- <span id="9883">Will be O(n²) space complexity</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*2bAUSiq_ej3XTSUMryjJUA.png" class="graf-image" /></figure>### Adjacency List

Seeks to solve the shortcomings of the matrix implementation. It uses an object where keys represent node labels and values associated with that key are the adjacent node keys held in an array.


#### Stacks

- <span id="f63a">The Call Stack is a Stack data structure, and is used to manage the order of function invocations in your code.</span>
- <span id="6b24">Browser History is often implemented using a Stack, with one great example being the browser history object in the very popular React Router module.</span>
- <span id="098f">Undo/Redo functionality in just about any application. For example:</span>
- <span id="f15d">When you’re coding in your text editor, each of the actions you take on your keyboard are recorded by `push`ing that event to a Stack.</span>
- <span id="e303">When you hit \[cmd + z\] to undo your most recent action, that event is `pop`ed off the Stack, because the last event that occured should be the first one to be undone (LIFO).</span>
- <span id="9248">When you hit \[cmd + y\] to redo your most recent action, that event is `push`ed back onto the Stack.</span>

#### Queues

- <span id="7c8d">Printers use a Queue to manage incoming jobs to ensure that documents are printed in the order they are received.</span>
- <span id="89e7">Chat rooms, online video games, and customer service phone lines use a Queue to ensure that patrons are served in the order they arrive.</span>
- <span id="c02a">In the case of a Chat Room, to be admitted to a size-limited room.</span>
- <span id="353e">In the case of an Online Multi-Player Game, players wait in a lobby until there is enough space and it is their turn to be admitted to a game.</span>
- <span id="6a8e">In the case of a Customer Service Phone Line…you get the point.</span>
- <span id="0ad5">As a more advanced use case, Queues are often used as components or services in the system design of a service-oriented architecture. A very popular and easy to use example of this is Amazon’s Simple Queue Service (SQS), which is a part of their Amazon Web Services (AWS) offering.</span>
- <span id="48e7">You would add this service to your system between two other services, one that is sending information for processing, and one that is receiving information to be processed, when the volume of incoming requests is high and the integrity of the order with which those requests are processed must be maintained.</span>


**Further resources:**

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://gist.github.com/bgoonz"><strong>bgoonz’s gists</strong><br />
<em>Instantly share code, notes, and snippets. Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python |…</em>gist.github.com</a><a href="https://gist.github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>



Data Structures Reference

------------------------------------------------------------------------

### Data Structures… Under The Hood

### Data Structures Reference

------------------------------------------------------------------------

### Array

Stores things in order. Has quick lookups by index.

### Linked List

Also stores things in order. Faster insertions and deletions than  
arrays, but slower lookups (you have to “walk down” the whole list).

!

### Queue

Like the line outside a busy restaurant. “First come, first served.”

### Stack

Like a stack of dirty plates in the sink. The first one you take off the  
top is the last one you put down.

### Tree

Good for storing hierarchies. Each node can have “child” nodes.

### Binary Search Tree

Everything in the left subtree is smaller than the current node,  
everything in the right subtree is larger. lookups, but only if the tree  
is balanced!

### Binary Search Tree

### Graph

Good for storing networks, geography, social relationships, etc.

### Heap

A binary tree where the smallest value is always at the top. Use it to implement a priority queue.

!\[A binary heap is a binary tree where the nodes are organized to so that the smallest value is always at the top.\]

### Adjacency list

A list where the index represents the node and the value at that index is a list of the node’s neighbors:

graph = \[ \[1\], \[0, 2, 3\], \[1, 3\], \[1, 2\], \]

Since node 3 has edges to nodes 1 and 2, graph\[3\] has the adjacency list \[1, 2\].

We could also use <a href="https://www.interviewcake.com/concept/hash-map" class="markup--anchor markup--p-anchor">a dictionary</a> where the keys represent the node and the values are the lists of neighbors.

graph = { 0: \[1\], 1: \[0, 2, 3\], 2: \[1, 3\], 3: \[1, 2\], }

This would be useful if the nodes were represented by strings, objects, or otherwise didn’t map cleanly to list indices.

### Adjacency matrix

A matrix of 0s and 1s indicating whether node x connects to node y (0 means no, 1 means yes).

graph = \[ \[0, 1, 0, 0\], \[1, 0, 1, 1\], \[0, 1, 0, 1\], \[0, 1, 1, 0\], \]

Since node 3 has edges to nodes 1 and 2, graph\[3\]\[1\] and graph\[3\]\[2\] have value 1.

a = LinkedListNode(5) b = LinkedListNode(1) c = LinkedListNode(9) a.next = b b.next = c

------------------------------------------------------------------------

### Arrays

Ok, so we know how to store individual numbers. Let’s talk about storing *several numbers*.

That’s right, things are starting to *heat up*.

Suppose we wanted to keep a count of how many bottles of kombucha we drink every day.

Let’s store each day’s kombucha count in an 8-bit, fixed-width, unsigned integer. That should be plenty — we’re not likely to get through more than 256 (2⁸) bottles in a *single day*, right?

And let’s store the kombucha counts right next to each other in RAM, starting at memory address 0:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*FM_W-EkXYGYwG6LK" class="graf-image" /></figure>Bam. That’s an **array**. RAM is*basically* an array already.

Just like with RAM, the elements of an array are numbered. We call that number the **index** of the array element (plural: indices). In *this* example, each array element’s index is the same as its address in RAM.

But that’s not usually true. Suppose another program like Spotify had already stored some information at memory address 2:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*IBpMv-88FpWo2gbu" class="graf-image" /></figure>We’d have to start our array below it, for example at memory address 3. So index 0 in our array would be at memory address 3, and index 1 would be at memory address 4, etc.:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Zeqpub-zKSWyyBeg" class="graf-image" /></figure>Suppose we wanted to get the kombucha count at index 4 in our array. How do we figure out what*address in memory* to go to? Simple math:

Take the array’s starting address (3), add the index we’re looking for (4), and that’s the address of the item we’re looking for. 3 + 4 = 7. In general, for getting the nth item in our array:

\\text{address of nth item in array} = \\text{address of array start} + n

This works out nicely because the size of the addressed memory slots and the size of each kombucha count are *both* 1 byte. So a slot in our array corresponds to a slot in RAM.

But that’s not always the case. In fact, it’s *usually not* the case. We *usually* use *64-bit* integers.

So how do we build an array of *64-bit* (8 byte) integers on top of our *8-bit* (1 byte) memory slots?

We simply give each array index *8* address slots instead of 1:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Y_mxvkxQGPP7rqQJ" class="graf-image" /></figure>So we can still use simple math to grab the start of the nth item in our array — just gotta throw in some multiplication:

\\text{address of nth item in array} = \\text{address of array start} + (n \* \\text{size of each item in bytes})

Don’t worry — adding this multiplication doesn’t really slow us down. Remember: addition, subtraction, multiplication, and division of fixed-width integers takes time. So *all* the math we’re using here to get the address of the nth item in the array takes time.

And remember how we said the memory controller has a *direct connection* to each slot in RAM? That means we can read the stuff at any given memory address in time.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*kqv_M8aCHZWjRv90" class="graf-image" /></figure>**Together, this means looking up the contents of a given array index is time.** This fast lookup capability is the most important property of arrays.

But the formula we used to get the address of the nth item in our array only works *if*:

1. <span id="ae12">**Each item in the array is the *same size*** (takes up the same</span>

number of bytes).

1. <span id="cae3">**The array is *uninterrupted* (contiguous) in memory**. There can’t</span>

be any gaps in the array…like to “skip over” a memory slot Spotify was already using.

These things make our formula for finding the nth item *work* because they make our array *predictable*. We can *predict* exactly where in memory the nth element of our array will be.

But they also constrain what kinds of things we can put in an array. Every item has to be the same size. And if our array is going to store a *lot* of stuff, we’ll need a *bunch* of uninterrupted free space in RAM. Which gets hard when most of our RAM is already occupied by other programs (like Spotify).

That’s the tradeoff. Arrays have fast lookups ( time), but each item in the array needs to be the same size, and you need a big block of uninterrupted free memory to store the array.

------------------------------------------------------------------------

## Pointers

Remember how we said every item in an array had to be the same size? Let’s dig into that a little more.

Suppose we wanted to store a bunch of ideas for baby names. Because we’ve got some *really* cute ones.

Each name is a string. Which is really an array. And now we want to store *those arrays* in an array. *Whoa*.

Now, what if our baby names have different lengths? That’d violate our rule that all the items in an array need to be the same size!

We could put our baby names in arbitrarily large arrays (say, 13 characters each), and just use a special character to mark the end of the string within each array…

<figure><img src="https://cdn-images-1.medium.com/max/800/0*DanfoIJ9nNaOKn-G" class="graf-image" /></figure>“Wigglesworth” is a cute baby name, right?

But look at all that wasted space after “Bill”. And what if we wanted to store a string that was *more* than 13 characters? We’d be out of luck.

There’s a better way. Instead of storing the strings right inside our array, let’s just put the strings wherever we can fit them in memory. Then we’ll have each element in our array hold the *address in memory* of its corresponding string. Each address is an integer, so really our outer array is just an array of integers. We can call each of these integers a **pointer**, since it points to another spot in memory.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*aLJ4pDr4uAXU1_Qs" class="graf-image" /></figure>The pointers are marked with a \* at the beginning.

Pretty clever, right? This fixes *both* the disadvantages of arrays:

1. <span id="0cd5">The items don’t have to be the same length — each string can be as</span>

long or as short as we want.

1. <span id="8ecd">We don’t need enough uninterrupted free memory to store all our</span>

strings next to each other — we can place each of them separately, wherever there’s space in RAM.

We fixed it! No more tradeoffs. Right?

Nope. Now we have a *new* tradeoff:

Remember how the memory controller sends the contents of *nearby* memory addresses to the processor with each read? And the processor caches them? So reading sequential addresses in RAM is *faster* because we can get most of those reads right from the cache?

<figure><img src="https://cdn-images-1.medium.com/max/800/0*UkWe4Y0h8O7mz0E_" class="graf-image" /></figure>Our original array was very **cache-friendly**, because everything was sequential. So reading from the 0th index, then the 1st index, then the 2nd, etc. got an extra speedup from the processor cache.

**But the pointers in this array make it *not* cache-friendly**, because the baby names are scattered randomly around RAM. So reading from the 0th index, then the 1st index, etc. doesn’t get that extra speedup from the cache.

That’s the tradeoff. This pointer-based array requires less uninterrupted memory and can accommodate elements that aren’t all the same size, *but* it’s *slower* because it’s not cache-friendly.

This slowdown isn’t reflected in the big O time cost. Lookups in this pointer-based array are *still* time.

------------------------------------------------------------------------

### Linked lists

Our word processor is definitely going to need fast appends — appending to the document is like the *main thing* you do with a word processor.

Can we build a data structure that can store a string, has fast appends, *and* doesn’t require you to say how long the string will be ahead of time?

Let’s focus first on not having to know the length of our string ahead of time. Remember how we used *pointers* to get around length issues with our array of baby names?

What if we pushed that idea even further?

What if each *character* in our string were a *two-index array* with:

1. <span id="4410">the character itself 2. a pointer to the next character</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*KcG72KzdYU-ftXWq" class="graf-image" /></figure>We would call each of these two-item arrays a **node** and we’d call this series of nodes a **linked list**.

Here’s how we’d actually implement it in memory:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*0KZl9hNN_IFP15RH" class="graf-image" /></figure>Notice how we’re free to store our nodes wherever we can find two open slots in memory. They don’t have to be next to each other. They don’t even have to be*in order*:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*lSOAxFuMAS2xK3JI" class="graf-image" /></figure>“But that’s not cache-friendly, “ you may be thinking. Good point! We’ll get to that.

The first node of a linked list is called the **head**, and the last node is usually called the **tail**.

Confusingly, some people prefer to use “tail” to refer to *everything after the head* of a linked list. In an interview it’s fine to use either definition. Briefly say which definition you’re using, just to be clear.

It’s important to have a pointer variable referencing the head of the list — otherwise we’d be unable to find our way back to the start of the list!

We’ll also sometimes keep a pointer to the tail. That comes in handy when we want to add something new to the end of the linked list. In fact, let’s try that out:

Suppose we had the string “LOG” stored in a linked list:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*c3-7UhJ39PZohsuz" class="graf-image" /></figure>Suppose we wanted to add an “S” to the end, to make it “LOGS”. How would we do that?

Easy. We just put it in a new node:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*U1OJCEX8zUd5QbuU" class="graf-image" /></figure>And tweak some pointers:

​1. Grab the last letter, which is “G”. Our tail pointer lets us do this in time.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*YzvjIGZQ6MnkGWcw" class="graf-image" /></figure>​2. Point the last letter’s next to the letter we’re appending (“S”).

<figure><img src="https://cdn-images-1.medium.com/max/800/0*-CA8KHc1tdRfVYoe" class="graf-image" /></figure>​3. Update the tail pointer to point to our*new* last letter, “S”.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Gbf918HOvlJhMHEf" class="graf-image" /></figure>That’s time.

Why is it time? Because the runtime doesn’t get bigger if the string gets bigger. No matter how many characters are in our string, we still just have to tweak a couple pointers for any append.

Now, what if instead of a linked list, our string had been a *dynamic array*? We might not have any room at the end, forcing us to do one of those doubling operations to make space:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*wSK-FGV0kCiskLNS" class="graf-image" /></figure>So with a dynamic array, our append would have a*worst-case* time cost of .

**Linked lists have worst-case -time appends, which is better than the worst-case time of dynamic arrays.**

That *worst-case* part is important. The *average case* runtime for appends to linked lists and dynamic arrays is the same: .

Now, what if we wanted to \*pre\*pend something to our string? Let’s say we wanted to put a “B” at the beginning.

For our linked list, it’s just as easy as appending. Create the node:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*MSenMuHQuHb1dV1X" class="graf-image" /></figure>And tweak some pointers:

1. <span id="cf06">Point “B”’s next to “L”. 2. Point the head to “B”.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*GoeByRt15C4nQvQr" class="graf-image" /></figure>Bam. time again.

But if our string were a *dynamic array*…

<figure><img src="https://cdn-images-1.medium.com/max/800/0*PhElGwum7RgTPqAy" class="graf-image" /></figure>And we wanted to add in that “B”:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*n4qjPFNz4BVHBt5w" class="graf-image" /></figure>Eep. We have to*make room* for the “B”!

We have to move *each character* one space down:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*n90vZS_Exw8Wjs2b" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*zryPfLJtzXqnGOth" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*PlEqTgXBKKpG5DCF" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*DampgIgyO6Silk8U" class="graf-image" /></figure>*Now* we can drop the “B” in there:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Xxkr4sYP9-drZeEe" class="graf-image" /></figure>What’s our time cost here?

It’s all in the step where we made room for the first letter. We had to move *all n* characters in our string. One at a time. That’s time.

**So linked lists have faster \*pre\*pends ( time) than dynamic arrays ( time).**

No “worst case” caveat this time — prepends for dynamic arrays are *always* time. And prepends for linked lists are *always* time.

These quick appends and prepends for linked lists come from the fact that linked list nodes can go anywhere in memory. They don’t have to sit right next to each other the way items in an array do.

So if linked lists are so great, why do we usually store strings in an array? **Because** <a href="https://dev.to/bgoonz/common-data-structures-their-background-11eg#constant-time-array-lookups" class="markup--anchor markup--p-anchor"><strong>arrays have -time lookups</strong></a>**.** And those constant-time lookups *come from* the fact that all the array elements are lined up next to each other in memory.

Lookups with a linked list are more of a process, because we have no way of knowing where the ith node is in memory. So we have to walk through the linked list node by node, counting as we go, until we hit the ith item.

def get\_ith\_item\_in\_linked\_list(head, i): if i &lt; 0: raise ValueError(“i can’t be negative: %d” % i) current\_node = head current\_position = 0 while current\_node: if current\_position == i: \# Found it! return current\_node \# Move on to the next node current\_node = current\_node.next current\_position += 1 raise ValueError(‘List has fewer than i + 1 (%d) nodes’ % (i + 1))

That’s i + 1 steps down our linked list to get to the ith node (we made our function zero-based to match indices in arrays). **So linked lists have -time lookups.** Much slower than the -time lookups for arrays and dynamic arrays.

Not only that — **walking down a linked list is *not* cache-friendly.** Because the next node could be *anywhere* in memory, we don’t get any benefit from the processor cache. This means lookups in a linked list are even slower.

So the tradeoff with linked lists is they have faster prepends and faster appends than dynamic arrays, *but* they have slower lookups.

------------------------------------------------------------------------

## Doubly Linked Lists

In a basic linked list, each item stores a single pointer to the next element.

In a **doubly linked list**, items have pointers to the next *and the previous* nodes.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*OEAPr9oLUTWovm86" class="graf-image" /></figure>Doubly linked lists allow us to traverse our list*backwards*. In a*singly*linked list, if you just had a pointer to a node in the*middle*of a list, there would be*no way* to know what nodes came before it. Not a problem in a doubly linked list.

### Not cache-friendly

Most computers have <a href="https://www.interviewcake.com/article/data-structures-coding-interview#ram" class="markup--anchor markup--p-anchor">caching systems that make reading from sequential addresses in memory faster than reading from scattered addresses</a>.

<a href="https://www.interviewcake.com/concept/array" class="markup--anchor markup--p-anchor">Array</a> items are always located right next to each other in computer memory, but linked list nodes can be scattered all over.

So iterating through a linked list is usually quite a bit slower than iterating through the items in an array, even though they’re both theoretically time.

------------------------------------------------------------------------

### Hash tables

Quick lookups are often really important. For that reason, we tend to use arrays (-time lookups) much more often than linked lists (-time lookups).

For example, suppose we wanted to count how many times each ASCII character appears in <a href="https://raw.githubusercontent.com/GITenberg/The-Tragedy-of-Romeo-and-Juliet_1112/master/1112.txt" class="markup--anchor markup--p-anchor">Romeo and Juliet</a>. How would we store those counts?

We can use arrays in a clever way here. Remember — characters are just numbers. In ASCII (a common character encoding) ‘A’ is 65, ‘B’ is 66, etc.

So we can use the character(‘s number value) as the *index* in our array, and store the *count* for that character *at that index* in the array:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*84jW_RfhW2MNqLGl" class="graf-image" /></figure>With this array, we can look up (and edit) the count for any character in constant time. Because we can access any index in our array in constant time.

Something interesting is happening here — this array isn’t just a list of values. This array is storing *two* things: characters and counts. The characters are *implied* by the indices.

**So we can think of an array as a *table* with *two columns*…except you don’t really get to pick the values in one column (the indices) — they’re always 0, 1, 2, 3, etc.**

But what if we wanted to put *any* value in that column and still get quick lookups?

Suppose we wanted to count the number of times each *word* appears in Romeo and Juliet. Can we adapt our array?

Translating a *character* into an array index was easy. But we’ll have to do something more clever to translate a *word* (a string) into an array index…

<figure><img src="https://cdn-images-1.medium.com/max/800/0*YuLIJSmkIcaveoBk" class="graf-image" /></figure>Here’s one way we could do it:

Grab the number value for each character and add those up.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*viH0fNvJKep80ecH" class="graf-image" /></figure>The result is 429. But what if we only have*30* slots in our array? We’ll use a common trick for forcing a number into a specific range: the modulus operator (%). Modding our sum by 30 ensures we get a whole number that’s less than 30 (and at least 0):

429 \\: \\% \\: 30 = 9

Bam. That’ll get us from a word (or any string) to an array index.

This data structure is called a **hash table** or **hash map**. In our hash table, the *counts* are the **values** and the *words* (“lies, “ etc.) are the **keys** (analogous to the *indices* in an array). The process we used to translate a key into an array index is called a **hashing function**.

!\[A blank array except for a 20, labeled as the value, stored at index

1. <span id="fadd">To the left the array is the word “lies,” labeled as the key, with an</span>

arrow pointing to the right at diamond with a question mark in the middle, labeled as the hashing function. The diamond points to the 9th index of the array.\](<a href="<<https://www.interviewcake.com/images/svgs/cs_for_hackers__hash_tables_lies_key_labeled.svg?bust=209>>" class="markup--anchor markup--p-anchor">https://www.interviewcake.com/images/svgs/cs_for_hackers__hash_tables_lies_key_labeled.svg?bust=209</a>)

The hashing functions used in modern systems get pretty complicated — the one we used here is a simplified example.

Note that our quick lookups are only in one direction — we can quickly get the value for a given key, but the only way to get the key for a given value is to walk through all the values and keys.

Same thing with arrays — we can quickly look up the value at a given index, but the only way to figure out the index for a given value is to walk through the whole array.

One problem — what if two keys hash to the same index in our array? Look at “lies” and “foes”:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*FEGUBbShygDT_Xmp" class="graf-image" /></figure>They both sum up to 429! So of course they’ll have the same answer when we mod by 30:

429 \\: \\% \\: 30 = 9

So our hashing function gives us the same answer for “lies” and “foes.” This is called a **hash collision**. There are a few different strategies for dealing with them.

Here’s a common one: instead of storing the actual values in our array, let’s have each array slot hold a *pointer* to a *linked list* holding the counts for all the words that hash to that index:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*FJ_oFYwm3xi5gvS6" class="graf-image" /></figure>One problem — how do we know which count is for “lies” and which is for “foes”? To fix this, we’ll store the*word* as well as the count in each linked list node:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*zUqqK4NJil6nCjlK" class="graf-image" /></figure>“But wait!” you may be thinking, “Now lookups in our hash table take time in the worst case, since we have to walk down a linked list.” That’s true! You could even say that in the worst case*every*key creates a hash collision, so our whole hash table*degrades to a linked list*.

In industry though, we usually wave our hands and say **collisions are rare enough that on *average* lookups in a hash table are time**. And there are fancy algorithms that keep the number of collisions low and keep the lengths of our linked lists nice and short.

But that’s sort of the tradeoff with hash tables. You get fast lookups by key…except *some* lookups could be slow. And of course, you only get those fast lookups in one direction — looking up the *key* for a given *value* still takes time

### Breadth-First Search (BFS) and Breadth-First Traversal

**Breadth-first search** (BFS) is a method for exploring a tree or graph. In a BFS, you first explore all the nodes one step away, then all the nodes two steps away, etc.

Breadth-first search is like throwing a stone in the center of a pond. The nodes you explore “ripple out” from the starting point.

Here’s a how a BFS would traverse this tree, starting with the root:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*m463vT-gl3X8F6AS" class="graf-image" /></figure>We’d visit all the immediate children (all the nodes that’re one step away from our starting node):

<figure><img src="https://cdn-images-1.medium.com/max/800/0*_un0xsKDp2pgNPoM" class="graf-image" /></figure>Then we’d move on to all*those*nodes’ children (all the nodes that’re*two steps* away from our starting node):

<figure><img src="https://cdn-images-1.medium.com/max/800/0*b6vBOLT_H0Bpf2v4" class="graf-image" /></figure>And so on:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*CtPtZ_RChr2hrfH8" class="graf-image" /></figure>Until we reach the end.

Breadth-first search is often compared with **depth-first search**.

Advantages:

- <span id="123c">A BFS will find the **shortest path** between the starting point and</span>

any other reachable node. A depth-first search will not necessarily find the shortest path.

Disadvantages

- <span id="a412">A BFS on a binary tree *generally* requires more memory than a DFS.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*1ptw-98Yjj1scRX6" class="graf-image" /></figure>### Binary Search Tree

A **binary tree** is a **tree** where &lt;==(***every node has two or fewer children***)==&gt;.  
The children are usually called ***left*** and ***right***.

class BinaryTreeNode(object):

This lets us build a structure like this:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*jrVPHH5A60cni3qY" class="graf-image" /></figure>That particular example is special because every level of the tree is completely full. There are no “gaps.” We call this kind of tree “**perfect**.”

Binary trees have a few interesting properties when they’re perfect:

**Property 1: the number of total nodes on each “level” doubles as we move down the tree.**

<figure><img src="https://cdn-images-1.medium.com/max/800/0*r1nTqbN_TJyaaT4L" class="graf-image" /></figure>**Property 2: the number of nodes on the last level is equal to the sum of the number of nodes on all other levels (plus 1).** In other words, about*half* of our nodes are on the last level.

&lt;==(*\*Let’s call the number of nodes n, \**)==&gt;

&lt;==(**\_**and the height of the tree h. **\_**)==&gt;

**h can also be thought of as the “number of levels.”**

If we had h, how could we calculate n?

Let’s just add up the number of nodes on each level!

If we zero-index the levels, the number of nodes on the xth level is exactly 2^x.

1. <span id="937f">Level 0: 2⁰ nodes,</span>
2. <span id="5630">2. Level 1: 2¹ nodes,</span>
3. <span id="72ca">3. Level 2: 2² nodes,</span>
4. <span id="fd85">4. Level 3: 2³ nodes,</span>
5. <span id="1685">5. *etc*</span>

So our total number of nodes is:

**n = 2⁰ + 2¹ + 2² + 2³ + … + 2^{h-1}**

Why only up to 2^{h-1}?

Notice that we **started counting our levels at 0.**

- <span id="7500">So if we have h levels in total,</span>
- <span id="6752">the last level is actually the “h-1”-th level.</span>
- <span id="da3a">That means the number of nodes on the last level is 2^{h-1}.</span>

But we can simplify.

**Property 2 tells us that the number of nodes on the last level is (1 more than) half of the total number of nodes**,

**so we can just take the number of nodes on the last level, multiply it by 2, and subtract 1 to get the number of nodes overall**.

- <span id="d63d">We know the number of nodes on the last level is 2^{h-1},</span>
- <span id="1c97">So:</span>

**n = 2^{h-1} \* 2–1  
n = 2^{h-1} \* 2¹ — 1  
n = 2^{h-1+1}- 1  
n = 2^{h} — 1**

So that’s how we can go from h to n. What about the other direction?

We need to bring the h down from the exponent.

That’s what logs are for!

First, some quick review.

&lt;==(log\_{10} (100) )==&gt;

simply means,

**“What power must you raise 10 to in order to get 100?”**.

Which is 2,

because .

&lt;==(10² = 100 )==&gt;

### Graph Data Structure: Directed, Acyclic, etc

Graph =====

### Binary numbers

Let’s put those bits to use. Let’s store some stuff. Starting with numbers.

The number system we usually use (the one you probably learned in elementary school) is called **base 10**, because each digit has *ten* possible values (1, 2, 3, 4, 5, 6, 7, 8, 9, and 0).

But computers don’t have digits with ten possible values. They have *bits* with *two* possible values. So they use **base 2** numbers.

Base 10 is also called **decimal**. Base 2 is also called **binary**.

To understand binary, let’s take a closer look at how decimal numbers work. Take the number “101” in decimal:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*SeL92lcm_RTuG-32" class="graf-image" /></figure>Notice we have two “1”s here, but they don’t*mean*the same thing. The leftmost “1”*means*100, and the rightmost “1”*means* 1. That’s because the leftmost “1” is in the hundreds place, while the rightmost “1” is in the ones place. And the “0” between them is in the tens place.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*5kyLwItFLJiwsDRY" class="graf-image" /></figure>**So this “101” in base 10 is telling us we have “1 hundred, 0 tens, and 1 one.”**

<figure><img src="https://cdn-images-1.medium.com/max/800/0*BHTYqymE77CnzKpP" class="graf-image" /></figure>Notice how the*places*in base 10 (ones place, tens place, hundreds place, etc.) are*sequential powers of 10*:

- <span id="8102">10⁰=1 \* 10¹=10 \* 10²=100 \* 10³=1000 \* etc.</span>

**The places in *binary* (base 2) are sequential powers of *2*:**

- <span id="1ddc">2⁰=1 \* 2¹=2 \* 2²=4 \* 2³=8 \* etc.</span>

So let’s take that same “101” but this time let’s read it as a *binary* number:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*pKEnJ9JCGcMapiG4" class="graf-image" /></figure>Reading this from right to left: we have a 1 in the ones place, a 0 in the twos place, and a 1 in the fours place. So our total is 4 + 0 + 1 which is 5.
