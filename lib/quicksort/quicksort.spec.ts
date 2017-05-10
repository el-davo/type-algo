import {quicksort} from './quicksort';

describe('Quick sort algorithm', () => {

  it('should order array of numbers correctly', () => {
    const elements = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
    const expected = [1, 1, 2, 3, 3, 4, 5, 5, 6, 9];

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
});
