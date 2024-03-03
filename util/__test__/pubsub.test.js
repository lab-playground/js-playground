import PubSub from '../pubsub';
describe('PubSub', () => {
  let pubsub;

  beforeEach(() => {
    pubsub = new PubSub();
  });

  it('should subscribe to an event', () => {
    const eventName = 'testEvent';
    const fn = jest.fn();

    pubsub.on(eventName, fn);

    expect(pubsub.subscribers[eventName]).toContain(fn);
  });

  it('should emit an event and call all subscribers', () => {
    const eventName = 'testEvent';
    const fn1 = jest.fn();
    const fn2 = jest.fn();

    pubsub.on(eventName, fn1);
    pubsub.on(eventName, fn2);

    pubsub.emit(eventName);

    expect(fn1).toHaveBeenCalled();
    expect(fn2).toHaveBeenCalled();
  });

  it('should pass arguments to subscribers when emitting an event', () => {
    const eventName = 'testEvent';
    const fn = jest.fn();
    const arg1 = 'argument 1';
    const arg2 = 'argument 2';

    pubsub.on(eventName, fn);

    pubsub.emit(eventName, arg1, arg2);

    expect(fn).toHaveBeenCalledWith(arg1, arg2);
  });
});