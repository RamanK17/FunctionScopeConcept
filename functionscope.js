//function scope 
//
//A variable can be either of global or local scope. A global variable is a variable declared in the main body of the source code, outside all functions, while a local variable is one declared within the body of a function or a block.

var Name = "Rohit";
myFunction();
myFunction1();
myFunction2();

function myFunction() {
    data = "show it off"; //if it is not declared then it access is set global
    console.log("global declared :", Name);//printing the global declared variable.
}

function myFunction1() {
    console.log("global declared :", Name);//printing the global declared variable.
}

function myFunction2() {
    console.log("Inside function declared acts as global :", data);//printing the local declared variable inside in the myFunction().
}









