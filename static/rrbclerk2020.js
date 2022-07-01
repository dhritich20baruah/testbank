// We will find our destination even if we have to wander. Misled
// are those who never stepped out.
const questions = [
    {
        "number": "1",
        "directions": "Study the following information     carefully and answer the questions given below:",
        "question-statement":"Eight persons i.e. D, Q, G, H, K, S, E and W are sitting around a square table in such a way that four persons sit at the corner side of the table and other four persons sit in the middle side of the table. The persons who sit at the corner side are facing away from the center and the persons who sit in the middle side are facing towards the center. D sits at the corner side of the table. One person sits between D and G. Q sits third to the right of G. Three persons sit between Q and E. W sits second to the right of E. W is not an immediate neighbour of D. H sits second to the right of K.",
        "question":"Who among the following sits second to the right of S?",
        "options":["Q", "E", "D", "W", "None of these"],
        "answer":"E",
        "section": 1
    },
    {
        "number": "2",
        "directions": "Study the following information     carefully and answer the questions given below:",
        "question-statement":"Eight persons i.e. D, Q, G, H, K, S, E and W are sitting around a square table in such a way that four persons sit at the corner side of the table and other four persons sit in the middle side of the table. The persons who sit at the corner side are facing away from the center and the persons who sit in the middle side are facing towards the center. D sits at the corner side of the table. One person sits between D and G. Q sits third to the right of G. Three persons sit between Q and E. W sits second to the right of E. W is not an immediate neighbour of D. H sits second to the right of K.",
        "question":"How many persons sit between D and W when counted from the right of D?",
        "options":["Three", "Four", "One", "Two", "None of these"],
        "answer":"Two",
        "section": 1
    },
    {
        "number": "3",
        "directions": "Study the following information     carefully and answer the questions given below:",
        "question-statement":"Eight persons i.e. D, Q, G, H, K, S, E and W are sitting around a square table in such a way that four persons sit at the corner side of the table and other four persons sit in the middle side of the table. The persons who sit at the corner side are facing away from the center and the persons who sit in the middle side are facing towards the center. D sits at the corner side of the table. One person sits between D and G. Q sits third to the right of G. Three persons sit between Q and E. W sits second to the right of E. W is not an immediate neighbour of D. H sits second to the right of K.",
        "question":"Who among the following sits second to the left of G?",
        "options":["D", "K", "H", "S", "None of these"],
        "answer":"H",
        "section": 1
    },
    {
        "number": "4",
        "directions": "Study the following information     carefully and answer the questions given below:",
        "question-statement":"Eight persons i.e. D, Q, G, H, K, S, E and W are sitting around a square table in such a way that four persons sit at the corner side of the table and other four persons sit in the middle side of the table. The persons who sit at the corner side are facing away from the center and the persons who sit in the middle side are facing towards the center. D sits at the corner side of the table. One person sits between D and G. Q sits third to the right of G. Three persons sit between Q and E. W sits second to the right of E. W is not an immediate neighbour of D. H sits second to the right of K.",
        "question":"Who among the following are the immediate   neighbours to each other?",
        "options":["K,E", "Q,D", "G,H", "W,S", "None of these"],
        "answer":"Q,D",
        "section": 1
    },
    {
        "number": "5",
        "directions": "Study the following information     carefully and answer the questions given below:",
        "question-statement":"Eight persons i.e. D, Q, G, H, K, S, E and W are sitting around a square table in such a way that four persons sit at the corner side of the table and other four persons sit in the middle side of the table. The persons who sit at the corner side are facing away from the center and the persons who sit in the middle side are facing towards the center. D sits at the corner side of the table. One person sits between D and G. Q sits third to the right of G. Three persons sit between Q and E. W sits second to the right of E. W is not an immediate neighbour of D. H sits second to the right of K.",
        "question":"Four of the following five are alike in a certain way and hence form a group. Find the one who does not belong to that group?",
        "options":["E", "D", "G", "K", "H"],
        "answer":"E",
        "section": 1
    },
    {
        "number": "6",
        "directions": "Study the following sequence of       numbers and alphabets and answer the given questions-",
        "question-statement":"P 4 S A W 5 8 F 9 1 R E 7 2 O 3 7 5 1 B 6 K G N",
        "question":"How many numbers are there which are immediately preceded by a vowel?",
        "options":["One", "None", "Two", "Three", "None of these"],
        "answer":"Two",
        "section": 1
    },
    {
        "number": "7",
        "directions": "Study the following sequence of       numbers and alphabets and answer the given questions-",
        "question-statement":"P 4 S A W 5 8 F 9 1 R E 7 2 O 3 7 5 1 B 6 K G N",
        "question":"If all the numbers are removed from the given series, then which among the following element is seventh  from the right end?",
        "options":["E", "O", "F", "R", "None of these"],
        "answer":"R",
        "section": 1
    },
    {
        "number": "8",
        "directions": "Study the following sequence of       numbers and alphabets and answer the given questions-",
        "question-statement":"P 4 S A W 5 8 F 9 1 R E 7 2 O 3 7 5 1 B 6 K G N",
        "question":"If all the consonants are removed from the given series, then which among the following element is ninth from the left end?",
        "options":["2", "O", "3", "7", "None of these"],
        "answer":"2",
        "section": 1
    },
    {
        "number": "9",
        "directions": "Study the following sequence of       numbers and alphabets and answer the given questions-",
        "question-statement":"P 4 S A W 5 8 F 9 1 R E 7 2 O 3 7 5 1 B 6 K G N",
        "question":"Which among the following element is fifth to the left of twelfth element from the left end?",
        "options":["F", "8", "9", "1", "None of these"],
        "answer":"8",
        "section": 1
    },
    {
        "number": "10",
        "directions": "Study the following information        carefully and answer the questions given below:",
        "question-statement":"Five persons A, B, C, D and E have different heights. Less than two persons are shorter than D. As many persons are taller than D as shorter than C. A is taller than B but shorter       than E. B is not the shortest person. The height of third tallest person is 86 cm.",
        "question":"If the height of shortest person is 68 cm, then what may be the height of B?",
        "options":["69cm", "81cm", "78cm", "All the given heights", "None of these"],
        "answer":"Two",
        "section": 1
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
let instructions = document.getElementById('instructions')
let Marks = 0;
let index = 0;
let score = 0;
let btnIndex = 4
let response = "" 
let result = ""

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
        location.href = "/jeemains/jeemain2021shift1questions"
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
    document.getElementById("response-display").innerHTML = tempArr[i].response
    questionNumber.innerText = i + 1
    if (questions[i].section == 1) {
        document.getElementById('radio-btn').classList.remove('hide')
        document.getElementById('radio-btn').classList.add('show')
        document.getElementById('input-response').classList.add('hide')
        document.getElementById('input-response').classList.remove('show')
        instructions.innerText = ""
    } else if (questions[i].section == 2) {
        document.getElementById('input-response').classList.remove('hide')
        document.getElementById('input-response').classList.add('show')
        document.getElementById('radio-btn').classList.add('hide')
        document.getElementById('radio-btn').classList.remove('show')
        instructions.innerHTML = `<p>This Section contains 10 questions. Each question is numerical value type. For each question, enter the correct numerical value (in decimal notation, turncated/ rounded-off to second decimal place.) Attempt any five questions out of 10. <br><strong>Marking scheme: +4 for correct answer, 0 if not attempted and 0 in all other cases.</strong></p>`
    }
}

//Argument passed to display question is taken from index
function displayQuestion(arg) {
    query.innerHTML = `<h2>${questions[arg].questionText}</h2>`
    for (var i = 0; i < 4; i++) {
      document.getElementById(`btn${i}`).innerText = questions[arg].options[`${i}`]
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
        if (numberList.children[qNum - 1].classList.contains('notvisited')) {
            notVisitedCount.innerHTML = parseInt(notVisitedCount.innerHTML) - 1;
        }
        if (numberList.children[qNum - 1].classList.contains('ansNreview')) {
            ansNreviewCount.innerHTML = parseInt(ansNreviewCount.innerHTML) - 1;
        }
        if (numberList.children[qNum - 1].classList.contains('review')) {
            reviewCount.innerHTML = parseInt(reviewCount.innerHTML) - 1;
        }
        if (notansweredCount.innerHTML > 0) {
            notansweredCount.innerHTML = parseInt(notansweredCount.innerHTML) - 1;
        }
        numberList.children[qNum - 1].classList.remove('notvisited');
        numberList.children[qNum - 1].classList.remove('notanswered');
        numberList.children[qNum - 1].classList.remove('review');
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
    if (tempArr[qNum - 1].result == "CORRECT") {
        Marks -= 4
    }else if (tempArr[qNum - 1].result == "INCORRECT"){
        Marks += 1
    }
    tempArr[qNum - 1].result = ""
    tempArr[qNum - 1].response = ""
    tempArr[qNum - 1].btnIndex = 4
}

//Save and mark for review
function saveReview() {
    if (radioBtn[0].checked || radioBtn[1].checked || radioBtn[2].checked || radioBtn[3].checked || !inputVal.value == "") {
        let qNum = questionNumber.innerHTML
        if (!numberList.children[qNum - 1].classList.contains('ansNreview')) {
            ansNreviewCount.innerHTML = parseInt(ansNreviewCount.innerHTML) + 1;
        }
        if (numberList.children[qNum - 1].classList.contains('notvisited')) {
            notVisitedCount.innerHTML = parseInt(notVisitedCount.innerHTML) - 1;
        }
        if (numberList.children[qNum - 1].classList.contains('answered')) {
            ansNreviewCount.innerHTML = parseInt(ansNreviewCount.innerHTML) - 1;
        }
        if (numberList.children[qNum - 1].classList.contains('review')) {
            reviewCount.innerHTML = parseInt(reviewCount.innerHTML) - 1;
        }
        if (notansweredCount.innerHTML > 0) {
            notansweredCount.innerHTML = parseInt(notansweredCount.innerHTML) - 1;
        }
        numberList.children[qNum - 1].classList.remove('notvisited');
        numberList.children[qNum - 1].classList.remove('notanswered');
        numberList.children[qNum - 1].classList.remove('review');
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
    let qNum = questionNumber.innerHTML;
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
                if(tempArr[qNum-1].result=="CORRECT"){
                    Marks += 0
                }else{
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
    }
    else if (questions[qNum - 1].section == 2) {
        tempArr[qNum - 1].response = inputVal.value

        if (questions[qNum - 1].answer == parseFloat(inputVal.value)) {
            tempArr[qNum - 1].result = "CORRECT"
            Marks += 4
        } else {
            tempArr[qNum - 1].result = "INCORRECT"
            Marks -= 0
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

    radioBtn[tempArr[qNum].btnIndex].checked = true

    inputVal.value = ""
    screenValue = ""
}

//Display scorecard
function scorecard() {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
    document.getElementById('questionDisplay').classList.add('hide');
    document.getElementById('scoreboard').classList.remove('hide')
    document.getElementById('scoreboard').classList.add('show')
}

