let button = document.getElementById('add')
let todoList = document.getElementById('todoList')
let input = document.getElementById('input')

//local storage
let todos = []; //todos means activity here!
window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || [] //parsing from the array of strings
    todos.forEach(todo=>addtodo(todo)) // getting each element from the array strings
}

button.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos)) //setting up the todos from localstorage
    addtodo(input.value)  //add the inputsvalue to the paragraph means 'p'
    input.value='' 
})

function addtodo(todo){
    let para = document.createElement('p');
    para.innerText = todo; //here todo means getting the input value during button click
    todoList.appendChild(para) 
    
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo)
    })
}

function remove(todo){
    let index = todos.indexOf(todo) //getting todos using inedxOf
    if (index > -1) {
        todos.splice(index, 1);
      }
    localStorage.setItem('todos',JSON.stringify(todos))
}
