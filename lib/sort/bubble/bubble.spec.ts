import {bubbleSort} from './bubble';
import {expect} from 'chai';

describe('Bubble Sort', () => {

    it('should sort array', () => {
        expect(bubbleSort([15, 32, 10, 7, 16, 17, 9, 8])).to.eql([7, 8, 9, 10, 15, 16, 17, 32]);
    });
});
