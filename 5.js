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



