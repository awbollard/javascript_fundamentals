// Exercises: Objects

// EXERCISE: The Recipe Card
// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var favRecipe = {
	title: "Chicken Noodle Soup",
	servings: 4,
	ingredients: ["chicken broth", "chicken", "egg noodles"],
		list: function(items) {
			console.log("Ingredients: ")
			for (var i = 0; i < items.length; i++) {
				console.log(items[i]);
			}
	}
}

console.log("Title: " + favRecipe.title);
console.log("Serves: " + favRecipe.servings);
console.log(favRecipe.list(favRecipe.ingredients));

// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var myBooks = [
	
	{
	title: "Catcher in the Rye",
	author: "J.D. Salinger",
	alreadyRead: true
	},

	{
	title: "The Dinner",
	author: "Herman Koch",
	alreadyRead: true
	},

	{
	title: "Indignation",
	author: "Philip Roth",
	alreadyRead: false
	},	
]

function list(books) {
		for (var i = 0; i < books.length; i++) {
			if (books[i].alreadyRead === true) {
				console.log("You have already read " + books[i].title + " by " + books[i].author);
			}
			else{
				console.log("You have yet to read " + books[i].title + " by " + books[i].author);
				}
			}
		}

console.log(list(myBooks));

// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var myMovies = [
	
	{
	title: "Drive",
	duration: "2 hours",
	stars: ["Ryan Gosling"],
	},

	{
	title: "Good Will Hunting",
	duration: "2 hour",
	stars: ["Ben Affleck", "Matt Damon", "Robin Williams"],
	},

]

function listMovies(movieList) {
	for (var i = 0; i < movieList.length; i++) {
		console.log(movieList[i].title + " lasts for " + movieList[i].duration + ". Stars: ");
		for (var x = 0; x < movieList[i].stars.length; x++) {
			console.log(movieList[i].stars[x] + " ")
		}
	}
}
console.log(listMovies(myMovies))