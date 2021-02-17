const start_screen = document.getElementById("start_container");
const questions_screen = document.getElementById("questions_container");
const title_question = document.getElementById("title_questions");
const statement_questions = document.getElementById("statement_questions");
const backbutton = document.getElementById("vorige");
// Saves the answers in this arrray
var answer = [];
// Gonna help me switch between the questions.
var counter = 0;
function start(){
    start_screen.style.display = "none";
    questions_screen.style.display = "block";
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

// takes the value from the botton, if its back it returns to the last question otherwise it pushes the value in an array
function buttons(button_Value){
    if(button_Value.value == "back"){
        counter --;
        // removes the last object from the array
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
    else{
        // puts the value behind in the array
        answer.push({statement:button_Value.value});
        counter++;
        // checks if we are on the end of the questions or that we need the results.
        if(counter == subjects.length){
            checkResults();
        }
        else{
            next_Question();
        }
    }
}

function checkResults(){
    for( j=0; j<subjects.length; j++){
        for (const party_info of parties){
            console.log(party_info);
            for( i=0; i<subjects.length; i++){
                if(party_info["name"] == subjects[j]["parties"][i]["name"]){
                    subjects[j]["parties"][i]["name"];
                }
            else{
                    console.log("niet gelijk");
                }
            }
        }
    }
}

// niet tevreden met deze code want denk niet dat ik hem werkend krijg, houw hem nog even bij voor zekerheid :).
// function checkResults(){
//     // Loops to get the names.
//     for( i=0; i<parties.length; i++ ){
//         // Loops to get the position the party has chosen.
//         for(j=0; j<parties.length; j++){
//             var party = Object.values([parties[i]["name"]]);
//             // checks if party name is the same as the name of the answer so we can filter them.
//             if(subjects[i]["parties"][j]["name"] == party){
//                 console.log(party, " ", subjects[j]["parties"][j]["position"]);
//             }
//             else{
//                 console.log("niet gelijk");
//             }
//             // console.log(subjects[j]["parties"][j]["position"]);
             
//         }
//     }
// }