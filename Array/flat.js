Array.prototype.myFlat1 = function (level = 1) {
    return this.reduce((prev, curr) => {
        if (level === 0) {
            return prev.concat(curr);
        } else if (Array.isArray(curr)) {
            return prev.concat(curr.myFlat1(level - 1));
        } else {
            return prev.concat(curr);
        }
    }, []);
};

Array.prototype.myFlat2 = function (depth = 1) {
    const result = [];
    const stack = this.slice();

    while (stack.length) {
        const item = stack.pop();
        if (Array.isArray(item) && depth > 0) {
            stack.push(...item);
            depth--;
        } else {
            result.unshift(item);
        }
    }

    return result;
};
