// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(num1, num2) {
	if (num1 > num2) {
		console.log(num1 + " is greater than " + num2);
	}
	else if (num2 > num1) {
		console.log(num2 + " is greater than " + num1);
	}
	else {
		console.log("The numbers are equal!");
	}
};

greaterNum(15, 20);
greaterNum(50, 30);
greaterNum(10, 10);

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(langCode) {
	if (langCode == "es") {
		console.log("Spanish: Hola mundo.");
	}
	else if(langCode == "fr") {
		console.log("French: Bonjour le monde.");
	}
	else (langCode == "sw") {
		console.log("Swahili: Jambo dunia.");
	}
};

helloWorld("es");
helloWorld("fr");
helloWorld("sw");


// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(score) {
	if (score >= 90 && score <= 100) {
		return "A";
	}
	else if (score >= 80 && score < 90) {
		return "B";
	}
	else if (score >= 70 && score < 80) {
		return "C";
	}
	else if (score >= 60 && score < 70) {
		return "D";
	}
	else if (score < 60) {
		return "F";
	}
}

console.log(assignGrade(95));
console.log(assignGrade(85));
console.log(assignGrade(75));
console.log(assignGrade(65));
console.log(assignGrade(55));

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".


function pluralize(noun, num) {
	if (num > 1) {
		console.log(num + " " + noun + "s")
	}
	else {
		console.log(num + " " + noun)
	}
}

pluralize("dog", 17);
pluralize("dog", 1);