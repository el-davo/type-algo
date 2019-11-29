import {expect} from 'chai';
import {selectionSort} from './selection';

describe('Selection Sort', () => {

    it('should sort an array', () => {
        expect(selectionSort([55, 6, 72, 11, -10, 15, 32])).to.eql([-10, 6, 11, 15, 32, 55, 72]);
    });
});