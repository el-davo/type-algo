import {customQuicksort} from './custom-quicksort';

describe('Custom quick sort algorithm', () => {

    it('should order array of strings alphabetically', () => {
        const elements = ['abc', 'cda', 'xtz', 'ytb', 'bas'];
        const expected = ['abc', 'bas', 'cda', 'xtz', 'ytb'];

        customQuicksort<string>(elements, (pivot, comp) => pivot > comp).should.eql(expected);
    });

});
