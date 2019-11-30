import {expect} from 'chai';
import {shellSort} from './shell';

describe('Shell Sort', () => {

    it('should sort an array', () => {
        expect(shellSort([55, 6, 72, 11, -10, 15, 32])).to.eql([-10, 6, 11, 15, 32, 55, 72]);
    });
});
