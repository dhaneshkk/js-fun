var _ = require("ramda");

var Left = function(x) {
  this.__value = x;
}
Left.of = function(x) {
  return new Left(x);
}
Left.prototype.map = function(f) {
  return this;
}
var Right = function(x) {
  this.__value = x;
}
Right.of = function(x) {
  return new Right(x);
}
Right.prototype.map = function(f) {
  return Right.of(f(this.__value));
}

Right.of("rain").map(function(str){ return "b"+str; });
// Right("brain")
Left.of("rain").map(function(str){ return "b"+str; });
// Left("rain")
Right.of({host: 'localhost', port: 80}).map(_.prop('host'));
// Right('localhost')
console.log(Left.of("rolls eyes...").map(_.prop("host")));
  var id = function(x){ return x; };

/*
 * Left is the teenagery sort and ignores our request to map over it. Right will work just like
Container (a.k.a Identity). The power comes from the ability to embed an error message within the Left .*
*
*/

var moment = require('moment');
//  getAge :: Date -> User -> Either(String, Number)
var getAge = _.curry(function(now, user) {
var birthdate = moment(user.birthdate, 'YYYY-MM-DD');
if (!birthdate.isValid()) return Left.of("Birth date could not be parsed"); return Right.of(now.diff(birthdate, 'years'));
});
console.log(getAge(moment(), {birthdate: '2005-12-12'}));
// Right(9)
console.log(getAge(moment(), {birthdate: 'xxxx'}));
// Left("Birth date could not be parsed")
//
// either::(a->c)->(b->c)->Eitherab->c
var either = _.curry(function(f, g, e) {
  switch(e.constructor) {
    case Left: return f(e.__value);
    case Right: return g(e.__value);
  }
});
var add = function(x,y){return x+y;}
//var fortune  = _.compose(_.concat("If you survive, you will be "), add(1));
//  zoltar :: User -> _
//var zoltar = _.compose(console.log, either(id, fortune), getAge(moment()));
//zoltar({birthdate: '2005-12-12'});
// "If you survive, you will be 10"
// undefined
//zoltar({birthdate: 'balloons!'});
// "Birth date could not be parsed"
// undefined
