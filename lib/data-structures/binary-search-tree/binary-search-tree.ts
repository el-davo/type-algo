export class BST {

    private _data: any;
    private _right: BST;
    private _left: BST;

    constructor(data: any) {
        this._data = data;
    }

    get data() {
        return this._data;
    }

    get left() {
        return this._left;
    }

    get right() {
        return this._right;
    }

    public insert<T>(data: T): BST {
        if (data > this.data) {
            this._right ? this._right.insert(data) : this._right = new BST(data);
        } else {
            this._left ? this._left.insert(data) : this._left = new BST(data);
        }

        return this;
    }

    public balance(): BST {
        const values = [];
        this.traverse(values);

        return this.buildTree(values, 0, values.length - 1);
    }

    public buildTree(values: BST[], start: number, end: number): BST {
        if (start > end) {
            return null;
        }

        const mid = Math.floor((start + end) / 2);
        const root = values[mid];

        root._left = this.buildTree(values, start, mid - 1);
        root._right = this.buildTree(values, mid + 1, end);

        return root;
    }

    public traverse(storedValues: BST[]) {
        if (this.left) {
            this._left.traverse(storedValues);
        }
        storedValues.push(this);
        if (this.right) {
            this._right.traverse(storedValues);
        }

        return storedValues;
    }

    public inOrder<T>(node: BST, values: T[]) {

        if (!node) {
            return;
        }

        this.inOrder(node._left, values);
        values.push(node.data);
        this.inOrder(node._right, values);

        return values;
    }
}
