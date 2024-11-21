// Node class for the queue
class Node {
    constructor(value) {
        this.value = value;    // The value stored in this node
        this.next = null;      // Pointer to the next node
    }
}

// Queue class
class Queue {
    constructor() {
        this.front = null; // Pointer to the first node (front of the queue)
        this.rear = null;  // Pointer to the last node (rear of the queue)
        this.size = 0;     // Keeps track of the number of nodes in the queue
    }

    // Add a value to the end of the queue
    enqueue(value) {
        const newNode = new Node(value);

        if (this.rear === null) {
            // If the queue is empty, set both front and rear to the new node
            this.front = newNode;
            this.rear = newNode;
        } else {
            // Link the new node to the rear and update the rear pointer
            this.rear.next = newNode;
            this.rear = newNode;
        }

        this.size++;
    }

    // Remove a value from the front of the queue
    dequeue() {
        if (this.front === null) {
            console.log("Queue is empty");
            return null;
        }

        const dequeuedValue = this.front.value;
        this.front = this.front.next;

        // If the queue is now empty, update the rear pointer
        if (this.front === null) {
            this.rear = null;
        }

        this.size--;
        return dequeuedValue;
    }

    // Peek at the value at the front of the queue without removing it
    peek() {
        if (this.front === null) {
            console.log("Queue is empty");
            return null;
        }

        return this.front.value;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the queue
    getSize() {
        return this.size;
    }

    // Print the queue
    print() {
        let current = this.front;
        let result = '';

        while (current) {
            result += `${current.value} -> `;
            current = current.next;
        }

        console.log(result + 'null');
    }
}

// Example usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); // Output: 10 -> 20 -> 30 -> null

console.log(queue.dequeue()); // Output: 10
queue.print();               // Output: 20 -> 30 -> null

console.log(queue.peek());   // Output: 20
console.log(queue.getSize()); // Output: 2
console.log(queue.isEmpty()); // Output: false
