//game begins when user presses any key (create a screen for this)


// JS picks a random item from the word list array; something about math function random
   // JS picks a random item from the word list array; something about math function random
   //find out if i can reference a list from another file
const elements = ['Hydrogen', 'oxygen', 'fluorine', 'argon','mercury'];

console.log(elements.indexOf('oxygen'));

var randomWord = elements[Math.floor(Math.random() * elements.length)];

console.log(randomWord);

document.write(randomWord);


// display the empty spaces to user


//user uses keyboard to guess letters (event)

// once user pics a letter, check if it is in the string; if its not then mark as a miss, if it is as a hit

// missed letters will be added to the new array of wrong leters and displayed on the side somewhere

//missed letters will also add to the number of misses (how many allowed?) and add to the graph counter?



// hits will display the letter in the word 

