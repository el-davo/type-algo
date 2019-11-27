import {BST} from './binary-search-tree';

describe('Binary Search Tree', () => {

    let bst: BST;

    beforeEach(() => {
        bst = new BST('test');
    });

    describe('insert', () => {
        it('should insert to the right', () => {
            bst.insert<string>('zebra');

            bst.right.data.should.eql('zebra');
        });

        it('should insert to the left', () => {
            bst.insert<string>('potato');

            bst.left.data.should.eql('potato');
        });

        it('should insert to the left if values are equal', () => {
            bst.insert<string>('test');

            bst.left.data.should.eql('test');
        });

        it('should recursively add to the right', () => {
            bst.insert<string>('test1').insert<string>('test2');

            bst.right.data.should.eql('test1');
            bst.right.right.data.should.eql('test2');
        });

        it('should recursively add to the left', () => {
            bst.insert<string>('potato2').insert<string>('potato1');

            bst.left.data.should.eql('potato2');
            bst.left.left.data.should.eql('potato1');
        });
    });

    describe('balance', () => {

        beforeEach(() => {
            bst = new BST(1);
        });

        it('should balance tree', () => {
            bst.insert<number>(2).insert<number>(3).insert<number>(4).insert<number>(5);

            bst.right.data.should.eql(2);
            bst.right.right.data.should.eql(3);
            bst.right.right.right.data.should.eql(4);
            bst.right.right.right.right.data.should.eql(5);

            const balanced: BST = bst.balance();

            balanced.data.should.eql(3);
            balanced.right.data.should.eql(4);
            balanced.right.right.data.should.eql(5);
            balanced.left.data.should.eql(1);
            balanced.left.right.data.should.eql(2);
        });
    });

    it('should traverse tree in order', () => {
        bst = new BST(5).insert<number>(4).insert<number>(6).insert<number>(7).insert<number>(3);

        const values = [];

        bst.inOrder(bst, values).should.eql([3, 4, 5, 6, 7]);
    });
});
