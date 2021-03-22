import { mergeArray } from '../../src/modules/utilities';

test('mergeArray merges two arrays', () => {
    expect(mergeArray([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
});
