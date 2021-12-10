# Linked List

{% tabs %} {% tab title="ll.py" %}

```python
# linear data structure made up of nodes and refs to the next node

# lets make some node class
class Node:
    def __init__(self, value, next_node = None):
        # value that the node is holding
        self.value = value
        # ref to the next node in the chain
        self.next_node = next_node


    def get_value(self):
        """
        Method to get the value of a node
        """
        return self.value

    def get_next(self):
        """
        Method to get the node's "next_node"
        """
        return self.next_node

    def set_next(self, new_next):
        """
        Method to update the node's "next_node" to the new_next
        """
        self.next_node = new_next




# now lets think of how we can make nodes interact in a way that consolidates their pieces together

# lets make a LinkedList class
# think of the idea of having a head and a tail like a snake
# where the snake can grow based upon having more links in it

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def add_to_tail(self, value):
        # wrap the value in a new Node
        new_node = Node(value)
        # check if the linked list is empty
        if self.head is None and self.tail is None:
            # set the head and tail to the new node
            self.head = new_node
            self.tail = new_node
        # otherwise the list must have at least one item in there
        else:
            # update the last node's "next_node" to the new node
            self.tail.set_next(new_node) # (last node in chain).next_node = new_node
            # update the "self.tail" to point to the new node that we just added
            self.tail = new_node

    def remove_tail(self):
        """
        remove the last node in the chain and return its value
        """
        # check for empty list
        if self.head is None and self.tail is None:
            # return None
            return None
        # check if there is only one node
        if self.head == self.tail:
            # store the value of the node that we are going to remove
            value = self.tail.get_value()
            # remove the node
            # set head and the tail to None
            self.head = None
            self.tail = None
            # return the stored value
            return value
        # otherwise
        else:
            # store the value of the node that we are going to remove
            value = self.tail.get_value()
            # we need to set the "self.tail" to the second to last node
            # we can only do this by traversing the whole list from beginning to end

            # starting from the head
            current_node = self.head

            # keep iterating until the node after "current_node" is the tail
            while current_node.get_next() != self.tail:
                # keep looping
                current_node = current_node.get_next()

            # at the end of the iteration set "self.tail" to the current_node
            self.tail = current_node
            # set the new tail's "next_node" to None
            self.tail.set_next(None)
            # return Value
            return value

    def add_to_head(self, value):
            # wrap the input value in a node
            new_node = Node(value)
            # check if the linked list is empty
            if not self.head and not self.tail:
                # if the list is initially empty, set both head and tail to the new node
                self.head = new_node
                self.tail = new_node
            # we have a non-empty list, add the new node to the head
            else:
                # set the new node's `next` to refer to the current head
                new_node.set_next(self.head)
                # set the list's head reference to the new node
                self.head = new_node

    def remove_head(self):
        # check for empty list
        if self.head is None and self.tail is None:
            # return None
            return None
        if self.head == self.tail:
            # store the value of the node that we are going to remove
            value = self.head.get_value()
            # remove the node
            # set head and the tail to None
            self.head = None
            self.tail = None
            # return the stored value
            return value
        else:
            # store the old head's value
            value = self.head.get_value()
            # set self.head to old head's next
            self.head = self.head.get_next()
            # return the value
            return value



n1 = Node(1)
n2 = Node(2)
n3 = Node(3)
n4 = Node(4)

n1.set_next(n2) # n1.next_node = n2
print(n1.get_value()) # => 2
print('n1',n1)





#OUTPUT:
#1
#n1 <__main__.Node object at 0x0000026367BD0280>

`
```

{% endtab %}

{% tab title="Doublely-linked-list.py" %}

```python
"""
Each ListNode holds a reference to its previous node
as well as its next node in the List.
"""
class ListNode:
    def __init__(self, value, prev=None, next=None):
        self.prev = prev
        self.value = value
        self.next = next

