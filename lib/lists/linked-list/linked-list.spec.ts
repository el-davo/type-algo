import {LinkedList} from './linked-list';
import {expect} from 'chai';

describe('Linked List', () => {

    it('should be able to add items to the list', () => {
        const list = new LinkedList();

        list.addToFront({name: 'mary'});
        list.addToFront({name: 'jane'});

        expect(list.head.data).to.eql({name: 'jane'});
        expect(list.head.next.data).to.eql({name: 'mary'});
    });

    it('should print string value', () => {
        const list = new LinkedList();

        list.addToFront(1);
        list.addToFront(2);
        list.addToFront(3);

        expect(list.toString()).to.eq('3 -> 2 -> 1');
    });

    it('should get size of list', () => {
        const list = new LinkedList();

        list.addToFront(1);
        list.addToFront(2);
        list.addToFront(3);

        expect(list.length).to.eql(3);
    });

    it('should report if list is empty or not', () => {
        const list = new LinkedList();

        expect(list.isEmpty()).to.eql(true);

        list.addToFront(1);

        expect(list.isEmpty()).to.eql(false);
    });

    it('should remove item from front of list', () => {
        const list = new LinkedList();

        list.removeFromFront();

        expect(list.length).to.eql(0);

        list.addToFront(1);
        list.addToFront(2);
        list.addToFront(3);

        expect(list.toString()).to.eq('3 -> 2 -> 1');
        expect(list.length).to.eql(3);

        const removed = list.removeFromFront();

        expect(removed.data).to.eql(3);
        expect(removed.next).to.eql(null);

        expect(list.toString()).to.eq('2 -> 1');
        expect(list.length).to.eql(2);

        expect(list.removeFromFront().data).to.eql(2);
    });
});
