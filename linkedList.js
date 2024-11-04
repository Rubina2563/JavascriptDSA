class Node{
    constructor(value) {
        this.head = value;
        this.next = null
            ;    }
}

class LinkedList{
    constructor(value) {
        if (value !== undefined) { // Check if an initial value is provided
            this.head = new Node(value);
            this.tail = this.head;
            this.length = 1;
        } else {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
    }
    push(value) {
        let newNode = new Node(value);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }

        let temp = this.head;
        let prev = this.head;

        while (temp.next) {
            prev = temp;
            temp = prev.next;
        }

        this.tail = prev;
        this.tail.next = null;
        this.length--;

        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
}


const myLinkedList = new LinkedList();
myLinkedList.push(10);
console.log(myLinkedList);
myLinkedList.push(20);
console.log(myLinkedList)