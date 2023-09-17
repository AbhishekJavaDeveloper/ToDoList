function addItem(){
    const itemName = document.getElementById("itemName");;
    const description= document.getElementById("description");

    if(itemName!==""){
        const todoList = document.getElementById("todoList");
        const listItem = document.createElement("li");
        listItem.innerHTML=`
        <span>${itemName} : ${description}</span>
        <button class="tick" onclick="markdone(this)">Done</button>
        <button class="cross" onclick="removeItem(this)">Remove</button>
        `;
        todoList.appendChild(listItem);

        document.getElementById("itemName").value="";
        document.getElementById("description").value="";
    }
}

function removeItem(button){
    const listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
}


function markDone(button){
    const done = document.getElementById("doneList");
    const listItem = button.parentNode;
    const text = listItem.querySelector("span").textContent;
  
    const doneItem = document.createElement("li");
    
}