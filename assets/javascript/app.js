$(document).ready(function() {
// Create a function that creates the start button and initial screen

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();



$("body").on("click", ".start-button", function(event){
	event.preventDefault();	
	generateHTML();
	timerWrapper();

}); 

$("body").on("click", ".answer", function(event){
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		
		clearInterval(theClock);
		generateWin();
	}
	else {
		//alert("wrong answer!");
		clearInterval(theClock);
		generateLoss();
	}
}); 

$("body").on("click", ".reset-button", function(event){
	resetGame();
}); 
});  

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/image/trump.gif'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/image/trump.gif'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000); 
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen; 
var gameHTML; 
var counter = 30; 
var questionArray = ["Where was the Western White House during the Nixon Administration?", "How long is Santa Catalina Island?", "What is the state bird of California?", "Which wild animal roams Catalina Island?", "What is Orange County's top tourist attraction?", "Which city has never been the California state capital?", "Which city has the steepest, inclined street?", "What is the original name for Los Angeles?"]; 
var answerArray = [["San Clemente","Santa Monica","San Bernadino","Yorba Linda"], ["200","22","10","56"], ["Pelican","California Gull","California Valley Quail","Turkey Vulture"], ["Elephants","Elk","Buffalo","Boar"], ["Downtown Santa Ana","Knotts Berry Farm","Huntington State Beach","Disneyland"], ["Los Angeles","Sacramento","San Francisco","Sacramento"], ["Fritter St San Francisco","Eldred St Los Angeles","- California Ave - San Diego ","Fresno - Fresno St."], ["El Pueblo de Nuestra Señora de los Ángeles","La Reina de Los Angeles","Nuestra Señora la Reina de los Ángeles de Porciúncula","El Pueblo de Nuestra Señora la Reina de los Ángeles del Río Porciúncula"]]; 
var imageArray = ["<img class ='center-block img-right' src='assets/image/sanclemente.jpg'>", "<img class='center-block img-right' src='assets/image/catalina.jpg'>", "<img class='center-block img-right' src='assets/image/quail.jpg'>", "<img class='center-block img-right' src='assets/image/buffalo.jpg'>", "<img class='center-block img-right' src='assets/image/disneyland.jpeg>", "<img class='center-block img-right' src='assets/image/losangeles.jpg'>", "<img class='center-block img-right' src='assets/image/eldred.jpg'>", "<img class='center-block img-right' src='assets/image/nuestra.jpg'>"]; 
var correctAnswers = ["A. San Clemente", "B. 22", "C. California Valley Quail", "C. Buffalo", "D. Disneyland", "A. Los Angeles", "B. Eldred St", "D. El Pueblo de Nuestra Señora la Reina de los Ángeles del Río Porciúncula"]; 
var questionCounter = 0; 
var selecterAnswer; 
var theClock; 
var correctTally = 0; 
var incorrectTally = 0; 
var unansweredTally = 0; 

console.log(correctAnswers)