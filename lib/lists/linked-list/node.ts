export class Node {

    private _data: any;
    private _next: Node;

    constructor(data: any) {
        this.data = data;
    }

    get data(): any {
        return this._data;
    }

    set data(data) {
        this._data = data;
    }

    get next(): Node {
        return this._next;
    }

    set next(next: Node) {
        this._next = next;
    }
}
