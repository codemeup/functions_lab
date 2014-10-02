//If your previous function did not use the return keyword, modify it so that it does. It should return the message to be logged instead of logging it directly. Store the result in a variable and log that instead.

var sayHello = function(Name) {
	return ("Hello " + Name);
};
var Name = "Tim";
sayHello(Name);
console.log(sayHello(Name));
var Name = "Obama";
console.log(sayHello(Name));

