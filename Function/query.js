function query(array) {
    let operations = [];

    const addOperation = (operation) => {
        operations.push(operation);
        return this;
    };

    const applyOperations = () => {
        let result = [...array];
        operations.forEach(operation => {
            result = operation(result);
        });
        return result;
    };

    this.where = (callback) => {
        return addOperation(array => array.filter(callback));
    };

    this.sortBy = (key) => {
        return addOperation(array => array.sort((a, b) => a[key] - b[key]));
    };

    this.groupBy = (key) => {
        return addOperation(array => array.reduce((acc, item) => {
            const group = item[key];
            if (!acc[group]) {
                acc[group] = [];
            }
            acc[group].push(item);
            return acc;
        }, {}));
    };

    this.execute = () => {
        return applyOperations();
    };

    return this;
}

const list = [
    { id: 1, name: 'Alice', age: 20 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Alice', age: 25 },
    { id: 4, name: 'Bob', age: 35 },
];

const result = query(list)
    .where(item => item.age > 18)
    .sortBy('id')
    .groupBy('name')
    .execute();

console.log(result);
