"use strict";

const greeting = "I love you!";

const chars = greeting.split('');

// console.log(greeting);
// console.log(chars);

const phrase = chars.join('');
// console.log(phrase);

function getRandomInt(max){
	//return a random integer between 0 and (max-1), inclusive. [0,max)
	return Math.floor(Math.random() * max);
}

//math.random does not take any arguments. Gives a number [0, 1), gives a float.
//If we want to define the range, we mult it by highest number like Math.random() * num

// 1st version: 
// let i = getRandomInt(chars.length)
// const randomLetter = chars[i]

const randomLetter = chars[getRandomInt(chars.length)];
// console.log(randomLetter)

// tests
// let randomLetter2 = chars[getRandomInt(chars.length)];
// console.log(randomLetter2)

// let randomLetter3 = chars[getRandomInt(chars.length)];
// console.log(randomLetter3)

// let randomLetter4 = chars[getRandomInt(chars.length)];
// console.log(randomLetter4)

const i1 = getRandomInt(chars.length)
const randomLetter1 = chars[i1]

const i2 = getRandomInt(chars.length)
const randomLetter2 = chars[i2]

// tests
// console.log(chars)

chars[i1] = randomLetter2
chars[i2] = randomLetter1

// console.log(chars)
//const candy = {} //This makes an Object, not a map.

const candy = new Map(); // This makes a map, which is iterable! :)

candy['purple'] = 'grape';
candy['yellow'] = 'lemon';
candy['red'] = 'cherry';
candy['blue'] = 'blueberry';
candy['green'] = 'lime';

console.log(candy)
 //since candy is a dictionary, we can't iterate over.
// We need create a list of keys or values first.
// for (let key of Object.keys(candy)){ //def key variable as a list of keys of candy dictionary.
// 	console.log(`The ${candy[key]} flavor is colored ${key}.`);
//}

for (let key in candy){ //Maps are interable :)
	console.log(`The ${candy[key]} flavor is colored ${key}.`);
}
// console.log(Object.keys(candy));
// console.log(Object.values(candy));

console.log(candy['green']);
console.log(candy['lavender']);


// Create a function that reverses a word

// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.

// Create a function that returns a random word from an array

// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?


// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.



// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.


// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