"""
Our doubly-linked list class. It holds references to
the list's head and tail nodes.
"""
class DoublyLinkedList:
    def __init__(self, node=None):
        self.head = node
        self.tail = node
        self.length = 1 if node is not None else 0

    def __len__(self):
        return self.length

    """
    Wraps the given value in a ListNode and inserts it
    as the new head of the list. Don't forget to handle
    the old head node's previous pointer accordingly.
    """
    def add_to_head(self, value):
        # wrap the input value in a node
        new_node = ListNode(value)
        # increment the length
        self.length += 1
        # check if the linked list is empty
        if not self.head and not self.tail:
            # if the list is initially empty, set both head and tail to the new node
            self.head = new_node
            self.tail = new_node
        # we have a non-empty list, add the new node to the head
        else:
            # set the new node's `next` to refer to the current head
            new_node.next = self.head
            # set the current head's 'prev' to refer to the new_node (added to make it work with DLL)
            self.head.prev = new_node
            # set the list's head reference to the new node
            self.head = new_node

    """
    Removes the List's current head node, making the
    current head's next node the new head of the List.
    Returns the value of the removed Node.
    """
    def remove_from_head(self):
        value = self.head.value
        self.delete(self.head)
        return value

    """
    Wraps the given value in a ListNode and inserts it
    as the new tail of the list. Don't forget to handle
    the old tail node's next pointer accordingly.
    """
    def add_to_tail(self, value):
        new_node = ListNode(value, None, None)
        self.length += 1
        if not self.tail and not self.head:
            self.tail = new_node
            self.head = new_node
        else:
            new_node.prev = self.tail
            self.tail.next = new_node
            self.tail = new_node

    """
    Removes the List's current tail node, making the
    current tail's previous node the new tail of the List.
    Returns the value of the removed Node.
    """
    def remove_from_tail(self):
        value = self.tail.value
        self.delete(self.tail)
        return value

    """
    Removes the input node from its current spot in the
    List and inserts it as the new head node of the List.
    """
    def move_to_front(self, node):
        if node is self.head:
            return
        value = node.value
        if node is self.tail:
            self.remove_from_tail()
        else:
            if node.prev:
                node.prev.next = node.next
            if node.next:
                node.next.prev = node.prev

            self.length -= 1
        self.add_to_head(value)

    """
    Removes the input node from its current spot in the
    List and inserts it as the new tail node of the List.
    """
    def move_to_end(self, node):
        if node is self.tail:
            return
        value = node.value
        if node is self.head:
            self.remove_from_head()
        else:
            if node.prev:
                node.prev.next = node.next
            if node.next:
                node.next.prev = node.prev

            self.length -= 1
        self.add_to_tail(value)

    """
    Deletes the input node from the List, preserving the
    order of the other elements of the List.
    """
    def delete(self, node):
        if not self.head and not self.tail:
            return
        if self.head is self.tail:
            self.head = None
            self.tail = None
        elif self.head is node:
            self.head = node.next
            if node.prev:
                node.prev.next = node.next
            if node.next:
                node.next.prev = node.prev
        elif self.tail is node:
            self.tail = node.prev
            if node.prev:
                node.prev.next = node.next
            if node.next:
                node.next.prev = node.prev
        else:
            if node.prev:
                node.prev.next = node.next
            if node.next:
                node.next.prev = node.prev
        self.length -= 1

    """
    Finds and returns the maximum value of all the nodes
    in the List.
    """
    def get_max(self):
        if not self.head:
            return None
        max_val = self.head.value
        current = self.head
        while current:
            if current.value > max_val:
                max_val = current.value
            current = current.next
        return max_val
```

{% endtab %}

{% tab title="DLL-test.py" %}

```python
import unittest
from doubly_linked_list import ListNode
from doubly_linked_list import DoublyLinkedList

