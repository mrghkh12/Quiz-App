const $ = document;

const questionDataList = [
  {
    question: "Who created Flutter?",
    options: ["Facebook", "Adobe", "Google", "Microsoft"],
    answer: "Google",
  },
  {
    question: "What is Flutter?",
    options: [
      "Android Development Kit",
      "IOS Development Kit",
      "Web Development Kit",
      "SDK to build beautiful IOS, Android, Web &amp; Desktop Native Apps",
    ],
    answer: "SDK to build beautiful IOS, Android, Web &amp; Desktop Native Apps",
  },
  {
    question: "Which programing language is used by Flutter",
    options: ["Ruby", "Dart", "C++", "Kotlin"],
    answer: "Dart",
  },
  {
    question: "How many programming languages are in use?",
    options: ["20", "50", "2000", "5000"],
    answer: "2000",
  },
  {
    question: "Who founded Apple Computer?",
    options: ["Steve Jobs", "Sheryl Sandberg", "Bill Gates", "Sundar Pichai"],
    answer: "Steve Jobs",
  },
  {
    question: "Which of these is not a peripheral, in computer terms?",
    options: ["Keyboard", "Mouse", "Motherboard", "Monitor"],
    answer: "Motherboard",
  },
  {
    question: "Which of these is not a peripheral, in computer terms?",
    options: ["Keyboard", "Mouse", "Motherboard", "Monitor"],
    answer: "Motherboard",
  },
  {
    question:
      "A network designed to allow communication within an organization is called:",
    options: [
      "the Internet",
      "the Intranet",
      "a browser",
      "the World Wide Web",
    ],
    answer: "the Intranet",
  },
  {
    question: "Who created Dart programing language?",
    options: [
      "Lars Bak and Kasper Lund",
      "Brendan Eich",
      "Bjarne Stroustrup",
      "Jeremy Ashkenas",
    ],
    answer: "Lars Bak and Kasper Lund",
  },
  {
    question: "Is Flutter for Desktop stable?",
    options: ["Yes", "No"],
    answer: "No",
  },
  {
    question: "Is Flutter for Web stable?",
    options: ["Yes", "No"],
    answer: "Yes",
  },
];

const questionElem = $.querySelector('#question');
const answerBtnContainer = $.querySelector("#answer-btns")
const nextQuestionBtn = $.querySelector("#next-btn")
let scoreAnswer = 0
let counterQuestion = 0

const quizSelector = () => {
    if(questionDataList.length > 0){
        counterQuestion++;
        let currentQuestionIndex = Math.floor(Math.random() * questionDataList.length)
        let currentQuestion = questionDataList.splice(currentQuestionIndex , 1)
        showQuizData(currentQuestion[0]);
    }else{
        console.log('end');
    }
}

const showQuizData = (currentQuestion) =>{
    questionElem.innerHTML = counterQuestion + ". " + currentQuestion.question
    answerBtnContainer.innerHTML = ''
    nextQuestionBtn.style.display = 'none'
    currentQuestion.options.forEach(option => {
        let optionBtn = $.createElement("button")
        optionBtn.innerHTML = option
        optionBtn.classList.add("answer")
        optionBtn.addEventListener('click' , e => {
            checkAnswer(currentQuestion.answer , e.target)
        })

        answerBtnContainer.appendChild(optionBtn)
    })
}

const checkAnswer = (answer,userChoiceElem) =>{
    let answerBtnList = $.querySelectorAll('.answer')
    if(answer == userChoiceElem.innerHTML){
        userChoiceElem.classList.add("trueAnswer")
        answerBtnList.forEach(answerBtn => {
            answerBtn.disabled = true
        })
    }else{
        userChoiceElem.classList.add("falseAnswer")
        answerBtnList.forEach(answerBtn => {
            answerBtn.disabled = true
            if(answer == answerBtn.innerHTML){
                answerBtn.classList.add("trueAnswer")
            }
        })
    }
    nextQuestionBtn.style.display = 'block'
}

nextQuestionBtn.addEventListener('click' , quizSelector)

window.addEventListener('load' , quizSelector)