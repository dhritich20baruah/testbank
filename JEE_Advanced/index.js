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
        "question": "/images/physics/P17.JPG",
        "answer": 'B',
        "section": 1
    },
    {
        "Number": 21,
        "question": "/images/physics/P05.JPG",
        "answer": "0.45 - 0.55",
        "min": 0.45,
        "max": 0.55,
        "section": 2
    },
    {
        "Number": 22,
        "question": "/images/physics/P06.JPG",
        "answer": "7.3 - 7.7",
        "min": 7.3,
        "max": 7.7,
        "section": 2,
    },
    {
        "Number": 23,
        "question": "/images/physics/P07.JPG",
        "answer": "1.3 - 1.4",
        "min": 1.3,
        "max": 1.4,
        "section": 2,
    },
    {
        "Number": 24,
        "question": "/images/physics/P08.JPG",
        "answer": "0.6 - 0.72",
        "min": 0.6,
        "max": 0.72,
        "section": 2,
    },
    {
        "Number": 25,
        "question": "/images/physics/P09.JPG",
        "answer": "1.7 - 1.8",
        "min": 1.7,
        "max": 1.8,
        "section": 2,
    },
    {
        "Number": 26,
        "question": "/images/maths/m01.JPG",
        "answer": 'B',
        "section": 1
    },
    {
        "Number": 27,
        "question": "/images/maths/m02.JPG",
        "answer": 'A',
        "section": 1
    },
    {
        "Number": 28,
        "question": "/images/maths/m03.JPG",
        "answer": 'A',
        "section": 1
    },
    {
        "Number": 29,
        "question": "/images/maths/m04.JPG",
        "answer": 'C',
        "section": 1
    },
    {
        "Number": 30,
        "question": "/images/maths/M17.JPG",
        "answer": 'B',
        "section": 1
    },
    {
        "Number": 31,
        "question": "/images/maths/M18.JPG",
        "answer": 'C',
        "section": 1
    },
    {
        "Number": 32,
        "question": "/images/maths/M19.JPG",
        "answer": 'C',
        "section": 1
    },
    {
        "Number": 46,
        "question": "/images/maths/m05.JPG",
        "answer": "76.1-76.4",
        "min": 76.1,
        "max": 76.4,
        "section": 2,
    },
    {
        "Number": 47,
        "question": "/images/maths/m06.JPG",
        "answer": "24.4-24.6",
        "min": 24.4,
        "max": 24.6,
        "section": 2,
    },
    {
        "Number": 48,
        "question": "/images/maths/m07.JPG",
        "answer": "0.95-1.05",
        "min": 0.95,
        "max": 1.05,
        "section": 2,
    },
    {
        "Number": 49,
        "question": "/images/maths/m08.JPG",
        "answer": "1.45-1.55",
        "min": 1.45,
        "max": 1.55,
        "section": 2,
    },
    {
        "Number": 50,
        "question": "/images/maths/m09.JPG",
        "answer": "8.95-9.05",
        "min": 8.95,
        "max": 9.05,
        "section": 2,
    },
    {
        "Number": 51,
        "question": "/images/chemistry/C01.JPG",
        "answer": 'B',
        "section": 1
    },
    {
        "Number": 52,
        "question": "/images/chemistry/C02.JPG",
        "answer": 'B',
        "section": 1
    },
    {
        "Number": 53,
        "question": "/images/chemistry/C03.JPG",
        "answer": 'B',
        "section": 1
    },
    {
        "Number": 54,
        "question": "/images/chemistry/C04.JPG",
        "answer": 'A',
        "section": 1
    },
    {
        "Number": 55,
        "question": "/images/chemistry/C18.JPG",
        "answer": 'A',
        "section": 1
    },
    {
        "Number": 56,
        "question": "/images/chemistry/C19.JPG",
        "answer": 'C',
        "section": 1
    },
    {
        "Number": 71,
        "question": "/images/chemistry/C05.JPG",
        "answer": "1.60-1.64",
        "min": 1.60,
        "max": 1.64,
        "section": 2,
    },
    {
        "Number": 72,
        "question": "/images/chemistry/C07.JPG",
        "answer": "166.2-166.3",
        "min": 166.2,
        "max": 166.3,
        "section": 2,
    },
    {
        "Number": 73,
        "question": "/images/chemistry/C08.JPG",
        "answer": "141-142",
        "min": 141,
        "max": 142,
        "section": 2,
    },
    {
        "Number": 74,
        "question": "/images/chemistry/C09.JPG",
        "answer": "100.1-100.3",
        "min": 100.1,
        "max": 100.3,
        "section": 2,
    },
    {
        "Number": 75,
        "question": "/images/chemistry/C10.JPG",
        "answer": "2.2-2.7",
        "min": 2.2,
        "max": 2.7,
        "section": 2,
    },
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
let confirm = document.getElementById('confirm')
let Marks = 0;
let index = 0;
let score = 0;
let btnIndex = 4
let response, result

//Set up a temporary array of questions
//append or modify the temp array according to the responses
//when test is over delete or revert that array

let tempArr = []
tempArr = questions.map(elem => ({ ...elem, btnIndex: btnIndex, response: response, result: result }))


