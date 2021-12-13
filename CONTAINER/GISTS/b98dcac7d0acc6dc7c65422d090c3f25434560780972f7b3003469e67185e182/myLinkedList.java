class DoublyListNode {
    int val;
    DoublyListNode next, prev;
    DoublyListNode (int x) {val = x;}
}

/*
    1. Initiate a new linked list: represent a linked list using the head node.
*/
public class MyLinkedList {
    private DoublyListNode head;
    /* 
        Initialize your data structure here.
    */
    public MyLinkedList() {
        head = null;
    }

    /*
        2. Traverse the linked list to get elemnet by index
    */

    /* Helper function to return the index-th node in the linked list. */
    private DoublyListNode getNode(int index) {
        DoublyListNode current = head;
        for (int i = 0; i < index && current != null; ++i) {
            current = current.next;
        }
        return current;
    }

    /* Helper function to return the last node in the linked list */
    private DoublyListNode getTail() {
        DoublyListNode current = head;
        while (current != null) {
            current = current.next;
        }
        return current;
    }

    /* Get the value of the index-th node in the linked list. If the index is invalid return -1 */
    public int get(int index) {
        DoublyListNode current = getNode(index);
        return current == null ? -1 : current.val;
    }

    /**
     * 3. Add a new node.
     */
    
    /**Add a node of value before the first element of the linked list. After the insertion, the new 
     * node will be the first node of the linked list.
     */
    public void addAtHead(int val) {
        DoublyListNode current = new DoublyListNode(val);
        current.next = head;
        if (head != null) {
            head.prev = current;
        }

        head = current;
        return;
    }

    /**Append a node of value val to the last element of the linked list. */
    public void addAtTail(int val) {
        if (head == null) {
            addAtHead(val);
            return;
        }
        DoublyListNode current = new DoublyListNode(val);
        DoublyListNode previous = getTail();
        previous.next = current;
        current.prev = previous;
    }

    /**Add a node of value before the index-th node in the linked list. If index equals to the length
     * of linked list, the node will be appended to the end of linked list. If index is greater than
     * the length, the node will not be inserted.
     */
    public void addAtIndex(int index, int val) {
        if (index == 0) {
            addAtHead(val);
            return;
        }

        DoublyListNode prev = getNode(index - 1);
        if (prev == null) {
            return;
        }

        DoublyListNode current = new DoublyListNode(val);
        DoublyListNode next = prev.next;
        current.prev = prev;
        current.next = next;
        prev.next = current;
        if (next != null) {
            next.prev = current;
        }
    }

    /**Similar to the singly linked list, it takes O(N) time to get a node by index, 
     * where N is the length of the linked list. It is different from adding 
     * a new node after a given node. 
     * */

     /**Delete a node */
     /**Delete the index-th node in the linked list, if the index is valid */

     public void deleteAtIndex(int index) {
        DoublyListNode current = getNode(index);
        if (current == null) {
             return;
        }
        DoublyListNode prev = current.prev;
        DoublyListNode next = current.next;
        if (prev != null) {
            prev.next = next;
        } else {
            // modify head when deleting first node
            head = next;
        }

        if (next != null) {
            next.prev = prev;
        }
     }
     /**Similar to the add operation, it takes O(n) time to get the node by the index
      * which is different from deleting a given node. However, it is different to the singly
      * linked list. When we get the node we want to delete, we dont want to traverse
      * to get its previous node but using the prev field instead
      */
}
