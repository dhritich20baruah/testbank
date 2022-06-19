const questions = [
    {
        "Number": 1,
        "question": "../static/JEE_Advanced/2021paper1/Q01.JPG",
        "answer": 'C',
        "section": 1
    },
    {
        "Number": 2,
        "question": "../static/JEE_Advanced/2021paper1/Q02.JPG",
        "answer": 'C',
        "section": 1
    },
    {
        "Number": 3,
        "question": "../static/JEE_Advanced/2021paper1/Q03.JPG",
        "answer": 'B',
        "section": 1
    },
    {
        "Number": 4,
        "question": "../static/JEE_Advanced/2021paper1/Q04.JPG",
        "answer": 'D',
        "section": 1
    },
    {
        "Number": 5,
        "question": "../static/JEE_Advanced/2021paper1/Q05.JPG",
        "answer": '0.45-0.55',
        "min": 0.45,
        "max": 0.55,
        "section": 2
    },
    {
        "Number": 6,
        "question": "../static/JEE_Advanced/2021paper1/Q06.JPG",
        "answer": '7.30-7.70',
        "min": 7.30,
        "max": 7.70,
        "section": 2
    },
    {
        "Number": 7,
        "question": "../static/JEE_Advanced/2021paper1/Q07.JPG",
        "answer": '1.3-1.4',
        "min": 1.3,
        "max": 1.4,
        "section": 2
    },
    {
        "Number": 8,
        "question": "../static/JEE_Advanced/2021paper1/Q08.JPG",
        "answer": '0.6-0.72',
        "min": 0.6,
        "max": 0.72,
        "section": 2
    },
    {
        "Number": 9,
        "question": "../static/JEE_Advanced/2021paper1/Q09.JPG",
        "answer": '1.7-1.8',
        "min": 1.7,
        "max": 1.8,
        "section": 2
    },
    {
        "Number": 10,
        "question": "../static/JEE_Advanced/2021paper1/Q10.JPG",
        "answer": '2.9-3.1',
        "min": 2.9,
        "max": 3.1,
        "section": 2
    },
    {
        "Number": 11,
        "question": "../static/JEE_Advanced/2021paper1/Q11.JPG",
        "answer": ['B', 'D'],
        "section": 3
    },
    {
        "Number": 12,
        "question": "../static/JEE_Advanced/2021paper1/Q12.JPG",
        "answer": ['B', 'C', 'D'],
        "section": 3
    },
    {
        "Number": 13,
        "question": "../static/JEE_Advanced/2021paper1/Q13.JPG",
        "answer": ['A', 'B', 'C'],
        "section": 3
    },
    {
        "Number": 14,
        "question": "../static/JEE_Advanced/2021paper1/Q14.JPG",
        "answer": ['A', 'D'],
        "section": 3
    },
    {
        "Number": 15,
        "question": "../static/JEE_Advanced/2021paper1/Q15.JPG",
        "answer": ['A', 'C'],
        "section": 3
    },
    {
        "Number": 16,
        "question": "../static/JEE_Advanced/2021paper1/Q16.JPG",
        "answer": ['A', 'C'],
        "section": 3
    },
    {
        "Number": 17,
        "question": "../static/JEE_Advanced/2021paper1/Q17.JPG",
        "answer": 4,
        "section": 4
    },
    {
        "Number": 18,
        "question": "../static/JEE_Advanced/2021paper1/Q18.JPG",
        "answer": 49,
        "section": 4
    },
    {
        "Number": 19,
        "question": "../static/JEE_Advanced/2021paper1/Q19.JPG",
        "answer": 9,
        "section": 4
    },
    {
        "Number": 20,
        "question": "../static/JEE_Advanced/2021paper1/Q20.JPG",
        "answer": 'B',
        "section": 1
    },
    {
        "Number": 21,
        "question": "../static/JEE_Advanced/2021paper1/Q21.JPG",
        "answer": "B",
        "section": 1,
    },
    {
        "Number": 22,
        "question": "../static/JEE_Advanced/2021paper1/Q22.JPG",
        "answer": "B",
        "section": 1,
    },
    {
        "Number": 23,
        "question": "../static/JEE_Advanced/2021paper1/Q23.JPG",
        "answer": "A",
        "section": 1,
    },
    {
        "Number": 24,
        "question": "../static/JEE_Advanced/2021paper1/Q24.JPG",
        "answer": "1.61-1.63",
        "min": 1.61,
        "max": 1.63,
        "section": 2,
    },
    {
        "Number": 25,
        "question": "../static/JEE_Advanced/2021paper1/Q25.JPG",
        "answer": "3.2-3.9",
        "min": 3.2,
        "max": 3.9,
        "section": 2,
    },
    {
        "Number": 26,
        "question": "../static/JEE_Advanced/2021paper1/Q26.JPG",
        "answer": "166.2-166.3",
        "min": 166.2,
        "max": 166.3,
        "section": 2,
    },
    {
        "Number": 27,
        "question": "../static/JEE_Advanced/2021paper1/Q27.JPG",
        "answer": "141-142",
        "min": 141,
        "max": 142,
        "section": 2,
    },
    {
        "Number": 28,
        "question": "../static/JEE_Advanced/2021paper1/Q28.JPG",
        "answer": "100-100.2",
        "min": 100,
        "max": 100.2,
        "section": 2,
    },
    {
        "Number": 29,
        "question": "../static/JEE_Advanced/2021paper1/Q29.JPG",
        "answer": "2.49-2.51",
        "min": 2.49,
        "max": 2.51,
        "section": 2,
    },
    {
        "Number": 30,
        "question": "../static/JEE_Advanced/2021paper1/Q30.JPG",
        "answer": ['C', 'D'],
        "section": 3,
    },
    {
        "Number": 31,
        "question": "../static/JEE_Advanced/2021paper1/Q31.JPG",
        "answer": ['A', 'D'],
        "section": 3
    },
    {
        "Number": 32,
        "question": "../static/JEE_Advanced/2021paper1/Q32.JPG",
        "answer": ['B', 'C'],
        "section": 3
    },
    {
        "Number": 33,
        "question": "../static/JEE_Advanced/2021paper1/Q33.JPG",
        "answer": ['A', 'B', 'D'],
        "section": 3
    },
    {
        "Number": 34,
        "question": "../static/JEE_Advanced/2021paper1/Q34.JPG",
        "answer": ['A', 'C', 'D'],
        "section": 3
    },
    {
        "Number": 35,
        "question": "../static/JEE_Advanced/2021paper1/Q35.JPG",
        "answer": ['A', 'B'],
        "section": 3
    },
    {
        "Number": 36,
        "question": "../static/JEE_Advanced/2021paper1/Q36.JPG",
        "answer": 9,
        "section": 4
    },
    {
        "Number": 37,
        "question": "../static/JEE_Advanced/2021paper1/Q37.JPG",
        "answer": 8,
        "section": 4
    },
    {
        "Number": 38,
        "question": "../static/JEE_Advanced/2021paper1/Q36.JPG",
        "answer": 6,
        "section": 4,
    },
    {
        "Number": 39,
        "question": "../static/JEE_Advanced/2021paper1/Q39.JPG",
        "answer": 'B',
        "section": 1
    },
    {
        "Number": 40,
        "question": "../static/JEE_Advanced/2021paper1/Q40.JPG",
        "answer": 'A',
        "section": 1
    },
    {
        "Number": 41,
        "question": "../static/JEE_Advanced/2021paper1/Q41.JPG",
        "answer": 'A',
        "section": 1
    },
    {
        "Number": 42,
        "question": "../static/JEE_Advanced/2021paper1/Q42.JPG",
        "answer": 'C',
        "section": 1
    },
    {
        "Number": 43,
        "question": "../static/JEE_Advanced/2021paper1/Q43.JPG",
        "answer": '76.1-76.4',
        "min": 76.1,
        "max": 76.4,
        "section": 2
    },
    {
        "Number": 44,
        "question": "../static/JEE_Advanced/2021paper1/Q44.JPG",
        "answer": '24.4-24.6',
        "min": 24.4,
        "max": 24.6,
        "section": 2
    },
    {
        "Number": 45,
        "question": "../static/JEE_Advanced/2021paper1/Q45.JPG",
        "answer": '0.95-1.05',
        "min": 0.95,
        "max": 1.05,
        "section": 2
    },
    {
        "Number": 46,
        "question": "../static/JEE_Advanced/2021paper1/Q46.JPG",
        "answer": '1.45-1.55',
        "min": 1.45,
        "max": 1.55,
        "section": 2
    },
    {
        "Number": 47,
        "question": "../static/JEE_Advanced/2021paper1/Q47.JPG",
        "answer": '8.95-9.05',
        "min": 8.95,
        "max": 9.05,
        "section": 2
    },
    {
        "Number": 48,
        "question": "../static/JEE_Advanced/2021paper1/Q48.JPG",
        "answer": '77.1-77.18',
        "min": 77.1,
        "max": 77.18,
        "section": 2
    },
    {
        "Number": 49,
        "question": "../static/JEE_Advanced/2021paper1/Q49.JPG",
        "answer": ['A', 'B', 'D'],
        "section": 3
    },
    {
        "Number": 50,
        "question": "../static/JEE_Advanced/2021paper1/Q50.JPG",
        "answer": ['A', 'B'],
        "section": 3
    },
    {
        "Number": 51,
        "question": "../static/JEE_Advanced/2021paper1/Q51.JPG",
        "answer": ['A', 'B', 'C'],
        "section": 3,
    },
    {
        "Number": 52,
        "question": "../static/JEE_Advanced/2021paper1/Q52.JPG",
        "answer": ['A', 'B', 'C'],
        "section": 3,
    },
    {
        "Number": 53,
        "question": "../static/JEE_Advanced/2021paper1/Q53.JPG",
        "answer": ['A', 'B'],
        "section": 3,
    },
    {
        "Number": 54,
        "question": "../static/JEE_Advanced/2021paper1/Q54.JPG",
        "answer": ['B', 'D'],
        "section": 3,
    },
    {
        "Number": 55,
        "question": "../static/JEE_Advanced/2021paper1/Q52.JPG",
        "answer": 4,
        "section": 4,
    },
    {
        "Number": 56,
        "question": "../static/JEE_Advanced/2021paper1/Q53.JPG",
        "answer": 2,
        "section": 4,
    },
    {
        "Number": 57,
        "question": "../static/JEE_Advanced/2021paper1/Q54.JPG",
        "answer": 7,
        "section": 4,
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
let radioBtn2 = document.getElementsByClassName('radio2')
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
        location.href = "/jeeadv2021paper1questions"
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
        document.getElementById('radio-btn2').classList.add('hide')
        document.getElementById('radio-btn2').classList.remove('show')
        document.getElementById('input-response').classList.add('hide')
        document.getElementById('input-response').classList.remove('show')
        instructions.innerHTML = `<p>This Section contains 4 questions. Each question has four options. <strong>ONLY ONE </strong>of these four optins is the correct answer. <br><strong>Marking scheme: +3 for correct answer, 0 if not attempted and -1 in all other cases.</strong></p>`
    }
    if (questions[i].section == 2) {
        document.getElementById('input-response').classList.remove('hide')
        document.getElementById('input-response').classList.add('show')
        document.getElementById('radio-btn').classList.add('hide')
        document.getElementById('radio-btn').classList.remove('show')
        document.getElementById('radio-btn2').classList.add('hide')
        document.getElementById('radio-btn2').classList.remove('show')
        instructions.innerHTML = `<p>This Section contains THREE(3) question stems. There are TWO (2) questions corresponding to each question stem. For each question, enter the correct numerical value corresponding to the answer in the designated place using the mouse and the on-screen virtual numeric keypad. If the numerical value has more than two decimal places, truncate/round-off the value to TWO decimal
        places. <br><strong>Marking scheme: +2 if ONLY the correct value is entered, 0 if not attempted and 0 in all other cases.</strong></p>`
    }
    if (questions[i].section == 3) {
        document.getElementById('radio-btn').classList.add('hide')
        document.getElementById('radio-btn').classList.remove('show')
        document.getElementById('radio-btn2').classList.remove('hide')
        document.getElementById('radio-btn2').classList.add('show')
        document.getElementById('input-response').classList.add('hide')
        document.getElementById('input-response').classList.remove('show')
        instructions.innerHTML = `<p>This Section contains SIX (06) questions. Each question has four options.<strong> ONE OR MORE THAN ONE</strong> of these four option(s) is (are) correct answer(s). <br><strong>Marking scheme:<br>Full Marks : +4 If only (all) the correct option(s) is(are) chosen; <br>Partial Marks : +3 If all the four options are correct but ONLY three options are chosen; <br>Partial Marks : +2 If three or more options are correct but ONLY two options are chosen, both of which are correct; <br>Partial Marks : +1 If two or more options are correct but ONLY one option is chosen and it is a correct option; <br>Zero Marks : 0 If unanswered; <br>Negative Marks : −2 In all other cases.</strong></p>`
    }
    if (questions[i].section == 4) {
        document.getElementById('input-response').classList.remove('hide')
        document.getElementById('input-response').classList.add('show')
        document.getElementById('radio-btn').classList.add('hide')
        document.getElementById('radio-btn').classList.remove('show')
        document.getElementById('radio-btn2').classList.add('hide')
        document.getElementById('radio-btn2').classList.remove('show')
        instructions.innerHTML = `<p>This Section contains THREE (03) questions. The answer to each question is a NON-NEGATIVE INTEGER. For each question, enter the correct integer corresponding to the answer using the mouse and the
        on-screen virtual numeric keypad in the place designated to enter the answer. <br><strong>Marking scheme: +4 for correct answer, 0 if not attempted and 0 in all other cases.</strong></p>`
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
    if (radioBtn[0].checked || radioBtn[1].checked || radioBtn[2].checked || radioBtn[3].checked || radioBtn2[0].checked || radioBtn2[1].checked || radioBtn2[2].checked || radioBtn2[3].checked || !inputVal.value == "") {
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
    console.log("Marks: ", Marks)
}

//CLEAR
function uncheck() {
    var radio = document.querySelector('input[type=radio]:checked');
    radio.checked = false;
    answeredCount.innerHTML = parseInt(answeredCount.innerHTML) - 1;
    notansweredCount.innerHTML = parseInt(notansweredCount.innerHTML) + 1;
    let qNum = questionNumber.innerHTML
    numberList.children[qNum - 1].classList.remove('notvisited');
    numberList.children[qNum - 1].classList.remove('answered');
    numberList.children[qNum - 1].classList.add('notanswered');
    if (tempArr[qNum - 1].result == "CORRECT") {
        Marks -= 4
    } else if (tempArr[qNum - 1].result == "INCORRECT") {
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
                if (tempArr[qNum - 1].result == "CORRECT") {
                    Marks += 0
                } else {
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
    if (questions[qNum - 1].section == 2) {
        tempArr[qNum - 1].response = inputVal.value

        if (questions[qNum - 1].min <= parseFloat(inputVal.value) && parseFloat(inputVal.value <= questions[qNum - 1].max)) {
            tempArr[qNum - 1].result = "CORRECT"
            Marks += 4
        } else {
            tempArr[qNum - 1].result = "INCORRECT"
            Marks -= 0
        }
    }
    if (questions[qNum - 1].section == 3) {
        let res = []
        let ans = tempArr[qNum - 1].answer
        for (var i = 0; i < 4; i++) {
            if (radioBtn2[i].checked) {
                res.push(radioBtn2[i].value)
            }
        }
        tempArr[qNum - 1].response = res
        for (var i = 0; i < res.length; i++) {
            if (!ans.includes(res[i])) {
                tempArr[qNum - 1].result = "INCORRECT"
                Marks -= 2
                break
            } else {
                if (ans.length == 4) {
                    if (res.length == 4) {
                        Marks += 4
                        tempArr[qNum - 1].result = "CORRECT"
                        break
                    } if (res.length == 3) {
                        Marks += 3
                        tempArr[qNum - 1].result = "CORRECT"
                        break
                    } if (res.length == 2) {
                        Marks += 2
                        tempArr[qNum - 1].result = "CORRECT"
                        break
                    } if (res.length == 1) {
                        Marks += 1
                        tempArr[qNum - 1].result = "CORRECT"
                        break
                    }
                }
                if (ans.length == 3) {
                    if (res.length == 3) {
                        Marks += 4
                        tempArr[qNum - 1].result = "CORRECT"
                        break
                    } if (res.length == 2) {
                        Marks += 2
                        tempArr[qNum - 1].result = "CORRECT"
                        break
                    } if (res.length == 1) {
                        Marks += 1
                        tempArr[qNum - 1].result = "CORRECT"
                        break
                    }
                } 
                if (ans.length == 2) {
                    if (res.length == 2) {
                        Marks += 4
                        tempArr[qNum - 1].result = "CORRECT"
                        break
                    } if (res.length == 1) {
                        Marks += 1
                        tempArr[qNum - 1].result = "CORRECT"
                        break
                    } 
                }
            }
        }
    }
    if (questions[qNum - 1].section == 4) {
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
    if (tempArr[qNum].section == 1 || tempArr[qNum].section == 2 || tempArr[qNum].section == 4) {
        radioBtn[tempArr[qNum].btnIndex].checked = true
        screenValue = ""
        inputVal.value = ""
    }
    if (tempArr[qNum].section == 3) {
        radioBtn2[0].checked = false;
        radioBtn2[1].checked = false;
        radioBtn2[2].checked = false;
        radioBtn2[3].checked = false;
    }
}

//Display scorecard
function scorecard() {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
    document.getElementById('questionDisplay').classList.add('hide');
    document.getElementById('scoreboard').classList.remove('hide')
    document.getElementById('scoreboard').classList.add('show')
}

