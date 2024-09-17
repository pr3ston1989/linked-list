export class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    this.length++;
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      let pointer = this.head;
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = new Node(value);
      this.tail = pointer.nextNode;
    }
  }

  prepend(value) {
    this.length++;
    const newHead = new Node(value, this.head);
    this.head = newHead;
    if (this.tail === null) this.tail = newHead;
  }

  get size() {
    return this.length;
  }

  get getHead() {
    return this.head;
  }

  get getTail() {
    return this.tail;
  }

  at(index) {
    let pointer = this.head;
    for (let i = 1; i < index; i++) {
      if (pointer.nextNode) {
        pointer = pointer.nextNode;
      } else {
        return "Index out of range";
      }
    }
    return pointer;
  }

  pop() {
    if (this.length === 0) return null;
    this.length--;
    if (this.head === this.tail) {
      const temp = this.head;
      this.head = this.tail = null;
      return temp;
    }
    let prevPointer = this.head;
    let currPointer = this.head.nextNode;
    while (currPointer.nextNode !== null) {
      prevPointer = currPointer;
      currPointer = currPointer.nextNode;
    }
    prevPointer.nextNode = null;
    this.tail = prevPointer;
    return currPointer;
  }

  contains(value) {
    let pointer = this.head;
    while (pointer !== null) {
      if (pointer.value === value) {
        return true;
      }
      pointer = pointer.nextNode;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let pointer = this.head;
    while (pointer.nextNode !== null) {
      index++;
      if (pointer.value === value) {
        return index;
      }
      pointer = pointer.nextNode;
    }
    return null;
  }

  toString() {
    let pointer = this.head;
    let text = "";
    while (pointer.nextNode !== null) {
      text += `( ${pointer.value} ) -> `;
      pointer = pointer.nextNode;
    }
    return text + `( ${pointer.value} ) -> null`;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.length + 1) return "Index out of range";
    this.length++;
    if (index === 1) return this.prepend(value);
    if (index === this.length + 1) return this.append(value);
    let pointer = this.head;
    for (let i = 1; i < index - 1; i++) {
      pointer = pointer.nextNode;
    }
    const newNode = new Node(value, pointer.nextNode);
    pointer.nextNode = newNode;
  }

  removeAt(index) {
    if (index < 0 || index > this.length) return "Index out of range";
    this.length--;
    if (index === 1) {
      this.head = this.head.nextNode;
      return;
    }
    let prevPointer = this.head;
    let currPointer = this.head.nextNode;
    for (let i = 1; i < index - 1; i++) {
      prevPointer = prevPointer.nextNode;
      currPointer = currPointer.nextNode;
    }
    prevPointer.nextNode = currPointer.nextNode;
    if (currPointer === this.tail) this.tail = prevPointer;
  }
}
