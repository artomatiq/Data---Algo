// Node class for the doubly linked list
class Node {
    constructor(value) {
        this.value = value;    // The value stored in this node
        this.next = null;      // Pointer to the next node
        this.prev = null;      // Pointer to the previous node
    }
}

// DoublyLinkedList class
class DoublyLinkedList {
    constructor() {
        this.head = null; // Pointer to the first node
        this.tail = null; // Pointer to the last node
        this.size = 0;    // Keeps track of the number of nodes in the list
    }

    // Add a node at the end of the list
    append(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            // If the list is empty, set head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Link the new node to the current tail
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode; // Update the tail to the new node
        }

        this.size++;
    }

    // Add a node at the beginning of the list
    prepend(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            // If the list is empty, set head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Link the new node to the current head
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode; // Update the head to the new node
        }

        this.size++;
    }

    // Remove a node by its value
    remove(value) {
        if (!this.head) return null; // If the list is empty, do nothing

        let current = this.head;

        // Traverse the list to find the node to remove
        while (current && current.value !== value) {
            current = current.next;
        }

        // If the node was found
        if (current) {
            // If the node to remove is the head
            if (current === this.head) {
                this.head = current.next;
                if (this.head) this.head.prev = null;
            }

            // If the node to remove is the tail
            if (current === this.tail) {
                this.tail = current.prev;
                if (this.tail) this.tail.next = null;
            }

            // If the node is in the middle
            if (current.prev) current.prev.next = current.next;
            if (current.next) current.next.prev = current.prev;

            this.size--;
        }
    }

    // Search for a node by its value
    search(value) {
        let current = this.head;

        // Traverse the list to find the node
        while (current && current.value !== value) {
            current = current.next;
        }

        return current || null; // Return the node if found, otherwise null
    }

    // Print the list from head to tail
    printForward() {
        let current = this.head;
        let result = '';

        while (current) {
            result += `${current.value} <-> `;
            current = current.next;
        }

        console.log(result + 'null');
    }

    // Print the list from tail to head
    printBackward() {
        let current = this.tail;
        let result = '';

        while (current) {
            result += `${current.value} <-> `;
            current = current.prev;
        }

        console.log(result + 'null');
    }

    // Get the size of the doubly linked list
    getSize() {
        return this.size;
    }
}

// Example usage
const list = new DoublyLinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.printForward();   // Output: 5 <-> 10 <-> 20 <-> null
list.printBackward();  // Output: 20 <-> 10 <-> 5 <-> null

list.remove(10);
list.printForward();   // Output: 5 <-> 20 <-> null

console.log(list.search(20)); // Output: Node { value: 20, next: null, prev: Node }
console.log(list.getSize());  // Output: 2
