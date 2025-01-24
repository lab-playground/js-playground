import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
    subscriber.next('Hello');
    subscriber.next('World');
    subscriber.complete();
});

observable.subscribe({
    next: value => console.log(value),
    complete: () => console.log('Observable completed')
});
