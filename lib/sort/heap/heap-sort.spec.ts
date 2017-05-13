import { heapSort } from './heap-sort';

describe('Heap sort', () => {

    it('should sort an array on numbers', () => {
        const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
        const expected = [1, 1, 2, 3, 3, 4, 5, 5, 6, 9];

        heapSort<number>(arr).should.eql(expected);
    });

    it('should sort an array of floats', () => {
        const elements = [3.22, 1.445, 4.55, 1.223, 5.56, 9.12, 2.23, 6.55445, 5.43324, 3.2345];
        const expected = [1.223, 1.445, 2.23, 3.22, 3.2345, 4.55, 5.43324, 5.56, 6.55445, 9.12];

        heapSort(elements).should.eql(expected);
    });

    it('should handle single element array', () => {
        const arr = [198];
        const expected = [198];

        heapSort<number>(arr).should.eql(expected);
    });

    it('should handle empty array', () => {
        const arr = [];
        const expected = [];

        heapSort<number>(arr).should.eql(expected);
    });

    it('should sort an array of strings', () => {
        const arr = ['abc', 'cda', 'xtz', 'ytb', 'bas'];
        const expected = ['abc', 'bas', 'cda', 'xtz', 'ytb'];

        heapSort<string>(arr).should.eql(expected);
    });
});
