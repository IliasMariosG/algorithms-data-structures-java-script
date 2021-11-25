# Algorithms and Data Structures in JavaScript

## Big O Notation

Numeric representation of the performance of code

### What does faster mean?

Faster code in seconds/miliseconds?

How much memory is used?

Readability?

Brevity?

Speed and memory are of interest. This probably comes at the expense of readibility

### Evaluating speed

With built-in timing functions, e.g.:

```js
.performance.now()
```

With **Node** use:

```js
const {performance} = require('perf_hooks');
...
.perfomance.now()
```

### The problem with time

Different machines measure different times

The same machine measures different times

For really fast algorithms, speed measurements might not be precise enough

### If not time, then what?

Count the number of simple operations the computer has to perform, instead of counting seconds

For instance:

```js
function addUpToAnotherNumber(n) {
  return n * (n + 1) / 2
}
```

One multiplication, one addition, one division: Three operations regardless of the size of n

```js
function addUpTo(n) {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }
  return total
}
```

```js
total += i
```

n assignments and n additions

```js
i++
```

n assignments and n additions

```js
let total = 0
```

one assignment

```js
let i = 1
```

one assignment

```js
i <= n
```

n comparisons

### Total

5n + 2

### Performance Tracker Tool by Steel Colt

[Performance tracker Tool by Steel Colt](https://rithmschool.github.io/function-timer-demo/)

## Big O

How the runtime grows as the inputs grow

Nested loops

O(n^2)

## Rules of thumb for Big O

Constatns don't matter

O(2n) -> O(n)

O(500) -> O(1)

O(13^2) -> O(n^2)

Smaller terms don't matter

O(n+10) -> O(n)

O(1000n + 50) -> O(n)

Arithmetic operations are constant

Variable assignments is constant

Accessing elements in an array or object is constant

In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

## Space Complexity

TODO

## Problem Solving Strategies

Refer to Polya's How to Solve it book

  1. Understand the problem

  Can I rephrase the problem in my own words?

  What are the inputs that go into the problem?

  What are the outputs that should come from the solution?

  Can the outputs be determined from the inputs? Do I have enough information to solve the problem?

  How should I label the important pieces of data that are a part of the problem?

  2. Explore Concrete Problems

  input and output examples. Start simple, progress to more complex ones, take into account edge cases

  3. Break it Down

  4. Solve or Simplify
