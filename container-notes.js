-Container - treasure chest - a special box that cradles our valuable data.

 var Container = function(x) {
  this.__value = x;
}
Container.of = function(x) { return new Container(x); };

Container.of(3)

Container is an object with one property. Lots of containers just hold one thing, though they aren't limited to one. We've arbitrarily named its property __value .
The __value cannot be one specific type or our Container would hardly live up to the name.
Once data goes into the Container it stays there. We could get it out by using .__value , but that would defeat the purpose.

-A Functor is a type that implements map and obeys some laws
 -Functor is simply an interface with a contract.

abstraction of function application. When we map a function, we ask the container type to run it for us
