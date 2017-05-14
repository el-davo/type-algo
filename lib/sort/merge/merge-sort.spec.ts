import { mergeSort } from './merge-sort';

describe('Merge sort', () => {

    it('should sort an array of integers', () => {
        const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
        const expected = [1, 1, 2, 3, 3, 4, 5, 5, 6, 9];

        mergeSort<number>(arr).should.eql(expected);
    });

    it('should sort an array of floats', () => {
        const elements = [3.22, 1.445, 4.55, 1.223, 5.56, 9.12, 2.23, 6.55445, 5.43324, 3.2345];
        const expected = [1.223, 1.445, 2.23, 3.22, 3.2345, 4.55, 5.43324, 5.56, 6.55445, 9.12];

        mergeSort(elements).should.eql(expected);
    });

    it('should handle minus numbers', () => {
        const elements = [-13, 1, -4, 1, 5, 9, 2, 6, 5, 3];
        const expected = [-13, -4, 1, 1, 2, 3, 5, 5, 6, 9];

        mergeSort(elements).should.eql(expected);
    });

    it('should not break if single element', () => {
        const elements = [3];
        const expected = [3];

        mergeSort(elements).should.eql(expected);
    });

    it('should not break if empty array passed', () => {
        const elements = [];
        const expected = [];

        mergeSort(elements).should.eql(expected);
    });

    it('should sort an array of strings', () => {
        const arr = ['abc', 'cda', 'xtz', 'ytb', 'bas'];
        const expected = ['abc', 'bas', 'cda', 'xtz', 'ytb'];

        mergeSort<string>(arr).should.eql(expected);
    });
    
});