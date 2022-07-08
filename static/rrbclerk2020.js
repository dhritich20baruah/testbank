// We will find our destination even if we have to wander. 
// Misled are those who never stepped out.
const questions = [
    {
        "number": "1",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Eight persons i.e. D, Q, G, H, K, S, E and W are sitting around a square table in such a way that four persons sit at the corner side of the table and other four persons sit in the middle side of the table. The persons who sit at the corner side are facing away from the center and the persons who sit in the middle side are facing towards the center. D sits at the corner side of the table. One person sits between D and G. Q sits third to the right of G. Three persons sit between Q and E. W sits second to the right of E. W is not an immediate neighbour of D. H sits second to the right of K.",
        "question": "Who among the following sits second to the right of S?",
        "options": ["Q", "E", "D", "W", "None of these"],
        "answer": "b",
        "section": 1
    },
    {
        "number": "2",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Eight persons i.e. D, Q, G, H, K, S, E and W are sitting around a square table in such a way that four persons sit at the corner side of the table and other four persons sit in the middle side of the table. The persons who sit at the corner side are facing away from the center and the persons who sit in the middle side are facing towards the center. D sits at the corner side of the table. One person sits between D and G. Q sits third to the right of G. Three persons sit between Q and E. W sits second to the right of E. W is not an immediate neighbour of D. H sits second to the right of K.",
        "question": "How many persons sit between D and W when counted from the right of D?",
        "options": ["Three", "Four", "One", "Two", "None of these"],
        "answer": "d",
        "section": 1
    },
    {
        "number": "3",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Eight persons i.e. D, Q, G, H, K, S, E and W are sitting around a square table in such a way that four persons sit at the corner side of the table and other four persons sit in the middle side of the table. The persons who sit at the corner side are facing away from the center and the persons who sit in the middle side are facing towards the center. D sits at the corner side of the table. One person sits between D and G. Q sits third to the right of G. Three persons sit between Q and E. W sits second to the right of E. W is not an immediate neighbour of D. H sits second to the right of K.",
        "question": "Who among the following sits second to the left of G?",
        "options": ["D", "K", "H", "S", "None of these"],
        "answer": "c",
        "section": 1
    },
    {
        "number": "4",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Eight persons i.e. D, Q, G, H, K, S, E and W are sitting around a square table in such a way that four persons sit at the corner side of the table and other four persons sit in the middle side of the table. The persons who sit at the corner side are facing away from the center and the persons who sit in the middle side are facing towards the center. D sits at the corner side of the table. One person sits between D and G. Q sits third to the right of G. Three persons sit between Q and E. W sits second to the right of E. W is not an immediate neighbour of D. H sits second to the right of K.",
        "question": "Who among the following are the immediate   neighbours to each other?",
        "options": ["K,E", "Q,D", "G,H", "W,S", "None of these"],
        "answer": "b",
        "section": 1
    },
    {
        "number": "5",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Eight persons i.e. D, Q, G, H, K, S, E and W are sitting around a square table in such a way that four persons sit at the corner side of the table and other four persons sit in the middle side of the table. The persons who sit at the corner side are facing away from the center and the persons who sit in the middle side are facing towards the center. D sits at the corner side of the table. One person sits between D and G. Q sits third to the right of G. Three persons sit between Q and E. W sits second to the right of E. W is not an immediate neighbour of D. H sits second to the right of K.",
        "question": "Four of the following five are alike in a certain way and hence form a group. Find the one who does not belong to that group?",
        "options": ["E", "D", "G", "K", "H"],
        "answer": "a",
        "section": 1
    },
    {
        "number": "6",
        "directions": "Study the following sequence of numbers and alphabets and answer the given questions-",
        "questionStatement": "P 4 S A W 5 8 F 9 1 R E 7 2 O 3 7 5 1 B 6 K G N",
        "question": "How many numbers are there which are immediately preceded by a vowel?",
        "options": ["One", "None", "Two", "Three", "None of these"],
        "answer": "c",
        "section": 1
    },
    {
        "number": "7",
        "directions": "Study the following sequence of numbers and alphabets and answer the given questions-",
        "questionStatement": "P 4 S A W 5 8 F 9 1 R E 7 2 O 3 7 5 1 B 6 K G N",
        "question": "If all the numbers are removed from the given series, then which among the following element is seventh  from the right end?",
        "options": ["E", "O", "F", "R", "None of these"],
        "answer": "d",
        "section": 1
    },
    {
        "number": "8",
        "directions": "Study the following sequence of numbers and alphabets and answer the given questions-",
        "questionStatement": "P 4 S A W 5 8 F 9 1 R E 7 2 O 3 7 5 1 B 6 K G N",
        "question": "If all the consonants are removed from the given series, then which among the following element is ninth from the left end?",
        "options": ["2", "O", "3", "7", "None of these"],
        "answer": "a",
        "section": 1
    },
    {
        "number": "9",
        "directions": "Study the following sequence of numbers and alphabets and answer the given questions-",
        "questionStatement": "P 4 S A W 5 8 F 9 1 R E 7 2 O 3 7 5 1 B 6 K G N",
        "question": "Which among the following element is fifth to the left of twelfth element from the left end?",
        "options": ["F", "8", "9", "1", "None of these"],
        "answer": "b",
        "section": 1
    },
    {
        "number": "10",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Five persons A, B, C, D and E have different heights. Less than two persons are shorter than D. As many persons are taller than D as shorter than C. A is taller than B but shorter than E. B is not the shortest person. The height of third tallest person is 86 cm.",
        "question": "If the height of shortest person is 68 cm, then what may be the height of B?",
        "options": ["69cm", "81cm", "78cm", "All the given heights", "None of these"],
        "answer": "",
        "section": 1
    },
    {
        "number": "11",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Five persons A, B, C, D and E have different heights. Less than two persons are shorter than D. As many persons are taller than D as shorter than C. A is taller than B but shorter than E. B is not the shortest person. The height of third tallest person is 86 cm.",
        "question": "How many persons are taller than C?",
        "options": ["None", "One", "Two", "Three", "None of these"],
        "answer": "",
        "section": 1
    },
    {
        "number": "12",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Five persons A, B, C, D and E have different heights. Less than two persons are shorter than D. As many persons are taller than D as shorter than C. A is taller than B but shorter than E. B is not the shortest person. The height of third tallest person is 86 cm.",
        "question": "Who among the following is just shorter than E?",
        "options": ["None", "C", "A", "D", "None of these"],
        "answer": "",
        "section": 1
    },
    {
        "number": "13",
        "directions": "In each of the questions below are given some statements followed by some conclusions. You have to take the given statements to be true even if they seem to be at variance with commonly known facts. Read all the conclusions and then decide which of the given conclusions logically follows from the given statements disregarding commonly known facts.",
        "questionStatement": "Statements: All Greens are Yellows. No Yellows are Black.",
        "question": "Conclusions: I. No Greens are Black. II. Some Greens are Black.",
        "options": ["If only conclusion I follows.", "If only conclusion II follows.", "If either conclusion I or II follows.", "If neither conclusion I nor II follows.", "If both conclusions I and II follow."],
        "answer": "a",
        "section": 1
    },
    {
        "number": "14",
        "directions": "In each of the questions below are given some statements followed by some conclusions. You have to take the given statements to be true even if they seem to be at variance with commonly known facts. Read all the conclusions and then decide which of the given conclusions logically follows from the given statements disregarding commonly known facts.",
        "questionStatement": "Statements: All Chairs are Sofas. Only a few Sofas are Beds. No Beds are Curtains.",
        "question": "Conclusions: I. Some Sofas are not Beds. II. Some Sofas are not Curtains.",
        "options": ["If only conclusion I follows.", "If only conclusion II follows.", "If either conclusion I or II follows.", "If neither conclusion I nor II follows.", "If both conclusions I and II follow."],
        "answer": "e",
        "section": 1
    },
    {
        "number": "15",
        "directions": "In each of the questions below are given some statements followed by some conclusions. You have to take the given statements to be true even if they seem to be at variance with commonly known facts. Read all the conclusions and then decide which of the given conclusions logically follows from the given statements disregarding commonly known facts.",
        "questionStatement": "Statements: Only a few Coffee are Tea. All Tea is Drinks. Only a few Drinks are Cold drinks.",
        "question": "Conclusions: I. Some Tea is not Cold drinks. II. No Coffee are Drinks.",
        "options": ["If only conclusion I follows.", "If only conclusion II follows.", "If either conclusion I or II follows.", "If neither conclusion I nor II follows.", "If both conclusions I and II follow."],
        "answer": "d",
        "section": 1
    },
    {
        "number": "16",
        "directions": "In each of the questions below are given some statements followed by some conclusions. You have to take the given statements to be true even if they seem to be at variance with commonly known facts. Read all the conclusions and then decide which of the given conclusions logically follows from the given statements disregarding commonly known facts.",
        "questionStatement": "Statements: All Flowers are Trees. Only a few Trees are Gardens. No Gardens are Lawns.",
        "question": "Conclusions: I. All Lawns can never be Trees. II. Some Flowers can be Gardens.",
        "options": ["If only conclusion I follows.", "If only conclusion II follows.", "If either conclusion I or II follows.", "If neither conclusion I nor II follows.", "If both conclusions I and II follow."],
        "answer": "b",
        "section": 1
    },
    {
        "number": "17",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Seven persons A, B, C, D, E, F and G are sitting in row and all are facing towards north but not necessarily in the same order. B sits second from one of the extreme ends. Three persons sit between D and B. Two persons sit between D and A. C sits to the immediate left of A. F sits to left of C but is not an immediate neighbour of C. More than two persons sit between F and E.",
        "question": "How many persons sit to the left of F?",
        "options": ["Two", "None", "One", "Three", "None of these"],
        "answer": "b",
        "section": 1
    },
    {
        "number": "18",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Seven persons A, B, C, D, E, F and G are sitting in row and all are facing towards north but not necessarily in the same order. B sits second from one of the extreme ends. Three persons sit between D and B. Two persons sit between D and A. C sits to the immediate left of A. F sits to left of C but is not an immediate neighbour of C. More than two persons sit between F and E.",
        "question": "Who among the following sits third to the right of G?",
        "options": ["E", "C", "B", "F", "None of these"],
        "answer": "c",
        "section": 1
    },
    {
        "number": "19",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Seven persons A, B, C, D, E, F and G are sitting in row and all are facing towards north but not necessarily in the same order. B sits second from one of the extreme ends. Three persons sit between D and B. Two persons sit between D and A. C sits to the immediate left of A. F sits to left of C but is not an immediate neighbour of C. More than two persons sit between F and E.",
        "question": "Who among the following persons sit at the extreme ends?",
        "options": ["F,A", "A,E", "G,E", "F,E", "None of these"],
        "answer": "d",
        "section": 1
    },
    {
        "number": "20",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Seven persons A, B, C, D, E, F and G are sitting in row and all are facing towards north but not necessarily in the same order. B sits second from one of the extreme ends. Three persons sit between D and B. Two persons sit between D and A. C sits to the immediate left of A. F sits to left of C but is not an immediate neighbour of C. More than two persons sit between F and E.",
        "question": "How many persons sit between D and E?",
        "options": ["Two", "Four", "Three", "One", "None of these"],
        "answer": "b",
        "section": 1
    },
    {
        "number": "21",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Seven persons A, B, C, D, E, F and G are sitting in row and all are facing towards north but not necessarily in the same order. B sits second from one of the extreme ends. Three persons sit between D and B. Two persons sit between D and A. C sits to the immediate left of A. F sits to left of C but is not an immediate neighbour of C. More than two persons sit between F and E.",
        "question": "Who among the following sits to the immediate left of E?",
        "options": ["G", "A", "B", "D", "None of these"],
        "answer": "c",
        "section": 1
    },
]


