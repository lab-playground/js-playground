import {describe, expect, it} from '@jest/globals';
import '../flat';

describe('Array.prototype.myFlat', () => {
    it('should flatten an array with depth 1', () => {
        const arr = [1, [2, 3], 4];
        const expected = [1, 2, 3, 4];
        expect(arr.myFlat1()).toEqual(expected);
    });

    it('should flatten an array with depth 2', () => {
        const arr = [1, [2, [3, 4]], 5];
        const expected = [1, 2, 3, 4, 5];
        expect(arr.myFlat1(2)).toEqual(expected);
    });

    it('should not flatten an array with depth 0', () => {
        const arr = [1, [2, 3], 4];
        const expected = [1, [2, 3], 4];
        expect(arr.myFlat2(0)).toEqual(expected);
    });

    it('should work with empty arrays', () => {
        const arr = [];
        const expected = [];
        expect(arr.myFlat1()).toEqual(expected);
    });

    it('should work with arrays of non-array values', () => {
        const arr = [1, 'two', 3];
        const expected = [1, 'two', 3];
        expect(arr.myFlat1()).toEqual(expected);
    });
});
describe('Array.prototype.myFlat1', () => {
    it('should flatten an array with depth 1', () => {
        const arr = [1, [2, 3], 4];
        const expected = [1, 2, 3, 4];
        expect(arr.myFlat1()).toEqual(expected);
    });

    it('should not flatten an array with depth 0', () => {
        const arr = [1, [2, 3], 4];
        const expected = [1, [2, 3], 4];
        expect(arr.myFlat2(0)).toEqual(expected);
    });
});

describe('Array.prototype.myFlat2', () => {
    it('should flatten an array with depth 1', () => {
        const arr = [1, [2, 3], 4];
        const expected = [1, 2, 3, 4];
        expect(arr.myFlat2()).toEqual(expected);
    });

    it('should flatten an array with depth 2', () => {
        const arr = [1, [2, [3, 4]], 5];
        const expected = [1, 2, 3, 4, 5];
        expect(arr.myFlat2(2)).toEqual(expected);
    });

    it('should not flatten an array with depth 0', () => {
        const arr = [1, [2, 3], 4];
        const expected = [1, [2, 3], 4];
        expect(arr.myFlat2(0)).toEqual(expected);
    });

    it('should work with empty arrays', () => {
        const arr = [];
        const expected = [];
        expect(arr.myFlat2()).toEqual(expected);
    });

    it('should work with arrays of non-array values', () => {
        const arr = [1, 'two', 3];
        const expected = [1, 'two', 3];
        expect(arr.myFlat2()).toEqual(expected);
    });
});
