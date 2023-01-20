//selecting html elements
let TodoInput=document.querySelector(".to-in");

let TodoButton=document.querySelector(".to-btn");

let TodoList=document.querySelector(".todo-list");

//adding event listner

TodoButton.addEventListener('click',addto);

//adding functions
function addto(e){
   //create Todo list div

   const todoDiv=document.createElement('div')
   e.preventDefault()
   todoDiv.classList.add('todo')

    //craete todo list

    const toLi=document.createElement('li')
    toLi.classList.add('todoItems')
    toLi.innerText=TodoInput.value
    todoDiv.appendChild(toLi)  //adding to container
    TodoList.appendChild(todoDiv)

    //clear input

    TodoInput.value="";
}
