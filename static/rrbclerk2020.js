// We will find our destination even if we have to wander. 
// Misled are those who never stepped out.
const questions = [
    {
        "number": "1",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Eight persons i.e. D, Q, G, H, K, S, E and W are sitting around a square table in such a way that four persons sit at the corner side of the table and other four persons sit in the middle side of the table. The persons who sit at the corner side are facing away from the center and the persons who sit in the middle side are facing towards the center. D sits at the corner side of the table. One person sits between D and G. Q sits third to the right of G. Three persons sit between Q and E. W sits second to the right of E. W is not an immediate neighbour of D. H sits second to the right of K.",
        "question": "Who among the following sits second to the right of S?",
        "options": ["Q", "E", "D", "W", "None of these"],
        "solution": "E",
        "answer": "b",
        "section": 1
    },
    {
        "number": "2",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Eight persons i.e. D, Q, G, H, K, S, E and W are sitting around a square table in such a way that four persons sit at the corner side of the table and other four persons sit in the middle side of the table. The persons who sit at the corner side are facing away from the center and the persons who sit in the middle side are facing towards the center. D sits at the corner side of the table. One person sits between D and G. Q sits third to the right of G. Three persons sit between Q and E. W sits second to the right of E. W is not an immediate neighbour of D. H sits second to the right of K.",
        "question": "How many persons sit between D and W when counted from the right of D?",
        "options": ["Three", "Four", "One", "Two", "None of these"],
        "solution": "Two",
        "answer": "d",
        "section": 1
    },
    {
        "number": "3",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Eight persons i.e. D, Q, G, H, K, S, E and W are sitting around a square table in such a way that four persons sit at the corner side of the table and other four persons sit in the middle side of the table. The persons who sit at the corner side are facing away from the center and the persons who sit in the middle side are facing towards the center. D sits at the corner side of the table. One person sits between D and G. Q sits third to the right of G. Three persons sit between Q and E. W sits second to the right of E. W is not an immediate neighbour of D. H sits second to the right of K.",
        "question": "Who among the following sits second to the left of G?",
        "options": ["D", "K", "H", "S", "None of these"],
        "solution": "H",
        "answer": "c",
        "section": 1
    },
    {
        "number": "4",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Eight persons i.e. D, Q, G, H, K, S, E and W are sitting around a square table in such a way that four persons sit at the corner side of the table and other four persons sit in the middle side of the table. The persons who sit at the corner side are facing away from the center and the persons who sit in the middle side are facing towards the center. D sits at the corner side of the table. One person sits between D and G. Q sits third to the right of G. Three persons sit between Q and E. W sits second to the right of E. W is not an immediate neighbour of D. H sits second to the right of K.",
        "question": "Who among the following are the immediate   neighbours to each other?",
        "options": ["K,E", "Q,D", "G,H", "W,S", "None of these"],
        "solution": "Q,D",
        "answer": "b",
        "section": 1
    },
    {
        "number": "5",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Eight persons i.e. D, Q, G, H, K, S, E and W are sitting around a square table in such a way that four persons sit at the corner side of the table and other four persons sit in the middle side of the table. The persons who sit at the corner side are facing away from the center and the persons who sit in the middle side are facing towards the center. D sits at the corner side of the table. One person sits between D and G. Q sits third to the right of G. Three persons sit between Q and E. W sits second to the right of E. W is not an immediate neighbour of D. H sits second to the right of K.",
        "question": "Four of the following five are alike in a certain way and hence form a group. Find the one who does not belong to that group?",
        "options": ["E", "D", "G", "K", "H"],
        "solution": "E",
        "answer": "a",
        "section": 1
    },
    {
        "number": "6",
        "directions": "Study the following sequence of numbers and alphabets and answer the given questions-",
        "questionStatement": "P 4 S A W 5 8 F 9 1 R E 7 2 O 3 7 5 1 B 6 K G N",
        "question": "How many numbers are there which are immediately preceded by a vowel?",
        "options": ["One", "None", "Two", "Three", "None of these"],
        "solution": "Two",
        "answer": "c",
        "section": 1
    },
    {
        "number": "7",
        "directions": "Study the following sequence of numbers and alphabets and answer the given questions-",
        "questionStatement": "P 4 S A W 5 8 F 9 1 R E 7 2 O 3 7 5 1 B 6 K G N",
        "question": "If all the numbers are removed from the given series, then which among the following element is seventh  from the right end?",
        "options": ["E", "O", "F", "R", "None of these"],
        "solution": "R",
        "answer": "d",
        "section": 1
    },
    {
        "number": "8",
        "directions": "Study the following sequence of numbers and alphabets and answer the given questions-",
        "questionStatement": "P 4 S A W 5 8 F 9 1 R E 7 2 O 3 7 5 1 B 6 K G N",
        "question": "If all the consonants are removed from the given series, then which among the following element is ninth from the left end?",
        "options": ["2", "O", "3", "7", "None of these"],
        "solution": "2",
        "answer": "a",
        "section": 1
    },
    {
        "number": "9",
        "directions": "Study the following sequence of numbers and alphabets and answer the given questions-",
        "questionStatement": "P 4 S A W 5 8 F 9 1 R E 7 2 O 3 7 5 1 B 6 K G N",
        "question": "Which among the following element is fifth to the left of twelfth element from the left end?",
        "options": ["F", "8", "9", "1", "None of these"],
        "solution": "8",
        "answer": "b",
        "section": 1
    },
    {
        "number": "10",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Five persons A, B, C, D and E have different heights. Less than two persons are shorter than D. As many persons are taller than D as shorter than C. A is taller than B but shorter than E. B is not the shortest person. The height of third tallest person is 86 cm.",
        "question": "If the height of shortest person is 68 cm, then what may be the height of B?",
        "options": ["69cm", "81cm", "78cm", "All the given heights", "None of these"],
        "solution": "",
        "answer": "",
        "section": 1
    },
    {
        "number": "11",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Five persons A, B, C, D and E have different heights. Less than two persons are shorter than D. As many persons are taller than D as shorter than C. A is taller than B but shorter than E. B is not the shortest person. The height of third tallest person is 86 cm.",
        "question": "How many persons are taller than C?",
        "options": ["None", "One", "Two", "Three", "None of these"],
        "solution": "",
        "answer": "",
        "section": 1
    },
    {
        "number": "12",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Five persons A, B, C, D and E have different heights. Less than two persons are shorter than D. As many persons are taller than D as shorter than C. A is taller than B but shorter than E. B is not the shortest person. The height of third tallest person is 86 cm.",
        "question": "Who among the following is just shorter than E?",
        "options": ["None", "C", "A", "D", "None of these"],
        "solution": "",
        "answer": "",
        "section": 1
    },
    {
        "number": "13",
        "directions": "In each of the questions below are given some statements followed by some conclusions. You have to take the given statements to be true even if they seem to be at variance with commonly known facts. Read all the conclusions and then decide which of the given conclusions logically follows from the given statements disregarding commonly known facts.",
        "questionStatement": "Statements: All Greens are Yellows. No Yellows are Black.",
        "question": "Conclusions: I. No Greens are Black. II. Some Greens are Black.",
        "options": ["If only conclusion I follows.", "If only conclusion II follows.", "If either conclusion I or II follows.", "If neither conclusion I nor II follows.", "If both conclusions I and II follow."],
        "solution": "If only conclusion I follows",
        "answer": "a",
        "section": 1
    },
    {
        "number": "14",
        "directions": "In each of the questions below are given some statements followed by some conclusions. You have to take the given statements to be true even if they seem to be at variance with commonly known facts. Read all the conclusions and then decide which of the given conclusions logically follows from the given statements disregarding commonly known facts.",
        "questionStatement": "Statements: All Chairs are Sofas. Only a few Sofas are Beds. No Beds are Curtains.",
        "question": "Conclusions: I. Some Sofas are not Beds. II. Some Sofas are not Curtains.",
        "options": ["If only conclusion I follows.", "If only conclusion II follows.", "If either conclusion I or II follows.", "If neither conclusion I nor II follows.", "If both conclusions I and II follow."],
        "solution": "If both conclusions I and II follows",
        "answer": "e",
        "section": 1
    },
    {
        "number": "15",
        "directions": "In each of the questions below are given some statements followed by some conclusions. You have to take the given statements to be true even if they seem to be at variance with commonly known facts. Read all the conclusions and then decide which of the given conclusions logically follows from the given statements disregarding commonly known facts.",
        "questionStatement": "Statements: Only a few Coffee are Tea. All Tea is Drinks. Only a few Drinks are Cold drinks.",
        "question": "Conclusions: I. Some Tea is not Cold drinks. II. No Coffee are Drinks.",
        "options": ["If only conclusion I follows.", "If only conclusion II follows.", "If either conclusion I or II follows.", "If neither conclusion I nor II follows.", "If both conclusions I and II follow."],
        "solution": "If neither conclusion I nor II follows",
        "answer": "d",
        "section": 1
    },
    {
        "number": "16",
        "directions": "In each of the questions below are given some statements followed by some conclusions. You have to take the given statements to be true even if they seem to be at variance with commonly known facts. Read all the conclusions and then decide which of the given conclusions logically follows from the given statements disregarding commonly known facts.",
        "questionStatement": "Statements: All Flowers are Trees. Only a few Trees are Gardens. No Gardens are Lawns.",
        "question": "Conclusions: I. All Lawns can never be Trees. II. Some Flowers can be Gardens.",
        "options": ["If only conclusion I follows.", "If only conclusion II follows.", "If either conclusion I or II follows.", "If neither conclusion I nor II follows.", "If both conclusions I and II follow."],
        "solution": "If only conclusion II follows.",
        "answer": "b",
        "section": 1
    },
    {
        "number": "17",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Seven persons A, B, C, D, E, F and G are sitting in row and all are facing towards north but not necessarily in the same order. B sits second from one of the extreme ends. Three persons sit between D and B. Two persons sit between D and A. C sits to the immediate left of A. F sits to left of C but is not an immediate neighbour of C. More than two persons sit between F and E.",
        "question": "How many persons sit to the left of F?",
        "options": ["Two", "None", "One", "Three", "None of these"],
        "solution": "None",
        "answer": "b",
        "section": 1
    },
    {
        "number": "18",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Seven persons A, B, C, D, E, F and G are sitting in row and all are facing towards north but not necessarily in the same order. B sits second from one of the extreme ends. Three persons sit between D and B. Two persons sit between D and A. C sits to the immediate left of A. F sits to left of C but is not an immediate neighbour of C. More than two persons sit between F and E.",
        "question": "Who among the following sits third to the right of G?",
        "options": ["E", "C", "B", "F", "None of these"],
        "solution": "B",
        "answer": "c",
        "section": 1
    },
    {
        "number": "19",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Seven persons A, B, C, D, E, F and G are sitting in row and all are facing towards north but not necessarily in the same order. B sits second from one of the extreme ends. Three persons sit between D and B. Two persons sit between D and A. C sits to the immediate left of A. F sits to left of C but is not an immediate neighbour of C. More than two persons sit between F and E.",
        "question": "Who among the following persons sit at the extreme ends?",
        "options": ["F,A", "A,E", "G,E", "F,E", "None of these"],
        "solution": "F,E",
        "answer": "d",
        "section": 1
    },
    {
        "number": "20",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Seven persons A, B, C, D, E, F and G are sitting in row and all are facing towards north but not necessarily in the same order. B sits second from one of the extreme ends. Three persons sit between D and B. Two persons sit between D and A. C sits to the immediate left of A. F sits to left of C but is not an immediate neighbour of C. More than two persons sit between F and E.",
        "question": "How many persons sit between D and E?",
        "options": ["Two", "Four", "Three", "One", "None of these"],
        "solution": "Four",
        "answer": "b",
        "section": 1
    },
    {
        "number": "21",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Seven persons A, B, C, D, E, F and G are sitting in row and all are facing towards north but not necessarily in the same order. B sits second from one of the extreme ends. Three persons sit between D and B. Two persons sit between D and A. C sits to the immediate left of A. F sits to left of C but is not an immediate neighbour of C. More than two persons sit between F and E.",
        "question": "Who among the following sits to the immediate left of E?",
        "options": ["G", "A", "B", "D", "None of these"],
        "solution": "B",
        "answer": "c",
        "section": 1
    },
    {
        "number": "22",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Point D is 10m north of point P. Point Y is 14m east of point D. Point Q is 8m north of point Y. Point S is 20m west of point Q. Point H is 8m south of point S.",
        "question": "What is the shortest distance between point H and point D?",
        "options": ["8m", "6m", "4m", "10m", "None of these"],
        "solution": "6m",
        "answer": "b",
        "section": 1
    },
    {
        "number": "23",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "Point D is 10m north of point P. Point Y is 14m east of point D. Point Q is 8m north of point Y. Point S is 20m west of point Q. Point H is 8m south of point S.",
        "question": "In which direction is point P with respect to point Q?",
        "options": ["South east", "North west", "South west", "North east", "None of these"],
        "solution": "South west",
        "answer": "c",
        "section": 1
    },
    {
        "number": "24",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "There are certain number of persons sitting in a row facing towards north direction. A sits fifth to the right of B. Two persons sit between C and B. D sits fourth to the left of C. Four persons sit to the left of D. The number of persons sit between D and B is same as the number of persons sit between B and F. F sits at fourth position from one of the extreme ends.",
        "question": "How many persons sit between B and D?",
        "options": ["None", "Six", "Five", "Four", "None of these"],
        "solution": "Six",
        "answer": "b",
        "section": 1
    },
    {
        "number": "25",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "There are certain number of persons sitting in a row facing towards north direction. A sits fifth to the right of B. Two persons sit between C and B. D sits fourth to the left of C. Four persons sit to the left of D. The number of persons sit between D and B is same as the number of persons sit between B and F. F sits at fourth position from one of the extreme ends.",
        "question": "How many persons sit in the row?",
        "options": ["Twenty", "Twenty-one", "Twenty-two", "Nineteen", "None of these"],
        "solution": "Twenty-two",
        "answer": "c",
        "section": 1
    },
    {
        "number": "26",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "There are certain number of persons sitting in a row facing towards north direction. A sits fifth to the right of B. Two persons sit between C and B. D sits fourth to the left of C. Four persons sit to the left of D. The number of persons sit between D and B is same as the number of persons sit between B and F. F sits at fourth position from one of the extreme ends.",
        "question": "Who among the following sits second to the right of A?",
        "options": ["None", "C", "D", "F", "None of these"],
        "solution": "F",
        "answer": "d",
        "section": 1
    },
    {
        "number": "27",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "There are certain number of persons sitting in a row facing towards north direction. A sits fifth to the right of B. Two persons sit between C and B. D sits fourth to the left of C. Four persons sit to the left of D. The number of persons sit between D and B is same as the number of persons sit between B and F. F sits at fourth position from one of the extreme ends.",
        "question": "How many persons sit to the right of B?",
        "options": ["Nine", "Ten", "Eight", "Eleven", "None of these"],
        "solution": "Ten",
        "answer": "b",
        "section": 1
    },
    {
        "number": "28",
        "directions": "Study the following information carefully and answer the questions given below:",
        "questionStatement": "How many such pairs of letters are there in the meaningful word ‘MATCHES’ each of which has as many letters between them in the word as in the English alphabet (From both backward and forward)?",
        "question": "",
        "options": ["Two", "One", "More than three", "Three", "None of these"],
        "solution": "More than three",
        "answer": "c",
        "section": 1
    },
    {
        "number": "29",
        "directions": "Study the following sequence carefully and answer the given questions.",
        "questionStatement": "COT IVY PEA FOX MRU",
        "question": "If we add ‘L’ after first letter in every word, then how many meaningful words will be formed?",
        "options": ["None", "Three", "Two", "One", "None of these"],
        "solution": "Two",
        "answer": "c",
        "section": 1
    },
    {
        "number": "30",
        "directions": "Study the following sequence carefully and answer the given questions.",
        "questionStatement": "COT IVY PEA FOX MRU",
        "question": "If third letter of each word is replaced by its succeeding letter according to English alphabetical order, then in how many words vowels will appear more than once?",
        "options": ["Two", "One", "None", "Three", "None of these"],
        "solution": "One",
        "answer": "b",
        "section": 1
    },
    {
        "number": "31",
        "directions": "Study the following sequence carefully and answer the given questions.",
        "questionStatement": "COT IVY PEA FOX MRU",
        "question": "If all the words are arranged according to English alphabetical order from left to right, then which word will appear fourth from the left end?",
        "options": ["MRU", "FOX", "PEA", "IVY", "None of these"],
        "solution": "MRU",
        "answer": "a",
        "section": 1
    },
    {
        "number": "32",
        "directions": "Study the following sequence carefully and answer the given questions.",
        "questionStatement": "COT IVY PEA FOX MRU",
        "question": "If all the letters are arranged according to English alphabetical order within each word, then in how many words vowel will appear at second position?",
        "options": ["One", "None", "Two", "Three", "None of these"],
        "solution": "Three",
        "answer": "d",
        "section": 1
    },
    {
        "number": "33",
        "directions": "Study the following sequence carefully and answer the given questions.",
        "questionStatement": "COT IVY PEA FOX MRU",
        "question": "How many letters are there in English alphabetical series between the first letter of the second word from the left end and third letter of the third word from the right end?",
        "options": ["Five", "Six", "Seven", "Four", "None of these"],
        "solution": "Seven",
        "answer": "c",
        "section": 1
    },
    {
        "number": "34",
        "directions": "Study the following sequence carefully and answer the given questions.",
        "questionStatement": "COT IVY PEA FOX MRU",
        "question": "If in the number ‘35982476’, 1 is added to each even digit and 2 is subtracted from each odd digit, then which digits will not appear twice in the number thus obtained?",
        "options": ["Only 1", "Only 9", "Both 1 and 9", "Only 5", "None of these"],
        "solution": "Both 1 and 9",
        "answer": "c",
        "section": 1
    },
    {
        "number": "35",
        "directions": "Study the following sequence carefully and answer the given questions.",
        "questionStatement": "Six people P, Q, R, S, T and U have events on different dates 7th and 12th of different months i.e. January, February and March. D has event on even numbered date in the month having 31 days. The number of persons have event before D is same as the number of persons have event after A. One person has event between A and C. F has event before C. B has event just before E.",
        "question": "How many persons have event before B?",
        "options": ["Two", "None", "Three", "One", "None of these"],
        "solution": "Three",
        "answer": "c",
        "section": 1
    },
    {
        "number": "36",
        "directions": "Study the following sequence carefully and answer the given questions.",
        "questionStatement": "Six people P, Q, R, S, T and U have events on different dates 7th and 12th of different months i.e. January, February and March. D has event on even numbered date in the month having 31 days. The number of persons have event before D is same as the number of persons have event after A. One person has event between A and C. F has event before C. B has event just before E.",
        "question": "Who among the following has event just after D?",
        "options": ["C", "None", "B", "F", "None of these"],
        "solution": "None",
        "answer": "b",
        "section": 1
    },
    {
        "number": "37",
        "directions": "Study the following sequence carefully and answer the given questions.",
        "questionStatement": "Six people P, Q, R, S, T and U have events on different dates 7th and 12th of different months i.e. January, February and March. D has event on even numbered date in the month having 31 days. The number of persons have event before D is same as the number of persons have event after A. One person has event between A and C. F has event before C. B has event just before E.",
        "question": "How many persons have event between F and D?",
        "options": ["One", "Three", "None", "Two", "None of these"],
        "solution": "Three",
        "answer": "b",
        "section": 1
    },
    {
        "number": "38",
        "directions": "Study the following sequence carefully and answer the given questions.",
        "questionStatement": "Six people P, Q, R, S, T and U have events on different dates 7th and 12th of different months i.e. January, February and March. D has event on even numbered date in the month having 31 days. The number of persons have event before D is same as the number of persons have event after A. One person has event between A and C. F has event before C. B has event just before E.",
        "question": "E has event on which among the following date?",
        "options": ["12th February", "12th March", "7th March", "7th January", "None of these"],
        "solution": "7th March",
        "answer": "c",
        "section": 1
    },
    {
        "number": "39",
        "directions": "Study the following sequence carefully and answer the given questions.",
        "questionStatement": "Six people P, Q, R, S, T and U have events on different dates 7th and 12th of different months i.e. January, February and March. D has event on even numbered date in the month having 31 days. The number of persons have event before D is same as the number of persons have event after A. One person has event between A and C. F has event before C. B has event just before E.",
        "question": "Four of the following five are alike in a certain way and hence form a group. Which is the one that does not belong to that group?",
        "options": ["A,F", "E,F", "F,C", "E,B", "C,B"],
        "solution": "E,F",
        "answer": "b",
        "section": 1
    },
    {
        "number": "40",
        "directions": "Study the following sequence carefully and answer the given questions.",
        "questionStatement": "Six people P, Q, R, S, T and U have events on different dates 7th and 12th of different months i.e. January, February and March. D has event on even numbered date in the month having 31 days. The number of persons have event before D is same as the number of persons have event after A. One person has event between A and C. F has event before C. B has event just before E.",
        "question": "Four of the following five are alike in a certain way and hence form a group. Which is the one that does not belong to that group?",
        "options": ["RUY", "SQO", "OMK", "FDB", "YWU"],
        "solution": "RUY",
        "answer": "a",
        "section": 1
    },
    {
        "number": "41",
        "directions": "Line graph given below shows number of passengers travelling in five (A, B, C, D & E) different compartment of a trains. Read the data carefully and answer the questions.",
        "questionStatement": "GRAPH",
        "question": "Total passengers in E are what percent less than total passengers in A?",
        "options": ["6.25%", "8.33%", "6.33%", "6.66%", "5%"],
        "solution": "8.33%",
        "answer": "b",
        "section": 2
    },
    {
        "number": "42",
        "directions": "Line graph given below shows number of passengers travelling in five (A, B, C, D & E) different compartment of a trains. Read the data carefully and answer the questions.",
        "questionStatement": "GRAPH",
        "question": "Find average number of passengers in A, C & E?",
        "options": ["32", "30", "36", "33", "27"],
        "solution": "32",
        "answer": "a",
        "section": 2
    },
    {
        "number": "43",
        "directions": "Line graph given below shows number of passengers travelling in five (A, B, C, D & E) different compartment of a trains. Read the data carefully and answer the questions.",
        "questionStatement": "GRAPH",
        "question": "Find the ratio of total passenger in B to that of in D?",
        "options": ["7:9", "9:10", "11:9", "9:13", "9:11"],
        "solution": "9:11",
        "answer": "e",
        "section": 2
    },
    {
        "number": "44",
        "directions": "Line graph given below shows number of passengers travelling in five (A, B, C, D & E) different compartment of a trains. Read the data carefully and answer the questions.",
        "questionStatement": "GRAPH",
        "question": "Total passenger in C and E together are what percent more than total passenger in A?",
        "options": ["33 1/3 %", "66 2/3 %", "66 1/3 %", "50%", "60%"],
        "solution": "66 2/3%",
        "answer": "b",
        "section": 2
    },
    {
        "number": "45",
        "directions": "Line graph given below shows number of passengers travelling in five (A, B, C, D & E) different compartment of a trains. Read the data carefully and answer the questions.",
        "questionStatement": "GRAPH",
        "question": "Find total number of passengers traveling in B, C & D together?",
        "options": ["69", "65", "67", "63", "71"],
        "solution": "67",
        "answer": "c",
        "section": 2
    },
    {
        "number": "46",
        "directions": "What will come in the place of question (?) mark in following questions.",
        "questionStatement": "",
        "question": "12, 12, 24, 72, ?, 1440",
        "options": ["256", "288", "284", "296", "316"],
        "solution": "288",
        "answer": "b",
        "section": 2
    },
    {
        "number": "47",
        "directions": "What will come in the place of question (?) mark in following questions.",
        "questionStatement": "",
        "question": "16, 17.8, 21.4, 28.6, 43, ?",
        "options": ["69.8", "72.8", "73.8", "70.8", "71.8"],
        "solution": "71.8",
        "answer": "e",
        "section": 2
    },
    {
        "number": "48",
        "directions": "What will come in the place of question (?) mark in following questions.",
        "questionStatement": "",
        "question": "12, 7, 8, 13, ?, 68.5",
        "options": ["28", "27", "26", "27.5", "26.5"],
        "solution": "27",
        "answer": "b",
        "section": 2
    },
    {
        "number": "49",
        "directions": "What will come in the place of question (?) mark in following questions.",
        "questionStatement": "",
        "question": "72, 79, 65, 93, ?, 149",
        "options": ["36", "31", "33", "37", "35"],
        "solution": "37",
        "answer": "d",
        "section": 2
    },
    {
        "number": "50",
        "directions": "What will come in the place of question (?) mark in following questions.",
        "questionStatement": "",
        "question": "8, 9, 19, 58, 233, ?",
        "options": ["1164", "1166", "1156", "1152", "1158"],
        "solution": "1166",
        "answer": "b",
        "section": 2
    },
    {
        "number": "51",
        "directions": "",
        "questionStatement": "If the difference between the present age of P and Q is three years and the ratio between the age of P and Q after two years will be 5 : 4, then find the age of P after two years (in years)?",
        "question": "",
        "options": ["15", "13", "18", "16", "14"],
        "solution": "15",
        "answer": "a",
        "section": 2
    },
    {
        "number": "52",
        "directions": "",
        "questionStatement": "A and B both spend 30% of their income together which is equal to Rs. 26400. If income of A is 20% more than that of B, then find the income of B (in Rs.)?",
        "question": "",
        "options": ["52000", "48000", "40000", "36000", "30000"],
        "solution": "40000",
        "answer": "c",
        "section": 2
    },
    {
        "number": "53",
        "directions": "",
        "questionStatement": "If a man invests equal sum at the same rate of interest on simple interest for T and T+4 years and the respective ratio of interest gets by man is 1:2 respectively, then find ‘T’?",
        "question": "",
        "options": ["6", "2", "5", "3", "4"],
        "solution": "4",
        "answer": "e",
        "section": 2
    },
    {
        "number": "54",
        "directions": "",
        "questionStatement": "12 women can complete a work in 64 day, then find how many women will be required to complete 2/3 rd of the same work in 16 days?",
        "question": "",
        "options": ["28", "24", "36", "32", "48"],
        "solution": "32",
        "answer": "d",
        "section": 2
    },
    {
        "number": "55",
        "directions": "",
        "questionStatement": "A train running at the speed of 72 kmph crosses a pole in 30 seconds. Find the time taken by the same train to cross the pole with the speed of 54 kmph (in sec)?",
        "question": "",
        "options": ["42", "48", "54", "45", "40"],
        "solution": "40",
        "answer": "e",
        "section": 2
    },
    {
        "number": "56",
        "directions": "",
        "questionStatement": "The upstream speed and downstream speed of a boat is 10 kmph and 14 kmph respectively and boat travelled for T hours & 6 hours in upstream and downstream respectively. If the distance travelled in downstream is 44 km more than upstream, then find the value of ‘T’",
        "question": "",
        "options": ["4", "3", "6", "5", "8"],
        "solution": "4",
        "answer": "a",
        "section": 2
    },
    {
        "number": "57",
        "directions": "",
        "questionStatement": "An article was marked up by 50% above cost price and allowed Rs 50 discount on marked price. If shopkeeper still made a profit of Rs. 50, then find the selling price of the article (in Rs.)?",
        "question": "",
        "options": ["Rs.350", "Rs.300", "Rs.250", "Rs.200", "Rs.150"],
        "solution": "Rs.250",
        "answer": "c",
        "section": 2
    },
    {
        "number": "58",
        "directions": "",
        "questionStatement": "A & B invested Rs. X and Rs. (X + 800) for same period of time in a business. If A gets Rs. 3200 as profit share out of total profit of Rs. 6800, then find ‘X’?",
        "question": "",
        "options": ["7800", "6000", "8400", "7200", "6400"],
        "solution": "6400",
        "answer": "e",
        "section": 2
    },
    {
        "number": "59",
        "directions": "",
        "questionStatement": "A vessel contains mixture of milk and water in the ration of 3 : 1 respectively. If 20 liters mixture taken out from the vessel and now the difference between milk and water in the remaining mixture is 70 liters, then find initial mixture in vessel (in liters)?",
        "question": "",
        "options": ["240", "160", "120", "80", "180"],
        "solution": "160",
        "answer": "b",
        "section": 2
    },
    {
        "number": "60",
        "directions": "",
        "questionStatement": "Perimeter of a rectangle is 2 cm more than circumference of a circle and area of circle is 616 cm². If breath of rectangle is equal to radius of circle, then find length of rectangle (in cm)?",
        "question": "",
        "options": ["35", "33", "31", "21", "27"],
        "solution": "31",
        "answer": "c",
        "section": 2
    },
    {
        "number": "61",
        "directions": "Table given below shows number of orders received by three (P, Q & R) companies of their three (A, B & C) items. Read the data carefully and answer the questions.",
        "questionStatement": "",
        "question": "Total orders of item A & B received by R is how much more than total orders of item B & C received by Q?",
        "options": ["50", "10", "40", "20", "30"],
        "solution": "20",
        "answer": "d",
        "section": 2
    },
    {
        "number": "62",
        "directions": "Table given below shows number of orders received by three (P, Q & R) companies of their three (A, B & C) items. Read the data carefully and answer the questions.",
        "questionStatement": "",
        "question": "Find total orders (all three items) received by R is what percent more than that of total orders (all three items) received by Q?",
        "options": ["5%", "12.5%", "10%", "15%", "20%"],
        "solution": "5%",
        "answer": "a",
        "section": 2
    },
    {
        "number": "63",
        "directions": "Table given below shows number of orders received by three (P, Q & R) companies of their three (A, B & C) items. Read the data carefully and answer the questions.",
        "questionStatement": "",
        "question": "Find ratio of total orders of item A & B received by P to total orders of item B & C received by Q?",
        "options": ["7:9", "8:7", "4:7", "5:6", "7:8"],
        "solution": "7:8",
        "answer": "e",
        "section": 2
    },
    {
        "number": "64",
        "directions": "Table given below shows number of orders received by three (P, Q & R) companies of their three (A, B & C) items. Read the data carefully and answer the questions.",
        "questionStatement": "",
        "question": "Find average number of orders of item B received by Q & R is what percent of total orders of item A received by P?",
        "options": ["104 1/4%", "106 1/4%", "108 1/4%", "102 1/4%", "110 1/4%"],
        "solution": "106 1/4%",
        "answer": "b",
        "section": 2
    },
    {
        "number": "65",
        "directions": "Table given below shows number of orders received by three (P, Q & R) companies of their three (A, B & C) items. Read the data carefully and answer the questions.",
        "questionStatement": "",
        "question": "Find total orders of item A, B & C received by P?",
        "options": ["210", "220", "190", "180", "200"],
        "solution": "190",
        "answer": "c",
        "section": 2
    },
    {
        "number": "66",
        "directions": "",
        "questionStatement": "What should come in place of question mark (?) in following questions?",
        "question": "(48% of 625) ÷ 0.75 = ?",
        "options": ["800", "None of these", "40", "4000", "400"],
        "solution": "400",
        "answer": "e",
        "section": 2
    },
    {
        "number": "67",
        "directions": "",
        "questionStatement": "What should come in place of question mark (?) in following questions?",
        "question": "",
        "options": ["1", "2", "4", "5", "3"],
        "solution": "4",
        "answer": "c",
        "section": 3
    },
    {
        "number": "68",
        "directions": "",
        "questionStatement": "What should come in place of question mark (?) in following questions?",
        "question": "",
        "options": ["2", "3", "4", "1", "None of these"],
        "solution": "3",
        "answer": "b",
        "section": 3
    },
    {
        "number": "69",
        "directions": "",
        "questionStatement": "What should come in place of question mark (?) in following questions?",
        "question": "",
        "options": ["6", "12", "8", "4", "16"],
        "solution": "8",
        "answer": "c",
        "section": 3
    },
    {
        "number": "70",
        "directions": "",
        "questionStatement": "What should come in place of question mark (?) in following questions?",
        "question": "? + 432 - 205 = 550",
        "options": ["384", "244", "224", "276", "324"],
        "solution": "324",
        "answer": "e",
        "section": 2
    },
    {
        "number": "71",
        "directions": "",
        "questionStatement": "What should come in place of question mark (?) in following questions?",
        "question": "",
        "options": ["10", "12", "8", "6", "9"],
        "solution": "10",
        "answer": "a",
        "section": 3
    },
    {
        "number": "72",
        "directions": "",
        "questionStatement": "What should come in place of question mark (?) in following questions?",
        "question": "40% of 400 + ? % of 300 = 250",
        "options": ["40", "36", "25", "30", "20"],
        "solution": "30",
        "answer": "d",
        "section": 2
    },
    {
        "number": "73",
        "directions": "",
        "questionStatement": "What should come in place of question mark (?) in following questions?",
        "question": "",
        "options": ["185", "183", "187", "184", "182"],
        "solution": "183",
        "answer": "b",
        "section": 3
    },
    {
        "number": "74",
        "directions": "",
        "questionStatement": "What should come in place of question mark (?) in following questions?",
        "question": "",
        "options": ["1", "4", "5", "2", "3"],
        "solution": "3",
        "answer": "e",
        "section": 3
    },
    {
        "number": "75",
        "directions": "",
        "questionStatement": "What should come in place of question mark (?) in following questions?",
        "question": "",
        "options": ["10", "13", "17", "8", "16"],
        "solution": "13",
        "answer": "b",
        "section": 3
    },
    {
        "number": "76",
        "directions": "",
        "questionStatement": "What should come in place of question mark (?) in following questions?",
        "question": "12%(? + 100) = 18",
        "options": ["40", "50", "30", "100", "60"],
        "solution": "50",
        "answer": "b",
        "section": 2
    },
    {
        "number": "77",
        "directions": "",
        "questionStatement": "What should come in place of question mark (?) in following questions?",
        "question": "",
        "options": ["19", "18", "17", "16", "15"],
        "solution": "17",
        "answer": "c",
        "section": 3
    },
    {
        "number": "78",
        "directions": "",
        "questionStatement": "What should come in place of question mark (?) in following questions?",
        "question": "",
        "options": ["3", "4", "2", "1", "5"],
        "solution": "4",
        "answer": "b",
        "section": 3
    },
    {
        "number": "79",
        "directions": "",
        "questionStatement": "What should come in place of question mark (?) in following questions?",
        "question": "",
        "options": ["4", "4 1/2", "5", "5 1/6", "6"],
        "solution": "5 1/6",
        "answer": "d",
        "section": 3
    },
    {
        "number": "80",
        "directions": "",
        "questionStatement": "What should come in place of question mark (?) in following questions?",
        "question": "",
        "options": ["2", "3", "0", "6", "7"],
        "solution": "0",
        "answer": "c",
        "section": 3
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
let questionBlock = document.getElementById('questionBlock')
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
document.getElementById('sectionName').innerHTML = "Reasoning"

//Hide instructions
function instructionsDisplay() {
    instructions.classList.add('hide')
    declaration.classList.remove('hide')
}
//Instructions Modal
function instructionsClose(){
    document.getElementById('instructions2').classList.toggle('hide')
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
//Questions MODAL
let questionText = '';
tempArr.map((element) =>{
    questionText += `  
    <h4>Question No.: ${element.number}</h4>
    <p>${element.questionStatement}</p>
    <p>${element.question}</p>
    `
})
questionBlock.innerHTML = questionText

function questionsClose(){
    document.getElementById('questions').classList.toggle('hide')
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
var stoptime
function watch() {
    var date1 = new Date()
    var countDownDate = new Date()
    countDownDate.setTime(date1.getTime() + (45 * 60 * 1000));

    // Update the count down every 1 second
    var stoptime = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("timer").innerHTML = (minutes > 9 ? minutes : "0" + minutes) +":" + (seconds > 9 ? seconds : "0" + seconds);
        

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(stoptime);
            document.getElementById("timer").innerHTML = "00:00";
            document.getElementById('test-page').classList.add('hide');
            document.getElementById('scoreboard').classList.remove('hide')
            document.getElementById('scoreboard').classList.add('show')
        }
    }, 1000);
}
document.getElementsByClassName('numlist1').classList.add('hide')
//Section Selector
function displayReasoning(){
    document.getElementById('sectionName').innerHTML = "Reasoning"
    display(0)
}
function displayQuantitative(){
    document.getElementById('sectionName').innerHTML = "Quantitative Aptitude"
    numberList.children[40].classList.add('notanswered2')
    display(40)
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
    let html = ""
    tempArr.forEach(function (element) {
        html += `
        <h2>Question No.: ${element.number}</h2>
        <p>${element.questionStatement}</p>
        <p>${element.question} 
            <br>
            Options:${element.options}
            <br>
            Answer:${element.solution}
        </p>
        `
    })

    var scorelist = document.getElementById('scorelist')
    scorelist.innerHTML = html

    document.getElementById('marksDisplay').innerText = `${Marks}`

    radioBtn[tempArr[qNum].btnIndex].checked = true

}

//Display scorecard
function scorecard() {
    clearInterval(stoptime);
    document.getElementById("timer").innerHTML = "00:00";
    document.getElementById('test-page').classList.add('hide');
    document.getElementById('scoreboard').classList.remove('hide')
    document.getElementById('scoreboard').classList.add('show')
}

