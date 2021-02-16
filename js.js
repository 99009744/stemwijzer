const start_screen = document.getElementById("start_container");
const questions_screen = document.getElementById("questions_container");
const title_question = document.getElementById("title_questions");
const statement_questions = document.getElementById("statement_questions");
const backbutton = document.getElementById("vorige");
var answer = [];
// Gonna help me switch between the questions.
var counter = 0;
function start(){
    start_screen.style.display = "none";
    questions_screen.style.display = "block";
    console.log(counter);
    next_Question();
}

function next_Question(){
    title_questions.innerHTML = subjects[counter]['title'];
    statement_questions.innerHTML = subjects[counter]['statement'];
    if( counter == 0 ){
        backbutton.style.display = "none";
    }
    else {
        backbutton.style.display = "inline";
    }
}
// Function to go 1 question back
function back(){
    counter --;
    answer.pop();
    title_questions.innerHTML = subjects[counter]['title'];
    statement_questions.innerHTML = subjects[counter]['statement'];
    if( counter == 0 ){
        backbutton.style.display = "none";
    }
    else {
        backbutton.style.display = "inline-block";
    }
}

function buttonAnswer(button_Value){
    console.log(button_Value.value);
    answer.push({statement:button_Value.value});
    console.log(answer);
    counter++;
    next_Question();
}