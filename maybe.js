var lodash = require('lodash');
var _ = require('ramda');
var curry = lodash.curry;
var match = curry(function(what, str) {
  return str.match(what);
});
var replace = curry(function(what, replacement, str) {
  return str.replace(what, replacement);
});
var filter = curry(function(f, ary) {
  return ary.filter(f);
});
var map = curry(function(f, ary) {
  return ary.map(f);
});

var Maybe = function(x) {
  this.__value = x;
}
Maybe.of = function(x) {
  return new Maybe(x);
}
Maybe.prototype.isNothing = function() {
  return (this.__value === null || this.__value === undefined);
}
Maybe.prototype.map = function(f) {
return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
}
var add = function(x, y) { return x + y };
console.log(Maybe.of(null).map(match(/a/ig)));
console.log(Maybe.of("Malkovich Malkovich").map(match(/a/ig)));
//console.log(Maybe.of({name: "Boris", age:14}).map(_.prop("age")).map(add(10)));

//  safeHead :: [a] -> Maybe(a)
var safeHead = function(xs) {
  return Maybe.of(xs[0]);
};
var streetName = _.compose(map(_.prop('street')), safeHead, _.prop('addresses'));
streetName({addresses: []});
// Maybe(null)
console.log(streetName({addresses: [{street: "Shady Ln.", number: 4201}]}));
//console.log(Maybe.of({name: "Dinah", age: 14}).map(_.prop("age")).map(add(10)));
