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


let table = localStorage.getItem('table')

if (table == null) {
    tableArr = []
}
else {
    tableArr = JSON.parse(table)
}

questions.forEach(element => {
    let tableobj = {
        index: element.Number,
        answer: element.answer,
        section: element.section
    }
    tableArr.push(tableobj)  
});

localStorage.setItem("table", JSON.stringify(tableArr))
console.log(localStorage.getItem('table'))

