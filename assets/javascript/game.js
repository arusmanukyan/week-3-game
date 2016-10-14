	
	var wins = 0;
	var loses = 0;
	var guessesLeft = 10;
	var guessesSoFar = [];
	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	 
	// create var for computer to pick a random letter using the var alphabet
	var randomLetters = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log(randomLetters);

		function reset(){
		guessesLeft = 10;
		guessesSoFar = [];
		randomLetters = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log(randomLetters);
	}

	// reads the key press
	document.onkeyup = function(event){
	// grabs the key pressed and sees it as all lowercase
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log("userGuess:", userGuess);

			// helps user choose a randomeletter and adds 1 to score when user has chosen the correct letter
		for (var i = 0; i < randomLetters.length; i++) {
			if (userGuess === randomLetters[i]){
			 wins += 1;
			 document.getElementById("wins").innerHTML = "Wins:" + wins;
			 console.log(userGuess);
			 reset();
			
			}else if (userGuess !== randomLetters[i]){
				// if the correct letter is not chosen then the score goes down by 1
				guessesLeft -= 1;
				document.getElementById("guessesLeft").innerHTML = "Guesses left:" + guessesLeft;
				console.log(guessesLeft);	
				
				guessesSoFar.push(userGuess);
				document.getElementById("guessesSoFar").innerHTML = "Guesses so far:" + guessesSoFar;
				console.log(guessesSoFar);
				break;
			}
		} 

	}