class DoublyLinkedListTests(unittest.TestCase):
    def setUp(self):
        self.node = ListNode(1)
        self.dll = DoublyLinkedList(self.node)

    def test_list_remove_from_tail(self):
        self.dll.remove_from_tail()
        self.assertIsNone(self.dll.head)
        self.assertIsNone(self.dll.tail)
        self.assertEqual(len(self.dll), 0)

        self.dll.add_to_tail(33)
        self.assertEqual(self.dll.head.value, 33)
        self.assertEqual(self.dll.tail.value, 33)
        self.assertEqual(len(self.dll), 1)
        self.assertEqual(self.dll.remove_from_tail(), 33)
        self.assertEqual(len(self.dll), 0)

        self.dll.add_to_tail(68)
        self.assertEqual(len(self.dll), 1)
        self.assertEqual(self.dll.remove_from_tail(), 68)
        self.assertEqual(len(self.dll), 0)

    def test_list_remove_from_head(self):
        self.dll.remove_from_head()
        self.assertIsNone(self.dll.head)
        self.assertIsNone(self.dll.tail)
        self.assertEqual(len(self.dll), 0)

        self.dll.add_to_head(2)
        self.assertEqual(self.dll.head.value, 2)
        self.assertEqual(self.dll.tail.value, 2)
        self.assertEqual(len(self.dll), 1)
        self.assertEqual(self.dll.remove_from_head(), 2)
        self.assertEqual(len(self.dll), 0)

        self.dll.add_to_head(55)
        self.assertEqual(len(self.dll), 1)
        self.assertEqual(self.dll.remove_from_head(), 55)
        self.assertEqual(len(self.dll), 0)

    def test_list_add_to_tail(self):
        self.assertEqual(self.dll.tail.value, 1)
        self.assertEqual(len(self.dll), 1)

        self.dll.add_to_tail(30)
        self.assertEqual(self.dll.tail.prev.value, 1)
        self.assertEqual(self.dll.tail.value, 30)
        self.assertEqual(len(self.dll), 2)

        self.dll.add_to_tail(20)
        self.assertEqual(self.dll.tail.prev.value, 30)
        self.assertEqual(self.dll.tail.value, 20)
        self.assertEqual(len(self.dll), 3)

    def test_list_add_to_head(self):
        self.assertEqual(self.dll.head.value, 1)

        self.dll.add_to_head(10)
        self.assertEqual(self.dll.head.value, 10)
        self.assertEqual(self.dll.head.next.value, 1)
        self.assertEqual(len(self.dll), 2)

    def test_list_move_to_end(self):
        self.dll.add_to_head(40)
        self.assertEqual(self.dll.tail.value, 1)
        self.assertEqual(self.dll.head.value, 40)

        self.dll.move_to_end(self.dll.head)
        self.assertEqual(self.dll.tail.value, 40)
        self.assertEqual(self.dll.tail.prev.value, 1)
        self.assertEqual(len(self.dll), 2)

        self.dll.add_to_tail(4)
        self.dll.move_to_end(self.dll.head.next)
        self.assertEqual(self.dll.tail.value, 40)
        self.assertEqual(self.dll.tail.prev.value, 4)
        self.assertEqual(len(self.dll), 3)

    def test_list_move_to_front(self):
        self.dll.add_to_tail(3)
        self.assertEqual(self.dll.head.value, 1)
        self.assertEqual(self.dll.tail.value, 3)

        self.dll.move_to_front(self.dll.tail)
        self.assertEqual(self.dll.head.value, 3)
        self.assertEqual(self.dll.head.next.value, 1)
        self.assertEqual(len(self.dll), 2)

        self.dll.add_to_head(29)
        self.dll.move_to_front(self.dll.head.next)
        self.assertEqual(self.dll.head.value, 3)
        self.assertEqual(self.dll.head.next.value, 29)
        self.assertEqual(len(self.dll), 3)

    def test_list_delete(self):
        self.dll.delete(self.node)
        self.assertIsNone(self.dll.head)
        self.assertIsNone(self.dll.tail)
        self.assertEqual(len(self.dll), 0)

        self.dll.add_to_tail(1)
        self.dll.add_to_head(9)
        self.dll.add_to_tail(6)

        self.dll.delete(self.dll.head.next)
        self.assertEqual(self.dll.head.value, 9)
        self.assertEqual(self.dll.head.next, self.dll.tail)
        self.assertEqual(self.dll.tail.value, 6)

        self.dll.delete(self.dll.head)
        self.assertEqual(self.dll.head.value, 6)
        self.assertEqual(self.dll.tail.value, 6)
        self.assertEqual(len(self.dll), 1)

        self.dll.delete(self.dll.head)
        self.assertIsNone(self.dll.head)
        self.assertIsNone(self.dll.tail)
        self.assertEqual(len(self.dll), 0)

    def test_get_max(self):
        self.assertEqual(self.dll.get_max(), 1)
        self.dll.add_to_tail(100)
        self.assertEqual(self.dll.get_max(), 100)
        self.dll.add_to_tail(55)
        self.assertEqual(self.dll.get_max(), 100)
        self.dll.add_to_tail(101)
        self.assertEqual(self.dll.get_max(), 101)

if __name__ == '__main__':
    unittest.main()
```

{% endtab %} {% endtabs %}

A Linked List is a data structure in which the objects are arranged in a linear order. Unlike an array, however, in which the linear order is determined by the array indices, the order in a linked list is determined by a pointer in each object.

Each element of a **doubly linked list** is an object with an attribute _key_ and two other pointer attributes _next_ and _prev_.

A list may have one of several forms. It may be either singly linked or doubly linked, it may be sorted or not, and it may be circular or not.

###

```python
"""
First the Node class needs to be created because every item in a linked list
is a node item containing the data and the pointer to the node it links to
"""


class Node:

    def __init__(self, data):
        self.data = data
        self.nextNode = None


"""
Next the linked list can be created and initialized with the head as none
because it doesn't exist yet and the number of nodes to 0 because its empty
"""


