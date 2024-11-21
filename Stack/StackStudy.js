class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor () {
        this.head = null
        this.size = 0
    }

    push (value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.size++
    }

    pop () {
        if (this.head === null) return null

        const poppedValue = this.head.value
        this.head = this.head.next
        this.size--
        return poppedValue
    }

    peek() {
        if (this.head === null) return null

        return this.head.value
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    print() {
        const current = this.head
        const stackArray = []

        while(current) {
            stackArray.push(current.value)
            current = current.next
        }
        console.log(nodeArray.join(' -> '));
    }
}   