import { Node } from './hash-table';

describe('Hash Table', () => {

    describe('construction', () => {

        it('should add a node to the left of the root node if number is lower', () => {
            const rootNode = new Node(10);
            const leftNode = new Node(7);

            rootNode.add(leftNode);

            rootNode.getLeft().getValue().should.eql(7);
        });

        it('should add a node to the right of the root node if number is higher', () => {
            const rootNode = new Node(10);
            const leftNode = new Node(12);

            rootNode.add(leftNode);

            rootNode.getRight().getValue().should.eql(12);
        });

        it('should construct tree correctly', () => {
            const rootNode = new Node(10);
            const leftNode = new Node(8);
            const leftLeftNode = new Node(4);
            const leftRightNode = new Node(9);
            const rightNode = new Node(12);
            const rightRightNode = new Node(14);
            const rightLeftNode = new Node(11);

            rootNode.add(leftNode);
            rootNode.add(leftLeftNode);
            rootNode.add(leftRightNode);
            rootNode.add(rightNode);
            rootNode.add(rightRightNode);
            rootNode.add(rightLeftNode);

            rootNode.getValue().should.eql(10);
            rootNode.getLeft().getValue().should.eql(8);
            rootNode.getLeft().getLeft().getValue().should.eql(4);
            rootNode.getLeft().getRight().getValue().should.eql(9);
            rootNode.getRight().getValue().should.eql(12);
            rootNode.getRight().getRight().getValue().should.eql(14);
            rootNode.getRight().getLeft().getValue().should.eql(11);
        });
    });

    describe('contains value check', () => {

        const rootNode = new Node(10);

        beforeEach(() => {
            const leftNode = new Node(8);
            const leftLeftNode = new Node(4);
            const leftRightNode = new Node(9);
            const rightNode = new Node(12);
            const rightRightNode = new Node(14);
            const rightLeftNode = new Node(11);

            rootNode.add(leftNode);
            rootNode.add(leftLeftNode);
            rootNode.add(leftRightNode);
            rootNode.add(rightNode);
            rootNode.add(rightRightNode);
            rootNode.add(rightLeftNode);
        });

        it('should return true if the value exists in the hash tree', () => {
            rootNode.contains(10).should.eql(true);
            rootNode.contains(8).should.eql(true);
            rootNode.contains(4).should.eql(true);
            rootNode.contains(9).should.eql(true);
            rootNode.contains(12).should.eql(true);
            rootNode.contains(14).should.eql(true);
            rootNode.contains(11).should.eql(true);
        });

        it('should return false if the value does not exist in the hash tree', () => {
            rootNode.contains(0).should.eql(false);
            rootNode.contains(100).should.eql(false);
        });

    });
});
