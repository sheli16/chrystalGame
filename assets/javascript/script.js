// object full of words
var songList = ["Boogie", "Disco", "Hot", 
"Bad", "Night", "Ring", "Jungle"];

// letter choices
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

var word = document.getElementById('word'),
    letters = document.getElementById('letters'),

badGuesses = 0;
correctGuesses = 0;
wordToGuess = getWord();
wordLength = wordToGuess.length;


  var getHint ;          // Word getHint
  var word ;              // Selected word
  var guess ;             // Geuss
  var guesses = [ ];      // Stored geusses
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'

// choosing word to guess the random word and identifying is length
var wordToGuess = songList[Math.floor(Math.random() * songList.length)];


function newGame() {
	// create row of underscores the same length as letters to guess
//var placeholders = '',
//for (var i = 0; i < wordLength; i++) 
//{
 //   placeholders =+ '_';
//}

}

// Get selected letter and remove it from the alphabet pad
function getLetter() {
	prompt('please select a letter');
    checkLetter(this.innerHTML);
    this.innerHTML = '&nbsp;';
    this.style.cursor = 'default';
    this.onclick = null;

function checkLetter(letter) {
   var placeholders = word.innerHTML,
       wrongGuess = true;
   // split the placeholders into an array
   placeholders = placeholders.split('');
   // loop through the array
   for (var i = 0; i < wordLength; i++) {
      // if the selected letter matches one in the word to guess,
      // replace the underscore and increase the number of correct guesses
      if (wordToGuess.charAt(i) == letter.toLowerCase()) {
         placeholders[i] = letter;
         wrongGuess = false;
         correctGuesses++;
         // redraw the canvas only if all letters have been guessed
          if (correctGuesses == wordLength) {
            drawCanvas();
         }
      }
   }

// if the guess was incorrect, increment the number of bad
   // guesses and redraw the canvas
   if (wrongGuess) {
      badGuesses++;
      drawCanvas();
   }
   // convert the array to a string and display it again
   word.innerHTML = placeholders.join('');




var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);

// Create guesses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
  
// Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";


// OnClick Function
   check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        } 


        
    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  Hangman.init(wordList);

// Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }



