// Title page

$("#opening-title").html("<h1>Tony Awards Trivia!</h1>");
$("#rules").html("<p>Answer each multiple choice or true/false question as quickly as you can. Don't let the timer run out!</p>");

// Variables

var timer = 10;
var correct = 0;
var incorrect = 0;
var firstDone = false;
var secondDone = false;
var thirdDone = false;
var fourthDone = false;
var fifthDone = false;
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

// Question objects (arrays)

var questionOne = {
	question: "In what month are the Tony Awards hosted each year?",
	answers: ["January", "May", "July", "June"],
	correctAnswer: "June"
};

var questionTwo = {
	question: "Which actress currently holds the record for most Tonys in an acting category?",
	answers: ["Patti LuPone", "Audra McDonald", "Angela Lansbury", "Meryl Streep"],
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

// Question functions

// Question one
function questionOneform (){
	$(".start-game").on("click", function(){
		firstDone = true;
		var triviaQuestion = $("<div>");
		var nextPage = $("<button>");
		var timeCount = $("<div>")
		$(".game").empty();
		triviaQuestion.addClass("question");
		triviaQuestion.text(questionOne.question);
		$(".game").append(triviaQuestion);

	// populate answers
	for (var i = 0; i < questionOne.answers.length; i++) {
		var triviaAnswers = $("<input>");
		var label = $("<label>");
		triviaAnswers.addClass("answers");
		triviaAnswers.attr("value", questionOne.answers[i]);
		triviaAnswers.attr("type", "radio");
		triviaAnswers.attr("name", "answerOne");
		label.attr("for", "answers");
		label.text(questionOne.answers[i]);
		$(".game").append(triviaAnswers);
		$(triviaAnswers).after(label);
	}

	// create timer
	timeCount.html(timer);
	timeCount.addClass("timer");
	$(".game").append(timeCount);
	run();

	// create button
	nextPage.text("Next Question");
	nextPage.addClass("next-page button");
	$(".game").append(nextPage);

	next();

});
}

		// // Question two
		function questionTwoform() {
			secondDone = true;
			var triviaQuestion = $("<div>");
			var nextPage = $("<button>");
			var timeCount = $("<div>")
			$(".game").empty();
			triviaQuestion.addClass("question");
			triviaQuestion.text(questionTwo.question);
			$(".game").append(triviaQuestion);

	// populate answers
	for (var i = 0; i < questionTwo.answers.length; i++) {
		var triviaAnswers = $("<input>");
		var label = $("<label>");
		triviaAnswers.addClass("answers");
		triviaAnswers.attr("value", questionTwo.answers[i]);
		triviaAnswers.attr("type", "radio");
		triviaAnswers.attr("name", "answerTwo");
		label.attr("for", "answers");
		label.text(questionTwo.answers[i]);
		$(".game").append(triviaAnswers);
		$(triviaAnswers).after(label);
	}

	// create timer
	timeCount.html(timer);
	timeCount.addClass("timer");
	$(".game").append(timeCount);

	// create button
	nextPage.text("Next Question");
	nextPage.addClass("next-page button");
	$(".game").append(nextPage);

	next();

}

	// // Question three
	function questionThreeform() {
		thirdDone = true;
		var triviaQuestion = $("<div>");
		var nextPage = $("<button>");
		var timeCount = $("<div>")
		$(".game").empty();
		triviaQuestion.addClass("question");
		triviaQuestion.text(questionThree.question);
		$(".game").append(triviaQuestion);

	// populate answers
	for (var i = 0; i < questionThree.answers.length; i++) {
		var triviaAnswers = $("<input>");
		var label = $("<label>");
		triviaAnswers.addClass("answers");
		triviaAnswers.attr("value", questionThree.answers[i]);
		triviaAnswers.attr("type", "radio");
		triviaAnswers.attr("name", "answerThree");
		label.attr("for", "answers");
		label.text(questionThree.answers[i]);
		$(".game").append(triviaAnswers);
		$(triviaAnswers).after(label);
	}

	// create timer
	timeCount.html(timer);
	timeCount.addClass("timer");
	$(".game").append(timeCount);

	// create button
	nextPage.text("Next Question");
	nextPage.addClass("next-page button");
	$(".game").append(nextPage);

	next();

}

	// // Question four 
	function questionFourform (){
		fourthDone = true;
		var triviaQuestion = $("<div>");
		var nextPage = $("<button>");
		var timeCount = $("<div>")
		$(".game").empty();
		triviaQuestion.addClass("question");
		triviaQuestion.text(questionFour.question);
		$(".game").append(triviaQuestion);

	// populate answers
	for (var i = 0; i < questionFour.answers.length; i++) {
		var triviaAnswers = $("<input>");
		var label = $("<label>");
		triviaAnswers.addClass("answers");
		triviaAnswers.attr("value", questionFour.answers[i]);
		triviaAnswers.attr("type", "radio");
		triviaAnswers.attr("name", "answerFour");
		label.attr("for", "answers");
		label.text(questionFour.answers[i]);
		$(".game").append(triviaAnswers);
		$(triviaAnswers).after(label);
	}

	// create timer
	timeCount.html(timer);
	timeCount.addClass("timer");
	$(".game").append(timeCount);

	// create button
	nextPage.text("Next Question");
	nextPage.addClass("next-page button");
	$(".game").append(nextPage);

	next();

}

// // Question three
	function questionFiveform() {
		fifthDone = true;
		var triviaQuestion = $("<div>");
		var nextPage = $("<button>");
		var timeCount = $("<div>")
		$(".game").empty();
		triviaQuestion.addClass("question");
		triviaQuestion.text(questionFive.question);
		$(".game").append(triviaQuestion);

	// populate answers
	for (var i = 0; i < questionFive.answers.length; i++) {
		var triviaAnswers = $("<input>");
		var label = $("<label>");
		triviaAnswers.addClass("answers");
		triviaAnswers.attr("value", questionThree.answers[i]);
		triviaAnswers.attr("type", "radio");
		triviaAnswers.attr("name", "answerThree");
		label.attr("for", "answers");
		label.text(questionFive.answers[i]);
		$(".game").append(triviaAnswers);
		$(triviaAnswers).after(label);
	}

	// create timer
	timeCount.html(timer);
	timeCount.addClass("timer");
	$(".game").append(timeCount);

	// create button
	nextPage.text("Finish Quiz!");
	nextPage.addClass("next-page button");
	$(".game").append(nextPage);

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


		next();
	}

	function startOver (){

		// $(".game").empty();
	
		var timer = 10;
		var correct = 0;
		var incorrect = 0;
		var firstDone = false;
		var secondDone = false;
		var thirdDone = false;
		var fourthDone = false;
		// resetTimer();

		// questionOneform();

}

// Next page button and if statements
function next () {
	$(".next-page").on("click", function(){

		if (resultsDone) {
			startOver();
		}
		else if (fifthDone) {
			radioAnswer = $("input[name=answerFour]:checked").val();
			if (radioAnswer == "Chicago"){
				correct++;
			}
			else {
				incorrect++;
			}
			results();
		}
		else if (fourthDone) {
			radioAnswer = $("input[name=answerFour]:checked").val();
			if (radioAnswer == "The Producers"){
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
			if (radioAnswer == "False"){
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
			if (radioAnswer == "Audra McDonald"){
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
			if (radioAnswer == "June"){
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




