var Container = function(x) {
  this.__value = x;
}
Container.of = function(x) { return new Container(x); };

// (a -> b) -> Container a -> Container b
Container.prototype.map = function(f){
  return Container.of(f(this.__value))
}

console.log(Container.of(Container.of(2)));
console.log(Container.of(2).map(function(two){ return two + 2 }));


console.log(Container.of("flamethrowers").map(function(s){ return s.toUpperCase() }));
