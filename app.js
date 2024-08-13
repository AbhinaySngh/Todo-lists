const inpBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inpBox.value === ""){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inpBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inpBox.value = "";
    saveData();
}

inpBox.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
    saveData();
  }
});

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false); 

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();