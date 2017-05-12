import {bubbleSort} from "./bubble-sort";

describe('Bubble sort', () => {

    it('should sort an array on numbers', () => {
        const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
        const expected = [1, 1, 2, 3, 3, 4, 5, 5, 6, 9];

        bubbleSort<number>(arr).should.eql(expected);
    });

    it('should sort an array of strings', () => {
        const arr = ['abc', 'cda', 'xtz', 'ytb', 'bas'];
        const expected = ['abc', 'bas', 'cda', 'xtz', 'ytb'];

        bubbleSort<string>(arr).should.eql(expected);
    });

    it('should handle single element array', () => {
        const arr = [198];
        const expected = [198];

        bubbleSort<number>(arr).should.eql(expected);
    });

    it('should handle empty array', () => {
        const arr = [];
        const expected = [];

        bubbleSort<number>(arr).should.eql(expected);
    });
});
