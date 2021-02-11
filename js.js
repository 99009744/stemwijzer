let entries = Object.entries(parties);
var container = document.getElementById("container");
function start(){
   var elements = document.getElementsByClassName("startSchermContent");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    var questionBox = document.createElement("div");
    questionBox.id = "questionBox";
    questionBox.appendChild(container);
    var title = document.createElement("h1");
    title.innerHTML(entries[0][1]["name"]); 
}
