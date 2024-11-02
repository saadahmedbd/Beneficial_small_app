const inputBox =document.getElementById('input-box');
const listContainer =document.getElementById('list-container');

function addtask(){
    if(inputBox.value === ''){
        alert('you must write something');
    }else{
        let li =document.createElement('li');
        li.innerHTML =inputBox.value;
        listContainer.appendChild(li); //display the lsit container
        //add cross icon
        let span =document.createElement("SPAN");
        span.innerHTML="\u00d7";
        li.appendChild(span); // display the span
        
        
    }
    inputBox.value="";// after adding the value then input box value will be remove
    savedata();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        savedata();

    }else if( e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata (){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showtask(){
    listContainer.innerHTML=localStorage.getItem('data');
}
showtask();