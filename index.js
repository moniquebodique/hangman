
 	var array = ['cat', 'dog', 'pig', 'bat', 'horse']
 		class Letter {
 			constructor (letter){
 				this.letter = letter;
 			}
 		}
 		class Word {
 			constructor (word){
 				this.word = word;
 			}
 		}

// 	call function playgame(); which will hold all of game logic
 	 playgame();

 	 function playgame(){
 	 var index = Math.round(Math.random() * 4);
 	 var guesses = 5;

 	 var guessWord = new Word(array[index]);
 	 console.log(guessWord.word);

	var letters = [];
 	 for (var i = 0; i < guessWord.word.length; i++) {
 	 	var letter = new Letter(guessWord.word.charAt(i))
 	 	letters.push(letter);
 	 	console.log (letter.letter);
 	 }
 	 }

 	 var isGameOn = true;

 	 while (isGameon){
 	 	//inquirer stuff
 	 	//if statement checking if user has won or lost
 	 	//if they won or lost isGame=false

 	 }
// display guessword as dashes
// get input from user
// reveal any letter or decrease guesses left
// prompt if user wins, reset playgame function
// prompt if user loses, reset playgame function


 //end  of game function
