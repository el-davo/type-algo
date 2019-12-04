import {expect} from 'chai';
import {quickSort} from './quicksort';

describe('Merge Sort', () => {

    it('should sort an array', () => {
        expect(quickSort([55, 6, 72, 11, -10, 15, 32])).to.eql([-10, 6, 11, 15, 32, 55, 72]);
    });
});