let questionStatement = document.getElementById('questionStatement')
let questionNumber = document.getElementById('qnum')
let questionP = document.getElementById("questionP")
let directions = document.getElementById("direction-title")
let optionsLabel = document.getElementsByClassName("optionInput")
let proceed = document.getElementById('proceed')
let timer = document.getElementById('timer')
let notvisitedCount = document.getElementById('notvisitedCount')
let notansweredCount = document.getElementById('notansweredCount')
let answeredCount = document.getElementById('answeredCount')
let reviewCount = document.getElementById('reviewCount')
let ansNreviewCount = document.getElementById('ansNreviewCount')
let numberList = document.getElementById('numlist')
let radioBtn = document.getElementsByClassName('radio')
let confirm = document.getElementById('confirm')
let instructions = document.getElementById('instructions')
let declaration = document.getElementById('declaration')
let Marks = 0;
let index = 0;
let score = 0;
let btnIndex = 5;
let response = "";
let result = "";
let visited = false

//Set up a temporary array of questions
//append or modify the temp array according to the responses
//when test is over delete or revert that array

let tempArr = []
tempArr = questions.map(elem => ({ ...elem, btnIndex: btnIndex, response: response, result: result, visited: visited }))

//intialize page
questionStatement.innerHTML = `<p>${tempArr[index].questionStatement}</p>`
questionNumber.innerHTML = `${index + 1}`
questionP.innerHTML = `<p>${tempArr[index].question}</p>`
directions.innerHTML = `<p>${tempArr[index].directions}</p>`
for (var j = 0; j < 5; j++) {
    optionsLabel[`${j}`].innerText = tempArr[index].options[`${j}`]
}

