const questions = [
    {
        "question": "/images/physics/P01.JPG",
        "answer": 'C',
        "MCQ": true,
        "value": false,
    },
    {
        "question": "/images/physics/P02.JPG",
        "answer": 'C',
        "MCQ": true,
        "value": false,
    },
    {
        "question": "/images/physics/P03.JPG",
        "answer": 'B',
        "MCQ": true,
        "value": false,
    },
    {
        "question": "/images/physics/P04.JPG",
        "answer": 'D',
        "MCQ": true,
        "value": false,
    },
    {
        "question": "/images/maths/m01.JPG",
        "answer": 'B',
        "MCQ": true,
        "value": false,
    },
    {
        "question": "/images/maths/m02.JPG",
        "answer": 'A',
        "MCQ": true,
        "value": false,
    },
    {
        "question": "/images/maths/m03.JPG",
        "answer": 'A',
        "MCQ": true,
        "value": false,
    },
    {
        "question": "/images/maths/m04.JPG",
        "answer": 'C',
        "MCQ": true,
        "value": false,
    }
]

//1. Timer - should start with login
//2. tags - tag board should update with numbers and table should update with tags
//3. Score
//4. display
//5. MCQ and Value evaluation

let questionsImg = document.getElementById('questions-img')
let questionNumber = document.getElementById('question-num')
let proceed = document.getElementById('proceed')
let timer = document.getElementById('timer')
let notVisitedCount = document.getElementById('notvisitedCount')
let notansweredCount = document.getElementById('notansweredCount')
let answeredCount = document.getElementById('answeredCount')
let reviewCount = document.getElementById('reviewCount')
let ansNreviewCount = document.getElementById('ansNreviewCount')
let numberList = document.getElementById('number-list')
let radioBtn = document.getElementsByClassName('radio')
let index = 0;
let score = 0;

questionsImg.innerHTML = `<img src=${questions[index].question} alt=""/>`
questionNumber.innerHTML = `${index + 1}`

function start() {
    display(index)
}
//Display questions
function display(i) {
    questionsImg.innerHTML = `<img src=${questions[i].question} alt=""/>`
    questionNumber.innerText = i + 1
}

//next question
function next() {
    index = parseInt(questionNumber.innerText);
    display(index)
    numberList.children[index].classList.remove('notvisited');
    numberList.children[index].classList.add('notanswered');
    notansweredCount.innerHTML = parseInt(notansweredCount.innerHTML) + 1;
    let qNum = questionNumber.innerHTML;
    if (numberList.children[qNum - 1].classList.contains('notvisited')) {
        notVisitedCount.innerHTML = parseInt(notVisitedCount.innerHTML) - 1;
    }
}

//prev question
function prev() {
    index = parseInt(questionNumber.innerText) - 2;
    display(index);
    let qNum = questionNumber.innerHTML;
    if (numberList.children[qNum - 1].classList.contains('notvisited')) {
        numberList.children[qNum - 1].classList.add('notanswered')
    }
}

//Tag button group
function saveNext() {
    if (radioBtn[0].checked || radioBtn[1].checked || radioBtn[2].checked || radioBtn[3].checked) {
        answeredCount.innerHTML = parseInt(answeredCount.innerHTML) + 1;
        notVisitedCount.innerHTML = parseInt(notVisitedCount.innerHTML) - 1;
        notansweredCount.innerHTML = parseInt(notansweredCount.innerHTML) - 1;
        let qNum = questionNumber.innerHTML
        numberList.children[qNum - 1].classList.remove('notvisited');
        numberList.children[qNum - 1].classList.remove('notanswered');
        numberList.children[qNum - 1].classList.add('answered');
        index = parseInt(questionNumber.innerText);
        display(index)
    }
    else {
        alert("Please choose an option")
    }
}

function uncheck() {
    radioBtn[0].checked = false;
    radioBtn[1].checked = false;
    radioBtn[2].checked = false;
    radioBtn[3].checked = false;
    answeredCount.innerHTML = parseInt(answeredCount.innerHTML) - 1;
    notansweredCount.innerHTML = parseInt(notansweredCount.innerHTML) + 1;
    let qNum = questionNumber.innerHTML
    numberList.children[qNum - 1].classList.remove('notvisited');
    numberList.children[qNum - 1].classList.remove('answered');
    numberList.children[qNum - 1].classList.add('notanswered');
}

function saveReview() {
    if (radioBtn[0].checked || radioBtn[1].checked || radioBtn[2].checked || radioBtn[3].checked) {
        ansNreviewCount.innerHTML = parseInt(ansNreviewCount.innerHTML) + 1;
        notVisitedCount.innerHTML = parseInt(notVisitedCount.innerHTML) - 1;
        let qNum = questionNumber.innerHTML
        numberList.children[qNum - 1].classList.remove('notvisited');
        numberList.children[qNum - 1].classList.remove('notanswered');
        numberList.children[qNum - 1].classList.add('ansNreview');
        index = parseInt(questionNumber.innerText);
        display(index)
    }
    else {
        alert("Please choose an option")
    }
}


function reviewNext() {
    reviewCount.innerHTML = parseInt(reviewCount.innerHTML) + 1;
    notVisitedCount.innerHTML = parseInt(notVisitedCount.innerHTML) - 1;
    let qNum = questionNumber.innerHTML
    numberList.children[qNum - 1].classList.remove('notvisited');
    numberList.children[qNum - 1].classList.remove('notanswered');
    numberList.children[qNum - 1].classList.add('review');
    index = parseInt(questionNumber.innerText);
    display(index)
}
//Update number board with CSS
function gotoQuestion(q) {
    if (numberList.children[q - 1].classList.contains('notvisited')) {
        notansweredCount.innerHTML = parseInt(notansweredCount.innerHTML) + 1;
        notVisitedCount.innerHTML = parseInt(notVisitedCount.innerHTML) - 1;
        }
    display(q - 1);
    numberList.children[q - 1].classList.remove('notvisited');
    numberList.children[q - 1].classList.add('notanswered');
   
}

//Evaluation of answers
function evaluate() {

}

//Check if answered

//Countdown
var date1 = new Date()
var countDownDate = new Date()
countDownDate.setTime(date1.getTime() + (3 * 60 * 60 * 1000));

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("timer").innerHTML = hours + ":"
        + minutes + ":" + seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

//Storage
function store(){
    let qNum = questionNumber.innerHTML
    let option
    let Marks = 0
    let score = localStorage.getItem('score')
    for (var i=0; i<4; i++){
        if(radioBtn[i].checked){
            option=radioBtn[i].value
        }
    }
    if (score == null){
      scoreArr = []
    }
    else{
      scoreArr = JSON.parse(Score)
    }
    let scoreobj = {
      index: qNum,
      response: option,
      Score: Marks,
      result: ""
    }
    scoreArr.push(scoreobj)
    localStorage.setItem("score", JSON.stringify(scoreArr))
    console.log(scoreArr)
  }