class LinkedList:

    def __init__(self):
        self.head = None
        self.numOfNodes = 0

        """
        Functions for the LinkedList class:
        """

    # function to insert a new node at the beginning of the list O(1)
    def insert_start(self, data):

        # first increase the number of nodes by 1
        self.numOfNodes = self.numOfNodes + 1
        # then insert the data into the new node
        new_node = Node(data)

        # check to see if there is a head
        if not self.head:
            # if not create it with the new node
            self.head = new_node
        # if there is a head
        else:
            # set the pointer of the new node to the old head
            new_node.nextNode = self.head
            # set the new node as the new head of the list
            self.head = new_node

    # function to insert a new node at the end of the list O(N)
    def insert_end(self, data):

        # first increase the number of nodes by 1
        self.numOfNodes = self.numOfNodes + 1
        # then insert the data into the new node
        new_node = Node(data)

        # get a reference to the head node to begin iteration
        actual_node = self.head

        # iterate the node looking for the node that points to Null
        while actual_node.nextNode is not None:
            # if not the last node pointing to Null
            # change active_node to the next node its pointing to
            actual_node = actual_node.nextNode

        # when we find the node that is pointing to Null
        # change its pointer to point to the new node
        actual_node.nextNode = new_node

    # function to get the size of the linked list O(1)
    def size_of_list(self):
        # return the number of nodes the list contains
        return self.numOfNodes

    # function to traverse the linked list and print all of its nodes data
    def traverse(self):

        # set the reference to the first node
        actual_node = self.head

        # iterate the list while the referenced node is not Null
        while actual_node is not None:
            # print out the actual_node data value
            print(actual_node.data)
            # move the reference to the next node in the list
            actual_node = actual_node.nextNode

    # function to remove a node from the list O(N)
    def remove(self, data):

        # if the list is empty return
        if self.head is None:
            return

        # set the reference to the first node
        actual_node = self.head
        # set the reference to the previous node which is none at first
        previous_node = None

        # iterate the list continuing while the actual_node doesn't contain
        # what we're looking for and isn't Null (empty list or end of list)
        while actual_node is not None and actual_node.data != data:
            # consider  the next node in the list
            # iterate the prev node to current
            previous_node = actual_node
            # iterate the actual node to the next
            actual_node = actual_node.nextNode

        # if we reach the end of the list and don't find a match return
        if actual_node is None:
            return

        # at this point we have found a match
        # first decrease the number of items in the list
        self.numOfNodes -= 1

        # after the while loop ( the node with the data was found)
        # if the previous node is Null then the head node is the one to remove
        if previous_node is None:
            # setting the new head to be the next node will remove the current
            # actual node
            self.head = actual_node.nextNode
        # if previous node is not Null
        else:
            # set the prev.nextNode to be the actual nextNode cutting out the
            # actual node we want to remove
            previous_node.nextNode = actual_node.nextNode



"""
use the functions just created
"""
# create a new LinkedList
linked_list = LinkedList()
# insert a few nodes at the beginning of the list O(1)
linked_list.insert_start(4)
linked_list.insert_start(3)
linked_list.insert_start(7)
# insert a node at the end of the list O(N)
linked_list.insert_end(10)
# remove a node from list O(N)
linked_list.remove(3)
# print the node values of the list O(N)
linked_list.traverse()
# print the size of the list
print(f'size: {linked_list.size_of_list()}')


```

## Linked List

- Given a linked list, in addition to the next pointer, each node has a child pointer that can point to a separate list. With the head node, flatten the list to a single-level linked list.
  - [Source](http://blog.gainlo.co/index.php/2016/06/12/flatten-a-linked-list/)
- Reverse a singly linked list. Implement it recursively and iteratively.
- Convert a binary tree to a doubly circular linked list.
- Implement an LRU cache with O\(1\) runtime for all its operations.
- Check distance between values in linked list.
- A question involving an API's integration with hash map where the buckets of hash map are made up of linked lists.
- Given a singly linked list \(a list which can only be traversed in one direction\), find the item that is located at 'k' items from the end. So if the list is a, b, c, d and k is 2 then the answer is 'c'. The solution should not search the list twice.
- How can you tell if a Linked List is a Palindrome?

###

### Linked lists in Python

#### Implementation:

```python
# Singly-Linked List
#
# The linked list is passed around as a variable pointing to the
# root node of the linked list, or None if the list is empty.

class LinkedListNode:
    def __init__(self, value):
        self.value = value
        self.next = None

def linked_list_append(linked_list, value):
    '''Appends a value to the end of the linked list'''
    node = linked_list
    insert_node = LinkedListNode(value)
    if not node:
        return insert_node
    while node.next:
        node = node.next
    node.next = insert_node
    return linked_list

def linked_list_insert_index(linked_list, value, index):
    '''Inserts a value at a particular index'''
    node = linked_list
    insert_node = LinkedListNode(value)

    # Check if inserting at head
    if index == 0:
        insert_node.next = node
        return insert_node

    # Skip ahead
    for _ in range(index - 1):
        node = node.next
        if not node:
            raise ValueError
    insert_node.next = node.next
    node.next = insert_node
    return linked_list

def linked_list_delete(linked_list, value):
    '''Deletes the first occurrence of a value in the linked list'''
    node = linked_list

    # Check if deleting at head
    if node.value == value:
        return node.next

    # Skip ahead
    while node.next:
        if node.next.value == value:
            node.next = node.next.next
            return linked_list
        node = node.next
    raise ValueError

def linked_list_delete_index(linked_list, index):
    '''Deletes the element at a particular index in the linked list'''
    node = linked_list

    # Check if deleting at head
    if index == 0:
        return node.next

    # Skip ahead
    for _ in range(index - 1):
        node = node.next
        if not node:
            raise ValueError
    if not node.next:
        raise ValueError
    node.next = node.next.next
    return linked_list

def linked_list_iter(linked_list):
    '''Lazy iterator over each node in the linked list'''
    node = linked_list
    while node is not None:
        yield node
        node = node.next


# Append to back
linked_list = None    # Start with an empty linked list
linked_list = linked_list_append(linked_list, 1)
linked_list = linked_list_append(linked_list, 2)
linked_list = linked_list_append(linked_list, 4)
print([node.value for node in linked_list_iter(linked_list)])

