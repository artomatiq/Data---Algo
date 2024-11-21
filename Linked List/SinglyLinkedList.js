//Singly linked list

class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor () {
        this.head = null
        this.size = 0
    }

    //add a node at the end
    append (value) {
        const newNode = new Node(value)

        if (this.head === null) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next) {
                current.current.next
            }
            current.next = newNode
        }

        this.size++
    }


    //add a node at the begiinning
    prepend (value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.size++
    }


    remove(value) {
        if (this.head === null) return null

        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return
        }

        let current = this.head
        let previous = null
        //find the node to the left of the one to be removed
        while (current && current.value !== value ) {
            previous = current
            current = current.next
        }

        if (current) {
            previous.next = current.next
            this.size--
        }
    }


    search (value) {
        let current = this.head
        
        while (current && current.value !== value) {
            current = current.next
        }
        return current
    }


    print () {
        let current = this.head
        let result = ''

        while (current) {
            result += `${current.value} -> `
            current = current.next
        }
        console.log(result + 'null');
    }

    getSize () {
        return this.size
    }
}

