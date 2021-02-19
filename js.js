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

// checks the statements the party gave on the questions
function getStatementsByPartyName(party){
    var uitslag = [];
    for(j=0; j<subjects.length; j++){ // loops questions
        for(i=0; i<subjects[j].parties.length; i++){ // loop parties
            if (party == parties[i]["name"]){
                uitslag.push(subjects[j]["parties"][i]["position"]);
            }
        }
    }
    return uitslag;
}
// gets the party names by the value from checkResults
function getPartyName(value){
    var party = [];
    for(i=value; i<=value; i++){
        party.push(parties[i]["name"]);
    }
    return party;
}

// Makes a loop for each party in parties.
// Calls getPartyName and getStatementsByPartyName to get their info.
// Puts the info in an array
function checkResults(){
    var partiesAndStatements = [];
    var i = 0;
    parties.forEach(element => { // could have used element as var party but it made objects instead of arrays.
        var party = getPartyName(i);
        var uitslag = getStatementsByPartyName(party);
        partiesAndStatements.push(party);
        party.push(uitslag); 
        i++;
    });
    console.log(partiesAndStatements);
}

function comparingResults(){
    
}
// function getStatementsByPartyName(party){
//     var uitslag = [];
//     var i = 0;
//     var j = 0;
//     subjects.forEach(subject => {
//         parties.forEach(element => {
//             if (party == parties[i]["name"]){
//                 uitslag.push(subjects[j]["parties"][i]["position"]);
//                 if (j > 1 ){
//                     console.log("i = ", i);
//                 }
//             } 
//             i++
//         });
//         console.log("j = ", j);
//         console.log(uitslag);
//         j++
//         i=0;
//     });
//     return uitslag;