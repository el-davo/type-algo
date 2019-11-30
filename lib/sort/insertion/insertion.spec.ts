import {expect} from 'chai';
import {insertionSort} from './insertion';

describe('Insertion Sort', () => {

    it('should sort an array', () => {
        expect(insertionSort([55, 6, 72, 11, -10, 15, 32])).to.eql([-10, 6, 11, 15, 32, 55, 72]);
    });
});
