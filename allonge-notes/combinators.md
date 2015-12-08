The strength of JavaScript is that you can do anything. The weakness is that you will.

#Combinators#
-combinators are useful when you want to emphasize what you’re doing and how it fits together, and more explicit code is useful when you want to emphasize what you’re working with.
-“A combinator is a higher-order function that uses only function application 
and earlier defined combinators to define a result from its arguments.”
#Looser Defination#
-Higher-order pure functions that take only functions as arguments and return a function.

-If we were learning Combinatorial Logic, we’d start with the most basic combinators like S, K, and I, and work up from there to practical combinators

#Compose -  B combinator or “Bluebird.”
const compose = (a, b) => (c) => a(b(c))

#Function Decroators#
  -A function decorator is a higher-order function that takes one function as an argument, returns another function, and the returned function is a variation of the argument function. 
    const not = (fn) => (x) => !fn(x);
    e.g Once, Maybe.

-partial application is orthogonal to composition
-Fat arrow functions are designed to be very lightweight and are often used with constructs like mapping or callbacks to emulate syntax.
#Tap#
-K Combinators


