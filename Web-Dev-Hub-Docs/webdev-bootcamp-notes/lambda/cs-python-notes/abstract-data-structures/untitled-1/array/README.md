# Array

{% page-ref page="extra-array.md" %}

{% tabs %} {% tab title="BIGO" %}

```python
# Linear time iterate over all items
arr = [12, 23, 56, 87, 14]  # n = 5
for num in arr: # O(n * 1) ==> O(n)
    print(num)  # O(1)
for num in arr: # O(n * 1) ==> O(n)
    print(num)  # O(1)

# O(n) + O(1) => O(n)
# O(n * 1) + O(n * 1) + O(1)
# O(2n) + O(1) => O(n) + O(1) => O(n)

# constant time lookup
print(arr[3]) # O(1)

# quadratic time nested iteration
for x in arr: # O(n)
    for y in arr:  # O(n) => O(n^2)
        for z in arr: # O(n^3)
            print(x, y, z) # O(1) => O(1 * n^2)
# O(n^2) + O(n) + O(1 * n^2)
# O(2n^2) + O(n) => O(n^2) + O(n^2)

# O(n^2) => O(n^3)

# 10 * 10 * 10 => 1000
# 100 * 100 * 100 => 1000000


# can we do better?


```

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %} {% endtabs %}

## Arrays

- In an array of arrays, e.g. given `[[], [1, 2, 3], [4, 5], [], [], [6, 7], [8], [9, 10], [], []]`, print: `1, 2, 3, 4, 5, 6, 7, 8, 9, 10`.
  - Implement an iterator that supports `hasNext()`, `next()` and `remove()` methods.
- Given a list of item prices, find all possible combinations of items that sum a particular value `K`.
- Paginate an array with constraints, such as skipping certain items.
- Implement a circular buffer using an array.
- Given array of arrays, sort them in ascending order.
- Given an array of integers, print out a histogram using the said array; include a base layer \(all stars\)
  - E.g. `[5, 4, 0, 3, 4, 1]`

```text
*
**  *
** **
** **
** ***
******
```

- Given an array and an index, find the product of the elements of the array except the element at that index.
- Given a set of rectangles represented by a height and an interval along the y-axis, determine the size of its union.
- Given 2 separate arrays, write a method to find the values that exist in both arrays and return them.
- Given an array of integers find whether there is a sub-sequence that sums to 0 and return it.
  - E.g. `[1, 2, -3, 1]` =&gt; `[1, 2, -3]` or `[2, -3, 1]`.
