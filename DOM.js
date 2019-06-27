
let questionsArr = [
  {question: 'Which keyword removes the first element of an array?',
    answer1: 'unshift',
    answer2: 'shift',
    answer3: 'push',
    rightAnswer: 'shift',
  },
  {question: 'What do you call a value that is attached to an object?',
    answer1: 'parameter',
    answer2: 'variable',
    answer3: 'property',
    rightAnswer: 'property',
  },
  {question: 'What is the keyword for converting "1.5" to 1?',
    answer1: 'parseInt',
    answer2: 'parseFloat',
    answer3: 'Math',
    rightAnswer: 'parseInt',
  },
  {question: `What is the value of num? let num = parseInt('5.6');`,
    answer1: '6',
    answer2: '5',
    answer3: '5.5',
    rightAnswer: '5',
  },
  {question: 'A function that creates objects and their properties is known as a',
    answer1: 'Class',
    answer2: 'Constructor',
    answer3: 'Method',
    rightAnswer: 'Constructor',
  },
  {question: 'Global and local variables differ in their',
    answer1: 'scope',
    answer2: 'relevance',
    answer3: 'size',
    rightAnswer: 'scope',
  },
  {question: 'What is the keyword for removing one set of characters and inserting another set in its place?',
    answer1: 'charAt() = ',
    answer2: 'replace',
    answer3: 'change',
    rightAnswer: 'replace',
  },
  {question: `After these two statements execute, what is the value of x?
		var x = "abc";
		var y = x.replace("a", "z");`,
  answer1: 'zbc',
  answer2: 'az',
  answer3: 'abc',
  rightAnswer: 'abc',
  },
  {question: 'What is the keyword for detecting that the user is hovering over an element?',
    answer1: 'onClick',
    answer2: 'onMouseover',
    answer3: 'hover',
    rightAnswer: 'onMouseover',
  },
  {question: 'If a function has 3 parameters, how many values can be returned to the calling code?',
    answer1: '1',
    answer2: '3',
    answer3: '2',
    rightAnswer: '1',
  },
];

let question = 'text';
let answer1;
let answer2;
let answer3;
let rightAnswer;
let rateValue1;
let rateValue2;
let rateValue3;
let count = 0;
let answers;
let canCrash = true;
let getTheDiv;
let startButton;
let gameStart;

function ask (arr) {

  question = arr[count].question;
  answer1 = arr[count].answer1;
  answer2 = arr[count].answer2;
  answer3 = arr[count].answer3;

  getTheDiv = document.getElementById('questions')
  const questionsForm = document.createElement('form');
  getTheDiv.appendChild(questionsForm);
  questionsForm.setAttribute('id', 'makeItPop')
  const legend = document.createElement('legend');
  questionsForm.appendChild(legend);
  let questionHTML = document.createTextNode(question);
  legend.appendChild(questionHTML);

  const theInput = document.createElement('input');
  theInput.setAttribute('id', 'answer1');
  theInput.setAttribute('type', 'radio');
  theInput.setAttribute('value', answer1)
  theInput.setAttribute('name', 'answer');
  theInput.setAttribute('class', 'styleTheBox');
  questionsForm.appendChild(theInput);
  const label1 = document.createElement('label');
  label1.setAttribute('for', 'answer1');
  label1.setAttribute('class', 'container');
  let answer1HTML = document.createTextNode(answer1);
  label1.appendChild(answer1HTML);
  questionsForm.appendChild(label1);


  const theInput2 = document.createElement('input');
  theInput2.setAttribute('id', 'answer2');
  theInput2.setAttribute('type', 'radio');
  theInput2.setAttribute('name', 'answer');
  theInput2.setAttribute('value', answer2);
  theInput2.setAttribute('class', 'styleTheBox')
  questionsForm.appendChild(theInput2);
  const label2 = document.createElement('label');
  label2.setAttribute('for', 'answer2');
  label2.setAttribute('class', 'container');
  let answer2HTML = document.createTextNode(answer2);
  label2.appendChild(answer2HTML);
  questionsForm.appendChild(label2);

  const theInput3 = document.createElement('input');
  theInput3.setAttribute('id', 'answer3');
  theInput3.setAttribute('type', 'radio');
  theInput3.setAttribute('name', 'answer');
  theInput3.setAttribute('value', answer3);
  theInput3.setAttribute('class', 'styleTheBox');
  questionsForm.appendChild(theInput3);
  const label3 = document.createElement('label');
  label3.setAttribute('for', 'answer3');
  label3.setAttribute('class', 'container');
  let answer3HTML = document.createTextNode(answer3);
  label3.appendChild(answer3HTML);
  questionsForm.appendChild(label3);

  const submitButton = document.createElement('button');
  submitButton.setAttribute('id', 'answerButton');
  let buttonText = document.createTextNode('Send')
  submitButton.appendChild(buttonText);
  submitButton.setAttribute('onclick', 'getInfo()');
  submitButton.setAttribute('type', 'button');
  questionsForm.appendChild(submitButton);
}

function getInfo () {
  if (document.getElementById('answer1').checked) {
    rateValue1 = document.getElementById('answer1').value;
    console.log('resposta1')
  }
  if (document.getElementById('answer2').checked) {
    rateValue2 = document.getElementById('answer2').value;
    console.log('resposta2');
  }
  if (document.getElementById('answer3').checked) {
    rateValue3 = document.getElementById('answer3').value;
    console.log('resposta3')
  };
  if (rateValue1 === questionsArr[count].rightAnswer || rateValue2 === questionsArr[count].rightAnswer || rateValue3 === questionsArr[count].rightAnswer) {
    console.log('rodou');
    count += 1
    rightAnswerInterval();
    setTimeout(() => {
      canCrash = true;
    }, 2000);
	} else if (rateValue1 !== questionsArr[count].rightAnswer || rateValue2 !== questionsArr[count].rightAnswer || rateValue3 !== questionsArr[count].rightAnswer) {
		devGirl.lives -= 1;
		lives();
		rightAnswerInterval();
    setTimeout(() => {
      canCrash = true;
    }, 1000);
	}
	if (count === 10) {
		ctx.clearRect(0, 0, 800, 600)
		ctx.fillStyle = '#efd62f'
		ctx.fillRect(0, 0, 800, 600);
		ctx.font = '18px serif';
		ctx.fillStyle = 'white';
		ctx.fillText('Congratulations! You just became a junior dev!', 200, 400);
		clearInterval(interval);
	}	
}


function startGame() {
  gameStart = document.getElementById('design');
	gameStart.setAttribute('class', 'start');
	let gamePicture = document.createElement('img');
	gamePicture.setAttribute("src", "./images/JS-TRIVIA (1).png")
	gameStart.appendChild(gamePicture);
  // let gameName = document.createElement('h1');
  // let gameNameText = document.createTextNode('JS TRIVIA')
  // gameStart.appendChild(gameName);
  // gameName.setAttribute('id', 'textStyle');
  // gameName.appendChild(gameNameText)
  startButton = document.createElement('button');
  startButton.setAttribute('id', 'startIt');
  startButton.setAttribute('onclick', 'button()');
  // let textDiv = document.createElement('div');
  // textDiv.setAttribute('class', 'lightning');
  // gameStart.appendChild(textDiv);
  let gameStartText = document.createTextNode('Start game!');
  startButton.appendChild(gameStartText);
  gameStart.appendChild(startButton);
}


startGame();