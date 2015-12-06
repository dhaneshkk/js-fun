#MAthematical Functions#

-A function is a special relationship between values: Each of its input values gives back exactly one output value.

 Think function as "map" between input to output. like below
 
 var toLowerCase = {"A":"a", "B": "b", "C": "c", "D": "d", "E": "e", "D": "d"};
  toLowerCase["C"];
//c


#Pure Functons#
  -Pure functions are mathematical functions.
  -A side effect is a change of system state or observable interaction with the outside world that occurs during the calculation of a result.

  #Benefits#
    -Cacheable-Memoize
    -Portable/self Documented - self contained  with explicit dependency by setting as arguments
        Joe Armstrong: "The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana... and the entire jungle".
    -Testable - supply input & assert output, no need  for mock up.
    -Reasonable - referential transparency.- A spot of code is referentially transparent when it can be substituted for its evaluated value without changing the behavior of the program.
    -Parallel
 
 -But Writing programs with pure functions is a tad laborious, So we need following tools.
  
  #Currying#
  -Currying allows us to prepare each function to just take its data, operate on it, and pass it along.
  -You can call a function with fewer arguments than it expects. the function(that closed others) returns a function that takes the remaining arguments.
  -the returned function remembers of the argument of the closed function, via "Closure".
  -Giving a function fewer arguments than it expects is typically called "partial application".
  -Partially applying a function can remove a lot of boiler plate code. 
  
  #Compose#
  -Functional husbandry
    var compose = function(f,g) {
      return function(x) {
        return f(g(x));
      };
    };

    f and g are functions and x is the value being "piped" through them.
   -composing two units of some type (in this case function) should yield a new unit of that very type
   In our definition of compose , the g will run before the f , creating a "right to left flow" of data.
   -// associativity
      var associative = compose(f, compose(g, h)) == compose(compose(f, g), h);
      // true

  #Pointfree#
  -Pointfree style means never having to say your data. 
  -Excuse me. 
  -It means functions that never mention the data upon which they operate. 
  -First class functions, currying, and composition all play well together to create this style.
  
  //not pointfree because we mention the data: word
  var snakeCase = function (word) {
    return word.toLowerCase().replace(/\s+/ig, '_');
  };
  
  //pointfree
  var snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase);
  
  -See how we partially applied replace ? What we're doing is piping our data through each function of 1 argument. 
  Currying allows us to prepare each function to just take its data, operate on it, and pass it along. 
  -Pointfree code can again, help us remove needless names and keep us concise and generic. 
  -Pointfree is a good litmus test for functional code as it let's us know we've got small functions that take input to output. 
  -One can't compose a while loop, for instance. 
  -Be warned, however, pointfree is a double edge sword and can sometimes obfuscate intention. Not all functional code is pointfree and that is O.K. We'll shoot for it where we can and stick with normal functions otherwise.



