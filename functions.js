// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.


function tellFortune(job, location, partner, numKids) {
	var future = 'You will work as a ' + job + ', living in ' + location + ' with your wonderful partner ' + partner + ' and your ' + numKids + ' kids';
	return future;
}

tellFortune("dude rancher", "Lincoln, Nebraska", "Sharkquisha", "14");

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
function calculateAge(birthYear, currentYear) {
	age1 = currentYear - birthYear;
	age2 = currentYear - (birthYear + 1);
	console.log("You are either " + age1 + " or " + age2);
}

calculateAge(1996, 2015);
calculateAge(1995, 2015);
calculateAge(1985, 2015);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amountPerDay) {
	var timeLeft = 115 - age; //incredibly ominous variable name, I know
	var totalFood = 365 * amountPerDay * timeLeft;
	console.log("You eat " + amountPerDay + " PB&Js per day, so you need " + totalFood + " PB&Js for a lifetime supply (assuming you make it to 115).");
}

calculateSupply(18, 2);
calculateSupply(19, 4);
calculateSupply(21, 19);

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".

// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircleAttributes(radius) {
	var circumference = 2 * Math.PI * radius;
	var area = (radius * radius) * Math.PI;
	console.log("Circumference = " + circumference);
	console.log("Area = " + area);
}

calcCircleAttributes(50);

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celsiusToFahrenheit(celsius) {
	var fahrenheit = celsius * 1.8 + 32;
	console.log("In fahrenheit, this temperature is " + fahrenheit);
}

celsiusToFahrenheit(20);

function fahrenheitToCelsius(fahrenheit) {
	var celsius = (fahrenheit - 32) / 1.8;
	console.log("In celsius, this temperature is " + celsius);
}

fahrenheitToCelsius(60);