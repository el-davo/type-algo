export class Node {

    private value: any;
    private left: Node;
    private right: Node;

    constructor(value: any) {
        this.value = value;
    }

    getValue(): any {
        return this.value;
    }

    getLeft(): Node {
        return this.left;
    }

    getRight(): Node {
        return this.right;
    }

    public add(node: Node) {
        if (node.value <= this.value) {
            if (this.left !== undefined) {
                this.left.add(node);
            } else {
                this.left = node;
            }
        } else {
            if (this.right !== undefined) {
                this.right.add(node);
            } else {
                this.right = node;
            }
        }
    }

    public contains(value: any): boolean {
        if (this.value === value) {
            return true;
        }

        if (value <= this.value) {
            return this.left !== undefined ? this.left.contains(value) : false;
        } else {
            return this.right !== undefined ? this.right.contains(value) : false;
        }
    }

}
