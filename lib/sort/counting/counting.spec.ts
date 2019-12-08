import {expect} from 'chai';
import {countingSort} from './counting';

describe('Counting Sort', () => {

    it('should sort an array', () => {
        expect(countingSort([55, 6, 72, 11, 10, 15, 32], 6, 72)).to.eql([6, 10, 11, 15, 32, 55, 72]);
    });
});