//intialize page
questionsImg.innerHTML = `<img src=${questions[index].question} alt=""/>`
questionNumber.innerHTML = `${index + 1}`


//Index page proceed button function
function startTest() {
    if (!confirm.checked) {
        document.getElementById('warning1').classList.remove('hide')
    } else {
        location.href = "/JEE_Advanced/questions.html"
    }
}

function hideWarning() {
    document.getElementById('warning1').classList.add('hide')
}

//Starts test
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

//Save and next
function saveNext() {
    if (radioBtn[0].checked || radioBtn[1].checked || radioBtn[2].checked || radioBtn[3].checked || !inputVal.value == "") {
        let qNum = questionNumber.innerHTML
        if (!numberList.children[qNum - 1].classList.contains('answered')) {
            answeredCount.innerHTML = parseInt(answeredCount.innerHTML) + 1;
        }
        notVisitedCount.innerHTML = parseInt(notVisitedCount.innerHTML) - 1;


        if (notansweredCount.innerHTML > 0) {
            notansweredCount.innerHTML = parseInt(notansweredCount.innerHTML) - 1;
        }
        numberList.children[qNum - 1].classList.remove('notvisited');
        numberList.children[qNum - 1].classList.remove('notanswered');
        numberList.children[qNum - 1].classList.add('answered');
        numberList.children[qNum].classList.add('notanswered');
        index = parseInt(questionNumber.innerText);
        display(index)
        store()
    }
    else {
        alert("Please choose an option")
    }
}

//CLEAR
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
    let score = localStorage.getItem('score')
    if (score == null) {
        scoreArr = []
    }
    else {
        scoreArr = JSON.parse(score)
    }
    console.log(scoreArr)

}

//Save and mark for review
function saveReview() {
    if (radioBtn[0].checked || radioBtn[1].checked || radioBtn[2].checked || radioBtn[3].checked) {
        ansNreviewCount.innerHTML = parseInt(ansNreviewCount.innerHTML) + 1;
        notVisitedCount.innerHTML = parseInt(notVisitedCount.innerHTML) - 1;
        let qNum = questionNumber.innerHTML
        numberList.children[qNum - 1].classList.remove('notvisited');
        numberList.children[qNum - 1].classList.remove('notanswered');
        numberList.children[qNum - 1].classList.add('ansNreview');
        numberList.children[qNum].classList.add('notanswered');
        index = parseInt(questionNumber.innerText);
        display(index)
        store()
    }
    else {
        alert("Please choose an option")
    }
}

//Mark for review and next
function reviewNext() {
    reviewCount.innerHTML = parseInt(reviewCount.innerHTML) + 1;
    notVisitedCount.innerHTML = parseInt(notVisitedCount.innerHTML) - 1;
    let qNum = questionNumber.innerHTML
    numberList.children[qNum - 1].classList.remove('notvisited');
    numberList.children[qNum - 1].classList.remove('notanswered');
    numberList.children[qNum - 1].classList.add('review');
    numberList.children[qNum].classList.add('notanswered');
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
    console.log(tempArr[q - 1].btnIndex)
    radioBtn[tempArr[q - 1].btnIndex].checked = true

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
        document.getElementById('questionDisplay').classList.add('hide');
        document.getElementById('scoreboard').classList.remove('hide')
        document.getElementById('scoreboard').classList.add('show')
    }
}, 1000);

//Storage and evaluation
function store() {
    let qNum = questionNumber.innerHTML - 1

    if (questions[qNum - 1].section == 1) {
        for (var i = 0; i < 4; i++) {
            if (radioBtn[i].checked) {
                tempArr[qNum - 1].response = radioBtn[i].value
                tempArr[qNum - 1].btnIndex = i;
                if (radioBtn[i].value == questions[qNum - 1].answer) {
                    tempArr[qNum - 1].result = "CORRECT"
                    Marks += 4
                } else {
                    tempArr[qNum - 1].result = "INCORRECT"
                    Marks -= 1
                }
            }
        }
    }
    else if (questions[qNum - 1].section == 2) {
        tempArr[qNum - 1].response = inputVal.value

        if (questions[qNum - 1].min < parseFloat(inputVal.value) && parseFloat(inputVal.value) < questions[qNum - 1].max) {
            tempArr[qNum - 1].result = "CORRECT"
            Marks += 4
        } else {
            tempArr[qNum - 1].result = "INCORRECT"
            Marks -= 1
        }
    }

    let html = ""
    tempArr.forEach(function (element) {
        html += `
        <h2>Question No.: ${element.Number}</h2>
        <div><img src=${element.question} alt=""></div>
        <p>Your Response:${element.response} 
            <br>
           Answer:${element.answer}
           <br>
           Result:${element.result}
        </p>
        `
    })

    var scorelist = document.getElementById('scorelist')
    scorelist.innerHTML = html

    document.getElementById('marksDisplay').innerText = `${Marks}`

    radioBtn[0].checked = false
    radioBtn[1].checked = false
    radioBtn[2].checked = false
    radioBtn[3].checked = false
    inputVal.value = ""
}

//Display scorecard
function scorecard() {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
    document.getElementById('questionDisplay').classList.add('hide');
    document.getElementById('scoreboard').classList.remove('hide')
    document.getElementById('scoreboard').classList.add('show')
}