//Hide instructions
function instructionsDisplay() {
    instructions.classList.add('hide')
    declaration.classList.remove('hide')
}
//Index page proceed button function
function startTest() {
    if (!confirm.checked) {
        document.getElementById('warning1').classList.remove('hide')
    } else {
        declaration.classList.add('hide')
        document.getElementById('test-page').classList.remove('hide')
        watch()
        tempArr[0].visited = true
    }

}

function hideWarning() {
    document.getElementById('warning1').classList.add('hide')
}

//Display questions
function display(i) {
    questionStatement.innerHTML = `<p>${tempArr[i].questionStatement}</p>`
    questionNumber.innerHTML = `${i + 1}`
    questionP.innerHTML = `<p>${tempArr[i].question}</p>`
    directions.innerHTML = `<p>${tempArr[i].directions}</p>`
    for (var j = 0; j < 4; j++) {
        optionsLabel[`${j}`].innerText = tempArr[i].options[`${j}`]
    }

}


//Save and next
function saveNext() {

    if (radioBtn[0].checked || radioBtn[1].checked || radioBtn[2].checked || radioBtn[3].checked || radioBtn[4].checked) {
        let qNum = questionNumber.innerHTML
        if (!numberList.children[qNum - 1].classList.contains('answered2')) {
            answeredCount.innerHTML = parseInt(answeredCount.innerHTML) + 1;
        }
        if (numberList.children[qNum - 1].classList.contains('notvisited2')) {
            notvisitedCount.innerHTML = parseInt(notvisitedCount.innerHTML) - 1;
        }
        if (numberList.children[qNum - 1].classList.contains('ansNreview2')) {
            ansNreviewCount.innerHTML = parseInt(ansNreviewCount.innerHTML) - 1;
        }
        if (numberList.children[qNum - 1].classList.contains('review2')) {
            reviewCount.innerHTML = parseInt(reviewCount.innerHTML) - 1;
        }
        if (notansweredCount.innerHTML > 0) {
            notansweredCount.innerHTML = parseInt(notansweredCount.innerHTML) - 1;
        }
        numberList.children[qNum - 1].classList.remove('notvisited2');
        numberList.children[qNum - 1].classList.remove('notanswered2');
        numberList.children[qNum - 1].classList.remove('ansNreview2');
        numberList.children[qNum - 1].classList.remove('review2');
        numberList.children[qNum - 1].classList.add('answered2');
        numberList.children[qNum].classList.add('notanswered2');
        index = parseInt(questionNumber.innerText);
        display(index)
        store()
    }
    else {
        let qNum = questionNumber.innerHTML
        notansweredCount.innerHTML = parseInt(notansweredCount.innerHTML) + 1;
        if (numberList.children[qNum - 1].classList.contains('answered2')) {
            answeredCount.innerHTML = parseInt(answeredCount.innerHTML) - 1;
        }
        if (numberList.children[qNum - 1].classList.contains('notvisited2')) {
            notvisitedCount.innerHTML = parseInt(notvisitedCount.innerHTML) - 1;
        }
        if (numberList.children[qNum - 1].classList.contains('ansNreview2')) {
            ansNreviewCount.innerHTML = parseInt(ansNreviewCount.innerHTML) - 1;
        }
        if (numberList.children[qNum - 1].classList.contains('review2')) {
            reviewCount.innerHTML = parseInt(reviewCount.innerHTML) - 1;
        }
        numberList.children[qNum - 1].classList.remove('notvisited2');
        numberList.children[qNum - 1].classList.remove('answered2');
        numberList.children[qNum - 1].classList.remove('review2');
        numberList.children[qNum - 1].classList.add('notanswered2');
        numberList.children[qNum].classList.add('notanswered2');
        index = parseInt(questionNumber.innerText);
        display(index)
    }
}

