//stack
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
      this.length++;
      return this;
    }
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  top() {
    if (this.length === 0) {
      return undefined;
    }
    return this.first;
  }
}

let theStack = new Stack(0);
theStack.push(1);
theStack.push(2);
// theStack.pop();
console.log(theStack);


//queue
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    }

    this.last.next = newNode;
    this.last = newNode;
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.first;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }

    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

let myQueue = new Queue(0);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.dequeue();
console.log(myQueue);

//challenges