# Insert by index
linked_list = linked_list_insert_index(linked_list, 0, 0) # Front
print([node.value for node in linked_list_iter(linked_list)])
linked_list = linked_list_insert_index(linked_list, 3, 3) # Back
print([node.value for node in linked_list_iter(linked_list)])

# Delete "3"
linked_list = linked_list_delete(linked_list, 3)
print([node.value for node in linked_list_iter(linked_list)])

# Delete by index
linked_list = linked_list_delete_index(linked_list, 0)
print([node.value for node in linked_list_iter(linked_list)])
linked_list = linked_list_delete_index(linked_list, 1)
print([node.value for node in linked_list_iter(linked_list)])

# Delete until empty
linked_list = linked_list_delete_index(linked_list, 0)
linked_list = linked_list_delete_index(linked_list, 0)
print([node.value for node in linked_list_iter(linked_list)])

```

#### Output:

```text
[1, 2, 4]
[0, 1, 2, 4]
[0, 1, 2, 3, 4]
[0, 1, 2, 4]
[1, 2, 4]
[1, 4]
[]
```

[Linked lists](https://www.educative.io/blog/data-structures-linked-list-java-tutorial) are a sequential collection of data that uses **relational pointers on each data node** to link to the next node in the list.

Unlike arrays, linked lists do not have objective positions in the list. Instead, they have relational positions based on their surrounding nodes.

The first node in a linked list is called the **head node,** and the final is called the **tail node**, which has a `null` pointer.

![widget](https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=300,q=10/api/page/4827483893923840/image/download/5638844823633920)

![widget](https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=600/api/page/4827483893923840/image/download/5638844823633920)

Linked lists can be singly or doubly linked depending if each node has just a single pointer to the next node or if it also has a second pointer to the previous node.

You can think of linked lists like a chain; individual links only have a connection to their immediate neighbors but all the links together form a larger structure.

Python does not have a built-in implementation of linked lists and therefore requires that you implement a `Node` class to hold a data value and one or more pointers.

**Advantages:**

- Efficient insertion and deletion of new elements
- Simpler to reorganize than arrays
- Useful as a starting point for advanced data structures like graphs or trees

**Disadvantages:**

- Storage of pointers with each data point increases memory usage
- Must always traverse the linked list from Head node to find a specific element

**Applications:**

- Building block for advanced data structures
- Solutions that call for frequent addition and removal of data

#### Common linked list interview questions in Python

- Print the middle element of a given linked list
- Remove duplicate elements from a sorted linked list
- Check if a singly linked list is a palindrome
- Merge K sorted linked lists
- Find the intersection point of two linked lists

{% tabs %} {% tab title="Implementation " %}

```python
"""The LinkedList code from before is provided below.
Add three functions to the LinkedList.
"get_position" returns the element at a certain position.
The "insert" function will add an element to a particular
spot in the list.
"delete" will delete the first element with that
particular value.
Then, use "Test Run" and "Submit" to run the test cases
at the bottom."""

class Element(object):
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList(object):
    def __init__(self, head=None):
        self.head = head

    def append(self, new_element):
        current = self.head
        if self.head:
            while current.next:
                current = current.next
            current.next = new_element
        else:
            self.head = new_element

    def get_position(self, position):
        """Get an element from a particular position.
        Assume the first position is "1".
        Return "None" if position is not in the list."""
        current = self.head
        if(self.head):
            for i in range(position)[1:]:
                if(current.next==None):
                    return None
                else:
                    current=current.next
            return current
        return None

    def insert(self, new_element, position):
        """Insert a new node at the given position.
        Assume the first position is "1".
        Inserting at position 3 means between
        the 2nd and 3rd elements."""
        current = self.head
        if(self.head):
            for i in range(position)[1:]:
                if(i==position-1):
                    after = current.next
                    current.next = new_element
                    new_element.next = after
                elif(current.next!=None):
                    current = current.next
                else:
                    return 'position out of bounds'
        pass


    def delete(self, value):
        """Delete the first node with a given value."""
        current = self.head
        if(self.head):
            while(current.next!=None):
                if(current.next.value==value):
                    after = current.next.next
                    current.next = after
                else:
                    current = current.next

        if(self.head.value==value):
            after = self.head.next
            self.head = after
        pass

# Test cases
# Set up some Elements
e1 = Element(1)
e2 = Element(2)
e3 = Element(3)
e4 = Element(4)

# Start setting up a LinkedList
ll = LinkedList(e1)
ll.append(e2)
ll.append(e3)

# Test get_position
# Should print 3
print ll.head.next.next.value
# Should also print 3
print ll.get_position(3).value

# Test insert
ll.insert(e4,3)
# Should print 4 now
print ll.get_position(3).value

# Test delete
ll.delete(1)
# Should print 2 now
print ll.get_position(1).value
# Should print 4 now
print ll.get_position(2).value
# Should print 3 now
print ll.get_position(3).value

```

{% endtab %}

{% tab title="Simple" %}

```python
class Node:
    def __init__(self, dataval=None):
        self.dataval = dataval
        self.nextval = None

