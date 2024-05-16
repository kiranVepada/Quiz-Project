let buttonContainer = document.getElementById("buttonContainer");
let nextBtn = document.getElementById("nextBtn");
let TryAgainBtn = document.getElementById("TryAgainBtn");
let questionStatus = document.getElementById("status");
let questionName = document.getElementById("questionName");
questionName.textContent = "";


const questionsList = [
    {
        id: 1,
        name: "1. Which of the three banks will be merged with the other two to create India\'s third-largest bank?",
        options: ["Punjab National Bank", "Indian Bank", "Bank of Baroda", "Dena Bank"],
        answer: "Indian Bank"
    },
    {
        id: 2,
        name: "2. What is the name of the weak zone of the earth’s crust?",
        options: ["Seismic", "Cosmic", "Formic", "Anaemic"],
        answer: "Seismic"
    },
    {
        id: 3,
        name: "3. Where was India’s first national Museum opened?",
        options: ["Delhi", "Hyderabad", "Rajasthan", "Mumbai"],
        answer: "Mumbai"
    },
    {
        id: 4,
        name: "4. In 2019, Which popular singer was awarded the Bharat Ratna award?",
        options: ["Lata Mangeshkar", "Asha Bhosle", "Bhupen Hazarika", "Manna Dey"],
        answer: "Bhupen Hazarika"
    },
    {
        id: 5,
        name: "5. The world’s nation 5G mobile network was launched by which country?",
        options: ["Japan", "Asia", "South Korea", "Malaysia"],
        answer: "South Korea"
    },
    {
        id: 6,
        name: "6. When was Pravasi Bhartiya Divas held in Varanasi?",
        options: ["2017", "2015", "2019", "2020"],
        answer: "2019"
    },
    {
        id: 7,
        name: "7. Vijay Singh (golf player) is from which country?",
        options: ["UK", "USA", "India", "Fiji"],
        answer: "Fiji"
    },
    {
        id: 8,
        name: "8. The green planet in the solar system is?",
        options: ["Mars", "Uranus", "Venus", "Earth"],
        answer: "Uranus"
    },
    {
        id: 9,
        name: "9. The largest public sector undertaking in the country is?",
        options: ["Railways", "Airways", "Roadways", "Iron and Steel Plants"],
        answer: "Railways"
    },
    {
        id: 10,
        name: "10. In 2017, Who was appointed as the new Brand Ambassador for Swachh Bharat Mission?",
        options: ["Kangana Ranaut", "Priyanka Chopra", "Anushka Sharma", "Shilpa Shetty"],
        answer: "Shilpa Shetty"
    }
]

let index = 0;
let score = 0;

function resetQuestion(){


    while(buttonContainer.firstChild){
        buttonContainer.removeChild(buttonContainer.firstChild);
    }
}

function buttonSelected(correctAnswer,selectedBtn){
    let btnList = buttonContainer.children;

    if(selectedBtn.textContent === correctAnswer){
        selectedBtn.style.backgroundColor = "#b3ffb3";
        questionStatus.textContent = "Correct Answer";
        score += 1;
        // console.log(score);
    }else{
        selectedBtn.style.backgroundColor = "#ff9980";
        questionStatus.textContent = "Wrong Answer";
        // console.log(score);
    }
    
    for (eachButton of btnList){
        if(eachButton.textContent===correctAnswer){
            eachButton.style.backgroundColor = "#b3ffb3";
        }
        eachButton.classList.remove("opt-button");
        eachButton.classList.add("opt-button-disable");
        eachButton.disabled = true;
    }
    nextBtn.style.display = "block";

}

function showQuestion(){
    let questionObj = questionsList[index];
    let {id,name,options,answer} = questionObj;
    
    questionName.textContent = name;

    for (let i=0;i<options.length;i++){
        let optButton = document.createElement("button");
        optButton.classList.add("opt-button");
        optButton.textContent = options[i];
        buttonContainer.appendChild(optButton)

        optButton.addEventListener("click",function(){
            buttonSelected(answer,optButton)
        })
    }

    index += 1;
    nextBtn.style.display = "none";
    TryAgainBtn.style.display = "none";
    questionStatus.textContent = "";
}


function quizStart(){
    index = 0;
    score = 0;
    showQuestion();
}

function nextQuestion(){
    resetQuestion();
    showQuestion();
}

function showResult(){
    questionName.textContent = `Your Score is ${score} out of 10`;
    resetQuestion();
    nextBtn.style.display = "none";
    questionStatus.textContent = "";
    TryAgainBtn.style.display = "block";
}

nextBtn.addEventListener("click",function(){
    if(index<questionsList.length){
        nextQuestion();
    }else{
        showResult();
    }
    
})

TryAgainBtn.addEventListener("click",function(){
    quizStart();
})

quizStart()