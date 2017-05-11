import {binarySearch} from './binary-search';

describe('Binary search', () => {

  it('should find an element in an array', () => {
    let arr = [10, 25, 44, 51, 55, 74, 5000, 7000, 7651, 7655];

    binarySearch<number>(arr, 7651).should.be.true();
  });

  it('should not find an element that does not exist', () => {
    let arr = [10, 25, 44, 51, 55, 74, 5000, 7000, 7651, 7655];

    binarySearch<number>(arr, 12).should.be.false();
  });

  it('should handle minus numbers search that does not exist', () => {
    let arr = [10, 25, 44, 51, 55, 74, 5000, 7000, 7651, 7655];

    binarySearch<number>(arr, -200).should.be.false();
  });

  it('should find a minus number', () => {
    let arr = [-2000, -199, -55, -9, 10, 25, 44, 51, 55, 74, 5000, 7000, 7651, 7655];

    binarySearch<number>(arr, -55).should.be.true();
  });

  it('should find text in an alphabetically sorted array', () => {
    const arr = ['abc', 'bas', 'cda', 'xtz', 'ytb'];

    binarySearch<string>(arr, 'ytb').should.be.true();
  });

  it('should not find text that does not exist in an alphabetically sorted array', () => {
    const arr = ['abc', 'bas', 'cda', 'xtz', 'ytb'];

    binarySearch<string>(arr, 'xxx').should.be.false();
  });
});