var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",
	password: "Frogger123",
	database: "items_db"
});

connection.connect(function(err) {
 if (err) throw err;
 console.log("connected as id " + connection.threadId);
 printSongByArtist();
  connection.end();

});




var wins = 0;
var losses = 0;
var numberOfGuessesHumanHas = 10;
var lettersAlreadyGuessedByHuman = 0;

var reset = function () {
	numberOfGuessesHumanHas = 0;
	lettersAlreadyGuessedByHuman = 10;
					}

function Start(){
	inquirer.prompt([
	{
		type: 'list',
		choices: [A, B, C, D, E, F, G, H, I, J, K, L, M, N, 
		O, P, Q, R, S, T, U, V, W, X, Y, Z],
		name: 'choice',
		message: 'Pick a letter'
		}])
	.then((function(answer){
		switch (answer.action) {
		case "FInd songs by artist":
		artistSearch();
		break;

		
		}
		});
