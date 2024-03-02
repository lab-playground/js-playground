import {describe, expect, it} from '@jest/globals';
import '../call';

describe('Function.prototype.myCall', () => {
    it('should call the function with the provided context', () => {
        const context = {value: 42};
        const func = function () {
            return this.value;
        };
        expect(func.myCall(context)).toEqual(42);
    });

    it('should call the function with the provided arguments', () => {
        const func = function (arg1, arg2) {
            return arg1 + arg2;
        };
        expect(func.myCall(null, 1, 2)).toEqual(3);
    });

    it('should default to global context if no context is provided', () => {
        const func = function () {
            return this;
        };
        expect(func.myCall()).toEqual(global);
    });

    it('should not affect the context after the function call', () => {
        const context = {value: 42};
        const func = function () {
            this.value = 24;
        };
        func.myCall(context);
        expect(context.value).toEqual(24);
    });
});
