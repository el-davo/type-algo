import {Node} from './node';

export class LinkedList {

    private _head: Node;
    private _length: number;

    constructor() {
        this.length = 0;
    }

    get head(): Node {
        return this._head;
    }

    set head(node: Node) {
        this._head = node;
    }

    get length(): number {
        return this._length;
    }

    set length(length: number) {
        this._length = length;
    }

    addToFront<T>(data: T): Node {
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this.head;
    }

    removeFromFront(): Node {
        const removedNode = this.head;
        if (!this.isEmpty()) {
            this.head = this.head.next;
            this.length--;
            removedNode.next = null;
        }
        return removedNode;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }

    toString() {
        let out = '';
        let iter = this.head;

        while (iter) {
            if (iter.next) {
                out += `${iter.data.toString()} -> `;
            } else {
                out += `${iter.data.toString()}`;
            }

            iter = iter.next;
        }

        return out;
    }
}
