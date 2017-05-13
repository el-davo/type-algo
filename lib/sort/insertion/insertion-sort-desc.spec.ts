import { insertionSortDesc } from './insertion-sort-desc';

describe('Insertion sort', () => {

    it('should sort an array of integers', () => {
        const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
        const expected = [9, 6, 5, 5, 4, 3, 3, 2, 1, 1];

        insertionSortDesc<number>(arr).should.eql(expected);
    });

    it('should sort an array of floats', () => {
        const elements = [3.22, 1.445, 4.55, 1.223, 5.56, 9.12, 2.23, 6.55445, 5.43324, 3.2345];
        const expected = [9.12, 6.55445, 5.56, 5.43324, 4.55, 3.2345, 3.22, 2.23, 1.445, 1.223];

        insertionSortDesc(elements).should.eql(expected);
    });

    it('should handle minus numbers', () => {
        const elements = [-13, 1, -4, 1, 5, 9, 2, 6, 5, 3];
        const expected = [9, 6, 5, 5, 3, 2, 1, 1, -4, -13];

        insertionSortDesc(elements).should.eql(expected);
    });

    it('should not break if single element', () => {
        const elements = [3];
        const expected = [3];

        insertionSortDesc(elements).should.eql(expected);
    });

    it('should not break if empty array passed', () => {
        const elements = [];
        const expected = [];

        insertionSortDesc(elements).should.eql(expected);
    });

    it('should sort an array of strings', () => {
        const arr = ['abc', 'cda', 'xtz', 'ytb', 'bas'];
        const expected = ['ytb', 'xtz', 'cda', 'bas', 'abc'];

        insertionSortDesc<string>(arr).should.eql(expected);
    });
});
