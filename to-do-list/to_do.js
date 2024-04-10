const inputbox=document.getElementById("input-box");
const listitems=document.getElementById("list-items");

function addTask(){
    if(inputbox.value === ''){
        alert("You must write something");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=inputbox.value;
        listitems.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value= "";
    saveData();
}

listitems.addEventListener("click", function(event){
    if(event.target.tagName ==="LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName === "SPAN"){ 
        e.target.parentElement.remove();
        saveData();
      }  

}, false);

function saveData(){
    localStorage.setItem("data", listitems.innerHTML);     //* to save the data *//
}
saveData();

function ShowList(){
    listitems.innerHTML=localStorage.getItem("data");     //* even if we close the file and open again we can have the data *//
}
ShowList();
