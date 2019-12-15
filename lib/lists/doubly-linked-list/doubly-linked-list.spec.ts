import {expect} from 'chai';
import {DoublyLinkedList} from './doubly-linked-list';

describe('Doubly Linked List', () => {

    let list: DoublyLinkedList;

    beforeEach(() => {
        list = new DoublyLinkedList();
    });

    it('should add items to front of list', () => {
        list.addToFront({name: 'mary'}).addToFront({name: 'jane'}).addToFront({name: 'jim'});

        expect(list.head.data).to.eql({name: 'jim'});
        expect(list.head.previous).to.eql(undefined);
        expect(list.tail.data).to.eql({name: 'mary'});
        expect(list.tail.previous.data).to.eql({name: 'jane'});
        expect(list.tail.next).to.eql(undefined);
        expect(list.head.next.data).to.eql({name: 'jane'});
        expect(list.head.next.previous.data).to.eql({name: 'jim'});
        expect(list.head.next.next.data).to.eql({name: 'mary'});
        expect(list.head.next.next.previous.data).to.eql({name: 'jane'});
        expect(list.length).to.eql(3);
    });

    it('should add items to end of list', () => {
        list.addToEnd({name: 'mary'}).addToEnd({name: 'jane'}).addToEnd({name: 'jim'});

        expect(list.head.data).to.eql({name: 'mary'});
        expect(list.tail.data).to.eql({name: 'jim'});
        expect(list.tail.previous.data).to.eql({name: 'jane'});
        expect(list.tail.next).to.eql(undefined);
        expect(list.head.next.data).to.eql({name: 'jane'});
        expect(list.head.next.previous.data).to.eql({name: 'mary'});
        expect(list.head.next.next.previous.data).to.eql({name: 'jane'});
        expect(list.length).to.eql(3);
    });

    it('should remove item from front', () => {
        list.addToFront(1).addToFront(2).addToFront(3).addToFront(4);

        expect(list.length).to.eql(4);
        expect(list.toString()).to.eq('4 <-> 3 <-> 2 <-> 1');

        list.removeFromFront().removeFromFront();

        expect(list.length).to.eql(2);
        expect(list.toString()).to.eq('2 <-> 1');
        expect(list.head.previous).to.eq(null);
        expect(list.head.next.data).to.eq(1);
        expect(list.head.next.previous.data).to.eq(2);

        list.removeFromFront().removeFromFront();

        expect(list.length).to.eql(0);
        expect(list.head).to.eql(undefined);
        expect(list.tail).to.eql(null);
    });

    it('should remove item from end', () => {
        list.addToFront(1).addToFront(2).addToFront(3).addToFront(4);

        expect(list.length).to.eql(4);
        expect(list.toString()).to.eq('4 <-> 3 <-> 2 <-> 1');

        list.removeFromEnd().removeFromEnd();

        expect(list.length).to.eql(2);
        expect(list.toString()).to.eq('4 <-> 3');
        expect(list.head.previous).to.eq(undefined);
        expect(list.head.next.data).to.eq(3);
        expect(list.head.next.previous.data).to.eq(4);
        expect(list.head.next.next).to.eq(null);

        list.removeFromEnd().removeFromEnd();

        expect(list.isEmpty()).to.eql(true);
        expect(list.length).to.eql(0);
        expect(list.head).to.eql(null);
        expect(list.tail).to.eql(undefined);
    });

    it('should check if list is empty', () => {
        expect(list.isEmpty()).to.eql(true);

        list.addToFront({name: 'mary'});

        expect(list.isEmpty()).to.eql(false);
    });

    it('should print string value', () => {
        list.addToFront(1).addToFront(2).addToFront(3);

        expect(list.toString()).to.eq('3 <-> 2 <-> 1');
    });
});
