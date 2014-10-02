////Write a function that prints out how many times it has been called.
//Hint: Can you do this using only local variables? Think about what we talked about regarding variable scope. Can you rely on the help of a global variable?
var x = 0;
var myFun = function () {
   console.log ("i've been called " + x + " times");
   x = x + 1;
};
myFun();
myFun();
myFun();
myFun();
myFun();
myFun();

// the key here is to declare the variable outside the function
// it's the difference between global scope and local scope. If you declare the var insode the function it only exists locally and not globally so it can't grab the value that is being returned and input it again

