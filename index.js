const questions = [
    {
        "Number": 1,
        "question": "/images/physics/P01.JPG",
        "answer": 'C',
        "section": 1
    },
    {
        "Number": 2,
        "question": "/images/physics/P02.JPG",
        "answer": 'C',
        "section": 1
    },
    {
        "Number": 3,
        "question": "/images/physics/P03.JPG",
        "answer": 'B',
        "section": 1
    },
    {
        "Number": 4,
        "question": "/images/physics/P04.JPG",
        "answer": 'D',
        "section": 1
    },
    {
        "Number": 5,
        "question": "/images/physics/P05.JPG",
        "min": 0.45,
        "max": 0.55,
        "section": 2
    },
    {
        "Number": 6,
        "question": "/images/physics/P06.JPG",
        "min": 7.3,
        "max": 7.7,
        "section": 2,
    },
    {
        "Number": 7,
        "question": "/images/maths/m01.JPG",
        "answer": 'B',
        "section": 1
    },
    {
        "Number": 8,
        "question": "/images/maths/m02.JPG",
        "answer": 'A',
        "section": 1
    },
    {
        "Number": 9,
        "question": "/images/maths/m03.JPG",
        "answer": 'A',
        "section": 1
    },
    {
        "Number": 10,
        "question": "/images/maths/m04.JPG",
        "answer": 'C',
        "section": 1
    }
]


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
    if (questions[i].section == 1) {
        document.getElementById('radio-btn').classList.remove('hide')
        document.getElementById('radio-btn').classList.add('show')
        document.getElementById('input-response').classList.add('hide')
        document.getElementById('input-response').classList.remove('show')
    } else if (questions[i].section == 2) {
        document.getElementById('input-response').classList.remove('hide')
        document.getElementById('input-response').classList.add('show')
        document.getElementById('radio-btn').classList.add('hide')
        document.getElementById('radio-btn').classList.remove('show')
    }
}

//Keypad
let inputVal = document.getElementById('input-value')
let buttons = document.getElementsByClassName('num-pad-btn')
let screenValue = "";
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'C') {
            screenValue = "";
            inputVal.value = screenValue
        } else {
            screenValue += buttonText;
            inputVal.value = screenValue
        }

    })
}
//Tag button group
function saveNext() {

    if (radioBtn[0].checked || radioBtn[1].checked || radioBtn[2].checked || radioBtn[3].checked || !inputVal.value=="") {
        answeredCount.innerHTML = parseInt(answeredCount.innerHTML) + 1;
        notVisitedCount.innerHTML = parseInt(notVisitedCount.innerHTML) - 1;
        notansweredCount.innerHTML = parseInt(notansweredCount.innerHTML) - 1;
        let qNum = questionNumber.innerHTML
        numberList.children[qNum - 1].classList.remove('notvisited');
        numberList.children[qNum - 1].classList.remove('notanswered');
        numberList.children[qNum - 1].classList.add('answered');
        index = parseInt(questionNumber.innerText);
        display(index)
        store()
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
        store()
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

//Storage and evaluation
function store() {
    let qNum = questionNumber.innerHTML - 1
    console.log(qNum)
    let option
    let Marks = 0
    let result
    let btnIndex
    let score = localStorage.getItem('score')
    if (questions[qNum - 1].section == 1) {
        for (var i = 0; i < 4; i++) {
            if (radioBtn[i].checked) {
                option = radioBtn[i].value
                btnIndex = i;
                if (radioBtn[i].value == questions[qNum - 1].answer) {
                    result = "CORRECT"
                } else {
                    result = "INCORRECT"
                }
            }
        }
    }
    else if (questions[qNum - 1].section == 2) {
        option = inputVal.value
        console.log(questions[qNum - 1].min<parseFloat(inputVal.value) && parseFloat(inputVal.value)<questions[qNum - 1].max)
        if (questions[qNum - 1].min<parseFloat(inputVal.value) && parseFloat(inputVal.value)<questions[qNum - 1].max) {
            result = "CORRECT"
        } else {
            result = "INCORRECT"
        }
    }


    if (score == null) {
        scoreArr = []
    }
    else {
        scoreArr = JSON.parse(score)
    }
    let scoreobj = {
        index: qNum,
        btnIndex: btnIndex,
        response: option,
        answer: questions[qNum - 1].answer,
        Score: Marks,
        result: result
    }
    scoreArr.push(scoreobj)
    localStorage.setItem("score", JSON.stringify(scoreArr))
    console.log(scoreobj)
    radioBtn[0].checked = false
    radioBtn[1].checked = false
    radioBtn[2].checked = false
    radioBtn[3].checked = false
}