//CLEAR
function uncheck() {
    let qNum = questionNumber.innerHTML
    radioBtn[5].checked = true;
    if (numberList.children[qNum - 1].classList.contains('notvisited2')) {
        notvisitedCount.innerHTML = parseInt(notvisitedCount.innerHTML) - 1;
    }
    if (numberList.children[qNum - 1].classList.contains('ansNreview2')) {
        ansNreviewCount.innerHTML = parseInt(ansNreviewCount.innerHTML) - 1;
    }
    if (numberList.children[qNum - 1].classList.contains('review2')) {
        reviewCount.innerHTML = parseInt(reviewCount.innerHTML) - 1;
    }
    if (numberList.children[qNum - 1].classList.contains('answered2')) {
        answeredCount.innerHTML = parseInt(answeredCount.innerHTML) - 1;
    }
    notansweredCount.innerHTML = parseInt(notansweredCount.innerHTML) + 1;
    numberList.children[qNum - 1].classList.remove('notvisited2');
    numberList.children[qNum - 1].classList.remove('answered2');
    numberList.children[qNum - 1].classList.remove('ansNreview2');
    numberList.children[qNum - 1].classList.remove('review2');
    numberList.children[qNum - 1].classList.add('notanswered2');
    if (tempArr[qNum - 1].result == "CORRECT") {
        Marks -= 1
    } else if (tempArr[qNum - 1].result == "INCORRECT") {
        Marks += 0.25
    }
    tempArr[qNum - 1].result = ""
    tempArr[qNum - 1].response = ""
    tempArr[qNum - 1].btnIndex = 5
    console.log("Marks: ", Marks)
}

