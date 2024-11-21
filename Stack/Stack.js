class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add an element to the top of the stack
    push(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Remove and return the top element of the stack
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty. Cannot pop.");
            return null;
        }
        const poppedValue = this.head.value;
        this.head = this.head.next;
        this.size--;
        return poppedValue;
    }

    // Return the top element without removing it
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty. No elements to peek.");
            return null;
        }
        return this.head.value;
    }

    // Check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Return the size of the stack
    getSize() {
        return this.size;
    }

    // Print the elements in the stack
    print() {
        let current = this.head;
        let stackValues = [];
        while (current) {
            stackValues.push(current.value);
            current = current.next;
        }
        console.log(stackValues.join(" -> "));
    }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

stack.print(); // Output: 30 -> 20 -> 10

console.log("Top element (peek):", stack.peek()); // Output: 30
console.log("Removed element (pop):", stack.pop()); // Output: 30
stack.print(); // Output: 20 -> 10
console.log("Stack size:", stack.getSize()); // Output: 2


