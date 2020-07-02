## <img src="./ng.png" alt="Anular Logo" width="250" height="150"> Angular 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# <img src="./Rx_Logo_S.png" alt="RxJS Logo" width="86" height="86"> RxJS: Reactive Extensions For JavaScript
 
## Important
what is the the problem that RxJS is trying to solve ? 
ANSWER :- It tell us how to handle asynchronous calls with multiple events.

To get the updates of the events happening in near future in a particular span of time 

for better undersatnding  -- take the example of youtube instead of sitting and reloading our fav. channel we tend to hit subscribe button. which gives us update of the real time 
 
## Installation and Usage

### ES6 via npm

```sh
npm install rxjs
```
### Comparing regular js with RxJS

what is the role of subscriber - it works same as the subscribe in youtube . It collects information of updates in event.

```js
import { fromEvent } from  'rxjs';

fromEvent(document,'click').subscribe(
  ()=>{
    console.log('click through rxjs ');
  }
)

//same functionality implemented thrrough js
// document.addEventListener('click', ()=>{
//   console.log('you clicked');
// });
  
```

### Understand the Flow

understanding pipes | SCAN 
```js
import { fromEvent } from  'rxjs';
import { scan } from 'rxjs/operators';

fromEvent(document,'click')
  .pipe(scan(count => count +1,0))
  .subscribe(
  (count)=>{
    console.log(`click throgh rxjs : ${count}`);
  }
)
```

### Understanding Observable 
```js
import { Observable, Subscriber } from  'rxjs';
 
const observable = new Observable( Subscriber=> {
  Subscriber.next(1);
  Subscriber.next(2);
  Subscriber.next(3);

  setTimeout( ()=>{
  Subscriber.next(3);
  Subscriber.complete();  
  },2000)
})

// 2000 -> it is the observing time of the event
// complete() - more like a return statement

```

### What is observer
```js
import { Observable } from  'rxjs';
 
const observable = new Observable( susbscriber=> {
  susbscriber.next(1);
  susbscriber.next(2);
  susbscriber.next(3);

  setTimeout( ()=>{
  susbscriber.next(4);
  susbscriber.complete();  
  },2000)
})

console.log('I am About to Subscribe');

const observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

observable.subscribe(observer)

console.log("ALL DONE ISHAAN");

```
### How to unsubscribe  ?
IF we don't want to observe a particular case we do the unsubscribe.
 after unsubscribing it won't wait' fro 2 millisecond for this
```js
 setTimeout( ()=>{
  susbscriber.next(4);
  susbscriber.complete();  
  },2000)
```
full example 
```js
import { Observable } from  'rxjs';
 
const observable = new Observable( susbscriber=> {
  susbscriber.next(1);
  susbscriber.next(2);
  susbscriber.next(3);

  setTimeout( ()=>{
  susbscriber.next(4);
  susbscriber.complete();  
  },2000)
})

console.log('I am About to Subscribe');

const observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

const subscription = observable.subscribe(observer);

subscription.unsubscribe();

console.log("ALL DONE ISHAAN");

```


## Further help

- [API Documentation](https://rxjs.dev/)
- [Visual understanding](https://rxviz.com/) 

