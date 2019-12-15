import {Node} from './node';

export class DoublyLinkedList {

    private _head: Node;
    private _tail: Node;
    private _length: number;

    constructor() {
        this.length = 0;
    }

    get head(): Node {
        return this._head;
    }

    set head(value: Node) {
        this._head = value;
    }

    get tail(): Node {
        return this._tail;
    }

    set tail(value: Node) {
        this._tail = value;
    }

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }

    addToFront<T>(data: T): DoublyLinkedList {
        const node = new Node(data);
        if (this.isEmpty()) {
            this.tail = node;
        } else {
            this.head.previous = node;
        }
        node.next = this.head;
        this.head = node;
        this.length++;

        return this;
    }

    addToEnd<T>(data: T): DoublyLinkedList {
        const node = new Node(data);

        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.previous = this.tail;
            this.tail.next = node;
        }

        this.tail = node;
        this.length++;

        return this;
    }

    removeFromFront(): DoublyLinkedList {
        const removedNode = this.head;
        if (!this.isEmpty()) {
            this.head = this.head.next;
            if (this.head) {
                this.head.previous = null;
            }
            this.length--;
            removedNode.next = null;
            removedNode.previous = null;

            if (this.isEmpty()) {
                this.tail = null;
            }
        }

        return this;
    }

    removeFromEnd(): DoublyLinkedList {
        if (!this.isEmpty()) {
            let removedNode = this.tail;
            this.tail = this.tail.previous;
            if (this.tail) {
                this.tail.next = null;
            }
            removedNode = null;
            this.length--;

            if (this.isEmpty()) {
                this.head = null;
            }
        }

        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    toString() {
        let out = '';
        let iter = this.head;

        while (iter) {
            if (iter.next) {
                out += `${iter.data.toString()} <-> `;
            } else {
                out += `${iter.data.toString()}`;
            }

            iter = iter.next;
        }

        return out;
    }
}
