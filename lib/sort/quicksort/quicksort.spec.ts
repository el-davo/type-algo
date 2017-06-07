import { quicksort } from './quicksort';

describe('Quick sort algorithm', () => {

    it('should sort an array of integers', () => {
        const arr = [31415926535897932384626433832795, 1, 3, 10, 3, 5];
        const expected = [1, 3, 3, 5, 10, 31415926535897932384626433832795];
        quicksort<number>(arr).should.eql(expected);
    });

    it('should handle minus numbers', () => {
        const elements = [-13, 1, -4, 1, 5, 9, 2, 6, 5, 3];
        const expected = [-13, -4, 1, 1, 2, 3, 5, 5, 6, 9];

        quicksort(elements).should.eql(expected);
    });

    it('should not break if single element', () => {
        const elements = [3];
        const expected = [3];

        quicksort(elements).should.eql(expected);
    });

    it('should not break if empty array passed', () => {
        const elements = [];
        const expected = [];

        quicksort(elements).should.eql(expected);
    });

    it('should sort an array of strings', () => {
        const arr = ['abc', 'cda', 'xtz', 'ytb', 'bas'];
        const expected = ['abc', 'bas', 'cda', 'xtz', 'ytb'];

        quicksort<string>(arr).should.eql(expected);
    });

});