- Given an input array and another array that describes a new index for each element, mutate the input array so that each element ends up in their new index. Discuss the runtime of the algorithm and how you can be sure there would not be any infinite loops.
- Given an array of non-negative numbers, find continuous subarray with sum to S.
  - [Source](http://blog.gainlo.co/index.php/2016/06/01/subarray-with-given-sum/).
- Given an array of numbers list out all triplets that sum to 0. Do so with a running time of less than O\(n^3\).
  - [Source](http://blog.gainlo.co/index.php/2016/07/19/3sum/).
- Given an array of numbers list out all quadruplets that sum to 0. Do so with a running time of less than O\(n^4\).
- Given an array of integers, move all the zeroes to the end while preserving the order of the other elements. You have to do it in-place and are not allowed to use any extra storage.
- Given an array of integers, find the subarray with the largest sum. Can you do it in linear time.
  - Maximum subarray sum problem.
- You have an array with the heights of an island \(at point 1, point 2 etc\) and you want to know how much water would remain on this island \(without flowing away\).
  - Trapping rain water question.
- Given an array containing only digits `0-9`, add one to the number and return the array.
  - E.g. Given `[1, 4, 2, 1]` which represents `1421`, return `[1, 4, 2, 2]` which represents `1422`.
- Find the second maximum value in an array.
- Given an array, find the longest arithmetic progression.
- Rotate an array by an offset of k.
- Remove duplicates in an unsorted array where the duplicates are at a distance of k or less from each other.
- Given an unsorted list of integers, return true if the list contains any duplicates within k indices of each element. Do it faster than O\(n^2\).
- Given an unsorted list of integers, return true if the list contains any fuzzy duplicates within k indices of each element. A fuzzy duplicate is another integer within d of the original integer. Do it faster than O\(n^2\).
  - E.g. If d = 4, then 6 is a fuzzy duplicate of 3 but 8 is not.
- Say you have an unordered list of numbers ranging from 1 to n, and one of the numbers is removed, how do you find that number? What if two numbers are removed?
- Given an array of string, find the duplicated elements.
  - [Source](http://blog.gainlo.co/index.php/2016/05/10/duplicate-elements-of-an-array/).
- Given an array of integers, find a maximum sum of non-adjacent elements.
  - E.g. `[1, 0, 3, 9, 2]` should return `10 (1 + 9)`.
  - [Source](http://blog.gainlo.co/index.php/2016/12/02/uber-interview-question-maximum-sum-non-adjacent-elements/)
- Given an array of integers, modify the array by moving all the zeros to the end \(right side\). The order of other elements doesn't matter.
  - E.g. `[1, 2, 0, 3, 0, 1, 2]`, the program can output `[1, 2, 3, 1, 2, 0, 0]`.
  - [Source](http://blog.gainlo.co/index.php/2016/11/18/uber-interview-question-move-zeroes/).
- Given an array, return the length of the longest increasing contiguous subarray.
  - E.g., `[1, 3, 2, 3, 4, 8, 7, 9]`, should return `4` because the longest increasing array is `[2, 3, 4, 8]`.
  - [Source](http://blog.gainlo.co/index.php/2017/02/02/uber-interview-questions-longest-increasing-subarray/).
- Given an array of integers where every value appears twice except one, find the single, non-repeating value. Follow up: do so with O\(1\) space.
  - E.g., `[2, 5, 3, 2, 1, 3, 4, 5, 1]` returns 4, because it is the only value that appears in the array only once.

```python
# Python Program to demonstrate creation of Array using array creations
import array as arr

print("INTEGER ARRAY OPERATIONS:")
size = int(input(" Enter the size of Array: "))
# creating an array with integer type
lst = list()
for i in range(size):
    lst.append(int(input("Enter the  Integer Element:")))
n = arr.array(lst)

# printing array
def pr(n):
    print("The new integer array is : ", end=" ")
    for i in range(len(n)):
        print(n[i], end =", ")
    print()

def add(n,j):
    print("The Array before adding: ", end=" ")
    for i in range(len(n)):
        print(n[i], end=", ")
    print()
    #Append() method
    n.append(j)
    print("The Array After adding: ", end=" ")
    for i in range(len(n)):
        print(n[i], end=", ")
    print()

def adde(n,j,p):
    print("The Array before adding: ", end=" ")
    for i in range(len(n)):
        print(n[i], end=", ")
    print()
    #insert() method
    n.insert(p,j)
    print("The Array After adding: ", end=" ")
    for i in range(len(n)):
        print(n[i], end=", ")
    print()

def pp(n,j):
    if n:
        print("The Array before Popping: ", end=" ")
        for i in range(len(n)):
            print(n[i], end=", ")
        print()
        # pop() method
        n.pop(j)
        print("The Array After Popping: ", end=" ")
        for i in range(len(n)):
            print(n[i], end=", ")
        print()
    else:
        print("Array Empty")

def prt(n,j):
    if n:
        if j in range(len(n)):
            print("The Array before Removing: ", end=" ")
            for i in range(len(n)):
                print(n[i], end=", ")
            print()
            #remove Method
            n.remove(j)
            print("The Array After Removing: ", end=" ")
            for i in range(len(n)):
                print(n[i], end=", ")
            print()
        else:
            print("Index Out of Bound")
    else:
        print("Array Empty")

#Driver code
flag = 1
while(flag):
    print()
    print("1.Print Array\n2.Add Element using append()\n3.Add Element using insert()\n4.Pop() Element\n5.Remove Element at position\n6.Exit\n")
    option = int(input("Enter the option :"))
    if option == 1:
        pr(n)
    elif option == 2:
        i = int(input("Enter the Element to be added: "))
        add(n,i)
    elif option == 3:
        p = int(input("Enter the position to add element:"))
        i = int(input("Enter the Element: "))
        adde(n, i, p)
    elif option == 4:
        i = int(input("Enter the Index position To be popped: "))
        pp(n, i)
    elif option == 5:
        i = int(input("Enter the Element Position To be Removed: "))
        prt(n, i)
    elif option == 6 :
        flag = 0







```

{% page-ref page="./" %}

{% page-ref page="../binary-search-tree/" %}

{% page-ref page="../untitled-4/" %}

{% page-ref page="extra-array.md" %}

{% page-ref page="../stack/" %}

{% page-ref page="../binary-tree/" %}

{% page-ref page="../untitled-6/" %}

{% page-ref page="../untitled-5/" %}

{% page-ref page="../untitled-2/" %}

{% page-ref page="../untitled-3/" %}

{% page-ref page="../queue/queue-sandbox.md" %}

{% page-ref page="../untitled-5/" %}

{% page-ref page="../untitled-4/double-linked-list.md" %}

{% page-ref page="../untitled-1/" %}

{% page-ref page="../untitled/" %}

{% page-ref page="../heap/" %}
