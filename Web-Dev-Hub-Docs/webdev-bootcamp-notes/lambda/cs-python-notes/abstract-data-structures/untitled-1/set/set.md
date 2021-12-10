# Set

## Set <a id="ce19"></a>

A [set](https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset) object is an unordered collection of distinct hashable objects. It’s one of Python’s built-in types and allows the dynamic adding and removing of elements, iteration, and operations with another set objects.

## Set

Sets are as fundamental to computer science as they are to mathematics. Sets manipulated by algorithms can grow, shrink, or otherwise change over time, we call such sets **dynamic**. Data structures present techniques for representing finite dynamic sets and manipulating them on a computer.

The best way to implement a dynamic set depends upon the operations that must be supported.

### Operations on dynamic sets

Can be grouped into two categories:

1. **Queries**, which simply return information about the set.
2. **Modifying operations**, which change the set.

- `SEARCH(S,k)`
- `INSERT(S,x)`
- `DELETE(S,x)`
- `MINIMUM(S)`
- `MAXIMUM(S)`
- `SUCCESSOR(S,x)`
- `PREDECESSOR(S,x)`

### Dictionaries

Algorithms may require several different types of operations to be performed on sets. For example, many algorithms need only the ability to:

- Insert elements into
- Delete elements from
- Test membership in a set.

We call a dynamic set that supports these operations a **dictionary**.

### Other types of sets

Other algorithms require more complicated operations, such as min-priority queues, which support the operation of inserting an element into and extracting the smallest element from a set.

{% embed url="https://gist.github.com/bgoonz/fd055be6416beeaca6e70c7a759b18fd" %}
