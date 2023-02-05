let input=document.getElementById("new-items");
let add=document.getElementById("btn");
let tasks=document.getElementById("tasks");

add.addEventListener("click",()=>{
    if(input.value===" "){
        alert("Enter a task please!!!");
        return;
    }
    let open=document.querySelector("div[id=tasks]");
    open.innerHTML+=`<div draggable="true" ondragstart="dragStarted(event)" ondragend="dragEnded(event)"  class="content"><p>${input.value}<span></span></p>
    <button type="button" onclick="describeTask(event)" class="describebtn"><i class="fa-solid fa-pen-to-square"></i></button>
    <button type="button" onclick="deleteTask(event)" class="fa-solid fa-trash"></i></button>
    </br></br></div>`;
    input.value=" ";
    
       
});

function describeTask(e){
    //console.log(e.target.parentElement);
    let des=document.querySelectorAll("span");
    for(let x of des){
        x.innerHTML=`<textarea></textarea>`;
    }
}

function deleteTask(e) {
	//console.log(e.target.parentElement);
		e.target.parentElement.parentElement.removeChild(e.target.parentElement);
}

//let des=document.getElementsByClassName("describebtn");
// des.addEventListener("click",()=>{
// });
//let del=document.getElementsByClassName("deletebtn");
/*
tasks.addEventListener("click", (e)=>{
    if(e.target.classList.contains("deletebtn")){
        e.target.parentElement.parentElement.remove();
    }
 });
 */
let el=document.getElementsByClassName("content");
let dest=document.getElementsByClassName("destination");
let draggedEl = null;

function dragStarted(e) {
    e.target.style.opacity="0.4";
    e.target.style.border="dotted";
	draggedEl = e.target;
}

function dragEnded(e) {
    e.target.style.opacity="1";
	e.target.style.border = "1px solid black";
	draggedEl = null;
}


// to use on drop
function allowDrop(e) {
	e.preventDefault();
}

function dragEntered(e) {
	e.preventDefault();
}

function dragLeft(e) {
	e.preventDefault();
	
}

function drop(e) {
	draggedEl.parentElement.removeChild(draggedEl);
	e.target.appendChild(draggedEl);

}