class SLinkedList:
    def __init__(self):
        self.headval = None

list1 = SLinkedList()
list1.headval = Node("Mon")
e2 = Node("Tue")
e3 = Node("Wed")
# Link first Node to second node
list1.headval.nextval = e2

# Link second Node to third node
e2.nextval = e3

```

{% endtab %}

{% tab title="Advanced" %}

```python
from __future__ import annotations

from collections.abc import Iterable, Iterator
from typing import Optional

from graph_examples.linked_lists.base_lists import (
    BaseCircularLinkedList,
    BaseLinearLinkedList,
    BaseDoublyLinkedList,
    BaseSinglyLinkedList,
)
from graph_examples.linked_lists.nodes import LinkedNode, DoublyLinkedNode, CircularLinkedNode, CircularDoublyLinkedNode
from graph_examples.linked_lists.base_nodes import T


class LinkedList(BaseLinearLinkedList[T], BaseSinglyLinkedList[T]):
    def __init__(self, values: Iterable[T] = ()) -> None:
        values_iter = iter(values)
        try:
            self.head = LinkedNode(next(values_iter))
        except StopIteration:
            self.head = None
        node = self.head
        for value in values_iter:
            node.next = LinkedNode(value)
            node = node.next

    def appendleft(self, value: T) -> None:
        self.head = LinkedNode(value, self.head)

    def popleft(self) -> T:
        if not self:
            raise IndexError
        node = self.head
        self.head = node.next
        return node.value

    def reverse(self) -> None:
        node = self.head
        last_node = None
        while node is not None:
            node.next, last_node, node = last_node, node, node.next
        self.head = last_node


class DoublyLinkedList(BaseLinearLinkedList[T], BaseDoublyLinkedList[T]):
    def __init__(self, values: Iterable = ()) -> None:
        values_iter = iter(values)
        try:
            self.head = DoublyLinkedNode(next(values_iter))
        except StopIteration:
            self.head = None
        node = self.head
        for value in values_iter:
            node.next = DoublyLinkedNode(value, None, node)
            node = node.next
        self.tail = node

    def __reversed__(self) -> Iterator[T]:
        node = self.tail
        while node is not None:
            yield node.value
            node = node.last

    def append(self, value: T):
        old_tail = self.tail
        self.tail = DoublyLinkedNode(value, None, old_tail)
        if old_tail is None:
            self.head = self.tail
        else:
            old_tail.next = self.tail

    def appendleft(self, value: T):
        old_head = self.head
        self.head = DoublyLinkedNode(value, old_head)
        if old_head is None:
            self.tail = self.head
        else:
            old_head.last = self.head

    def pop(self) -> T:
        if not self:
            raise IndexError
        old_tail = self.tail
        self.tail = old_tail.last
        if self.tail is None:
            self.head = None
        else:
            self.tail.next = None
        return old_tail.value

    def popleft(self) -> T:
        if not self:
            raise IndexError
        old_head = self.head
        self.head = old_head.next
        if self.head is None:
            self.tail = None
        else:
            self.head.last = None
        return old_head.value

    def reverse(self) -> None:
        node = self.head
        self.head, self.tail = self.tail, self.head
        while node is not None:
            node.next, node.last, node = node.last, node.next, node.next


class CircularLinkedList(BaseCircularLinkedList[T], BaseSinglyLinkedList[T]):
    def __init__(self, values: Iterable[T] = ()):
        values_iter = iter(values)
        try:
            head = CircularLinkedNode(next(values_iter))
        except StopIteration:
            head = None
        node = head
        for value in values_iter:
            node.next = CircularLinkedNode(value, head)
            node = node.next
        self.tail = node

    @property
    def head(self) -> CircularLinkedNode[T]:
        return self.tail.next

    @head.setter
    def head(self, node: CircularLinkedNode[T]):
        self.tail.next = node

    def appendleft(self, value: T) -> None:
        if not self:
            self.tail = CircularLinkedNode(value)
        else:
            self.head = CircularLinkedNode(value, self.head)

    def reverse(self) -> None:
        if not self:
            return
        node = self.head
        last_node = self.tail
        while node is not self.tail:
            node.next, last_node, node = last_node, node, node.next
        self.tail.next, self.tail = last_node, self.head


