## Hoisting Exercises

1. If the code is `valid` what will be the output and if `invalid` what will be the error. Write the error message.

```js
console.log(animal);
var animal = "monkey";
// Output - output is undefined because var variables are hoisted to the top of its scope and initialized with a value of undefined.
```

```js
console.log(animal);
let animal = "monkey";
// Error - ReferenceError: animal is not defined because just like var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. Accessing them before the initialization results in a ReferenceError.
```

```js
console.log(animal);
const animal = "monkey";
// Error - ReferenceError: animal is not defined because just like let, const declarations are hoisted to the top but are not initialized.
```

```js
function sayHello(msg) {
  alert(msg);
}
sayHello("Hey Everyone");
// Output - alert (Hey Everyone)
```

```js
sayHello("Hey Everyone");
function sayHello(msg) {
  alert(msg);
}
// Output - alert (Hey Everyone)
```

```js
sayHello("Hey Everyone");
var sayHello = msg => {
  alert(msg);
};
// Error - TypeError: sayHello is not a function
```

```js
sayHello("Hey Everyone");
let sayHello = msg => {
  alert(msg);
};
// Error - ReferenceError: sayHello is not defined
```
