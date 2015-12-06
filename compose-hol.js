var _ = require('ramda');
//var accounting = require('accounting');
var trace = _.curry(function(tag, x) {
      console.log(tag, x);
      return x;
});
// Example Data
var CARS = [
{name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
{name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false}, 
{name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false}, 
{name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
{name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
];

var words = _.split(' ');


var head = function(xs) { return xs[0]; };
var tail = function(xs) {return xs[xs.length-1]}
var reverse = _.reduce(function(acc, x){ return [x].concat(acc); }, []);
var last = _.compose(head, reverse);
var toUpperCase = function(x) { return x.toUpperCase(); };
var toLowerCase = function(x) { return x.toLowerCase(); };
var exclaim = function(x) { return x + '!'; };
var shout = _.compose(exclaim, toUpperCase);

var isLastInStock =  _.compose(_.prop('in_stock'), _.last);
var nameOfFirstCar = _.compose(_.prop('name') , _.head)
var _average = function(xs) { return _.reduce(_.add, 0, xs) / xs.length; }; 
var averageDollarValue = _.compose(_average, _.map(_.prop('dollar_value')));
var fastestCar = _.compose(_.prop('name'), trace('traced value'),_.last, _.sortBy(_.prop('horsepower')));

var capitalize = function(s){
  return toUpperCase(head(s)) + toLowerCase(tail(s));
}

console.log(words('Jai Bhairavi'));

console.log(capitalize('smurf'));

console.log(isLastInStock(CARS));
console.log(nameOfFirstCar(CARS));
console.log(averageDollarValue(CARS));
console.log(fastestCar(CARS)+' is the fastest car');
// //[1,2,3].slice(0, 2)
var slice = _.curry(function(start, end, xs){return xs.slice(start, end);});
console.log(slice(0,2),([1,2,3]));

var words_slice = _.compose(slice(0,2), words);
console.log(words_slice('Jai Bhairavi Devi'));
