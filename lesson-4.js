var lodash= require('lodash');
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
var hasSpaces = match(/\s+/g);
console.log(hasSpaces("hello world"));

console.log(hasSpaces("spaceless"));
// null
console.log(filter(hasSpaces, ["tori_spelling", "tori amos"]));
// ["tori amos"]
var findSpaces = filter(hasSpaces);
// function(xs) { return xs.filter(function(x) { return x.match(/\s+/g) }) }
console.log(findSpaces(["tori_spelling", "tori amos"]));
// ["tori amos"]
var noVowels = replace(/[aeiou]/ig);
// function(replacement, x) { return x.replace(/[aeiou]/ig, replacement) }
var censored = noVowels("*");
// function(x) { return x.replace(/[aeiou]/ig, "*") }
console.log(censored("Chocolate Rain"));
// 'Ch*c*l*t* R**n'
