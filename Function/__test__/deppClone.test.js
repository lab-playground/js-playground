import {describe, expect, it} from '@jest/globals';
import deepClone from '../deepClone';

describe('deepClone', () => {
    it('should clone primitive types', () => {
        expect(deepClone(1)).toBe(1);
        expect(deepClone('abc')).toBe('abc');
        expect(deepClone(null)).toBeNull();
        expect(deepClone(undefined)).toBeUndefined();
        expect(deepClone(true)).toBe(true);
        expect(deepClone(Symbol('s')).toString()).toBe(Symbol('s').toString());
    });
    it('should clone objects', () => {
        const obj = {a: 1, b: {c: 2}};
        const cloned = deepClone(obj);
        expect(cloned).toEqual(obj);
        expect(cloned).not.toBe(obj);
        expect(cloned.b).not.toBe(obj.b);
    });
    it('should clone arrays', () => {
        const arr = [1, 2, {a: 3}];
        const cloned = deepClone(arr);
        expect(cloned).toEqual(arr);
        expect(cloned).not.toBe(arr);
        expect(cloned[2]).not.toBe(arr[2]);
    });
    it('should clone nested structures', () => {
        const obj = {a: [{b: 2}], c: {d: 3}};
        const cloned = deepClone(obj);
        expect(cloned).toEqual(obj);
        expect(cloned.a[0]).not.toBe(obj.a[0]);
        expect(cloned.c).not.toBe(obj.c);
    });
    it('should handle circular references', () => {
        const obj = {a: 1};
        obj.self = obj;
        const cloned = deepClone(obj);
        expect(cloned).toEqual(obj);
        expect(cloned.self).toBe(cloned);
    });
    it('should clone Map', () => {
        const map = new Map();
        map.set('a', {b: 1});
        const cloned = deepClone(map);
        expect(cloned).not.toBe(map);
        expect(cloned.get('a')).toEqual({b: 1});
        expect(cloned.get('a')).not.toBe(map.get('a'));
    });
    it('should clone Set', () => {
        const set = new Set([1, 2, {a: 3}]);
        const cloned = deepClone(set);
        expect(cloned).not.toBe(set);
        expect([...cloned]).toEqual([...set]);
    });
    it('should clone Date', () => {
        const date = new Date();
        const cloned = deepClone(date);
        expect(cloned).not.toBe(date);
        expect(cloned.getTime()).toBe(date.getTime());
    });
    it('should clone RegExp', () => {
        const reg = /abc/gim;
        const cloned = deepClone(reg);
        expect(cloned).not.toBe(reg);
        expect(cloned.source).toBe(reg.source);
        expect(cloned.flags).toBe(reg.flags);
    });
    it('should clone Symbol', () => {
        const sym = Symbol('foo');
        const cloned = deepClone(sym);
        expect(typeof cloned).toBe('symbol');
        expect(cloned.description).toBe(sym.description);
    });
    it('should return the same function', () => {
        function fn(a) { return a + 1; }
        const cloned = deepClone(fn);
        expect(cloned).toBe(fn);
        expect(cloned(1)).toBe(2);
    });
});