//Save and mark for review2
function savereview() {

    if (radioBtn[0].checked || radioBtn[1].checked || radioBtn[2].checked || radioBtn[3].checked || radioBtn[4].checked) {
        let qNum = questionNumber.innerHTML
        if (!numberList.children[qNum - 1].classList.contains('ansNreview2')) {
            ansNreviewCount.innerHTML = parseInt(ansNreviewCount.innerHTML) + 1;
        }
        if (numberList.children[qNum - 1].classList.contains('notvisited2')) {
            notvisitedCount.innerHTML = parseInt(notvisitedCount.innerHTML) - 1;
        }
        if (numberList.children[qNum - 1].classList.contains('answered2')) {
            answeredCount.innerHTML = parseInt(answeredCount.innerHTML) - 1;
        }
        if (numberList.children[qNum - 1].classList.contains('review2')) {
            reviewCount.innerHTML = parseInt(reviewCount.innerHTML) - 1;
        }
        if (notansweredCount.innerHTML > 0) {
            notansweredCount.innerHTML = parseInt(notansweredCount.innerHTML) - 1;
        }
        numberList.children[qNum - 1].classList.remove('notvisited2');
        numberList.children[qNum - 1].classList.remove('notanswered2');
        numberList.children[qNum - 1].classList.remove('review2');
        numberList.children[qNum - 1].classList.remove('answered2');
        numberList.children[qNum - 1].classList.add('ansNreview2');
        numberList.children[qNum].classList.add('notanswered2');
        index = parseInt(questionNumber.innerText);
        display(index)
        store()

    } else {
        reviewCount.innerHTML = parseInt(reviewCount.innerHTML) + 1;
        notvisitedCount.innerHTML = parseInt(notvisitedCount.innerHTML) - 1;
        let qNum = questionNumber.innerHTML;
        numberList.children[qNum - 1].classList.remove('notvisited2');
        numberList.children[qNum - 1].classList.remove('notanswered2');
        numberList.children[qNum - 1].classList.add('review2');
        numberList.children[qNum].classList.add('notanswered2');
        index = parseInt(questionNumber.innerText);
        display(index)
    }
}


