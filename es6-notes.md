#Let#
The "let" declaration syntax is the same as for "var". 
-You can basically replace var with let to declare a variable but keep its scope to the current code block, but "var" variables are hoisted even after the current block.

#const#
-Constants are also block-level declarations, similar to let. That means constants are destroyed once execution flows out of the block in which they were declared, and declarations are not hoisted to the top of the block. 
-Variables declared using const are considered to be constants, so the value cannot be changed once set. For this reason, every const variable must be initialized.
-The const keyword introduces one or more bindings in the block that encloses it. It doesn’t incur the cost of a function invocation.
-binding names as properties of the environment.
      
      const bindingName = function actualName () { //...
       };
       bindingName

#Object Destructuring#
-it can deconstruct nested object also. 
-destructured variable should be declared with let,const and var.

    var options = { repeat: true,save: false };
    // later
    var { repeat: localRepeat, save: localSave } = options; console.log(localRepeat); // true
    console.log(localSave); // false
