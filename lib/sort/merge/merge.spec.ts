import {expect} from 'chai';
import {mergeSort} from './merge';

describe('Merge Sort', () => {

    it('should sort an array', () => {
        expect(mergeSort([55, 6, 72, 11, -10, 15, 32])).to.eql([-10, 6, 11, 15, 32, 55, 72]);
    });
});