class CircularDoublyLinkedList(BaseCircularLinkedList[T], BaseDoublyLinkedList[T]):
    tail: Optional[CircularDoublyLinkedNode[T]]
    head: Optional[CircularDoublyLinkedNode[T]]

    def __init__(self, values: Iterable[T] = ()) -> None:
        values_iter = iter(values)
        try:
            head = CircularDoublyLinkedNode(next(values_iter))
        except StopIteration:
            head = None
        node = head
        for value in values_iter:
            node.next = CircularDoublyLinkedNode(value, head, node)
            node = node.next
            head.last = node
        self.tail = node

    @property
    def head(self) -> CircularDoublyLinkedNode[T]:
        return self.tail.next

    def __reversed__(self) -> Iterator[T]:
        if not self:
            return
        yield self.tail.value
        node = self.tail.last
        while node is not self.tail:
            yield node.value
            node = node.last

    def append(self, value: T) -> None:
        if not self:
            self.tail = CircularDoublyLinkedNode(value)
        else:
            self.tail = CircularDoublyLinkedNode(value, self.head, self.tail)
            self.tail.last.next = self.tail
            self.head.last = self.tail

    def appendleft(self, value: T) -> None:
        if not self:
            self.tail = CircularDoublyLinkedNode(value)
        else:
            self.tail.next = CircularDoublyLinkedNode(value, self.head, self.tail)
            self.head.next.last = self.tail.next

    def pop(self) -> T:
        if not self:
            raise IndexError
        value = self.tail.value
        if self.tail is self.head:
            self.tail = None
        else:
            self.tail.last.next, self.head.last, self.tail = self.head, self.tail.last, self.tail.last
        return value

    def popleft(self) -> T:
        if not self:
            raise IndexError
        value = self.head.value
        if self.tail is self.head:
            self.tail = None
        else:
            self.tail.next = self.tail.next.next
            self.tail.next.last = self.tail
        return value

    def reverse(self) -> None:
        if not self:
            return
        node = self.head
        while node is not self.tail:
            node.next, node.last, node = node.last, node.next, node.next
        self.tail.next, self.tail.last, self.tail = self.tail.last, self.tail.next, self.tail.next

```

{% endtab %} {% endtabs %}

A linked list is similar to an array, it holds values. However, links in a linked list do not have indexes.

- This is an example of a double ended, doubly linked list.
- Each link references the next link and the previous one.
- A Doubly Linked List \(DLL\) contains an extra pointer, typically called previous

  pointer, together with next pointer and data which are there in singly linked list.

  - Advantages over SLL - It can be traversed in both forward and backward direction.

    Delete operation is more efficient

```python
"""Each ListNode holds a reference to its previous node
as well as its next node in the List."""
class ListNode:
  def __init__(self, value, prev=None, next=None):
    self.value = value
    self.prev = prev
    self.next = next

  """Wrap the given value in a ListNode and insert it
  after this node. Note that this node could already
  have a next node it is point to."""
  def insert_after(self, value):
    current_next = self.next
    self.next = ListNode(value, self, current_next)
    if current_next:
      current_next.prev = self.next

  """Wrap the given value in a ListNode and insert it
  before this node. Note that this node could already
  have a previous node it is point to."""
  def insert_before(self, value):
    current_prev = self.prev
    self.prev = ListNode(value, current_prev, self)
    if current_prev:
      current_prev.next = self.prev

  """Rearranges this ListNode's previous and next pointers
  accordingly, effectively deleting this ListNode."""
  def delete(self):
    if self.prev:
      self.prev.next = self.next
    if self.next:
      self.next.prev = self.prev

"""Our doubly-linked list class. It holds references to
the list's head and tail nodes."""
class DoublyLinkedList:
  def __init__(self, node=None):
    self.head = node
    self.tail = node
    self.length = 1 if node is not None else 0

  def __len__(self):
    return self.length

  def add_to_head(self, value):
    pass

  def remove_from_head(self):
    pass

  def add_to_tail(self, value):
    pass

  def remove_from_tail(self):
    pass

  def move_to_front(self, node):
    pass

  def move_to_end(self, node):
    pass

  def delete(self, node):
    pass

  def get_max(self):
    pass

```

Test:

```python
import unittest
from doubly_linked_list import ListNode
from doubly_linked_list import DoublyLinkedList

