import myInstanceof from "../instanceof"
import {describe, expect, it} from '@jest/globals';

describe('instanceof', () => {
    it('should return true for primitive types', () => {
        expect(myInstanceof(1, Number)).toBe(true);
        expect(myInstanceof('1', String)).toBe(true);
        expect(myInstanceof(true, Boolean)).toBe(true);
        expect(myInstanceof(Symbol('s'), Symbol)).toBe(true);
        expect(myInstanceof(null, Null)).toBe(true);
        expect(myInstanceof(undefined, Undefined)).toBe(true);
    })
})