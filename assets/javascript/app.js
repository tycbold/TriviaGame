$( document ).ready(function() {

// Title page

$("#opening-title").html("<h1>Tony Awards Trivia!</h1>");
$("#rules").html("<p>Answer each multiple choice or true/false question as quickly as you can. Don't let the timer run out!</p>");

// Audio files

var boo = new Audio("boo.wav");
var applause = new Audio("applause.wav");

// Variables

var timer = 10;
var correct = 0;
var incorrect = 0;
var firstDone = false;
var secondDone = false;
var thirdDone = false;
var fourthDone = false;
var fifthDone = false;
var sixthDone = false;
var seventhDone = false;
var resultsDone = false;
var radioAnswer;

// Timer countdown function

var countingDown;
function run () {
	countingDown = setInterval(countdown, 1000);
}
function countdown (){
	timer--;
	$(".timer").text(timer);
	if (timer <= 0) {
		clearInterval(countingDown);
		$("input[type=radio]").attr('disabled', true);
	}
}

// Reset timer function
function resetTimer (){
	clearInterval(countingDown);
	timer = 10;
	run();
}

// Generate questions
function generateQuestion(questionObject){
	var triviaQuestion = $("<div>");
	triviaQuestion.addClass("question");
	triviaQuestion.text(questionObject.question);
	$(".game").append(triviaQuestion);
}

// Generate answers
function generateAnswers(questionObject, answerNumber){
	for (var i = 0; i < questionObject.answers.length; i++) {
		var triviaAnswers = $("<input>");
		var label = $("<label>");
		triviaAnswers.addClass("answers");
		triviaAnswers.attr("value", questionObject.answers[i]);
		triviaAnswers.attr("type", "radio");
		triviaAnswers.attr("name", answerNumber);
		label.attr("for", "answers");
		label.text(questionObject.answers[i]);
		$(".game").append(triviaAnswers);
		$(triviaAnswers).after(label);
	}
}

// Generate timer function
function generateTimer (){
	var timeCount = $("<div>")
	timeCount.html(timer);
	timeCount.addClass("timer");
	$(".game").append(timeCount);
}

// Generate next button function
function generateNextbutton(title){
	var nextPage = $("<button>");
	nextPage.text(title);
	nextPage.addClass("next-page button");
	$(".game").append(nextPage);
}

// Question objects (arrays)

var questionOne = {
	question: "In what month are the Tony Awards hosted each year?",
	answers: ["January", "May", "July", "June"],
	correctAnswer: "June"
};

var questionTwo = {
	question: "Which actress currently holds the record for most Tonys in an acting category?",
	answers: ["Sutton Foster", "Audra McDonald", "Angela Lansbury", "Meryl Streep"],
	correctAnswer: "Audra McDonald"
};

var questionThree = {
	question: "True or False: A show can win Best Musical more than once.",
	answers: ["True", "False"],
	correctAnswer: "False"
};

var questionFour = {
	question: "Which show currently holds the record for most Tony wins?",
	answers: ["Hamilton", "The Book of Mormon", "The Producers", "Hairspray"],
	correctAnswer: "The Producers"
};

var questionFive = {
	question: "Which show currently holds the record as the longest-running Broadway revival?",
	answers: ["Chicago", "The Phantom of the Opera", "Les Miserables", "Wicked"],
	correctAnswer: "Chicago"
};

var questionSix = {
	question: "How many ties have there been in Tonys history?",
	answers: ["4", "7", "1", "10"],
	correctAnswer: "10"
};

var questionSeven = {
	question: "Angela Lansbury, Tyne Daly, and Patti LuPone have all won Tony Awards for the leading role in which show?",
	answers: ["Anything Goes", "Gypsy", "Sweeney Todd", "Master Class"],
	correctAnswer: "Gypsy"
}

// Question functions

// Question one
function questionOneform (){
	$(".start-game").on("click", function(){
		firstDone = true;
		$(".game").empty();

	generateQuestion(questionOne);
	generateAnswers(questionOne, "answerOne");

	generateTimer();
	run();
	generateNextbutton("Next Question");
	next();

});
}

// Question two
function questionTwoform() {
	secondDone = true;
	$(".game").empty();
	generateQuestion(questionTwo);
	generateAnswers(questionTwo, "answerTwo");
	generateTimer();
	generateNextbutton("Next Question");
	next();

}
// Question three
function questionThreeform() {
	thirdDone = true;
	$(".game").empty();
	generateQuestion(questionThree);
	generateAnswers(questionThree, "answerThree");
	generateTimer();
	generateNextbutton("Next Question");
	next();

}

// Question four 
function questionFourform (){
	fourthDone = true;
	$(".game").empty();
	generateQuestion(questionFour);
	generateAnswers(questionFour, "answerFour");
	generateTimer();
	generateNextbutton("Next Question");

	next();
}

// Question five
function questionFiveform() {
	fifthDone = true;
	$(".game").empty();
	generateQuestion(questionFive);
	generateAnswers(questionFive, "answerFive");
	generateTimer();
	generateNextbutton("Next Question");

	next();
}

// Question six
function questionSixform() {
	sixthDone = true;
	$(".game").empty();
	generateQuestion(questionSix);
	generateAnswers(questionSix, "answerSix");
	generateTimer();
	generateNextbutton("Next Question");

	next();
}

// Question seven
function questionSevenform() {
	seventhDone = true;
	$(".game").empty();
	generateQuestion(questionSeven);
	generateAnswers(questionSeven, "answerSeven");
	generateTimer();
	generateNextbutton("Finish Quiz!");

	next();
}

// Results page
function results(){
	resultsDone = true;
	var answerCorrect = $("<div>");
	var answerIncorrect = $("<div>");
	var thanks = $("<div>");
	$(".game").empty();

	answerCorrect.addClass("correct");
	answerCorrect.html("<h3>Correct Answers: " + correct + "</h3>")
	$(".game").append(answerCorrect);
	answerIncorrect.addClass("incorrect");
	answerIncorrect.html("<h3>Incorrect Answers: " + incorrect + "</h3>")
	$(".game").append(answerIncorrect);
	thanks.addClass("thanks");
	thanks.html("<h3>Thanks for playing!</h3>");
	$(".game").append(thanks);

	if (correct > 3) {
		applause.play();
	}
	else {
		boo.play();
	}

}

// Next page button and if statements
function next () {
	$(".next-page").on("click", function(){

		if (seventhDone) {
			radioAnswer = $("input[name=answerSeven]:checked").val();
			if (radioAnswer == questionSeven.correctAnswer){
				correct++;
			}
			else {
				incorrect++;
			}
			results();
		}
		else if (sixthDone) {
			radioAnswer = $("input[name=answerSix]:checked").val();
			if (radioAnswer == questionSix.correctAnswer){
				correct++;
			}
			else {
				incorrect++;
			}
			resetTimer();
			questionSevenform();
		}
		else if (fifthDone) {
			radioAnswer = $("input[name=answerFive]:checked").val();
			if (radioAnswer == questionFive.correctAnswer){
				correct++;
			}
			else {
				incorrect++;
			}
			resetTimer();
			questionSixform();
		}
		else if (fourthDone) {
			radioAnswer = $("input[name=answerFour]:checked").val();
			if (radioAnswer == questionFour.correctAnswer){
				correct++;
			}
			else {
				incorrect++;
			}
			resetTimer();
			questionFiveform();
		}
		else if (thirdDone) {
			radioAnswer = $("input[name=answerThree]:checked").val();
			if (radioAnswer == questionThree.correctAnswer){
				correct++;
			}
			else {
				incorrect++;
			}
			resetTimer();
			questionFourform();
		}
		else if (secondDone) {
			radioAnswer = $("input[name=answerTwo]:checked").val();
			if (radioAnswer == questionTwo.correctAnswer){
				correct++;
			}
			else {
				incorrect++;
			}
			resetTimer();
			questionThreeform();
		}
		else if (firstDone) {
			radioAnswer = $("input[name=answerOne]:checked").val();
			if (radioAnswer == questionOne.correctAnswer){
				correct++;
			}
			else {
				incorrect++;
			}
			resetTimer();
			questionTwoform();
		}
	
});
}

// Call first question function

questionOneform();

});