//Update number board with CSS
function gotoQuestion(q) {
    if (numberList.children[q - 1].classList.contains('notvisited2')) {
        notansweredCount.innerHTML = parseInt(notansweredCount.innerHTML) + 1;
        notvisitedCount.innerHTML = parseInt(notvisitedCount.innerHTML) - 1;
    }
    display(q - 1);
    numberList.children[q - 1].classList.remove('notvisited2');
    numberList.children[q - 1].classList.add('notanswered2');
    radioBtn[tempArr[q - 1].btnIndex].checked = true
}

//Countdown
function watch() {
    var date1 = new Date()
    var countDownDate = new Date()
    countDownDate.setTime(date1.getTime() + (45 * 60 * 1000));

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("timer").innerHTML = minutes + ":" + seconds;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
            document.getElementById('questionDisplay').classList.add('hide');
            document.getElementById('scoreboard').classList.remove('hide')
            document.getElementById('scoreboard').classList.add('show')
        }
    }, 1000);
}

//Storage and evaluation
function store() {
    let qNum = questionNumber.innerHTML - 1
    tempArr[qNum - 1].visited = true
    for (var i = 0; i < 5; i++) {
        if (radioBtn[i].checked) {
            tempArr[qNum - 1].btnIndex = i;
            tempArr[qNum - 1].response = radioBtn[i].value
            if (tempArr[qNum - 1].result == "") {
                if (radioBtn[i].value == questions[qNum - 1].answer) {
                    tempArr[qNum - 1].result = "CORRECT"
                    Marks += 1
                } else {
                    tempArr[qNum - 1].result = "INCORRECT"
                    Marks -= 0.25
                }
            }
            if (tempArr[qNum - 1].result == "CORRECT") {
                if (radioBtn[i].value == questions[qNum - 1].answer) {
                    tempArr[qNum - 1].result = "CORRECT"
                    Marks += 0
                } else {
                    tempArr[qNum - 1].result = "INCORRECT"
                    Marks -= 1.25
                }
            } if (tempArr[qNum - 1].result == "INCORRECT") {
                if (radioBtn[i].value == questions[qNum - 1].answer) {
                    tempArr[qNum - 1].result = "CORRECT"
                    Marks += 1.25
                } else {
                    tempArr[qNum - 1].result = "INCORRECT"
                    Marks -= 0
                }
            }
        }
    }


    console.log("Marks: ", Marks)
    // let html = ""
    // tempArr.forEach(function (element) {
    //     html += `
    //     <h2>Question No.: ${element.Number}</h2>
    //     <div><img src=${element.question} alt=""></div>
    //     <p>Your Response:${element.response} 
    //         <br>
    //        Answer:${element.answer}
    //        <br>
    //        Result:${element.result}
    //     </p>
    //     `
    // })

    // var scorelist = document.getElementById('scorelist')
    // scorelist.innerHTML = html

    // document.getElementById('marksDisplay').innerText = `${Marks}`

    radioBtn[tempArr[qNum].btnIndex].checked = true

}

//Display scorecard
function scorecard() {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
    document.getElementById('questionDisplay').classList.add('hide');
    document.getElementById('scoreboard').classList.remove('hide')
    document.getElementById('scoreboard').classList.add('show')
}

