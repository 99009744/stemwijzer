const start_screen = document.getElementById("start_container");
const questions_screen = document.getElementById("questions_container");
const results_screen = document.getElementById("results_container");
const title_question = document.getElementById("title_questions");
const statement_questions = document.getElementById("statement_questions");
const backbutton = document.getElementById("vorige");
const result_info = document.getElementById("bottom");
var answer = []; // Saves the answers in this arrray.
var partiesPoints = []; // Makes an array with objects with name and points of every party member.
var counter = 0; // Gonna help me switch between the questions.

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
        var buttonsColor = document.getElementsByClassName("nextButtons");
        for (let item of buttonsColor) {
            item.style.backgroundColor = 'black'; 
            }
        document.getElementById(answer[counter]["statement"]).style.backgroundColor = "#01B4DC";
        answer.pop(); // removes the last object from the array
        title_questions.innerHTML = subjects[counter]['title'];
        statement_questions.innerHTML = subjects[counter]['statement'];
        if( counter == 0 ){
            backbutton.style.display = "none";
        }
        else {
            backbutton.style.display = "inline-block";
        }
    }
    else if (button_Value.value == "big"){ // makes parties that are smaller then 10 not visible
        partiesPoints.forEach(party => {
            if(party.size < 10){
                var small_party = document.getElementById(party.name);
                small_party.style.display = "none";
            }
        });
    }
    else if (button_Value.value == "all"){
        partiesPoints.forEach(party => {
                var all_party = document.getElementById(party.name);
                all_party.style.display = "inline-block";
            });
    }
    else if(button_Value.value == "secular"){
        partiesPoints.forEach(party => {
            if(party.secular == false){
                var secular_party = document.getElementById(party.name);
                secular_party.style.display = "none";
            }
            
        });
    }
    else{
        answer.push({statement:button_Value.value}); // puts the value behind in the array
        counter++;
        var buttonsColor = document.getElementsByClassName("nextButtons");
        for(var i = 0; i < buttonsColor.length; i++){
            buttonsColor[i].style.backgroundColor = "black";
        }
        // checks if we are on the end of the questions or that we need the results.
        if(counter == subjects.length){
            checkResults();
        }
        else{
            next_Question();
        }
    }
}

// Function to make a point system, if a party has the same position on a statement they gets a point
function getPartyPoints(party){
    var points = 0;
     for(j=0; j<subjects.length; j++){
         for(i=0; i<subjects[j].parties.length; i++){
             if (answer[j].statement == subjects[j].parties[i].position){
                 if(party == subjects[j].parties[i].name){
                    points++;
                 }
                 
             }
         }
     }
     var returnPoints = points;
     points = 0;
     return returnPoints;
}

// Makes a loop for each party in parties.
// Puts the info in an array
function checkResults(){
    parties.forEach(party => { 
        var points = getPartyPoints(party.name);
        partiesPoints.push({
            name: party.name,
            points: points,
            size: party.size,
            secular: party.secular});
    });
    sortByPoints = partiesPoints.slice(0);
    sortByPoints.sort(function (a, b){ // Sorts the points
        return  b.points - a.points;    // Return the sorted points backwards so highest gets first.
    });
    questions_screen.style.display = "none";
    results_screen.style.display = "block";
    for(i=0; i<parties.length; i++){
        var partiePercentages = document.createElement("p");
        partiePercentages.setAttribute("id", sortByPoints[i].name);
        partiePercentages.setAttribute("class", "parties");
        partiePercentages.style.display = "inline-block";
        var calculate = 100/subjects.length*sortByPoints[i].points;
        partiePercentages.innerText = sortByPoints[i].name + " = " + calculate.toFixed(0) + "%";
        result_info.appendChild(partiePercentages);
    }

}