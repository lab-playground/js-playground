class LazyMan {
    constructor(name) {
        this.tasks = [];
        // 初始化时加入问候任务
        this.tasks.push(() => console.log(`Hi! This is ${name}!`));
        // 延迟执行队列，确保链式调用完成后再执行任务
        setTimeout(() => this.run());
    }

    run() {
        const execute = async () => {
            while (this.tasks.length > 0) {
                const task = this.tasks.shift();
                await task(); // 异步执行任务
            }
        };
        execute();
    }

    sleep(seconds) {
        if (typeof seconds !== 'number' || isNaN(seconds) || seconds < 0) {
            throw new Error('sleep 参数必须为非负数字');
        }
        this.tasks.push(() =>
            new Promise(resolve =>
                setTimeout(() => {
                    console.log(`Wake up after ${seconds}`);
                    resolve();
                }, seconds * 1000)
            )
        );
        return this; // 链式调用
    }

    eat(food) {
        this.tasks.push(() => {
            console.log(`Eat ${food}`);
            return Promise.resolve();
        });
        return this;
    }

    sleepFirst(seconds) {
        if (typeof seconds !== 'number' || isNaN(seconds) || seconds < 0) {
            throw new Error('sleepFirst 参数必须为非负数字');
        }
        this.tasks.unshift(() =>
            new Promise(resolve =>
                setTimeout(() => {
                    console.log(`Wake up after ${seconds}`);
                    resolve();
                }, seconds * 1000)
            )
        );
        return this;
    }
}

const LazyMan1 = (name) => new LazyMan(name);

LazyMan1('cc').eat('apple').sleep(2).eat('banana').sleepFirst(5);
