// var x = "Hello World"
// var message = "in global";
//console.log("global = " + message);
/*  a as the value of the funciton not the return result */
// var a = function (){
   // var message = "inside A"
	//console.log("a: message = " + message);
	// function b(){
		//console.log("b: message = "+ message);
	// }
	// b();
// }

// a();

/*
var x;
console.log(x);
if (x == undefined) {
	console.log("x is undefined");
}
x=5;
if (x == undefined) {
	console.log("x is undefined");
} else {
	console.log("x has been defined ");
}
*/

// var string = "Hello ";
// string += "World";
// console.log(string + "!");

// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstname = "Mark";
// company.ceo.color = "Blue";

// console.log(company.ceo);
// console.log(company["name"]);
// company["stock of company"] = 110;
// console.log("stock of cie is " 
// 	+company["stock of company"]);

// var stockprop = "stock of company";
// company.stockprop = 110;
// console.log("stock is "+company.stockprop);

// BETTER WAY TO WRITE OBJECT

// var facebook = {
// 	name: "facebook",
// 	ceo: {
// 		firstname: "Mark",
// 		color: "blue"
// 	},
// 	stock: 110
// }

// console.log(facebook);
// console.log(facebook.ceo.firstname);

// Functions are 1st class data type 
// and object

// Function factory

// function makeMultiplier(multiplier) {
// 	var myFunc = function(x) {
// 		return multiplier * x;
// 	};
// 	return myFunc;
// }

// var multby3 = makeMultiplier(3);
// console.log(multby3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));

// // Passing function as argument
// function doOperation(x, operation) {
// 	return operation(x);
// }

// var result = doOperation(3, multby3);
// console.log(result);
// result = doOperation(25, doubleAll);
// console.log(result);

// var a = {x: 7};
// var b = a;
// console.log(a);
// console.log(b);
// b.x=5;
// console.log(a);
// console.log(b);
// b=11;
// console.log(a);
// console.log(b);

//  FUNCTION CONSTRUCTORS
// function Circle (radius) {
// 	this.radius = radius;
// }
// Circle.prototype.getArea =
// 	function () {
// 		return Math.PI * Math.pow(this.radius, 2);
// 	}

// var myCircle = new Circle(8);
// console.log(myCircle);
// console.log(myCircle.getArea());	

// ARRAYS
// var myArray = new Array();
// myArray[0] = "Philippe";
// myArray[1] = 2;
// myArray[2] = function (name){
// 	console.log("Hello " + name)
// };
// myArray[3] = {course: "Html, Css, JS"};

// console.log(myArray);
// myArray[2](" Philippe");
// myArray[2](myArray[0]);
// console.log(myArray[3].course);

// var names = ["philippe", "Jean", "Denis"];
// for (var i=0; i<names.length; i++){
// 	console.log(names[i]);
// }

// for (var name in names){
// 	console.log("Hello " +names[name]);
// } 
//  //  name represents the properties of names

// Immedialty invoked function expressions
// ( function (arg) {
// 	console.log("arg is " + arg); 
// })("bye bye");


(function () {
	var greeter = {};
	greeter.name = "john";
	var greeting = "Hi ";
	greeter.sayHi = function() {
		console.log(greeting + greeter.name);
	}
	this.greeter = greeter;
})(this);
