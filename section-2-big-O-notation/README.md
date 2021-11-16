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