class DoublyLinkedListTests(unittest.TestCase):
  def setUp(self):
    self.node = ListNode(1)
    self.dll = DoublyLinkedList(self.node)

  def test_list_remove_from_tail(self):
    self.dll.remove_from_tail()
    self.assertIsNone(self.dll.head)
    self.assertIsNone(self.dll.tail)
    self.assertEqual(len(self.dll), 0)

    self.dll.add_to_tail(33)
    self.assertEqual(self.dll.head.value, 33)
    self.assertEqual(self.dll.tail.value, 33)
    self.assertEqual(len(self.dll), 1)
    self.assertEqual(self.dll.remove_from_tail(), 33)
    self.assertEqual(len(self.dll), 0)

    self.dll.add_to_tail(68)
    self.assertEqual(len(self.dll), 1)
    self.assertEqual(self.dll.remove_from_tail(), 68)
    self.assertEqual(len(self.dll), 0)

  def test_list_remove_from_head(self):
    self.dll.remove_from_head()
    self.assertIsNone(self.dll.head)
    self.assertIsNone(self.dll.tail)
    self.assertEqual(len(self.dll), 0)

    self.dll.add_to_head(2)
    self.assertEqual(self.dll.head.value, 2)
    self.assertEqual(self.dll.tail.value, 2)
    self.assertEqual(len(self.dll), 1)
    self.assertEqual(self.dll.remove_from_head(), 2)
    self.assertEqual(len(self.dll), 0)

    self.dll.add_to_head(55)
    self.assertEqual(len(self.dll), 1)
    self.assertEqual(self.dll.remove_from_head(), 55)
    self.assertEqual(len(self.dll), 0)

  def test_list_add_to_tail(self):
    self.assertEqual(self.dll.tail.value, 1)
    self.assertEqual(len(self.dll), 1)

    self.dll.add_to_tail(30)
    self.assertEqual(self.dll.tail.prev.value, 1)
    self.assertEqual(self.dll.tail.value, 30)
    self.assertEqual(len(self.dll), 2)

    self.dll.add_to_tail(20)
    self.assertEqual(self.dll.tail.prev.value, 30)
    self.assertEqual(self.dll.tail.value, 20)
    self.assertEqual(len(self.dll), 3)

  def test_node_delete(self):
    node_1 = ListNode(3)
    node_2 = ListNode(4)
    node_3 = ListNode(5)

    node_1.next = node_2
    node_2.next = node_3
    node_2.prev = node_1
    node_3.prev = node_2

    node_2.delete()

    self.assertEqual(node_1.next, node_3)
    self.assertEqual(node_3.prev, node_1)

  def test_node_insert_before(self):
    self.node.insert_before(0)
    self.assertEqual(self.node.prev.value, 0)

  def test_list_add_to_head(self):
    self.assertEqual(self.dll.head.value, 1)

    self.dll.add_to_head(10)
    self.assertEqual(self.dll.head.value, 10)
    self.assertEqual(self.dll.head.next.value, 1)
    self.assertEqual(len(self.dll), 2)

  def test_node_insert_after(self):
    self.node.insert_after(2)
    self.assertEqual(self.node.next.value, 2)

  def test_list_move_to_end(self):
    self.dll.add_to_head(40)
    self.assertEqual(self.dll.tail.value, 1)
    self.assertEqual(self.dll.head.value, 40)

    self.dll.move_to_end(self.dll.head)
    self.assertEqual(self.dll.tail.value, 40)
    self.assertEqual(self.dll.tail.prev.value, 1)
    self.assertEqual(len(self.dll), 2)

    self.dll.add_to_tail(4)
    self.dll.move_to_end(self.dll.head.next)
    self.assertEqual(self.dll.tail.value, 40)
    self.assertEqual(self.dll.tail.prev.value, 4)
    self.assertEqual(len(self.dll), 3)

  def test_list_move_to_front(self):
    self.dll.add_to_tail(3)
    self.assertEqual(self.dll.head.value, 1)
    self.assertEqual(self.dll.tail.value, 3)

    self.dll.move_to_front(self.dll.tail)
    self.assertEqual(self.dll.head.value, 3)
    self.assertEqual(self.dll.head.next.value, 1)
    self.assertEqual(len(self.dll), 2)

    self.dll.add_to_head(29)
    self.dll.move_to_front(self.dll.head.next)
    self.assertEqual(self.dll.head.value, 3)
    self.assertEqual(self.dll.head.next.value, 29)
    self.assertEqual(len(self.dll), 3)

  def test_list_delete(self):
    self.dll.delete(self.node)
    self.assertIsNone(self.dll.head)
    self.assertIsNone(self.dll.tail)
    self.assertEqual(len(self.dll), 0)

    self.dll.add_to_tail(1)
    self.dll.add_to_head(9)
    self.dll.add_to_tail(6)

    self.dll.delete(self.dll.head)
    self.assertEqual(self.dll.head.value, 1)
    self.assertEqual(self.dll.tail.value, 6)
    self.assertEqual(len(self.dll), 2)

    self.dll.delete(self.dll.head)
    self.assertEqual(self.dll.head.value, 6)
    self.assertEqual(self.dll.tail.value, 6)
    self.assertEqual(len(self.dll), 1)

  def test_get_max(self):
    self.assertEqual(self.dll.get_max(), 1)
    self.dll.add_to_tail(100)
    self.assertEqual(self.dll.get_max(), 100)
    self.dll.add_to_tail(55)
    self.assertEqual(self.dll.get_max(), 100)
    self.dll.add_to_tail(101)
    self.assertEqual(self.dll.get_max(), 101)

if __name__ == '__main__':
  unittest.main()
```

{% page-ref page="../array/" %}

{% page-ref page="../binary-search-tree/" %}

{% page-ref page="./" %}

{% page-ref page="../array/extra-array.md" %}

{% page-ref page="../stack/" %}

{% page-ref page="../binary-tree/" %}

{% page-ref page="../untitled-6/" %}

{% page-ref page="../untitled-5/" %}

{% page-ref page="../untitled-2/" %}

{% page-ref page="../untitled-3/" %}

{% page-ref page="../queue/queue-sandbox.md" %}

{% page-ref page="../untitled-5/" %}

{% page-ref page="double-linked-list.md" %}

{% page-ref page="../untitled-1/" %}

{% page-ref page="../untitled/" %}

{% page-ref page="../heap/" %}
