//Write a function add() that takes two numbers as arguments and returns the sum.

var add = function(num1, num2) {
	return (num1 + num2);
};

//Write a function sub() take takes two numbers as arguments and returns the difference.

var sub = function(num1, num2) {
	return (num1 - num2);
};


//Write a function combine() that takes three parameters. The first two are numbers and the last is a boolean. If the boolean is true, return the sum of the first two arguments, otherwise, return the difference. Hint: use add() and sub() from within combine().

var combine = function(num1, num2, bool1) {
	if(bool1 === true) {
		return add(num1, num2);
	} else {
		return sub(num1, num2);
	}
	};
console.log(combine(2, 3, false));

